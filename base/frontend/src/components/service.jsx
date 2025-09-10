import React from 'react'

const Service = ({ id, name, description, image }) => {
  return (
    <div className='border-amber-500 border-2 rounded-lg p-6 flex flex-col items-center text-center gap-4'>
        <img src={image} alt="" />
        <h1 className='text-lg font-semibold'>{name}</h1>
        <p className='text-sm'>{description}</p>
    </div>
  )
}

export default Service