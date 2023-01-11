import { createContext} from 'react'
import { useMoralisQuery } from 'react-moralis'


export const CoinMarketContext = createContext()

export const CoinMarketProvider = ({ children }) => {
  const {
    data: coins,
    error,
    isLoading: loadingCoins,
  } = useMoralisQuery('Coins')



  const getTopTenCoins = async () => {
    try {
      const res = await fetch('/api/getTopTen')
      const data = await res.json()
      return data.data.data
    } catch (e) {
      console.log(e.message)
    }
  }
  const getonecoin = async () => {
    try {
      const res = await fetch('/api/getone')
      const data = await res.json()
      console.log(data.data)
      return data.data
    } catch (e) {
      console.log(e.message)
    }
  }
  const getonecoinchart = async () => {
    try {
      const res = await fetch('/api/getonechart')
      const data = await res.json()
      console.log(data)
      return data.data
    } catch (e) {
      console.log(e.message)
    }
  }
  

  return (
    <CoinMarketContext.Provider
      value={{
        getTopTenCoins,
        getonecoin,
        getonecoinchart,
        coins,
        loadingCoins
      }}
    >
      {children}
    </CoinMarketContext.Provider>
  )
}
