import { useSelector } from "react-redux";
import InputQuantityCom from "../../../Helpers/InputQuantityCom";

export default function WishlistTab({ className }) {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <div className={`w-full ${className || ""}`}>
        <div className="w-full bg-primary-blue rounded-xl p-6 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full -ml-10 -mb-10 blur-2xl"></div>
          <div className="relative z-10">
            <h1 className="text-2xl font-bold text-white mb-2">Your Wishlist</h1>
            <p className="text-blue-100">Save your favorite items for later and never miss out</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex-1 w-full hover:border-pink-500 transition duration-300 group">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center mr-4 group-hover:bg-pink-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500 group-hover:text-white transition-colors" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-bold uppercase mb-1">Total Items</p>
                <p className="text-2xl font-bold text-qblack group-hover:text-pink-500 transition-colors">{wishlist ? wishlist.length : 0}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex-1 w-full hover:border-primary-blue transition duration-300 group">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4 group-hover:bg-primary-blue transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-blue group-hover:text-white transition-colors" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-bold uppercase mb-1">Move to Cart</p>
                  <button className="text-primary-blue text-sm font-bold hover:text-blue-700 transition-colors">Add All Items</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-qblack">Saved Items</h2>
            <p className="text-sm text-gray-500 mt-1">Items you've saved for later</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50/50 border-b border-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-4 font-bold">Product</th>
                  <th scope="col" className="px-6 py-4 text-center font-bold">Stock Status</th>
                  <th scope="col" className="px-6 py-4 text-center font-bold">Price</th>
                  <th scope="col" className="px-6 py-4 text-center font-bold">Quantity</th>
                  <th scope="col" className="px-6 py-4 text-center font-bold">Total</th>
                  <th scope="col" className="px-6 py-4 text-center font-bold">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-16 h-16 overflow-hidden flex justify-center items-center border border-gray-200 rounded-lg mr-4 bg-white p-2">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/product-img-1.jpg`}
                          alt="product"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-qblack text-base">iPhone 12 Pro Max 128GB</p>
                        <p className="text-xs text-gray-500 mt-1">Electronics</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-3 py-1 text-xs font-bold rounded-full text-green-600 bg-green-100">In Stock (23)</span>
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-qblack">$38.00</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center scale-90">
                      <InputQuantityCom />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-primary-blue">$38.00</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex space-x-2 justify-center">
                      <button className="p-2 text-primary-blue hover:text-white rounded-full hover:bg-primary-blue transition-all shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                      </button>
                      <button className="p-2 text-red-500 hover:text-white rounded-full hover:bg-red-500 transition-all shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="bg-white border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-16 h-16 overflow-hidden flex justify-center items-center border border-gray-200 rounded-lg mr-4 bg-white p-2">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/product-img-2.jpg`}
                          alt="product"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-qblack text-base">MacBook Pro 13-inch</p>
                        <p className="text-xs text-gray-500 mt-1">Electronics</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-3 py-1 text-xs font-bold rounded-full text-green-600 bg-green-100">In Stock (23)</span>
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-qblack">$38.00</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center scale-90">
                      <InputQuantityCom />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-primary-blue">$38.00</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex space-x-2 justify-center">
                      <button className="p-2 text-primary-blue hover:text-white rounded-full hover:bg-primary-blue transition-all shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                      </button>
                      <button className="p-2 text-red-500 hover:text-white rounded-full hover:bg-red-500 transition-all shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="bg-white border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-16 h-16 overflow-hidden flex justify-center items-center border border-gray-200 rounded-lg mr-4 bg-white p-2">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/product-img-3.jpg`}
                          alt="product"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-qblack text-base">Apple Watch Series 7</p>
                        <p className="text-xs text-gray-500 mt-1">Electronics</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-3 py-1 text-xs font-bold rounded-full text-green-600 bg-green-100">In Stock (23)</span>
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-qblack">$38.00</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center scale-90">
                      <InputQuantityCom />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-primary-blue">$38.00</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex space-x-2 justify-center">
                      <button className="p-2 text-primary-blue hover:text-white rounded-full hover:bg-primary-blue transition-all shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                      </button>
                      <button className="p-2 text-red-500 hover:text-white rounded-full hover:bg-red-500 transition-all shadow-sm">
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
            <button type="button" className="px-5 py-2.5 bg-red-50 text-red-500 font-bold rounded-xl hover:bg-red-100 transition duration-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Clear Wishlist
            </button>
            <button type="button" className="px-5 py-2.5 bg-primary-blue text-white font-bold rounded-xl hover:bg-blue-600 transition duration-300 flex items-center shadow-lg shadow-blue-500/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Add All to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
