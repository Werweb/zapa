import React,{useState, useMemo} from 'react'

import { Card, CardActionArea, CardMedia, Grid, Box ,Typogrphy, Typography,Link} from '@mui/material';
import NextLink from 'next/link';

const ItemCard = ({product}) => {
  const [isHovered, setIsHovered]=useState(false)/* 16 */
  const productImage = useMemo(()=>{ /* 18 */
    return isHovered
    ? `{product.images[1]}`
    : `{product.images[0]}`
  },[isHovered, product.images])
  return (
    <>
    {/*   <Link href={`/productos/${product.id}`} prefetch={false}>
    <div className='max-w-[400px] flex flex-col justify-center items-center shadow-xl rounded-xl'>
        <img  src={product.images[0]} alt={product.name} className='max-w-full h-auto'/>
        <h3 className='font-bold'>{product.name}</h3>
        <p>{product.price.unit_amount/100}{product.price.currency}</p>
    </div>
    </Link> */}
    <Grid container spacing={4}>
      <NextLink href={`/productos/${product.id}`} prefetch={false}/* 25 */ passHref>
        <Link>{/* 24 */}

      
      <Grid item xs={6} sm={4} key={product.id}
      onMouseEnter={()=>setIsHovered(true)}/* 17 */
      onMouseLeave={()=>setIsHovered(false)}/* 17 */
      
      >
        <Card>
        
          <CardActionArea>
            
            <CardMedia
            component='img'
            className='fedeIn'
            image={product.images[0]}
          /*  image={productImage} */ /* 19 */
            alt={product.name}
            />
          </CardActionArea>
        </Card>
        <Typography fontWeight={700} color="white">{product.name}</Typography>{/* 14 */}
        <Typography fontWeight={600} color="white">{product.price.unit_amount/100}{product.price.currency}</Typography>
    </Grid>
    </Link>
    </NextLink>
    </Grid>
    
    </>
  )
}

export default ItemCard;