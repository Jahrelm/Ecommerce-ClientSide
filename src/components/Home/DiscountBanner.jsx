export default function DiscountBanner({ className, type, compact }) {
  return (
    <div
      className={`discount-banner w-full ${compact ? "h-[160px]" : "h-[307px]"} bg-gradient-to-br from-primary-blue via-blue-600 to-peachy-pink flex justify-center items-center relative overflow-hidden ${className || ""
        }`}
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-peachy-pink/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-2xl"></div>
      {type === 3 ? (
        <div className="container-x mx-auto">
          <div
            className="best-services w-full  flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center lg:h-[110px] px-10 lg:py-0 py-10"
          >
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
                      <path
                        d="M34.9982 1H11.8164V18H34.9982V1Z"
                        stroke="#1868D5"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M11.8164 7.18164H34.9982"
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
            <div className="item">
              <div className="flex space-x-5 items-center">
                <div>
                  <span>
                    <svg
                      width="32"
                      height="35"
                      viewBox="0 0 32 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
                        stroke="#1868D5"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
                        stroke="#1868D5"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M16 28V22"
                        stroke="#1868D5"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
                        stroke="#1868D5"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
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
                    Best Quality
                  </p>
                  <p className="text-sm text-qgray">
                    Original Product Guarenteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto relative z-10 w-full px-4">
          <div className={`flex ${compact ? "flex-row items-center justify-between gap-8" : "flex-col items-center"} text-center`}>
            <div data-aos="fade-up" className={`${compact ? "text-left mb-0" : "mb-8"}`}>
              <h1 className={`${compact ? "text-2xl" : "sm:text-4xl text-2xl"} font-bold text-white mb-2`}>
                Stay Updated with <span className="text-peachy-pink">New Arrivals</span>
              </h1>
              <p className={`${compact ? "text-sm" : "sm:text-lg text-base"} text-white/90 font-medium`}>
                Subscribe to get notified about quality pre-loved items
              </p>
            </div>
            <div
              data-aos="fade-up"
              className={`${compact ? "w-[400px]" : "max-w-xl w-full"}`}
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    className={`w-full ${compact ? "h-11" : "h-14"} pl-12 pr-4 rounded-xl border-2 border-white/20 bg-white/95 backdrop-blur-sm focus:outline-none focus:border-peachy-pink text-gray-800 placeholder:text-gray-500 font-medium transition-all`}
                    placeholder="Enter your email address"
                  />
                </div>
                <button
                  type="button"
                  className={`sm:w-auto w-full px-8 ${compact ? "h-11" : "h-14"} bg-gradient-to-r from-peachy-pink to-pink-500 hover:from-pink-500 hover:to-peachy-pink text-white rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5`}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
