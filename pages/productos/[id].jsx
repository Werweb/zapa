import React,{useState, useEffect} from 'react'
import getProductById from '../../functions/getProductByid'
import {useRouter} from 'next/router'
import {useCarritoContext} from "../../context/carritoContext"
import { useUserContext } from '../../context/userContext'
/* import Link from 'next/link' */
import Layout from '../../componets/layout'
import { Grid, Box, Typography, Button, Chip, CardMedia,Link } from '@mui/material'
import ItemCounter from '../../componets/ItemCounter'
/* import SizeSelector from '../../componets/SizeSelector' */
import NextLink from 'next/link';

const id = () => {
  const router = useRouter() /* 20.1 */
  const {id}= router.query
  console.log(id)
 
  const[productInfo, setProductInfo] = useState(null);/* 20 */
  const{carrito,setCarrito} = useCarritoContext();/* 28 */
  const {user}= useUserContext();


  /* 21 */
  useEffect(()=>{ 
    async function getProductInfo(){
      const product = await getProductById(id);
      setProductInfo(product)
    }
    getProductInfo()

  },[id])

  function addToCart(){/* 29 */
    setCarrito([...carrito, productInfo])
  }
   
    
  return (
    <>
    <Layout>
     <Grid container spacing={3}>
       <Box display="flex" flexDirection="column">
         <NextLink href={'/carrito'} passHref>
           <Link>
              <Button>Ir al Carrito</Button>
           </Link>
         </NextLink>

       </Box>
       <Grid item xs={12} sm={7}>
          
            
            <CardMedia
            component='img'
            className='fedeIn'
            image={productInfo?.images[0]} alt={productInfo?.name}
            />
       </Grid>
        <Grid item xs={12} sm={5}>
         <Box display="flex" flexDirection="column">
      <Typography variant="h1" cpmponent="h1" color="white">{productInfo?.name}</Typography>
        <Typography fontWeight={600} color="white">{productInfo?.price.unit_amount/100}{productInfo?.price.currency}</Typography>
         <Box sx={{my: 2}}>
           <Typography variant="subtitle2">Cantidad</Typography>
           {/* ItemCounter */} {/* 26 */}
           <ItemCounter/>
          {/*  <SizeSelector selectedSize={product.sizes[0]}
                          sizes={product.sizes}
           /> */}
         </Box>
         <Button onClick={addToCart}/* 29 */ color="secondary" className='circular-btn'>Agregar al carrito</Button>
        {/* <Chip label="No hay disponibles" color="error" variant="outlined"/> */}
        <Box sx={{mt:3}}>
          <Typography variant="subtitle2" color="white"></Typography>
          <Typography variant="body2">{productInfo?.description}</Typography>
        </Box>
         </Box>
       </Grid>

     </Grid>

    <div className='w-screen h-screen flex flex-col bg-blue-300'>
      <div className='w-full justify-between flex'>
      <h1 className='text-5xl font-bold underline'> Producto: {productInfo?.name}{/* 22 */}</h1>
      <Link href="/carrito">
      <button className='bg-orange-600 px-10 py-3'>Carrito</button>
      </Link>
     </div>
     <img src={productInfo?.images[0]} alt={productInfo?.name} className="max-w-1/3 mx-auto"/>
      {/* 23 */}
      <button onClick={addToCart} className=' bg-black text-white'>AÑADIR A CARRITO</button>
      <button /* 34 */ className=' bg-red-600 text-white'>COMPRAR AHORA</button>
      </div>
     </Layout>

       </>
  )
}

export default id