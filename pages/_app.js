import { SnackbarProvider } from 'notistack'
import { Provider } from 'react-redux';
import { store } from '../store/store';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider maxSnack={3}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SnackbarProvider>
  )
}

export default MyApp
