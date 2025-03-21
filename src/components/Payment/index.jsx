import React, { useEffect, useState } from "react";
import Layout from "../Partials/Layout";
import PageTitle from "../Helpers/PageTitle";
import { FaCheckCircle, FaShoppingBag, FaHome, FaDownload, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Payment() {
  const { cart, stripeSession } = useSelector((state) => state.cart) || { cart: [] };
  const { user } = useSelector((state) => state.auth) || { user: null };
  
  // State to store order details
  const [orderDetails, setOrderDetails] = useState({
    orderId: "ORD-" + Math.floor(100000 + Math.random() * 900000),
    date: new Date().toLocaleDateString(),
    total: "$0.00",
    paymentMethod: "Credit Card",
    items: []
  });

  useEffect(() => {
    // Generate a random order ID if not available from the backend
    const generatedOrderId = "ORD-" + Math.floor(100000 + Math.random() * 900000);
    
    if (Array.isArray(cart) && cart.length > 0 && cart[0]?.cartItems) {
      // Calculate total from cart items
      const total = cart[0].cartItems.reduce((sum, item) => {
        return sum + (parseFloat(item.subTotal) || 0);
      }, 0);
      
      // Map cart items to order items
      const items = cart[0].cartItems.map(item => ({
        name: item.product.title,
        price: `$${parseFloat(item.product.price).toFixed(2)}`,
        quantity: item.quantity
      }));
      
      // Update order details
      setOrderDetails({
        orderId: stripeSession?.id || generatedOrderId,
        date: new Date().toLocaleDateString(),
        total: `$${total.toFixed(2)}`,
        paymentMethod: "Credit Card",
        items: items
      });
    }
  }, [cart, stripeSession]);

  return (
    <Layout childrenClasses="pt-0 pb-0">
      {/* Page Title Section */}
      <div className="w-full mb-5">
        <PageTitle
          title="Payment Successful"
          breadcrumb={[
            { name: "home", path: "/" },
            { name: "checkout", path: "/checkout" },
            { name: "payment", path: "/payment" },
          ]}
        />
      </div>

      <div className="container-x mx-auto py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3 w-full">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              {/* Success Header */}
              <div className="flex items-center mb-6 pb-6 border-b border-gray-100">
                <div className="h-16 w-16 bg-green-50 rounded-full flex items-center justify-center mr-5">
                  <FaCheckCircle className="text-green-500 text-3xl" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-qblack mb-1">Payment Successful!</h1>
                  <p className="text-qgray">
                    Thank you for your purchase. Your order has been processed successfully.
                  </p>
                </div>
              </div>

              {/* Order Details */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-qblack mb-4">Order Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#F6F6F6] p-4 rounded-md">
                    <p className="text-qgray text-sm mb-1">Order Number</p>
                    <p className="text-qblack font-medium">{orderDetails.orderId}</p>
                  </div>
                  <div className="bg-[#F6F6F6] p-4 rounded-md">
                    <p className="text-qgray text-sm mb-1">Date</p>
                    <p className="text-qblack font-medium">{orderDetails.date}</p>
                  </div>
                  <div className="bg-[#F6F6F6] p-4 rounded-md">
                    <p className="text-qgray text-sm mb-1">Total</p>
                    <p className="text-qblack font-medium">{orderDetails.total}</p>
                  </div>
                  <div className="bg-[#F6F6F6] p-4 rounded-md">
                    <p className="text-qgray text-sm mb-1">Payment Method</p>
                    <p className="text-qblack font-medium">{orderDetails.paymentMethod}</p>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-qblack mb-4">Order Summary</h2>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-[#F6F6F6] p-4 text-qblack font-medium grid grid-cols-12">
                    <span className="col-span-6">Product</span>
                    <span className="col-span-2 text-center">Price</span>
                    <span className="col-span-2 text-center">Quantity</span>
                    <span className="col-span-2 text-right">Total</span>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {orderDetails.items.map((item, index) => (
                      <div key={index} className="p-4 grid grid-cols-12 items-center">
                        <div className="col-span-6">
                          <p className="text-qblack font-medium">{item.name}</p>
                        </div>
                        <div className="col-span-2 text-center text-qgray">{item.price}</div>
                        <div className="col-span-2 text-center text-qgray">{item.quantity}</div>
                        <div className="col-span-2 text-right text-qblack font-medium">{item.price}</div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-[#F9F9F9] flex justify-between items-center">
                    <span className="text-qblack font-medium">Total</span>
                    <span className="text-qblack font-bold">{orderDetails.total}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                <button
                  onClick={() => (window.location.href = "/orders")}
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center"
                >
                  <FaShoppingBag className="mr-2" /> View Orders
                </button>
                <button
                  onClick={() => (window.location.href = "/")}
                  className="bg-qblack text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200 flex items-center"
                >
                  <FaHome className="mr-2" /> Continue Shopping
                </button>
                <button
                  onClick={() => window.print()}
                  className="bg-gray-200 text-qblack px-6 py-3 rounded-md hover:bg-gray-300 transition-colors duration-200 flex items-center"
                >
                  <FaDownload className="mr-2" /> Download Receipt
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
              <h2 className="text-xl font-semibold text-qblack mb-4">Customer Information</h2>
              <div className="flex items-center mb-4 pb-4 border-b border-gray-100">
                <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                  <FaUser className="text-blue-500" />
                </div>
                <div>
                  <p className="text-qblack font-medium">{user?.name || sessionStorage.getItem('userName') || 'Customer'}</p>
                  <p className="text-qgray text-sm">{user?.email || sessionStorage.getItem('userEmail') || 'customer@example.com'}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-qgray mb-2">Shipping Address</h3>
                  <p className="text-qblack">{user?.address || sessionStorage.getItem('userAddress') || '123 Main Street'}</p>
                  <p className="text-qblack">{user?.city || sessionStorage.getItem('userCity') || 'New York'}, {user?.state || sessionStorage.getItem('userState') || 'NY'}</p>
                  <p className="text-qblack">{user?.zipCode || sessionStorage.getItem('userZipCode') || '10001'}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-qgray mb-2">Billing Address</h3>
                  <p className="text-qblack">{user?.address || sessionStorage.getItem('userAddress') || '123 Main Street'}</p>
                  <p className="text-qblack">{user?.city || sessionStorage.getItem('userCity') || 'New York'}, {user?.state || sessionStorage.getItem('userState') || 'NY'}</p>
                  <p className="text-qblack">{user?.zipCode || sessionStorage.getItem('userZipCode') || '10001'}</p>
                </div>
              </div>
            </div>

            {/* Support Section */}
            <div className="bg-[#FFFAEF] p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-qblack mb-3">Need Help?</h2>
              <p className="text-qgray mb-4">If you have any questions about your order, please contact our customer support.</p>
              <a href="/contact" className="text-blue-600 font-medium hover:underline inline-block">Contact Support →</a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Banner */}
      <div className="w-full bg-white py-10 mt-8">
        <div className="container-x mx-auto">
          <div className="best-services w-full flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center lg:h-[110px] px-10 lg:py-0 py-10">
            <div className="item">
              <div className="flex space-x-5 items-center">
                <div>
                  <span>
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1H5.63636V24.1818H35"
                        stroke="#1868D5"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
                        stroke="#1868D5"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
                        stroke="#1868D5"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                    </svg>
                  </span>
                </div>
                <div>
                  <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                    Free Shipping
                  </p>
                  <p className="text-sm text-qgray">
                    When ordering over $100
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="flex space-x-5 items-center">
                <div>
                  <span>
                    <svg
                      width="32"
                      height="34"
                      viewBox="0 0 32 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
                        stroke="#1868D5"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M30.7 2L29.5 10.85L20.5 9.65"
                        stroke="#1868D5"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                    </svg>
                  </span>
                </div>
                <div>
                  <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                    Free Return
                  </p>
                  <p className="text-sm text-qgray">
                    Get Return within 30 days
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="flex space-x-5 items-center">
                <div>
                  <span>
                    <svg
                      width="32"
                      height="38"
                      viewBox="0 0 32 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
                        stroke="#1868D5"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
                        stroke="#1868D5"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
                        stroke="#1868D5"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                    </svg>
                  </span>
                </div>
                <div>
                  <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                    Secure Payment
                  </p>
                  <p className="text-sm text-qgray">
                    100% Secure Online Payment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
