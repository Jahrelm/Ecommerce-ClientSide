import React, { useState } from "react";

export default function AddressesTab({ userData }) {
  const [editMode, setEditMode] = useState(false);
  
  // Log user data for debugging
  console.log("AddressesTab - User data from props:", userData);
  
  // Extract address from user data
  const userAddress = userData?.address || "";
  const userCity = userData?.city || "";
  const userCountry = userData?.country || "";
  const userPostCode = userData?.postCode || "";
  const userName = userData?.fullName || "";
  const userEmail = userData?.username || "";
  const userPhone = userData?.phoneNumber || "";
  
  return (
    <>
      <div className="w-full bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-5 mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">Your Addresses</h1>
        <p className="text-white/80">Manage your shipping and billing addresses</p>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add New Address
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Primary Address Card */}
        <div className="w-full bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Primary Address</h3>
            </div>
            <div className="flex space-x-2">
              <button 
                className="p-2 text-blue-600 hover:text-blue-800 rounded-full hover:bg-blue-50"
                onClick={() => setEditMode(!editMode)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
              <button className="p-2 text-red-600 hover:text-red-800 rounded-full hover:bg-red-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="bg-blue-50 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded inline-block mb-4">
            Default Address
          </div>
          
          <div className="space-y-3">
            <div className="flex">
              <span className="text-gray-500 w-24">Name:</span>
              <span className="text-gray-800 font-medium">{userName}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-24">Email:</span>
              <span className="text-gray-800">{userEmail}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-24">Phone:</span>
              <span className="text-gray-800">{userPhone}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-24">Address:</span>
              <span className="text-gray-800">{userAddress}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-24">City:</span>
              <span className="text-gray-800">{userCity}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-24">Country:</span>
              <span className="text-gray-800">{userCountry}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-24">Postal Code:</span>
              <span className="text-gray-800">{userPostCode}</span>
            </div>
          </div>
        </div>
        
        {/* Billing Address Card (if different from shipping) */}
        <div className="w-full bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Billing Address</h3>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 text-blue-600 hover:text-blue-800 rounded-full hover:bg-blue-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
              <button className="p-2 text-red-600 hover:text-red-800 rounded-full hover:bg-red-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex">
              <span className="text-gray-500 w-24">Name:</span>
              <span className="text-gray-800 font-medium">{userName}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-24">Email:</span>
              <span className="text-gray-800">{userEmail}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-24">Phone:</span>
              <span className="text-gray-800">{userPhone}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-24">Address:</span>
              <span className="text-gray-800">{userAddress}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-24">City:</span>
              <span className="text-gray-800">{userCity}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-24">Country:</span>
              <span className="text-gray-800">{userCountry}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-24">Postal Code:</span>
              <span className="text-gray-800">{userPostCode}</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center">
              <input 
                id="same-as-shipping" 
                type="checkbox" 
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                defaultChecked={true}
              />
              <label htmlFor="same-as-shipping" className="ml-2 text-sm font-medium text-gray-700">
                Same as shipping address
              </label>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add New Address Form (conditionally rendered) */}
      {editMode && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Edit Address</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue={userName}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue={userEmail}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue={userPhone}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue={userCountry}
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue={userAddress}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue={userCity}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue={userPostCode}
              />
            </div>
            
            <div className="md:col-span-2 mt-2">
              <div className="flex items-center">
                <input 
                  id="default-address" 
                  type="checkbox" 
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  defaultChecked={true}
                />
                <label htmlFor="default-address" className="ml-2 text-sm font-medium text-gray-700">
                  Set as default address
                </label>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end space-x-3">
            <button 
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300"
              onClick={() => setEditMode(false)}
            >
              Cancel
            </button>
            <button 
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
              onClick={() => setEditMode(false)}
            >
              Save Address
            </button>
          </div>
        </div>
      )}
    </>
  );
}
