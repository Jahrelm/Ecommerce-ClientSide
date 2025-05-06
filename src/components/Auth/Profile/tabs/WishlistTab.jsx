import React from "react";
import InputQuantityCom from "../../../Helpers/InputQuantityCom";
import { useSelector } from "react-redux";

export default function WishlistTab({ className }) {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <div className={`w-full ${className || ""}`}>
        <div className="w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-5 mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">Your Wishlist</h1>
          <p className="text-white/80">Save your favorite items for later and never miss out</p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex-1 mr-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Total Items</p>
                <p className="text-xl font-bold text-gray-800">{wishlist ? wishlist.length : 0}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex-1">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Move to Cart</p>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-800">Add All Items</button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full overflow-x-auto sm:rounded-lg bg-white shadow-sm border border-gray-100">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Saved Items</h2>
            <p className="text-sm text-gray-500">Items you've saved for later</p>
          </div>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4">Product</th>
                <th scope="col" className="px-6 py-4 text-center">Stock Status</th>
                <th scope="col" className="px-6 py-4 text-center">Price</th>
                <th scope="col" className="px-6 py-4 text-center">Quantity</th>
                <th scope="col" className="px-6 py-4 text-center">Total</th>
                <th scope="col" className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-16 h-16 overflow-hidden flex justify-center items-center border border-gray-200 rounded-md mr-4">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/product-img-1.jpg`}
                        alt="product"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">iPhone 12 Pro Max 128GB</p>
                      <p className="text-sm text-gray-500">Electronics</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2 py-1 text-xs rounded-full text-green-800 bg-green-100">In Stock (23)</span>
                </td>
                <td className="px-6 py-4 text-center font-medium text-gray-900">$38.00</td>
                <td className="px-6 py-4">
                  <div className="flex justify-center">
                    <InputQuantityCom />
                  </div>
                </td>
                <td className="px-6 py-4 text-center font-medium text-gray-900">$38.00</td>
                <td className="px-6 py-4 text-center">
                  <div className="flex space-x-2 justify-center">
                    <button className="p-2 text-blue-600 hover:text-blue-800 rounded-full hover:bg-blue-50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                    </button>
                    <button className="p-2 text-red-600 hover:text-red-800 rounded-full hover:bg-red-50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-16 h-16 overflow-hidden flex justify-center items-center border border-gray-200 rounded-md mr-4">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/product-img-2.jpg`}
                        alt="product"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">MacBook Pro 13-inch</p>
                      <p className="text-sm text-gray-500">Electronics</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2 py-1 text-xs rounded-full text-green-800 bg-green-100">In Stock (23)</span>
                </td>
                <td className="px-6 py-4 text-center font-medium text-gray-900">$38.00</td>
                <td className="px-6 py-4">
                  <div className="flex justify-center">
                    <InputQuantityCom />
                  </div>
                </td>
                <td className="px-6 py-4 text-center font-medium text-gray-900">$38.00</td>
                <td className="px-6 py-4 text-center">
                  <div className="flex space-x-2 justify-center">
                    <button className="p-2 text-blue-600 hover:text-blue-800 rounded-full hover:bg-blue-50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                    </button>
                    <button className="p-2 text-red-600 hover:text-red-800 rounded-full hover:bg-red-50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-16 h-16 overflow-hidden flex justify-center items-center border border-gray-200 rounded-md mr-4">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/product-img-3.jpg`}
                        alt="product"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Apple Watch Series 7</p>
                      <p className="text-sm text-gray-500">Electronics</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2 py-1 text-xs rounded-full text-green-800 bg-green-100">In Stock (23)</span>
                </td>
                <td className="px-6 py-4 text-center font-medium text-gray-900">$38.00</td>
                <td className="px-6 py-4">
                  <div className="flex justify-center">
                    <InputQuantityCom />
                  </div>
                </td>
                <td className="px-6 py-4 text-center font-medium text-gray-900">$38.00</td>
                <td className="px-6 py-4 text-center">
                  <div className="flex space-x-2 justify-center">
                    <button className="p-2 text-blue-600 hover:text-blue-800 rounded-full hover:bg-blue-50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                    </button>
                    <button className="p-2 text-red-600 hover:text-red-800 rounded-full hover:bg-red-50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 flex justify-between items-center">
          <button type="button" className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition duration-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Clear Wishlist
          </button>
          <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            Add All to Cart
          </button>
        </div>
      </div>
    </>
  );
}
