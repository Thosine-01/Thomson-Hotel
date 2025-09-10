import React from 'react'
import { Rooms_type_Card } from '../assets/assets'
import Rooms_Card from '../components/Rooms_Card'

const RoomType = () => {
  return (
    <div className='px-8 sm:px-12 lg:px-24 xl:px-40 pt-20 pb-20'>
        {Rooms_type_Card.map((roomtype) => (
            <Rooms_Card key={roomtype.id} name={roomtype.name} description={roomtype.description} image={roomtype.image} price={roomtype.price} feature={roomtype.feature} />
        ))}

    </div>
  )
}

export default RoomType