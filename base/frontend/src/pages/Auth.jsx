import React, {useState} from 'react'
import { X, Eye, EyeOff } from 'lucide-react';
import image from '../assets/images/login.jpg'

const Auth = ({authOpen, authClose}) => {
    const [isRegister, setIsRegister] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    if (!authOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white text-black rounded-lg shadow-xl w-full max-w-4xl mx-4 md:flex overflow-hidden">

        {/* Image / Left Side */}
        <div className="hidden md:flex flex-col justify-end w-1/2 bg-cover bg-center p-8 login_hero" style={{ backgroundImage: `url(${image})` }}>
          <p className="text-xl font-semibold text-white mb-4 z-20">Capturing Moments, <br />Creating Memories</p>
        </div>

        {/* Form / Right Side */}
        <div className="w-full md:w-1/2 p-8 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">{isRegister ? 'Create an account' : 'Welcome back'}</h2>
            <button onClick={authClose}><X className="text-black" /></button>
          </div>

          <p className="text-sm text-[#222]">
            {isRegister ? (
              <>
                Already have an account?{' '}
                <button onClick={() => setIsRegister(false)} className="text-amber-400 hover:underline">
                  Log in
                </button>
              </>
            ) : (
              <>
                Don't have an account?{' '}
                <button onClick={() => setIsRegister(true)} className="text-amber-400 hover:underline">
                  Register
                </button>
              </>
            )}
          </p>

          {/* Form Fields */}
          <form className="space-y-4">
            {isRegister && (
              <>
                <div className="flex gap-2">
                  <input type="text" placeholder="Username" className="w-1/2 border-2 border-amber-500 p-2 rounded outline-none text-[#222]" />
                  <input type="text" placeholder="First Name" className="w-1/2 border-2 border-amber-500 p-2 rounded outline-none text-[#222]" />
                </div>
                <div className="flex gap-2">
                  <input type="text" placeholder="Last Name" className="w-1/2 border-2 border-amber-500 p-2 rounded outline-none text-[#222]" />
                  <input type="tel" placeholder="Phone" className="w-1/2 border-2 border-amber-500 p-2 rounded outline-none text-[#222]" />
                </div>
                <input type="text" placeholder="Address" className="w-full border-2 border-amber-500 p-2 rounded outline-none text-[#222]" />
              </>
            )}
            {!isRegister && (
              <input type="text" placeholder="Username or Email" className="w-full border-2 border-amber-500 p-2 rounded outline-none text-[#222]" />
            )}

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full border-2 border-amber-500 p-2 pr-10 rounded outline-none text-[#222]"
              />
              <button
                type="button"
                className="absolute right-3 top-2 text-gray-400"
                onClick={() => setShowPassword(prev => !prev)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {isRegister && (
              <label className="flex items-center gap-2 text-sm text-gray-400">
                <input type="checkbox" className="accent-amber-500" />
                I agree to the <a href="#" className="underline text-amber-400">Terms & Conditions</a>
              </label>
            )}

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 transition px-4 py-2 rounded text-white font-semibold"
            >
              {isRegister ? 'Create Account' : 'Log In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth