import '../styles/globals.css'
import {CssBaseline, ThemeProvider} from '@mui/material'
import LightTheme from '../themes/LightTheme'
import DarkTheme from '../themes/DarkThreme'

function MyApp({ Component, pageProps }) {
  
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline/>
      <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
