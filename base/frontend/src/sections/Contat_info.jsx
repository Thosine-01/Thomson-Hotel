import React from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Dribbble,
  Instagram,
  Youtube,
} from 'lucide-react';

const Contat_info = () => {
  return (
    <section className=" py-16 bpx-8 sm:px-12 lg:px-24 xl:px-40 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Left Info Panel */}
        <div className="space-y-8">
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-gray-700 uppercase">Before Contacting Us</h4>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Non equidem invideo, miror magis posuere velit aliquet.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-gray-700 uppercase mb-4">Contact Information</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-gray-700" />
                184 Rajapur, Pabna-6600, Dhaka, Bangladesh
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gray-700" />
                +8801800-222-222
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gray-700" />
                contact@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-gray-700" />
                Everyday 9:00–17:00
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-gray-700 uppercase mb-4">Social Media</h4>
            <div className="flex gap-4 text-gray-700 text-xl">
              <Facebook className="hover:text-teal-500 cursor-pointer" />
              <Twitter className="hover:text-teal-500 cursor-pointer" />
              <Dribbble className="hover:text-teal-500 cursor-pointer" />
              <Youtube className="hover:text-teal-500 cursor-pointer" />
              <Instagram className="hover:text-teal-500 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Please fulfil the form below.</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Your Name (required)</label>
              <input type="text" className="w-full border bg-gray-100 px-4 py-2 text-sm outline-none focus:ring" />
            </div>
            <div>
              <label className="block text-sm mb-1">Your Email (required)</label>
              <input type="email" className="w-full border bg-gray-100 px-4 py-2 text-sm outline-none focus:ring" />
            </div>
            <div>
              <label className="block text-sm mb-1">Your Message</label>
              <textarea rows="5" className="w-full border bg-gray-100 px-4 py-2 text-sm outline-none focus:ring" />
            </div>
            <button
              type="submit"
              className="bg-amber-500 rounded-lg text-white font-semibold text-sm px-6 py-2 mt-2 hover:bg-amber-600 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contat_info