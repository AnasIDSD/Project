import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import {CoinMarketProvider} from '../context/context'
import '../styles/Navbar.css';
import '../styles/Dropdown.css';
import '../styles/safemoon.css';


function MyApp({ Component, pageProps }: AppProps) {
    return (
      <MoralisProvider
        serverUrl="https://mora-hosting.herokuapp.com/server"
        appId="001"
      >
        <CoinMarketProvider>
          
        <Component {...pageProps} />

        </CoinMarketProvider>
      </MoralisProvider>
    )
  
}

export default MyApp
