import React, {useState} from 'react'
import { X } from 'lucide-react';
import { Menu } from 'lucide-react';
import { assets } from '../assets/assets';
import Auth from '../pages/Auth';
import Profile from '../pages/Profile';
import { Link } from 'react-router-dom';

function Navbar() {
    const [showModalAuth, setShowModalAuth] = useState(false);
    const [showModalProfile, setShowModalProfile] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(true);


        // Add these handlers with console.log
    const handleAuthOpen = () => {
        console.log('Auth modal opening...');
        setShowModalAuth(true);
    };

    const handleProfileOpen = () => {
        console.log('Profile modal opening...');
        setShowModalProfile(true);
    };

  return (
    <div className='z-40 flex justify-between items-center px-8 sm:px-12 lg:px-24 xl:px-40 font-medium fixed
     top-0 py-4 text-white w-full'>
      <div className='text-sm sm:text-2xl font-medium mt-3 sm:mt-0 flex gap-2'>Toms <span>Hotel</span></div>

      <div className='hidden sm:flex items-center gap-8  text-sm sm:text-sm '>

          <div className='flex space-x-14'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/suits">Rooms</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className='flex gap-5'>
          {isAuthenticated ? (
            <div onClick={handleProfileOpen} className='cursor-pointer'>
                <img src={assets.guest_img} alt="guest" className='w-8 h-8 rounded-full object-cover'/>
            </div>) : (
            <button onClick={handleAuthOpen} className='py-2 px-5 bg-blue-800 text-amber-50 rounded-lg text-sm'>Login</button>)
          }
            <button className='py-2 px-5 bg-amber-600 text-amber-50 rounded-lg text-sm'>Book Room </button>
        </div>

      </div>


     {/*Mobile Menu*/}
      <div className={` ${isOpen ? 'flex' : 'hidden'} flex-col h-full min-h-screen fixed right-0 w-60 bottom-0  bg-blue-600  text-amber-50 text-2xl sm:hidden z-20`}>

          <div className='flex flex-col space-y-8 pl-16 pt-20'>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Rooms</a>
          <a href="#">Contact</a>
        </div>

        <div className='flex flex-col px-10 mt-10 gap-10'>
            <button className='py-3 px-5 bg-blue-800 text-amber-50 rounded-lg text-lg'>Login</button>
            <button className='py-3 px-5 bg-amber-600 text-amber-50 rounded-lg text-lg'>Book Room</button>
        </div>

      </div>
        <div className='absolute top-4 right-4 sm:hidden z-50'>
          {isOpen ? <X onClick={() => setIsOpen(!isOpen)} size={40} className='text-amber-600 relative z-50'/> :
          <Menu onClick={() => setIsOpen(!isOpen)} size={40} className='text-amber-600 relative z-50'/>}
        </div>



      <Profile profileOpen={showModalProfile} profileClose={() => setShowModalProfile(false)} />
      <Auth authOpen={showModalAuth} authClose={() => setShowModalAuth(false)} />

    </div>
  )
}

export default Navbar