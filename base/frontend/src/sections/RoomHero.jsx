import React from 'react'
import {assets} from '../assets/assets'
import Navbar from '../components/Navbar'

const RoomHero = () => {
  return (
    <div className='room_hero'>
        <img src={assets.hero_room_img} alt="About Hero" className='w-full h-[70vh]' />
        <Navbar />
        <div className='absolute top-1/4 sm:top-1/2 left-8 sm:left-[50%] transform -translate-x-1/2 text-white flex flex-col font-medium space-y-6 sm:space-y-10 max-w-lg min-w-[900px] text-center z-50'>
        <h1 className='text-5xl w-full z-50'>Rooms & Suits</h1>
      </div>

    </div>
  )
}

export default RoomHero