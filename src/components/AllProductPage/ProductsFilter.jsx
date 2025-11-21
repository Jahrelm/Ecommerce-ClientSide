import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import Checkbox from "../Helpers/Checkbox";

export default function ProductsFilter({
  filters,
  checkboxHandler,
  volume,
  volumeHandler,
  storage,
  filterstorage,
  className,
  filterToggle,
  filterToggleHandler,
}) {
  return (
    <>
      <div
        className={`filter-widget w-full fixed lg:relative left-0 top-0 h-screen z-10 lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-white rounded-2xl shadow-lg px-6 pt-8 pb-6 ${
          className || ""
        }  ${filterToggle ? "block" : "hidden lg:block"}`}
      >
        <div className="filter-subject-item pb-8 border-b border-gray-200">
          <div className="subject-title mb-6">
            <h1 className="text-gray-900 text-lg font-bold flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Product categories
            </h1>
          </div>
          <div className="filter-items">
            <ul>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="mobileLaptop"
                      name="mobileLaptop"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.mobileLaptop}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mobileLaptop"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Mobile & Laptops
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="gaming"
                      name="gaming"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.gaming}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="gaming"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Gaming Entertainment
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="imageVideo"
                      name="imageVideo"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.imageVideo}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="imageVideo"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Image & Video
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="vehicles"
                      name="vehicles"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.vehicles}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="vehicles"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Vehicles
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="furnitures"
                      name="furnitures"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.furnitures}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="furnitures"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Furnitures
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="sport"
                      name="sport"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.sport}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sport"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Sport
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="foodDrinks"
                      name="foodDrinks"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.foodDrinks}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="foodDrinks"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Food & Drinks
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="fashion"
                      name="fashion"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.fashion}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="fashion"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Fashion Accessories
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="toilet"
                      name="toilet"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.toilet}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="toilet"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Toilet & Sanitation
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="makeupCorner"
                      name="makeupCorner"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.makeupCorner}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="makeupCorner"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Makeup Corner
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="babyItem"
                      name="babyItem"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.babyItem}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="babyItem"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Baby Items
                    </label>
                  </div>
                </div>
                <div>
                  <span className="cursor-pointer">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="4" width="10" height="2" fill="#C4C4C4" />
                      <rect
                        x="6"
                        width="10"
                        height="2"
                        transform="rotate(90 6 0)"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="filter-subject-item pb-8 border-b border-gray-200 mt-8">
          <div className="subject-title mb-6">
            <h1 className="text-gray-900 text-base font-bold flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Price Range
            </h1>
          </div>
          <div className="price-range mb-5">
            <InputRange
              draggableTrack
              maxValue={1000}
              minValue={0}
              value={volume}
              onChange={volumeHandler}
            />
          </div>
          <div className="bg-gradient-to-r from-primary-blue/10 to-peachy-pink/10 rounded-lg px-4 py-3">
            <p className="text-sm text-gray-800 font-semibold">
              ${volume.min} - ${volume.max}
            </p>
          </div>
        </div>
        <div className="filter-subject-item pb-8 border-b border-gray-200 mt-8">
          <div className="subject-title mb-6">
            <h1 className="text-gray-900 text-base font-bold flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              Brands
            </h1>
          </div>
          <div className="filter-items">
            <ul>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="apple"
                      name="apple"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.apple}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="apple"
                      className="text-xs font-black font-400 capitalize"
                    >
                      apple
                    </label>
                  </div>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="samsung"
                      name="samsung"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.samsung}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="samsung"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Samsung
                    </label>
                  </div>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="walton"
                      name="walton"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.walton}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="walton"
                      className="text-xs font-black font-400 capitalize"
                    >
                      walton
                    </label>
                  </div>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="oneplus"
                      name="oneplus"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.oneplus}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="oneplus"
                      className="text-xs font-black font-400 capitalize"
                    >
                      oneplus
                    </label>
                  </div>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="vivo"
                      name="vivo"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.vivo}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="vivo"
                      className="text-xs font-black font-400 capitalize"
                    >
                      vivo
                    </label>
                  </div>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="oppo"
                      name="oppo"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.oppo}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="oppo"
                      className="text-xs font-black font-400 capitalize"
                    >
                      oppo
                    </label>
                  </div>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="xiomi"
                      name="xiomi"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.xiomi}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="xiomi"
                      className="text-xs font-black font-400 capitalize"
                    >
                      xiomi
                    </label>
                  </div>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="others"
                      name="others"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.others}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="others"
                      className="text-xs font-black font-400 capitalize"
                    >
                      others
                    </label>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="filter-subject-item pb-8 border-b border-gray-200 mt-8">
          <div className="subject-title mb-6">
            <h1 className="text-gray-900 text-base font-bold flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
              Storage
            </h1>
          </div>
          <div className="filter-items">
            <div className="flex space-x-[5px] flex-wrap">
              <span
                onClick={() => filterstorage("64GB")}
                className={`font-medium text-xs px-4 py-2 rounded-lg cursor-pointer mb-2 transition-all duration-300 ${
                  storage === "64GB"
                    ? "bg-gradient-to-r from-primary-blue to-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                64GB
              </span>
              <span
                onClick={() => filterstorage("128GB")}
                className={`font-medium text-xs px-4 py-2 rounded-lg cursor-pointer mb-2 transition-all duration-300 ${
                  storage === "128GB"
                    ? "bg-gradient-to-r from-primary-blue to-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                128GB
              </span>
              <span
                onClick={() => filterstorage("256GB")}
                className={`font-medium text-xs px-4 py-2 rounded-lg cursor-pointer mb-2 transition-all duration-300 ${
                  storage === "256GB"
                    ? "bg-gradient-to-r from-primary-blue to-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                256GB
              </span>
              <span
                onClick={() => filterstorage("512GB")}
                className={`font-medium text-xs px-4 py-2 rounded-lg cursor-pointer mb-2 transition-all duration-300 ${
                  storage === "512GB"
                    ? "bg-gradient-to-r from-primary-blue to-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                512GB
              </span>
              <span
                onClick={() => filterstorage("1024GB")}
                className={`font-medium text-xs px-4 py-2 rounded-lg cursor-pointer mb-2 transition-all duration-300 ${
                  storage === "1024GB"
                    ? "bg-gradient-to-r from-primary-blue to-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                1024GB
              </span>
            </div>
          </div>
        </div>
        <div className="filter-subject-item pb-8 mt-8">
          <div className="subject-title mb-6">
            <h1 className="text-gray-900 text-base font-bold flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              Sizes
            </h1>
          </div>
          <div className="filter-items">
            <ul>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="sizeS"
                      name="sizeS"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.sizeS}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sizeS"
                      className="text-xs font-black font-400 capitalize"
                    >
                      s
                    </label>
                  </div>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="sizeM"
                      name="sizeM"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.sizeM}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sizeM"
                      className="text-xs font-black font-400 capitalize"
                    >
                      M
                    </label>
                  </div>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="sizeXL"
                      name="sizeXL"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.sizeXL}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sizeXL"
                      className="text-xs font-black font-400 capitalize"
                    >
                      XL
                    </label>
                  </div>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="sizeXXL"
                      name="sizeXXL"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.sizeXXL}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sizeXXL"
                      className="text-xs font-black font-400 capitalize"
                    >
                      XXL
                    </label>
                  </div>
                </div>
              </li>
              <li className="item flex justify-between items-center mb-5">
                <div className="flex space-x-[14px] items-center">
                  <div>
                    <Checkbox
                      id="sizeFit"
                      name="sizeFit"
                      handleChange={(e) => checkboxHandler(e)}
                      checked={filters.sizeFit}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sizeFit"
                      className="text-xs font-black font-400 capitalize"
                    >
                      Sliem Fit
                    </label>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <button
          onClick={filterToggleHandler}
          type="button"
          className="w-10 h-10 fixed top-5 right-5 z-50 rounded-xl lg:hidden flex justify-center items-center bg-red-500 text-white shadow-lg hover:bg-red-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
