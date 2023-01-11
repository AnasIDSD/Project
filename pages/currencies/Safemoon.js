
import Header from '../../components/header'
import { useContext, useEffect, useState, useCallback } from 'react'
import btc from '../../assets/btc.png'
import { CoinMarketContext } from '../../context/context'
import Image from "next/image"
import Graph from '../../components/graph'
import Navbar from '../../components/nav/Navbar'
import { useRouter } from 'next/router'


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const styles = {
  activeTab: `p-1 px-2 mr-2 rounded-lg bg-[#171924]`,
  tabItem: `px-2`,
  tabContainer: `flex items-center p-2 rounded-xl bg-[#222531] border border-gray-500/10 text-sm`,
  info: `min-h-screen`,
  main: `mx-auto max-w-screen-2xl`,
  flexStart: `flex items-start`,
  flexBetween: `flex justify-between`,
  flexBetweenCenter: `flex justify-between items-center`,
  tabContainerWrapper: `p-10 pl-0 pr-0 w-2/3`,
  flexCenter: `flex items-center`,
}

const Safemoon = () => {
        
      let [coinData, setCoinData] = useState(null)
      let [chartData, setchartData] = useState(null)

        let { getonecoin} = useContext(CoinMarketContext)
        let { getonecoinchart} = useContext(CoinMarketContext)
        
        useEffect(() => {
          setData()
          setData2()
        }, [])

        
      
      //   const setData = useCallback(async () => {
      //     try {
      //       let apiResponse = await getonecoinchart()
      
      
      //       setchartData(apiResponse)
      //       console.log(chartData)
      //     } catch (e) {
      //       console.log(e.message)
      //     }
      //   }, [getonecoinchart])
      //   console.log(chartData.prices)

      
        const setData = useCallback(async () => {
          try {
            let apiResponse = await getonecoin()
            setCoinData(apiResponse)
            console.log(coinData)
          } catch (e) {
            console.log(e.message)
          }
        }, [getonecoin])
        console.log(coinData)

          const setData2 = useCallback(async () => {
          try {
            let response = await getonecoinchart()
            setchartData(response)
            console.log(chartData)
          } catch (e) {
            console.log(e.message)
          }
        }, [getonecoinchart])

        if(!chartData){
          return<div>loading</div>
        }
        const coinChartData = chartData.prices.map(value => ({ x: value[0], y: value[1].toFixed(4) }));
        console.log(coinChartData)
      

  // console.log(coinChartData)
  const options = {
    responsive: true
  }
  const data = {
    labels: coinChartData.map(value => moment(value.x).format('MMM DD')),
    datasets: [
      {
        fill: true,
        label: "Safemoon-1996",
        data: coinChartData.map(val => val.y),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
  }



  return (
    <div >


    {coinData && coinData ? (
            <div className='Container'>
            <Navbar />

            <div className= {styles.main} > 

          <div className='flexholder'>
            <div className='stats'>
              <div className='element'>
              <p>{coinData.name}</p>
              </div>
              <div className='element'>
                <div className='title'>Price</div>
              <p>{coinData.market_data.current_price.usd}$</p>
              </div>
              <div className='element'>

              <div className='title'>Volume</div>
              <p>{coinData.market_data.total_volume.usd}$</p>
              </div>
            </div>
            <div className='coin'>
            <Image src={coinData.image.large}  width={120} height={120} />

            <div className='element'>
              <p>{coinData.name}</p>
              </div>
            <div className='prc'>
                <div className='title'>Price</div>
              <p>{coinData.market_data.current_price.usd}$</p>
              </div>
              <div className='element'>
              <div className='title'>Change 24h</div>
              <p>{coinData.market_data.price_change_percentage_24h}%</p>
              </div>
              <div className='Media'>
              </div>
            </div>
            <div className='Lists'>
            <p>Lists PlcaeHolder</p>

            </div>
          </div>



            <div className='moongraphic'>
            <Line options={options} data={data} />

            </div>
            </div>
            </div>
            
    ) : (
      <></>
    )}

  </div>
  )
  
}

export default Safemoon
