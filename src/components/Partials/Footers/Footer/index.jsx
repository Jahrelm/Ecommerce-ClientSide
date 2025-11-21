import Facebook from "../../../Helpers/icons/Facebook";
import Instagram from "../../../Helpers/icons/Instagram";
import Youtube from "../../../Helpers/icons/Youtube";

export default function Footer({ type }) {

    return (
        <footer className="footer-section-wrapper bg-white print:hidden border-t border-gray-200">
            <div className="container-x block mx-auto pt-16 pb-8">
                <div className="w-full flex flex-col items-center mb-12">
                    {/* logo area */}
                    <div className="mb-6">
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
                                    <span className="text-xl font-bold bg-gradient-to-r from-primary-blue to-peachy-pink bg-clip-text text-transparent">
                                        Toddler Kingdom
                                    </span>
                                    <span className="text-xs text-gray-500 font-medium">Pre-Loved Market</span>
                                </div>
                            </a>
                        )}

                    </div>
                    <p className="text-sm text-gray-500 text-center max-w-2xl mb-6">
                        Your trusted marketplace for quality pre-loved toddler items. Connecting parents to give children's items a second life.
                    </p>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
                    <div>
                        <h6 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
                            Shop
                        </h6>
                        <ul className="flex flex-col space-y-3">
                            <li>
                                <a href="/all-products" className="text-gray-600 text-sm hover:text-primary-blue transition-colors">
                                    All Products
                                </a>
                            </li>
                            <li>
                                <a href="/flash-sale" className="text-gray-600 text-sm hover:text-primary-blue transition-colors">
                                    Flash Sale
                                </a>
                            </li>
                            <li>
                                <a href="/tracking-order" className="text-gray-600 text-sm hover:text-primary-blue transition-colors">
                                    Track Order
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
                            Company
                        </h6>
                        <ul className="flex flex-col space-y-3">
                            <li>
                                <a href="/about" className="text-gray-600 text-sm hover:text-primary-blue transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/blogs" className="text-gray-600 text-sm hover:text-primary-blue transition-colors">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="/become-saller" className="text-gray-600 text-sm hover:text-primary-blue transition-colors">
                                    Become Seller
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
                            Support
                        </h6>
                        <ul className="flex flex-col space-y-3">
                            <li>
                                <a href="/faq" className="text-gray-600 text-sm hover:text-primary-blue transition-colors">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-600 text-sm hover:text-primary-blue transition-colors">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="/terms-condition" className="text-gray-600 text-sm hover:text-primary-blue transition-colors">
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
                            Follow Us
                        </h6>
                        <div className="flex space-x-3">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-blue flex items-center justify-center transition-all duration-300 group">
                                <Instagram className="fill-current text-gray-600 group-hover:text-white transition-colors" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-blue flex items-center justify-center transition-all duration-300 group">
                                <Facebook className="fill-current text-gray-600 group-hover:text-white transition-colors" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-peachy-pink flex items-center justify-center transition-all duration-300 group">
                                <Youtube className="fill-current text-gray-600 group-hover:text-white transition-colors" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bottom-bar border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="text-sm text-gray-600 text-center md:text-left">
                        © 2024 <span className="font-semibold text-gray-900">Toddler Kingdom</span>. All rights reserved
                    </span>
                    <div>
                        <a href="#">
                            <img
                                width="318"
                                height="28"
                                src={`${process.env.PUBLIC_URL}/assets/images/payment-getways.png`}
                                alt="payment-getways"
                                className="opacity-80 hover:opacity-100 transition-opacity"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}