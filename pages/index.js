import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Button, Typography} from '@mui/material';
import Layout from '../componets/layout';
import React, {useState, useEffect} from 'react';
import getActiveProducts from '../functions/getAvtiveProducts';
import ItemCards from '../componets/ItemCards'
/* 40 */
import {auth} from '../firebase/credenciales'
import {useUserContext} from '../context/userContext'
import {onAuthStateChanged, signOut} from 'firebase/auth'
/* fin 40 */





export default function Home() {
  const[productos, setProductos] = useState(null)/* 6 */

   const {user,setUser}= useUserContext();/* 41 */

  
  onAuthStateChanged(auth,(firebaseUser)=>{/* 42 */
    if(firebaseUser)setUser(firebaseUser);
    if(!firebaseUser) setUser(null)
  })

   useEffect(()=>{/* 12 */
    async function getProducts(){
    const products = await getActiveProducts();
    setProductos(products);
    
    }
    getProducts()
  },[])
   function cerrarSesion(){/* 48 */
    signOut(auth)
  }
  

  getActiveProducts()/* 11 */
  return (
    <>
    <button onClick={cerrarSesion}> cerrar sesión</button>
     <ul>{productos ? productos.map(p=><li key={p.id}>{/* {p.name} */}<ItemCards product={p}/>{/* 14 */}</li>): null}</ul>
   <Layout title={'Spool -Inicio'} pageDescription={'Encuentra las mejores Zapatillas en Spool'}>
     <Typography variant="h1" color="initial">Tienda online de Zapatillas</Typography>
     <Typography variant="h2" sx={{mb:1}}>Todos Los productos</Typography>
    <button onClick={cerrarSesion}> cerrar sesión</button>
   </Layout>

   </>
      

    
   
  )
}
