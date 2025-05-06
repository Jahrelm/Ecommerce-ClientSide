import React from "react";
import { useSelector } from "react-redux";

export default function OrderTab() {
  const { user } = useSelector((state) => state.auth);
  
  return (
    <>
      <div className="mb-8">
        <div className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-5 mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">Your Orders</h1>
          <p className="text-white/80">Track, view and manage all your orders in one place</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Pending</p>
                <p className="text-2xl font-bold text-blue-600">2</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12a1 1 0 11-2 0 1 1 0 012 0zm0-3a1 1 0 01-2 0V7a1 1 0 112 0v4z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Delivered</p>
                <p className="text-2xl font-bold text-green-600">5</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Cancelled</p>
                <p className="text-2xl font-bold text-red-600">0</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-x-auto sm:rounded-lg bg-white shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Order History</h2>
          <p className="text-sm text-gray-500">View and manage all your past orders</p>
        </div>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4">Order</th>
              <th scope="col" className="px-6 py-4">Date</th>
              <th scope="col" className="px-6 py-4">Status</th>
              <th scope="col" className="px-6 py-4">Amount</th>
              <th scope="col" className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">#354</td>
              <td className="px-6 py-4">Feb 05, 2021</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 text-xs rounded-full text-green-800 bg-green-100">Completed</span>
              </td>
              <td className="px-6 py-4 font-medium">$757</td>
              <td className="px-6 py-4">
                <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 transition duration-300">
                  View Details
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">#353</td>
              <td className="px-6 py-4">Jan 22, 2021</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 text-xs rounded-full text-green-800 bg-green-100">Completed</span>
              </td>
              <td className="px-6 py-4 font-medium">$429</td>
              <td className="px-6 py-4">
                <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 transition duration-300">
                  View Details
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">#352</td>
              <td className="px-6 py-4">Jan 15, 2021</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 text-xs rounded-full text-blue-800 bg-blue-100">Processing</span>
              </td>
              <td className="px-6 py-4 font-medium">$125</td>
              <td className="px-6 py-4">
                <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 transition duration-300">
                  View Details
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">#351</td>
              <td className="px-6 py-4">Dec 28, 2020</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 text-xs rounded-full text-green-800 bg-green-100">Completed</span>
              </td>
              <td className="px-6 py-4 font-medium">$342</td>
              <td className="px-6 py-4">
                <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 transition duration-300">
                  View Details
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">#350</td>
              <td className="px-6 py-4">Dec 15, 2020</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 text-xs rounded-full text-green-800 bg-green-100">Completed</span>
              </td>
              <td className="px-6 py-4 font-medium">$198</td>
              <td className="px-6 py-4">
                <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 transition duration-300">
                  View Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="p-4 border-t border-gray-200 flex justify-between items-center">
          <p className="text-sm text-gray-500">Showing 5 of 12 orders</p>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-gray-100 rounded text-gray-600 hover:bg-gray-200">Previous</button>
            <button className="px-3 py-1 bg-blue-600 rounded text-white hover:bg-blue-700">Next</button>
          </div>
        </div>
      </div>
    </>
  );
}
