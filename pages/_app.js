import '../styles/globals.css'
import {CssBaseline, ThemeProvider} from '@mui/material'
import LightTheme from '../themes/LightTheme'
import DarkTheme from '../themes/DarkThreme';
import {UserContextProvider} from '../context/userContext'
import {CarritoContextProvider} from '../context/carritoContext'

function MyApp({ Component, pageProps }) {
  
  return (
    <UserContextProvider>
      <CarritoContextProvider>
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline/>
      <Component {...pageProps} />
  </ThemeProvider>
  </CarritoContextProvider>
  </UserContextProvider>
  )
}

export default MyApp
