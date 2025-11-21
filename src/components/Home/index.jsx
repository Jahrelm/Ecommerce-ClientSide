import { Link } from "react-router-dom";
import datas from "../../data/products.json";
import SectionStyleThree from "../Helpers/SectionStyleThree";
import SectionStyleTwo from "../Helpers/SectionStyleTwo";
import ViewMoreTitle from "../Helpers/ViewMoreTitle";
import Layout from "../Partials/Layout";

const categories = [
  {
    name: "Clothing",
    icon: "👕",
    count: "2,500+ items",
    color: "from-blue-50 to-blue-100",
    link: "/all-products?category=clothing"
  },
  {
    name: "Toys & Games",
    icon: "🧸",
    count: "1,800+ items",
    color: "from-pink-50 to-pink-100",
    link: "/all-products?category=toys"
  },
  {
    name: "Baby Gear",
    icon: "🍼",
    count: "950+ items",
    color: "from-purple-50 to-purple-100",
    link: "/all-products?category=gear"
  },
  {
    name: "Books",
    icon: "📚",
    count: "1,200+ items",
    color: "from-yellow-50 to-yellow-100",
    link: "/all-products?category=books"
  },
  {
    name: "Shoes",
    icon: "👟",
    count: "850+ items",
    color: "from-green-50 to-green-100",
    link: "/all-products?category=shoes"
  },
  {
    name: "Furniture",
    icon: "🪑",
    count: "420+ items",
    color: "from-orange-50 to-orange-100",
    link: "/all-products?category=furniture"
  }
];

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Quality Verified",
    description: "Every item inspected for safety and quality"
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Save Up to 70%",
    description: "Affordable prices on quality pre-loved items"
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Eco-Friendly",
    description: "Reduce waste, support sustainability"
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Secure Transactions",
    description: "Safe payments and buyer protection"
  }
];

