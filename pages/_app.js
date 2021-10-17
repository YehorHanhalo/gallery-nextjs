import { SnackbarProvider } from 'notistack'
import { wrapper } from '../store/store';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider maxSnack={3}>
        <Component {...pageProps} />
    </SnackbarProvider>
  )
}

export default wrapper.withRedux(MyApp)
