import Compair from "../icons/Compair";
import QuickViewIco from "../icons/QuickViewIco";
import Star from "../icons/Star";
import ThinLove from "../icons/ThinLove";
import { useDispatch} from 'react-redux';

import { addToCart } from "../../../redux/actions/cartActions"; 
import { addToWishList } from "../../../redux/actions/wishListAction";
/* import { useEffect } from "react"; */

export default function ProductCardStyleOne({ datas, type }) {

  const dispatch = useDispatch();
 
  const handleAddToCart = (productId) => {
    dispatch(addToCart(productId)); 
};


const handleAddToWishList = (productId) => {
  dispatch(addToWishList(productId));
}


  
  const available =
    (datas.cam_product_sale /
      (datas.cam_product_available + datas.cam_product_sale)) *
    100;

  return (
    <div
      className="product-card-one w-full h-full bg-white relative group overflow-hidden rounded-2xl border border-gray-100 hover:border-primary-blue/30 transition-all duration-300 hover:shadow-xl"
    >
      <div
        className="product-card-img w-full h-[240px] rounded-t-2xl bg-gray-50"
        style={{
          background: `url(${process.env.PUBLIC_URL}/assets/images/${datas.image}) no-repeat center`,
          backgroundSize: 'contain'
        }}
      >
        {/* product available progress */}
        {datas.campaingn_product && (
          <>
            <div className="px-[30px] absolute left-0 top-3 w-full">
              <div className="progress-title flex justify-between ">
                <p className="text-xs text-qblack font-400 leading-6">
                  Products Available
                </p>
                <span className="text-sm text-qblack font-600 leading-6">
                  {datas.cam_product_available}
                </span>
              </div>
              <div className="progress w-full h-[5px] rounded-[22px] bg-primarygray relative overflow-hidden">
                <div
                  style={{
                    width: `${datas.campaingn_product ? 100 - available : 0}%`,
                  }}
                  className={`h-full absolute left-0 top-0 ${
                    type === 3 ? "bg-qh3-blue" : "bg-qyellow"
                  }`}
                ></div>
              </div>
            </div>
          </>
        )}
        {/* product type */}
        {datas.product_type && !datas.campaingn_product && (
          <div className="product-type absolute right-[14px] top-[17px]">
            <span
              className={`text-[10px] font-bold leading-none py-2 px-3 uppercase text-white rounded-full tracking-wider shadow-md ${
                datas.product_type === "popular"
                  ? "bg-gradient-to-r from-green-400 to-green-600"
                  : "bg-gradient-to-r from-primary-blue to-blue-600"
              }`}
            >
              {datas.product_type}
            </span>
          </div>
        )}
      </div>
      <div className="product-card-details px-[30px] pb-[30px] relative">
        {/* add to cart button */}
        <div className="absolute w-full h-12 px-[30px] left-0 top-40 group-hover:top-[85px] transition-all duration-300 ease-in-out">
          <button
            onClick= {() => handleAddToCart(datas.id)}  
            type="button"
            className="w-full h-full bg-gradient-to-r from-primary-blue to-blue-600 hover:from-blue-600 hover:to-primary-blue text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Add To Cart</span>
            </div>
          </button>
        </div>

        <div className="reviews flex space-x-1 mb-3">
          {Array.from(Array(datas.review), (e, i) => (
            <span key={i} className="text-yellow-400">
              <Star />
            </span>
          ))}
        </div>
        <a href="/single-product">
          <p className="title mb-3 text-[15px] font-semibold text-gray-800 leading-[24px] line-clamp-2 hover:text-primary-blue transition-colors">
            {datas.title}
          </p>
        </a>
        <div className="price flex items-center gap-3">
          <span className="offer-price text-gray-900 font-bold text-xl">
            {datas.offer_price}
          </span>
          <span className="main-price text-gray-400 line-through font-medium text-sm">
            {datas.price}
          </span>
        </div>
      </div>
      {/* quick-access-btns */}
      <div className="quick-access-btns flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-20 transition-all duration-300 ease-in-out">
        <a href="#">
          <span className="w-10 h-10 flex justify-center items-center bg-white hover:bg-primary-blue rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group/btn">
            <svg className="w-5 h-5 text-gray-700 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </span>
        </a>
        <button onClick={() => handleAddToWishList(datas.id)}>
          <span className="w-10 h-10 flex justify-center items-center bg-white hover:bg-peachy-pink rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group/btn">
            <svg className="w-5 h-5 text-gray-700 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
