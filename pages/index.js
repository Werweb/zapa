import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Button, Typography} from '@mui/material';
import Layout from '../componets/layout';





export default function Home() {
  
  return (
   <Layout title={'Spool -Inicio'} pageDescription={'Encuentra las mejores Zapatillas en Spool'}>
     <Typography variant="h1" color="initial">Tienda online de Zapatillas</Typography>
     <Typography variant="h2" sx={{mb:1}}>Todos Los productos</Typography>
    
   </Layout>
      

    
   
  )
}
