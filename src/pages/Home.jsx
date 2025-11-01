import React from 'react'
import HeroSlider from '../component/HeroSlider'
import LatestProduct from '../component/LatestProduct'
import Footer from "../component/Footer"

const Home = () => {
  return (
    <div>
      <HeroSlider /> 
      <LatestProduct />
      <Footer />
    </div>
  )
}

export default Home
