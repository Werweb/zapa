import { Button, Grid, TextField, Typography,Link } from '@mui/material'
import { Box } from '@mui/system'
import NextLink from 'next/link'

import React from 'react'

const register = () => {
  return (
    <Box sx={{width: 350, padding:'10px 20px'}}>
        <Grid container spacing={2}>
            <Grid item sx={12}>
                <Typography variant="h2" component="h2" color="initial">Crear Cuenta</Typography>

            </Grid>
             <Grid item sx={12}>
                <TextField label="Nombre Completo" variant="filled" fullWidth/>
            </Grid>
            <Grid item sx={12}>
                <TextField label="Correo" variant="filled" fullWidth/>
            </Grid>
            <Grid item sx={12}>
                <TextField label="Contraseña" type="password" variant="filled" fullWidth/>
            </Grid>
            <Grid item xs={12}>
                 <Button color="secondary" className='circular-btn' size='large' fullWidth>
                     Ingresar
                 </Button>
            </Grid>
             <Grid item sx={12} display="flex" justifyContent="end">
              
                    <NextLink href="/login" passHref>
                        <Link>
                        ¿Ya tienes cuenta?
                        </Link>
                    </NextLink>
              
            </Grid>
        </Grid>
    </Box>
  )
}

export default register