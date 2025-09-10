import React from 'react'
import { Star } from 'lucide-react';
import { Phone } from 'lucide-react';
import {assets} from '../assets/assets'

const AboutSec = () => {
  return (
    <div className='flex gap-10 px-8 sm:px-12 lg:px-24 xl:px-40 pt-40 pb-20'>
        <div className='w-1/2'>
            <div>
                <span className='flex'>
                    <Star fill='Orange' className='text-yellow-500 '/>
                    <Star fill='Orange' className='text-yellow-500'/>
                    <Star fill='Orange' className='text-yellow-500'/>
                    <Star fill='Orange' className='text-yellow-500'/>
                    <Star  className='text-yellow-500'/>
                </span>
                <p className='text-xl'>Thomson Hotel & Suits</p>
            </div>
            <div className=''>
                <h1 className='text-2xl font-bold mb-5 mt-4'>Enjoy an Exclusive Experience.</h1>
                <p className='text-[16px]'>Welcome to the most exclusive hotel in the heart of Lagos. Designed by a team of seasoned architects, designers and connoisseurs for you to experience Ultimate Sophistication.</p>
                <br />
                <p className='text-[16px] mt-2'>Luxury awaits at Thomson Hotel where personalized stays and exquisite dining at DANI Restaurant define your experience. Elevate your moments at DANI Rooftop—an urban oasis with panoramic views. Welcome to hospitality redefined.</p>
            </div>
            <div className='mt-4'>
                <h1 className='text-lg mb-2 font-bold'>Make Reservations -</h1>
                <div className='flex items-center gap-2 mb-6'>
                    <Phone className='text-gray-500 w-6 h-6' fill='blue' color='blue'/>
                    <p className='text-sm leading-none p-0 mt-[-7px]'>+234 812 345 6789</p>
                </div>
                <button className='bg-blue-600 text-white py-2 w-2/6 rounded'>Book Now</button>

            </div>
        </div>
        <div className='w-1/2 flex justify-between gap-3' >
            <img src={assets.about_1} alt="About Image" className='max-w-1/2 h-10/12 mt-20'/>
            <img src={assets.about_2} alt="About Image" className='max-w-1/2 h-10/12'/>
        </div>
    </div>
  )
}

export default AboutSec;