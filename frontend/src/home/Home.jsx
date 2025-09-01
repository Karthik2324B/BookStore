import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'

const Home = () => {
  return (
    <div >
      <Navbar />
      <Banner/>
      <Freebook/>
      <Footer/>
     
    </div>
  )
}

export default Home
