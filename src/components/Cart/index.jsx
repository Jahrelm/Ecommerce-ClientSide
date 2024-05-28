import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../redux/actions/cartActions";
import { MdDelete } from "react-icons/md";

export default function Cart({ className, type }) {
  const [totalCartCost, setTotalCartCost] = useState(0);

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  useEffect(() => {
    if (cart.length > 0) {
      const total = cart.reduce((sum, item) => sum + item.totalCost, 0);
      setTotalCartCost(total.toFixed(2));
    }
  }, [cart]);

  return (
    <div
      style={{ boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)" }}
      className={`w-[300px] bg-white border-t-[3px] ${
        type === 3 ? "border-qh3-blue" : "border-gray-300"
      } rounded-lg ${className || ""}`}
    >
      <div className="p-4">
        <div className="product-items h-[310px] overflow-y-scroll">
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between border-b border-gray-200 pb-3"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-[65px] h-[65px]">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/product-img-1.jpg`}
                      alt={item.title}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 leading-4 line-clamp-2 hover:text-blue-600">
                      {item.title}
                    </p>
                    <p className="text-sm font-medium text-black-500">
                      ${item.totalCost} (
                      <span className="text-black-600">{item.quantity}</span>)
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-1 text-red-400 hover:text-red-500">
                    <MdDelete />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="my-4 border-t border-gray-200"></div>

        <div className="product-actions mb-5">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-800">Subtotal</span>
            <span className="text-sm font-medium text-black-500">
              ${totalCartCost}
            </span>
          </div>
          <div className="space-y-2">
            <a href="/cart">
              <div className="gray-btn w-full h-[50px] mb-[10px] flex items-center justify-center bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200">
                <span>View Cart</span>
              </div>
            </a>
            <a href="#">
              <div
                className={`w-full h-[50px] flex items-center justify-center rounded-lg ${
                  type === 3
                    ? "bg-blue-500 text-white"
                    : "bg-yellow-500 text-black"
                } hover:opacity-90`}
              >
                <a href="/checkout">
                  <span className="text-sm">Checkout Now</span>
                </a>
              </div>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200"></div>

        <div className="flex justify-center py-3">
          <p className="text-sm text-gray-600">
            Get Return within{" "}
            <span className="text-gray-800 font-semibold">30 days</span>
          </p>
        </div>
      </div>
    </div>
  );
}
