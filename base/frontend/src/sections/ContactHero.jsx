import React from 'react'
import { assets } from '../assets/assets'
import Navbar from '../components/Navbar'

const ContactHero = () => {
  return (
    <div className='about_hero'>
        <img src={assets.hero_about_img} alt="About Hero" className='w-full h-[50vh]' />
        <Navbar />
        <div className='absolute top-1/4 sm:top-1/2 left-8 sm:left-[50%] transform -translate-x-1/2 text-white flex flex-col font-medium space-y-6 sm:space-y-10 max-w-lg min-w-[900px] text-center z-30'>
        <h1 className='text-3xl w-full z-30'>Contact Us</h1>
      </div>

    </div>
  )
}

export default ContactHero