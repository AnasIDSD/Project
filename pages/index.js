import CMCtable from '../components/cmc-table/cmcTable'
import Coinpage from '../components/Coinpage'
import Navbar from '../components/nav/Navbar'
import Trending from '../components/trending'
// import SwapCryptoModal from '../components/swapCryptoModal'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Navbar />

      <div className='mt-10' />

      <div className='mt-20' />
      <CMCtable />
    </div>
  )
}
