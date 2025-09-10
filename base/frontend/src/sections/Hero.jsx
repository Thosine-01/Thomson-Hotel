import React from 'react'
import {assets} from '../assets/assets'
import Navbar from '../components/Navbar'
import '../App.css'

const Hero = () => {
  return (
    <div className='Hero'>
      <img src={assets.hero_img} alt="Hero Image" className='w-full h-[100vh]'/>
      <Navbar />
      <div className='absolute top-1/4 sm:top-1/3 left-8 sm:left-[50%] transform -translate-x-1/2 text-white flex flex-col font-bold space-y-6 sm:space-y-10 max-w-lg min-w-[900px] text-center z-50'>
        <h1 className='text-3xl w-full z-50 leading-14'>Explore our suites, book with ease, and experience hospitality redefined.</h1>
        <button className='py-3 px-5 bg-blue-800 text-amber-50 rounded-lg text-lg w-64 mx-auto'>Book a Room</button>
      </div>
    </div>
  )
}

export default Hero