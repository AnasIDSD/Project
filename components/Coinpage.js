import { useContext, useEffect, useState, useCallback } from 'react'
// import btc from '../../assets/btc.png'
import { CoinMarketContext } from '../context/context'

const Coinpage = () => {
    let { getonecoin } = useContext(CoinMarketContext)
  
    let [coinData, setCoinData] = useState(null)
  
    useEffect(() => {
      setData()
    }, [])
  
    const setData = useCallback(async () => {
      try {
        let apiResponse = await getonecoin()
        // let filteredResponse = [apiResponse]
  

  
        setCoinData(apiResponse)
        console.log(coinData)
      } catch (e) {
        console.log(e.message)
      }
    }, [getonecoin])
  
    return (
      <div >

            {coinData && coinData ? (
            //   coinData.map((coin, index) => {
                // return (
                    <div>
                        
                        <p >{coinData[22786].name}</p>
                    </div>
                    // key={index}
                    // starNum={coin.cmc_rank}
                    // coinName={coin.name}
                    // coinSymbol={coin.symbol}
                    // coinIcon={btc}
                    // showBuy={true}
                    // hRate={coin.quote.USD.percent_change_24h}
                    // dRate={coin.quote.USD.percent_change_7d}
                    // hRateIsIncrement={true}
                    // price={coin.quote.USD.price}
                    // marketCapValue={coin.quote.USD.market_cap}
                    // volumeCryptoValue={coin.quote.USD.volume_24h}
                    // volumeValue={coin.total_supply}
                    // circulatingSupply={coin.circulating_supply}
                // )
            //   })
            ) : (
              <></>
            )}

      </div>
    )
  }
  
  export default Coinpage
  