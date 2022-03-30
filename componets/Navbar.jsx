import React from 'react'
import NextLink from 'next/link';
import {AppBar, Link, Toolbar, Typography,Button,IconButton, Badge} from '@mui/material'
import { Box } from '@mui/system';
import ShoppingCartCheckoutSharpIcon from '@mui/icons-material/ShoppingCartCheckoutSharp';
import { SearchOutlined } from '@mui/icons-material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <NextLink href="/" passHref>
          <Link display='flex' alignItems='center'>
          <Typography variant="h6" color="initial">Tienda || Gloop</Typography>
          <Typography sx={{ml: 0.5}}></Typography>
          </Link>
        </NextLink>
        <Box flex={1}/>{/* 2 */}
        {/* <Box sx={{display:'none'}}> */}{/* 4 */}
        <Box sx={{display:{xs:'none', md:'block'}}}>{/* 5 */}
          <NextLink href='/category/deporte' passHref>
            <Link>
            <Button>Deporte</Button>
            </Link>
          </NextLink>
           <NextLink href='/category/vestir' passHref>
            <Link>
            <Button>Vestir</Button>
            </Link>
          </NextLink>
           <NextLink href='/category/niños' passHref>
            <Link>
            <Button>Niños</Button>
            </Link>
          </NextLink>
        </Box>
        <Box flex={1}/>{/* 3 */}
        <IconButton>
          <SearchOutlined/>

        </IconButton>
        <IconButton>
          <Badge badgeContent={2} color='secondary'>
              <ShoppingCartCheckoutSharpIcon color='primary'sx={{ml: 1}}/>
          </Badge>
        </IconButton>
        
        <IconButton color="primary">
          <MenuRoundedIcon/>
        </IconButton>
      </Toolbar>
      
    </AppBar>
  )
}

export default Navbar