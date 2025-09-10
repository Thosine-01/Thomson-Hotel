import React from 'react'
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
   <footer className="bg-[#1D1E30] text-white pt-16 pb-8 relative px-8 sm:px-12 lg:px-24 xl:px-40 ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p><span className=" text-sm font-semibold">Add:</span> VI, Lagos Nigeria 11040</p>
          <p><span className="text-sm font-semibold">Email:</span> thomson@lawal.com</p>
          <p><span className="text-sm font-semibold">Phone:</span> 333 666 0000</p>
          <div className="flex gap-4 mt-4 text-sm">
            <Facebook className="hover:text-[#b1745c] cursor-pointer text-sm"  size={20}/>
            <Instagram className="hover:text-[#b1745c] cursor-pointer text-sm"  size={20}/>
            <Linkedin className="hover:text-[#b1745c] cursor-pointer text-sm"  size={20}/>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm hover:text-[#b1745c]">About Us</a></li>
            <li><a href="#" className="text-sm hover:text-[#b1745c]">Rooms</a></li>
            <li><a href="#" className="text-sm hover:text-[#b1745c]">Contact Us</a></li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Hours</h3>
          <p className="mb-4 text-sm">Tincidunt neque pretium lectus donec risus.</p>
          <p className='text-sm'>Mon – Fri: 7:00AM – 11:00PM</p>
          <p className='text-sm'>Sat – Sun: 8:00AM – 10:00PM</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="mb-4 text-sm">Tincidunt neque pretium lectus donec risus.</p>
          <form className="flex mt-2">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 text-white placeholder-gray-500 focus:outline-none border-2 border-amber-50"
            />
            <button
              type="submit"
              className="bg-amber-600 text-white px-6 py-2 font-semibold"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
        Copyright © 2025 by Oluwatomisin Lawal
      </div>

      {/* Go to Top Vertical Text */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 rotate-90 text-gray-400 text-sm tracking-widest">
        Go To Top
      </div>
    </footer>
  )
}

export default Footer