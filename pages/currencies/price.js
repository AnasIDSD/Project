import { useState, useEffect } from "react"
import CoinDetails from "../../components/coinDetails"
import Header from "../../components/header"
import Usd from '../../assets/svg/usd'
import solana from '../../assets/solana.png'

import CMCpriceConverter from '../../components/priceConverter'
const styles = {
    activeTab: `p-1 px-2 mr-2 rounded-lg bg-[#171924]`,
    tabItem: `px-2`,
    tabContainer: `flex items-center p-2 rounded-xl bg-[#222531] border border-gray-500/10 text-sm`,
    info: `min-h-screen`,
    main: `text-black mx-auto max-w-screen-2xl`,
    flexStart: `flex items-start`,
    flexBetween: `flex justify-between`,
    flexBetweenCenter: `flex justify-between items-center`,
    tabContainerWrapper: `p-10 pl-0 pr-0 w-2/3`,
    flexCenter: `flex items-center`,
  }
const Price = () => {
    const [coinName, setCoinName] = useState('')
    const [coinSymbol, setCoinSymbol] = useState('')
    const [price, setPrice] = useState('')

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        setCoinName(urlParams.get('coin'));
        setPrice(Number(urlParams.get('price')).toLocaleString(0));
        setCoinSymbol(urlParams.get('symbol'));
    }

    return <div className={styles.info}>
                    <Navbar />

              <main className={styles.main}>
                    <div className={styles.flexStart}>
                        <div className={styles.tabContainerWrapper}>
                                    <CoinDetails coinName={coinName} price={price} coinSymbol={coinSymbol} />

                                <br />
                                <br />
                                <CMCpriceConverter
                                    from={coinName}
                                    fromSymbol={coinSymbol}
                                    fromLogo={solana}
                                    toLogo={<Usd />}
                                    price={price}
                                    to='United States Dollars'
                                    toSymbol='USD'
                                />
                        </div>

                    </div>
                </main>
            </div>
}

export default Price