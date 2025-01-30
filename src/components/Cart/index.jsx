import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, removeFromCart } from "../../redux/actions/cartActions";
import { MdDelete } from "react-icons/md";

export default function Cart({ className, type }) {
  const [totalCartCost, setTotalCartCost] = useState(0);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart) || { cart: [] };

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  useEffect(() => {
    if (Array.isArray(cart) && cart.length > 0 && cart[0].cartItems) {
      const total = cart[0].cartItems.reduce(
        (sum, item) => sum + (parseFloat(item.subTotal) || 0),
        0
      );
      setTotalCartCost(total.toFixed(2));
    } else {
      setTotalCartCost("0.00");
    }
  }, [cart]);

  const cartItems = cart.length > 0 ? cart[0].cartItems : [];

  return (
    <div
      className={`w-[300px] bg-white border-t-[3px] ${
        type === 3 ? "border-qh3-blue" : "border-gray-300"
      } rounded-lg ${className || ""} shadow-lg p-4`}
    >
      <div className="product-items max-h-[350px] overflow-y-auto space-y-3">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-gray-200 pb-2"
            >
              <div className="flex items-center space-x-3">
                <div className="w-[45px] h-[45px] flex-shrink-0 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src={
                      item.product.image ||
                      `${process.env.PUBLIC_URL}/assets/images/product-img-1.jpg`
                    }
                    alt={item.product.title || "Product Image"}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-gray-900 hover:text-blue-600 truncate">
                    {item.product.title || "Unknown Item"}
                  </p>
                  <p className="text-xs font-medium text-gray-600">
                    ${parseFloat(item.subTotal || 0).toFixed(2)} (
                    <span className="text-gray-900 font-semibold">{item.quantity}</span>)
                  </p>
                </div>
              </div>
              <button
                className="text-gray-500 hover:text-red-600"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                <MdDelete size={18} />
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Cart is empty</p>
        )}
      </div>

      <div className="my-3 border-t border-gray-200"></div>

      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-medium text-gray-800">Subtotal</span>
        <span className="text-lg font-bold text-gray-900">
          ${totalCartCost}
        </span>
      </div>

      <a
        href="/cart"
        className="block w-full h-[45px] flex items-center justify-center bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium"
      >
        <span>View Cart</span>
      </a>
      <a
        href="/checkout"
        className="block w-full h-[45px] mt-2 flex items-center justify-center bg-blue-700 text-white rounded-lg hover:bg-blue-800 font-medium"
      >
        <span>Checkout</span>
      </a>
    </div>
  );
}
