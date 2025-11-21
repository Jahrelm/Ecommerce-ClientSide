import Cart from "../../../Cart";
import Compair from "../../../Helpers/icons/Compair";
import ThinBag from "../../../Helpers/icons/ThinBag";
import ThinLove from "../../../Helpers/icons/ThinLove";
import ThinPeople from "../../../Helpers/icons/ThinPeople";
import SearchBox from "../../../Helpers/SearchBox";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Middlebar({ className, type }) {
  const { cart } = useSelector((state) => state.cart) || { cart: [] };
  const { user } = useSelector((state) => state.auth);
  const { wishlist } = useSelector((state) => state.wishlist) || { wishlist: [] };
  
  const [count, setCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [username, setUsername] = useState("");

  const cartItems = cart.length > 0 ? cart[0].cartItems : [];

  useEffect(() => {
    const totalQuantity = cartItems.reduce((acc, item) => acc + (item.quantity || 0), 0);
    setCount(totalQuantity);
  }, [cartItems]);

  // Set username when user is logged in
  useEffect(() => {
    if (user && user.username) {
      setUsername(user.username);
    } else if (user && user.email) {
      // If username is not available, use email or name
      const emailName = user.email.split('@')[0];
      setUsername(emailName);
    } else if (user && user.name) {
      setUsername(user.name);
    } else {
      setUsername("");
    }
  }, [user]);

  // Update wishlist count
  useEffect(() => {
    if (wishlist && Array.isArray(wishlist)) {
      setWishlistCount(wishlist.length);
    } else {
      setWishlistCount(0);
    }
  }, [wishlist]);

  return (
    <div className={`w-full h-[90px] bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm ${className}`}>
      <div className="container-x mx-auto h-full">
        <div className="relative h-full">
          <div className="flex justify-between items-center h-full px-4">
            {/* Logo Section */}
            <div className="flex items-center justify-center">
              {type === 3 ? (
                <a href="/" className="transform hover:scale-105 transition-transform duration-300">
                  <img
                    width="152"
                    height="36"
                    src={`${process.env.PUBLIC_URL}/assets/images/logo-3.svg`}
                    alt="logo"
                  />
                </a>
              ) : (
                <a href="/" className="flex items-center gap-3 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-peachy-pink rounded-xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative w-12 h-12 bg-gradient-to-br from-primary-blue to-peachy-pink rounded-xl flex items-center justify-center shadow-md">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold bg-gradient-to-r from-primary-blue to-peachy-pink bg-clip-text text-transparent">
                      Toddler Kingdom
                    </span>
                    <span className="text-xs text-gray-500 font-medium">Pre-Loved Market</span>
                  </div>
                </a>
              )}
            </div>

            {/* Search Box */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <SearchBox type={type} className="search-com" />
              </div>
            </div>

            {/* Icons (Compare, Wishlist, Cart, Profile) */}
            <div className="flex items-center gap-2">
              {/* Wishlist */}
              <a href="/wishlist" className="relative p-2.5 hover:bg-gray-50 rounded-xl transition-all duration-300 group">
                <svg className="w-6 h-6 text-gray-600 group-hover:text-peachy-pink transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-peachy-pink to-pink-400 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md">
                    {wishlistCount}
                  </span>
                )}
              </a>

              {/* Cart */}
              <div className="cart-wrapper group relative">
                <button className="relative p-2.5 hover:bg-gray-50 rounded-xl transition-all duration-300">
                  <svg className="w-6 h-6 text-gray-600 group-hover:text-primary-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  {count > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-primary-blue to-blue-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md">
                      {count}
                    </span>
                  )}
                </button>
                <Cart
                  type={type}
                  className="absolute -right-[45px] top-14 z-50 hidden group-hover:block"
                />
              </div>

              {/* Divider */}
              <div className="w-px h-8 bg-gray-200 mx-2"></div>

              {/* User/Profile */}
              <a href="/profile" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-xl transition-all duration-300 group">
                <div className="w-9 h-9 bg-gradient-to-br from-primary-blue to-peachy-pink rounded-full flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                {username ? (
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-medium">Welcome</span>
                    <span className="text-sm font-semibold text-gray-800 group-hover:text-primary-blue transition-colors">{username}</span>
                  </div>
                ) : (
                  <span className="text-sm font-semibold text-gray-800 group-hover:text-primary-blue transition-colors">Login</span>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
