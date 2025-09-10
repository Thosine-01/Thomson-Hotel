import React from 'react'
import { rooomType } from '../assets/assets'
import { BedDouble } from 'lucide-react';
import { Bath } from 'lucide-react';
import { Tv } from 'lucide-react';
import { Wifi } from 'lucide-react';

const Room_Component = ({ name, image, price }) => {
  return ( 
    <div className=''>
        <div className='relative group h-[50vh] w-full max-w-xl overflow-hidden rounded-lg'>
            <img src={image} alt={name}  className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-125'/>
            <div className='absolute top-0 left-0 h-[100%] w-full bg-black opacity-50'/>
            <div className=''>

                <div className='absolute bottom-28 left-16 text-white space-y-2'>
                    <p className='text-lg '>From ${price}.00/ Night</p>
                    <p className='text-xl'>{name}</p>
                </div>
                

               
  

                <div className="  absolute bottom-0 left-0 right-0   text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-10">
                    <hr className='w-full mb-4'/>
                    <div className='flex justify-between items-end'>
                    <div className="flex gap-4">
                        <BedDouble size={20}/>
                        <Bath size={20}/>
                        <Tv size={20}/>
                        <Wifi size={20}/>
                    </div>
                    
                    {/* Details Button */}
                    <button className="text-sm tracking-wide underline underline-offset-4">DETAILS →</button>
                    </div>
                    {/* Icons */}

                </div>
            </div>
        <div className="absolute top-4 right-4">
            <button className="bg-[#b59b61] text-white px-4 py-1 text-sm font-semibold uppercase rounded-sm">Book</button>
        </div>
        </div>
        {/* Book Button */}


    </div>
  )
}

export default Room_Component