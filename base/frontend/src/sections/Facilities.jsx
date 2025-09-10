import React from 'react'
import  {services} from '../assets/assets'
import Service from '../components/service'

const Facilities = () => {
  return (
    <div className='px-8 sm:px-12 lg:px-24 xl:px-40 pt-20 pb-20'>
        <div className='text-2xl font-bold mb-20'>Thomson's Facilities</div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20'>
            {
                services.map(service => (
                    <Service key={service.id} {...service} />
                ))
            }
        </div>
    </div>
  )
}

export default Facilities