export default function Home() {
  const { products } = datas;

  return (
    <Layout>
      {/* Promotional Banners Section - Enhanced with Motion */}
      <div className="w-full bg-gradient-to-b from-white via-[#FAFAFA] to-white py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        <div className="container-x mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Large Left Banner - Enhanced */}
            <div data-aos="fade-right" className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#E8F4FF] to-[#F0F7FF] min-h-[450px] flex flex-col justify-between p-12 shadow-lg hover:shadow-2xl transition-all duration-500 group">
              {/* Decorative circles */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/30 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary-blue/10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 rounded-md bg-primary-blue/10 text-primary-blue text-[10px] font-bold uppercase tracking-widest mb-5 animate-pulse">
                  ⭐ Featured
                </div>
                <h2 className="text-[48px] leading-[1.1] font-bold text-qblack mb-4 max-w-md group-hover:text-primary-blue transition-colors duration-300">
                  Best Pre-Loved Collection
                </h2>
                <p className="text-[16px] text-gray-600 leading-relaxed mb-8 max-w-sm">
                  Quality items for toddlers at unbeatable prices
                </p>
                <Link to="/all-products">
                  <button className="h-[52px] px-9 rounded-xl bg-qblack text-white font-semibold hover:bg-primary-blue hover:scale-105 transition-all duration-300 text-[14px] shadow-lg hover:shadow-xl">
                    Explore Collection →
                  </button>
                </Link>
              </div>
              
              {/* Animated decoration */}
              <div className="flex gap-2 mt-8 relative z-10">
                <div className="w-8 h-1 rounded-full bg-primary-blue animate-pulse"></div>
                <div className="w-8 h-1 rounded-full bg-gray-300 group-hover:bg-primary-blue transition-colors duration-500"></div>
                <div className="w-8 h-1 rounded-full bg-gray-300 group-hover:bg-primary-blue transition-colors duration-700"></div>
              </div>
            </div>

            {/* Right Side - Two Stacked Banners */}
            <div className="grid grid-rows-2 gap-6">
              {/* Top Right Banner - Enhanced */}
              <div data-aos="fade-left" data-aos-delay="100" className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFF5F5] to-[#FFE8E8] p-8 flex items-center justify-between shadow-lg hover:shadow-2xl transition-all duration-500 group">
                {/* Animated badge */}
                <div className="absolute top-4 right-4 bg-[#C84B31] text-white px-3 py-1 rounded-full text-[10px] font-bold animate-bounce">
                  50% OFF
                </div>
                
                <div className="max-w-[60%] relative z-10">
                  <div className="text-[11px] font-bold text-[#C84B31] mb-2 uppercase tracking-wider flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-[#C84B31] rounded-full animate-ping"></span>
                    Sale
                  </div>
                  <h3 className="text-[26px] leading-[1.2] font-bold text-qblack mb-5 group-hover:scale-105 transition-transform duration-300">
                    Kids Fashion Styles
                  </h3>
                  <Link to="/all-products?category=clothing">
                    <button className="h-[44px] px-7 rounded-xl bg-[#C84B31] text-white font-semibold hover:bg-[#B33A22] hover:scale-105 transition-all duration-300 text-[13px] shadow-md">
                      Shop Now →
                    </button>
                  </Link>
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#C84B31]/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              </div>

              {/* Bottom Right Banner - Enhanced */}
              <div data-aos="fade-left" data-aos-delay="200" className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#F8F5FF] to-[#F0E8FF] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group">
                {/* Sparkle effect */}
                <div className="absolute top-6 left-6 text-2xl animate-spin-slow">✨</div>
                
                <div className="flex items-start justify-between">
                  <div className="max-w-[60%] relative z-10">
                    <div className="text-[11px] font-bold text-primary-blue mb-2 uppercase tracking-wider flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-primary-blue rounded-full animate-pulse"></span>
                      New Arrivals
                    </div>
                    <h3 className="text-[26px] leading-[1.2] font-bold text-qblack mb-5 group-hover:scale-105 transition-transform duration-300">
                      Toys & Games
                    </h3>
                    <Link to="/all-products?category=toys">
                      <button className="h-[44px] px-7 rounded-xl bg-qblack text-white font-semibold hover:bg-primary-blue hover:scale-105 transition-all duration-300 text-[13px] shadow-md">
                        Discover →
                      </button>
                    </Link>
                  </div>
                  
                  {/* Animated Badge */}
                  <div className="text-right relative">
                    <div className="absolute -inset-2 bg-primary-blue/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-white rounded-2xl p-4 shadow-lg">
                      <div className="text-[48px] font-bold text-primary-blue leading-none group-hover:scale-110 transition-transform duration-300">30+</div>
                      <div className="text-[11px] text-gray-600 font-medium mt-1">New Items</div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary-blue/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full bg-off-white py-12">
        <div className="container-x mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 text-primary-blue">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-qblack mb-1">{feature.title}</h3>
                  <p className="text-sm text-medium-grey">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section - Enhanced */}
      <div className="w-full bg-gradient-to-b from-white to-gray-50 py-20 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        
        <div className="container-x mx-auto relative z-10">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-bold uppercase tracking-wider">
                🎯 Browse Collections
              </span>
            </div>
            <h2 className="text-4xl font-bold text-qblack mb-4">Shop by Category</h2>
            <p className="text-lg text-medium-grey">Find exactly what you need for your toddler</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to={category.link}>
                <div 
                  data-aos="zoom-in" 
                  data-aos-delay={index * 50}
                  className={`group rounded-3xl bg-gradient-to-br ${category.color} p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border border-gray-100 relative overflow-hidden`}
                >
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
                  
                  <div className="relative z-10">
                    <div className="text-6xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 inline-block">{category.icon}</div>
                    <h3 className="text-base font-bold text-qblack mb-2 group-hover:text-primary-blue transition-colors">{category.name}</h3>
                    <p className="text-xs text-medium-grey font-medium">{category.count}</p>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="w-full bg-white py-16">
        <div className="container-x mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-qblack">Featured Items</h2>
            <Link to="/all-products">
              <button className="flex items-center gap-2 text-primary-blue font-semibold hover:gap-3 transition-all">
                View More
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </Link>
          </div>
          <SectionStyleTwo products={products.slice(0, 8)} />
        </div>
      </div>

      {/* Trust Banner */}
      <div className="w-full bg-gradient-to-r from-primary-blue to-blue-600 py-20 mb-[60px]">
        <div className="container-x mx-auto">
          <div className="grid md:grid-cols-[1.2fr,1fr] gap-12 items-center text-white">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Why Parents Trust Us</h2>
              <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-xl">
                Every seller is verified, every item is inspected, and every transaction is protected. 
                We're building a community of parents who care about quality, affordability, and sustainability.
              </p>
              <Link to="/about">
                <button className="h-14 px-8 rounded-full bg-white text-primary-blue font-semibold hover:shadow-2xl transition-all">
                  Learn More About Us
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <p className="text-5xl font-bold mb-2">126</p>
                <p className="text-sm text-white/90 font-medium">Tons kept out of landfills</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <p className="text-5xl font-bold mb-2">800+</p>
                <p className="text-sm text-white/90 font-medium">Verified sellers</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <p className="text-5xl font-bold mb-2">92%</p>
                <p className="text-sm text-white/90 font-medium">Repeat customers</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <p className="text-5xl font-bold mb-2">24h</p>
                <p className="text-sm text-white/90 font-medium">Support response</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Arrivals */}
      <SectionStyleThree
        products={products.slice(0, 8)}
        sectionTitle="New Arrivals"
        seeMoreUrl="/all-products"
        className="new-products mb-[60px]"
      />

      {/* CTA Section */}
      <div className="w-full bg-gradient-to-br from-accent-cream to-soft-lavender/30 py-24 mb-[60px]">
        <div className="container-x mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-qblack mb-6">Ready to Start Selling?</h2>
            <p className="text-xl text-medium-grey mb-10 leading-relaxed">
              Turn your gently used children's items into cash. Join our community of trusted sellers and help other families find quality products.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link to="/become-saller">
                <button className="h-16 px-10 rounded-full bg-primary-blue text-white font-semibold shadow-lg hover:shadow-2xl hover:bg-blue-600 transition-all text-lg">
                  Become a Seller
                </button>
              </Link>
              <Link to="/contact">
                <button className="h-16 px-10 rounded-full border-2 border-gray-300 bg-white text-qblack font-semibold hover:border-primary-blue hover:text-primary-blue transition-all text-lg">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
