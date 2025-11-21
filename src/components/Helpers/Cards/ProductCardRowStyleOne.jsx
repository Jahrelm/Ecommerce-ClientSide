import Compair from "../icons/Compair";
import QuickViewIco from "../icons/QuickViewIco";
import Star from "../icons/Star";
import ThinLove from "../icons/ThinLove";

export default function ProductCardRowStyleTwo({ className, datas,type }) {
  return (
    <div
      data-aos="fade-up"
      className={`product-row-card-style-one w-full bg-white group relative overflow-hidden rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
        className || ""
      }`}
    >
      <div className="flex space-x-5 items-center w-full h-full p-6">
        <div className="w-[180px] h-[180px] flex-shrink-0 bg-gray-50 rounded-xl overflow-hidden">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/${datas.image}`}
            alt=""
            className="w-full h-full object-contain p-4"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div>
            {/* reviews */}
            <div className="flex space-x-1 mb-3">
              {Array.from(Array(datas.review), () => (
                <span key={datas.review + Math.random()} className="text-yellow-400">
                  <Star />
                </span>
              ))}
            </div>
            <a href="/single-product">
              <p className="title mb-3 text-[16px] font-semibold text-qblack leading-[24px] line-clamp-2 hover:text-primary-blue transition-colors">
                {datas.title}
              </p>
            </a>
            <p className="price mb-5">
              <span className="main-price text-gray-400 line-through font-medium text-[16px]">
                {datas.price}
              </span>
              <span className="offer-price text-qblack font-bold text-[20px] ml-3">
                {datas.offer_price}
              </span>
            </p>
            <button type="button" className="h-[44px] px-6 rounded-xl bg-primary-blue text-white font-semibold hover:bg-blue-600 transition-all text-[14px]">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      {/* quick-access-btns */}
      <div className="quick-access-btns flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-6 transition-all duration-300 ease-in-out">
        <a href="#">
          <span className="w-10 h-10 flex justify-center items-center bg-white rounded-lg shadow-md hover:bg-primary-blue hover:text-white transition-all">
            <QuickViewIco />
          </span>
        </a>
        <a href="#">
          <span className="w-10 h-10 flex justify-center items-center bg-white rounded-lg shadow-md hover:bg-primary-blue hover:text-white transition-all">
            <ThinLove />
          </span>
        </a>
        <a href="#">
          <span className="w-10 h-10 flex justify-center items-center bg-white rounded-lg shadow-md hover:bg-primary-blue hover:text-white transition-all">
            <Compair />
          </span>
        </a>
      </div>
    </div>
  );
}
