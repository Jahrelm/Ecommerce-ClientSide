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
    <div className={`w-full h-[86px] bg-white ${className}`}>
      <div className="container-x mx-auto h-full">
        <div className="relative h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo Section */}
            <div className="flex items-center justify-center h-24">
              {type === 3 ? (
                <a href="/">
                  <img
                    width="152"
                    height="36"
                    src={`${process.env.PUBLIC_URL}/assets/images/logo-3.svg`}
                    alt="logo"
                  />
                </a>
              ) : (
                <a href="/" className="flex items-center">
                  <img
                    className="max-w-full h-auto max-h-20"
                    style={{ width: "80px", maxHeight: "120px" }}
                    src={`${process.env.PUBLIC_URL}/assets/images/mobileLogo.png`}
                    alt="logo"
                  />
                  <span className="ml-4 text-xl font-semibold text-customBlue">
                    WorthIT-Mobile
                  </span>
                </a>
              )}
            </div>

            {/* Search Box */}
            <div className="w-[517px] h-[44px]">
              <SearchBox type={type} className="search-com" />
            </div>

            {/* Icons (Compare, Wishlist, Cart, Profile) */}
            <div className="flex space-x-6 items-center">
              {/* Compare */}
              <div className="compaire relative">
                <a href="/products-compaire">
                  <span>
                    <Compair />
                  </span>
                </a>
                <span
                  className={`w-[18px] h-[18px] rounded-full absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] ${
                    type === 3 ? "bg-qh3-blue text-white" : "bg-customBlue text-white"
                  }`}
                >
                  2
                </span>
              </div>

              {/* Wishlist */}
              <div className="favorite relative">
                <a href="/wishlist">
                  <span>
                    <ThinLove />
                  </span>
                </a>
                <span
                  className={`w-[18px] h-[18px] rounded-full absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] ${
                    type === 3 ? "bg-qh3-blue text-white" : "bg-customBlue text-white"
                  }`}
                >
                  {wishlistCount}
                </span>
              </div>

              {/* Cart */}
              <div className="cart-wrapper group relative py-4">
                <div className="cart relative cursor-pointer">
                  <span>
                    <ThinBag />
                  </span>
                  <span
                    className={`w-[18px] h-[18px] rounded-full absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] ${
                      type === 3 ? "bg-qh3-blue text-white" : "bg-customBlue text-white"
                    }`}
                  >
                    {count}
                  </span>
                </div>
                <Cart
                  type={type}
                  className="absolute -right-[45px] top-11 z-50 hidden group-hover:block"
                />
              </div>

              {/* User/Profile */}
              <div className="flex items-center space-x-2">
                <a href="/profile" className="flex items-center space-x-2">
                  <span>
                    <ThinPeople />
                  </span>
                  {username ? (
                    <span className="text-sm font-medium text-gray-700">{username}</span>
                  ) : (
                    <span className="text-sm font-medium text-gray-700">Login</span>
                  )}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
