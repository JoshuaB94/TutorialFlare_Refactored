import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import MainFooter from '../components/Footer/MainFooter'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      {/* <MainFooter /> */}
    </ChakraProvider>
  )
}

export default MyApp
