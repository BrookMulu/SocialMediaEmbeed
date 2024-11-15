import * as React from 'react'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Component {...pageProps} />
  <ChakraProvider>
  </ChakraProvider>
  </>
  )
  
}
