import React from 'react'
import { roomType } from '../assets/assets'
import Room_Component from '../components/Room_Component'

const Room = () => {
  return (
    <div className='px-8 sm:px-12 lg:px-24 xl:px-40 pt-20 pb-20'>
        <div className='text-2xl font-bold mb-8'>Room & Suits</div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {roomType.map((room) => (
                <Room_Component key={room.id} name={room.name} image={room.image} price={room.price} />
            ))}
        </div>

        

    </div>
  )
}

export default Room