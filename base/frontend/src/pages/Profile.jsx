import React, {useState} from 'react'
import { X, Camera, User, Lock, Calendar, LogOut } from 'lucide-react';

const Profile = ({ profileOpen, profileClose }) => {
  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState({
    username: 'rolandDonald',
    firstName: 'Roland',
    lastName: 'Donald',
    email: 'rolandDonald@mail.com',
    phone: '(405) 555-0128',
    address: '3605 Parker Rd.'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveChanges = () => {
    console.log('Saving changes:', formData);
    // Handle save logic here
    profileClose();
  };

  const handleDiscardChanges = () => {
    // Reset to original values or fetch from API
    console.log('Discarding changes');
    profilelose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      profileClose();
    }
  };

  const handleMenuClick = (menuItem) => {
    if (menuItem === 'logout') {
      console.log('Logging out...');
      onClose();
    } else if (menuItem === 'booking') {
      console.log('Navigating to booking...');
      onClose();
      // Add navigation logic here
    } else if (menuItem === 'login') {
      console.log('Navigating to login...');
      onClose();
    } else {
      setActiveTab(menuItem);
    }
  };

  if (!profileOpen) return null;
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 bg-opacity-50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex">
        {/* Sidebar */}
        <div className="w-72 bg-gray-50 border-r border-gray-200">
          {/* Profile Section */}
          <div className="p-6 text-center border-b border-gray-200">
            <div className="relative inline-block">
              <img 
                src="/api/placeholder/80/80" 
                alt="Profile" 
                className="w-20 h-20 rounded-full object-cover mx-auto"
              />
              <button className="absolute bottom-0 right-0 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Camera size={14} />
              </button>
            </div>
            <h3 className="mt-3 font-semibold text-gray-900">Roland Donald</h3>
            <p className="text-gray-500 text-sm">Cashier</p>
          </div>

          {/* Menu Items */}
          <nav className="p-4">
            <div className="space-y-2">
              <button
                onClick={() => handleMenuClick('personal')}
                className={`w-full flex items-center px-3 py-3 rounded-lg transition-colors ${
                  activeTab === 'personal' 
                    ? 'bg-orange-50 text-orange-600' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <User size={18} className="mr-3" />
                <span className="font-medium">Personal Information</span>
              </button>
              
              <button 
                onClick={() => handleMenuClick('login')}
                className="w-full flex items-center px-3 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Lock size={18} className="mr-3" />
                <span>Login & Password</span>
              </button>

              <button 
                onClick={() => handleMenuClick('booking')}
                className="w-full flex items-center px-3 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Calendar size={18} className="mr-3" />
                <span>Booking</span>
              </button>
              
              <button 
                onClick={() => handleMenuClick('logout')}
                className="w-full flex items-center px-3 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut size={18} className="mr-3" />
                <span>Log Out</span>
              </button>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
            <button
              onClick={profileClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} className="text-gray-500" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto p-6">
            {activeTab === 'personal' && (
              <div className="max-w-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Username */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* First Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent pr-20 transition-all"
                      />
                      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-500 text-sm font-medium">
                        Verified
                      </span>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={handleDiscardChanges}
                    className="flex-1 px-6 py-3 border border-orange-500 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-medium"
                  >
                    Discard Changes
                  </button>
                  <button
                    onClick={handleSaveChanges}
                    className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* Placeholder content for other tabs */}
            {activeTab === 'login' && (
              <div className="max-w-2xl">
                <div className="text-center py-12">
                  <Lock size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Login & Password</h3>
                  <p className="text-gray-500">Password change functionality would go here.</p>
                </div>
              </div>
            )}

            {activeTab === 'booking' && (
              <div className="max-w-2xl">
                <div className="text-center py-12">
                  <Calendar size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Booking</h3>
                  <p className="text-gray-500">Booking management would go here.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile