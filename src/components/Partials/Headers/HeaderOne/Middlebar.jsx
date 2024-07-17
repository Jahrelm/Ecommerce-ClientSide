import Cart from "../../../Cart";
import Compair from "../../../Helpers/icons/Compair";
import ThinBag from "../../../Helpers/icons/ThinBag";
import ThinLove from "../../../Helpers/icons/ThinLove";
import ThinPeople from "../../../Helpers/icons/ThinPeople";
import SearchBox from "../../../Helpers/SearchBox";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Middlebar({className, type }) {

  const { cart } = useSelector((state) => state.cart);
  const { user , success} = useSelector((state) => state.auth);
  const [count, setCount] = useState(0);
  const [username , setUsername] = useState("");

 
  useEffect(() => {
    if (success && user){
      setUsername(user.fullName);
      
      
    } else {
      setUsername("");
    }
  },[success, user])
 

  useEffect(() => {
    setCount(cart.length);
   
  }, [cart]);
  
  console.log(cart);
  console.log(user);
  console.log(username);


  return (
    <div className={`w-full h-[86px] bg-white ${className}`}>
      <div className="container-x mx-auto h-full">
        <div className="relative h-full">
          <div className="flex justify-between items-center h-full">
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
                    style={{ width: '80px', maxHeight: '120px' }}
                    src={`${process.env.PUBLIC_URL}/assets/images/mobileLogo.png`}
                    alt="logo"
                  />
                  <span className="ml-4 text-xl font-semibold text-customBlue">WorthIT-Mobile</span>
                </a>
              )}
            </div>
            <div className="w-[517px] h-[44px]">
              <SearchBox type={type} className="search-com" />
            </div>
            <div className="flex space-x-6 items-center">
              <div className="compaire relative">
                <a href="/products-compaire">
                  <span>
                    <Compair />
                  </span>
                </a>
                <span
                  className={`w-[18px] h-[18px] rounded-full absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] ${
                    type === 3
                      ? "bg-qh3-blue text-white"
                      : "bg-customBlue text-white"
                  }`}
                >
                  2
                </span>
              </div>
              <div className="favorite relative">
                <a href="/wishlist">
                  <span>
                    <ThinLove />
                  </span>
                </a>
                <span
                  className={`w-[18px] h-[18px] rounded-full absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] ${
                    type === 3
                      ? "bg-qh3-blue text-white"
                      : "bg-customBlue text-white"
                  }`}
                >
                  1
                </span>
              </div>
              <div className="cart-wrapper group relative py-4">
                <div className="cart relative cursor-pointer">
                  
                    <span>
                      <ThinBag />
                    </span>
               
                  <span
                    className={`w-[18px] h-[18px] rounded-full absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] ${
                      type === 3
                        ? "bg-qh3-blue text-white"
                        : "bg-customBlue text-white"
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
              <div className="flex items-center space-x-2">
                <button type="button">
                  <span>
                    <ThinPeople />
                  </span>
                </button>
               <span className="text-gray-700">{username}</span> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
