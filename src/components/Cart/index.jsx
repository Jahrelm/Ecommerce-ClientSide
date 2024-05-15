import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cart ({ className, type }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalCartCost, setTotalCartCost] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/cart/list');
        setCartItems(response.data); 
        setTotalCartCost(response.data.reduce((acc, item) => acc + parseFloat(item.cartCost.replace('$', '')), 0)); 
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      <div
        style={{ boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)" }}
        className={`w-[300px] bg-white border-t-[3px] ${type === 3 ? 'border-qh3-blue' : 'cart-wrappwer'}  ${
          className || ""
        }`}
      >
        <div className="w-full h-full">
          <div className="product-items h-[310px] overflow-y-scroll">
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="w-full h-full flex items-center justify-between border-b border-gray-200 px-4 py-3">
                  <div className="flex items-center space-x-[10px]">
                    <div className="w-[65px] h-[65px]">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/product-img-1.jpg`}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-[13px] font-600 text-qblack leading-4 line-clamp-2 hover:text-blue-600">
                        {item.title}
                      </p>
                      <p className="text-[15px] font-500 text-qred">
                        {item.totalCost}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3">{item.quantity}</span>
                    <span className="inline-flex cursor-pointer">
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        className="inline fill-current text-[#AAAAAA] hover:text-qred"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.76 0.24C7.44 -0.08 6.96 -0.08 6.64 0.24L4 2.88L1.36 0.24C1.04 -0.08 0.56 -0.08 0.24 0.24C-0.08 0.56 -0.08 1.04 0.24 1.36L2.88 4L0.24 6.64C-0.08 6.96 -0.08 7.44 0.24 7.76C0.56 8.08 1.04 8.08 1.36 7.76L4 5.12L6.64 7.76C6.96 8.08 7.44 8.08 7.76 7.76C8.08 7.44 8.08 6.96 7.76 6.64L5.12 4L7.76 1.36C8.08 1.04 8.08 0.56 7.76 0.24Z" />
                      </svg>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full px-4 mt-5">
            <div className="h-[1px] bg-[#F0F1F3]"></div>
          </div>
          <div className="product-actions px-4 mb-5">
            <div className="total-equation flex justify-between items-center mb-4">
              <span className="text-[15px] font-500 text-qblack">Subtotal</span>
              <span className="text-[15px] font-500 text-qred">${totalCartCost.toFixed(2)}</span>
            </div>
            <div className="product-action-btn">
              <a href="#">
                <div className="gray-btn w-full h-[50px] mb-[10px] ">
                  <span>View Cart</span>
                </div>
              </a>
              <a href="#">
                <div className="w-full h-[50px]">
                  <div className={type === 3 ? 'blue-btn' : 'yellow-btn'}>
                    <span className="text-sm">Checkout Now</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="w-full px-4 mt-5">
            <div className="h-[1px] bg-[#F0F1F3]"></div>
          </div>
          <div className="flex justify-center py-3">
            <p className="text-[13px] font-500 text-qgray">
              Get Return within <span className="text-qblack">30 days</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
