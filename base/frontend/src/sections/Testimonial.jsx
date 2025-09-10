import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Star } from 'lucide-react';
import {testimonials} from '../assets/assets'
import { assets } from '../assets/assets';


const Testimonial = () => {
  return (
        <div className="bg-[#f6e2c5] text-white py-20 px-8 sm:px-12 lg:px-24 xl:px-40">
      <div className="text-center mb-10">
        <p className="text-black uppercase text-sm font-semibold">Our fantastic customers reviews</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Guest feedback</h2>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#fff] p-6 rounded-lg shadow-md h-full flex flex-col justify-between mb-20">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold text-[#000]">
                                 <img src={assets.guest_img} alt="guest" className='w-8 h-8 rounded-full object-cover'/>
                  </div>
                  <div>
                    <p className="text-black font-semibold text-sm">{item.name}</p>
                    <p className="text-black text-sm">{item.username}</p>
                  </div>
                </div>
                <p className="font-semibold text-sm mb-2">{item.category}</p>
                <p className="text-black text-sm leading-relaxed">{item.review}</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <div className="bg-yellow-500 px-2 py-1 font-semibold text-black text-sm rounded-tr-xl rounded-bl-xl">5.0</div>
                <div className="flex text-yellow-500">
                  {Array(item.rating).fill(0).map((_, i) => (
                    <Star key={i} fill='Orange'/>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Testimonial