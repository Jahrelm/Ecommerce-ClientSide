import { useState } from "react";

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
      <div className="w-full bg-primary-blue rounded-xl p-6 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full -ml-10 -mb-10 blur-2xl"></div>
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-white mb-2">Your Addresses</h1>
          <p className="text-blue-100">Manage your shipping and billing addresses</p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-8">
        <button className="px-5 py-2.5 bg-primary-blue text-white font-bold rounded-xl hover:bg-blue-600 transition duration-300 flex items-center shadow-lg shadow-blue-500/30">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add New Address
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Primary Address Card */}
        <div className="w-full bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-blue transition duration-300 group">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4 group-hover:bg-primary-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-blue group-hover:text-white transition-colors" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-qblack group-hover:text-primary-blue transition-colors">Primary Address</h3>
            </div>
            <div className="flex space-x-2">
              <button
                className="p-2 text-primary-blue hover:text-white rounded-full hover:bg-primary-blue transition-all"
                onClick={() => setEditMode(!editMode)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
              <button className="p-2 text-red-500 hover:text-white rounded-full hover:bg-red-500 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          <div className="bg-blue-50 text-primary-blue text-xs font-bold px-3 py-1 rounded-full inline-block mb-6 uppercase tracking-wider">
            Default Address
          </div>

          <div className="space-y-3">
            <div className="flex">
              <span className="text-gray-500 font-bold w-28 text-sm">Name:</span>
              <span className="text-qblack font-medium text-sm">{userName}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 font-bold w-28 text-sm">Email:</span>
              <span className="text-qblack font-medium text-sm">{userEmail}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 font-bold w-28 text-sm">Phone:</span>
              <span className="text-qblack font-medium text-sm">{userPhone}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 font-bold w-28 text-sm">Address:</span>
              <span className="text-qblack font-medium text-sm">{userAddress}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 font-bold w-28 text-sm">City:</span>
              <span className="text-qblack font-medium text-sm">{userCity}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 font-bold w-28 text-sm">Country:</span>
              <span className="text-qblack font-medium text-sm">{userCountry}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 font-bold w-28 text-sm">Postal Code:</span>
              <span className="text-qblack font-medium text-sm">{userPostCode}</span>
            </div>
          </div>
        </div>

        {/* Billing Address Card (if different from shipping) */}
        <div className="w-full bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-purple-500 transition duration-300 group">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mr-4 group-hover:bg-purple-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500 group-hover:text-white transition-colors" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-qblack group-hover:text-purple-500 transition-colors">Billing Address</h3>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 text-primary-blue hover:text-white rounded-full hover:bg-primary-blue transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
              <button className="p-2 text-red-500 hover:text-white rounded-full hover:bg-red-500 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          <div className="space-y-3 mt-12">
            <div className="flex">
              <span className="text-gray-500 font-bold w-28 text-sm">Name:</span>
              <span className="text-qblack font-medium text-sm">{userName}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 font-bold w-28 text-sm">Email:</span>
              <span className="text-qblack font-medium text-sm">{userEmail}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 font-bold w-28 text-sm">Phone:</span>
              <span className="text-qblack font-medium text-sm">{userPhone}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 font-bold w-28 text-sm">Address:</span>
              <span className="text-qblack font-medium text-sm">{userAddress}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 font-bold w-28 text-sm">City:</span>
              <span className="text-qblack font-medium text-sm">{userCity}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 font-bold w-28 text-sm">Country:</span>
              <span className="text-qblack font-medium text-sm">{userCountry}</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 font-bold w-28 text-sm">Postal Code:</span>
              <span className="text-qblack font-medium text-sm">{userPostCode}</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center">
              <input
                id="same-as-shipping"
                type="checkbox"
                className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded focus:ring-primary-blue"
                defaultChecked={true}
              />
              <label htmlFor="same-as-shipping" className="ml-2 text-sm font-bold text-gray-500">
                Same as shipping address
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Add New Address Form (conditionally rendered) */}
      {editMode && (
        <div className="mt-8 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-qblack mb-6 border-b border-gray-100 pb-4">Edit Address</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-500 mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                defaultValue={userName}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-500 mb-2">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                defaultValue={userEmail}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-500 mb-2">Phone Number</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                defaultValue={userPhone}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-500 mb-2">Country</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                defaultValue={userCountry}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-500 mb-2">Street Address</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                defaultValue={userAddress}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-500 mb-2">City</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                defaultValue={userCity}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-500 mb-2">Postal Code</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                defaultValue={userPostCode}
              />
            </div>

            <div className="md:col-span-2 mt-2">
              <div className="flex items-center">
                <input
                  id="default-address"
                  type="checkbox"
                  className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 rounded focus:ring-primary-blue"
                  defaultChecked={true}
                />
                <label htmlFor="default-address" className="ml-2 text-sm font-bold text-gray-500">
                  Set as default address
                </label>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end space-x-4">
            <button
              className="px-6 py-2.5 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200 transition duration-300"
              onClick={() => setEditMode(false)}
            >
              Cancel
            </button>
            <button
              className="px-6 py-2.5 bg-primary-blue text-white font-bold rounded-xl hover:bg-blue-600 transition duration-300 shadow-lg shadow-blue-500/30"
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
