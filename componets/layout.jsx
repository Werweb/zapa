import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'
import SideMenu from './SideMenu'

const Layout = ({children, title,pageDescription, imageFullUrl}) => {
  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription}/>
        <meta name="og:title" content={title}/>
        <meta name="og:description" content={pageDescription}/>
        {
            imageFullUrl && ( /* 1 */
                <meta name="og:image" content={imageFullUrl}/>
            )
        }
        
    </Head>
    <nav>
     <Navbar/>
     
    </nav>
    <nav>
       <SideMenu/>
    </nav>
    <main style={{
        margin:'80px auto',
        maxWidth:'1440px',
        padding:'0px 30px'
    }}>
        {children}
    </main>
    <footer>

    </footer>

    </>
  )
}

export default Layout