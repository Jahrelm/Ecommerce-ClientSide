import { useSelector } from "react-redux";

export default function OrderTab() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <div className="mb-8">
        <div className="w-full bg-primary-blue rounded-xl p-6 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full -ml-10 -mb-10 blur-2xl"></div>
          <div className="relative z-10">
            <h1 className="text-2xl font-bold text-white mb-2">Your Orders</h1>
            <p className="text-blue-100">Track, view and manage all your orders in one place</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-blue transition duration-300 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-bold uppercase mb-1">Pending</p>
                <p className="text-3xl font-bold text-qblack group-hover:text-primary-blue transition-colors">2</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-primary-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-blue group-hover:text-white transition-colors" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12a1 1 0 11-2 0 1 1 0 012 0zm0-3a1 1 0 01-2 0V7a1 1 0 112 0v4z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-green-500 transition duration-300 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-bold uppercase mb-1">Delivered</p>
                <p className="text-3xl font-bold text-qblack group-hover:text-green-500 transition-colors">5</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 group-hover:text-white transition-colors" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-red-500 transition duration-300 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-bold uppercase mb-1">Cancelled</p>
                <p className="text-3xl font-bold text-qblack group-hover:text-red-500 transition-colors">0</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 group-hover:text-white transition-colors" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-qblack">Order History</h2>
          <p className="text-sm text-gray-500 mt-1">View and manage all your past orders</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50/50 border-b border-gray-100">
              <tr>
                <th scope="col" className="px-6 py-4 font-bold">Order</th>
                <th scope="col" className="px-6 py-4 font-bold">Date</th>
                <th scope="col" className="px-6 py-4 font-bold">Status</th>
                <th scope="col" className="px-6 py-4 font-bold">Amount</th>
                <th scope="col" className="px-6 py-4 font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-qblack">#354</td>
                <td className="px-6 py-4 font-medium">Feb 05, 2021</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-bold rounded-full text-green-600 bg-green-100">Completed</span>
                </td>
                <td className="px-6 py-4 font-bold text-qblack">$757</td>
                <td className="px-6 py-4">
                  <button type="button" className="text-white bg-primary-blue hover:bg-blue-600 font-bold rounded-lg text-xs px-4 py-2 transition duration-300 shadow-md shadow-blue-500/20">
                    View Details
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-qblack">#353</td>
                <td className="px-6 py-4 font-medium">Jan 22, 2021</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-bold rounded-full text-green-600 bg-green-100">Completed</span>
                </td>
                <td className="px-6 py-4 font-bold text-qblack">$429</td>
                <td className="px-6 py-4">
                  <button type="button" className="text-white bg-primary-blue hover:bg-blue-600 font-bold rounded-lg text-xs px-4 py-2 transition duration-300 shadow-md shadow-blue-500/20">
                    View Details
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-qblack">#352</td>
                <td className="px-6 py-4 font-medium">Jan 15, 2021</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-bold rounded-full text-blue-600 bg-blue-100">Processing</span>
                </td>
                <td className="px-6 py-4 font-bold text-qblack">$125</td>
                <td className="px-6 py-4">
                  <button type="button" className="text-white bg-primary-blue hover:bg-blue-600 font-bold rounded-lg text-xs px-4 py-2 transition duration-300 shadow-md shadow-blue-500/20">
                    View Details
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-qblack">#351</td>
                <td className="px-6 py-4 font-medium">Dec 28, 2020</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-bold rounded-full text-green-600 bg-green-100">Completed</span>
                </td>
                <td className="px-6 py-4 font-bold text-qblack">$342</td>
                <td className="px-6 py-4">
                  <button type="button" className="text-white bg-primary-blue hover:bg-blue-600 font-bold rounded-lg text-xs px-4 py-2 transition duration-300 shadow-md shadow-blue-500/20">
                    View Details
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-qblack">#350</td>
                <td className="px-6 py-4 font-medium">Dec 15, 2020</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs font-bold rounded-full text-green-600 bg-green-100">Completed</span>
                </td>
                <td className="px-6 py-4 font-bold text-qblack">$198</td>
                <td className="px-6 py-4">
                  <button type="button" className="text-white bg-primary-blue hover:bg-blue-600 font-bold rounded-lg text-xs px-4 py-2 transition duration-300 shadow-md shadow-blue-500/20">
                    View Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-6 border-t border-gray-100 flex justify-between items-center">
          <p className="text-sm text-gray-500 font-medium">Showing 5 of 12 orders</p>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-100 rounded-lg text-gray-600 font-bold hover:bg-gray-200 transition-colors text-sm">Previous</button>
            <button className="px-4 py-2 bg-primary-blue rounded-lg text-white font-bold hover:bg-blue-600 transition-colors text-sm shadow-md shadow-blue-500/20">Next</button>
          </div>
        </div>
      </div>
    </>
  );
}
