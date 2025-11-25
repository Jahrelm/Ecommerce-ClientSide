import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight, FiCheck, FiStar, FiTrendingUp, FiTruck, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import datas from "../../data/products.json";
import SectionStyleTwo from "../Helpers/SectionStyleTwo";
import Layout from "../Partials/Layout";

export default function Home() {
  const { products } = datas;
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const categories = [
    { name: "Clothing", image: "https://images.unsplash.com/photo-1522771753035-0a1539503ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", color: "bg-blue-50" },
    { name: "Toys", image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", color: "bg-pink-50" },
    { name: "Gear", image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", color: "bg-green-50" },
    { name: "Nursery", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", color: "bg-yellow-50" },
  ];

  const testimonials = [
    { name: "Sarah M.", role: "Super Mom", text: "I sold my stroller in 2 days! The process was so simple and the community is amazing.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d" },
    { name: "James P.", role: "Dad of 2", text: "Found the perfect bike for my son at half the retail price. Highly recommend!", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
    { name: "Emily R.", role: "New Parent", text: "Love the sustainability aspect. It feels good to give these items a second life.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d" },
  ];

  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div ref={scrollRef} className="w-full overflow-hidden bg-[#F9FAFB]">
        {/* Hero Section - Matched to Reference */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20 lg:pt-0 lg:pb-0">
          {/* Soft Background Gradients */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-pink-100/40 rounded-full blur-[100px]"></div>
          </div>

          <div className="container-x mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-20 max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-primary-blue font-bold text-xs mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-primary-blue"></span>
                The #1 Marketplace for Kids
              </motion.div>

              <h1 className="text-6xl lg:text-[5.5rem] font-black text-qblack leading-[0.95] mb-8 tracking-tight">
                Big Dreams, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#EC4899]">
                  Little Prices
                </span>
              </h1>

              <p className="text-xl text-gray-500 mb-10 max-w-lg leading-relaxed font-medium">
                Join the community of parents buying and selling pre-loved kids' gear. Sustainable, safe, and simple.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/signup">
                  <button className="h-[60px] px-8 rounded-full bg-qblack text-white font-bold text-lg hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 w-full sm:w-auto min-w-[180px]">
                    Get Started
                    <FiArrowRight />
                  </button>
                </Link>
                <Link to="/all-products">
                  <button className="h-[60px] px-8 rounded-full bg-white text-qblack border border-gray-200 font-bold text-lg hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm hover:shadow-md w-full sm:w-auto min-w-[180px]">
                    Browse Shop
                  </button>
                </Link>
              </div>

              <div className="flex items-center gap-6 text-sm font-bold text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                    <FiCheck size={12} strokeWidth={3} />
                  </div>
                  Verified Sellers
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                    <FiCheck size={12} strokeWidth={3} />
                  </div>
                  Buyer Protection
                </div>
              </div>
            </motion.div>

            {/* Right Images - Composition */}
            <motion.div
              style={{ y }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[600px] w-full hidden lg:block"
            >
              {/* Back Image (Baby) */}
              <div className="absolute top-0 right-0 w-[420px] h-[520px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-[10px] border-white transform rotate-6 z-10 hover:rotate-3 transition-all duration-700 ease-in-out">
                <img
                  src="https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Baby with sunglasses"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Front Image (Toys) */}
              <div className="absolute bottom-10 left-10 w-[360px] h-[360px] bg-white rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden border-[10px] border-white z-20 hover:scale-[1.02] transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Toys"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <p className="text-white font-bold text-xl">Toys & Games</p>
                  <p className="text-white/90 text-sm font-medium">Starting at $5</p>
                </div>
              </div>

              {/* Floating "Just Sold" Card */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[15%] left-[5%] bg-white px-5 py-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-4 z-30"
              >
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-2xl">
                  💰
                </div>
                <div>
                  <p className="font-bold text-qblack text-sm">Just Sold</p>
                  <p className="text-xs text-gray-500 font-medium">+$45.00</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar - Premium Dark */}
        <div className="bg-[#111827] py-16">
          <div className="container-x mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
              {[
                { label: "Happy Parents", value: "50k+" },
                { label: "Items Listed", value: "120k+" },
                { label: "Trust Score", value: "4.9/5" },
                { label: "Money Saved", value: "$2M+" }
              ].map((stat, i) => (
                <div key={i} className="group cursor-default">
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-primary-blue transition-colors duration-300">{stat.value}</h3>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How It Works - Clean & Simple */}
        <section className="py-24 bg-white relative">
          <div className="container-x mx-auto px-4">
            <div className="text-center mb-20">
              <span className="text-primary-blue font-bold tracking-wider uppercase text-xs bg-blue-50 px-3 py-1 rounded-full">Simple Process</span>
              <h2 className="text-4xl font-black text-qblack mt-4">How it Works</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-[40%] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-gray-100 via-blue-100 to-gray-100 -z-10"></div>

              {[
                { icon: <FiUser />, title: "Create Account", desc: "Sign up in seconds and join our trusted community." },
                { icon: <FiTruck />, title: "List or Shop", desc: "Snap a photo to sell or browse thousands of items." },
                { icon: <FiTrendingUp />, title: "Earn & Save", desc: "Get paid securely or save big on quality gear." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group">
                  <div className="w-20 h-20 mx-auto bg-white border-2 border-blue-50 rounded-2xl flex items-center justify-center text-primary-blue text-3xl mb-8 group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-qblack mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section - Modern Cards */}
        <section className="py-24 bg-gray-50">
          <div className="container-x mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-black text-qblack">Shop by Category</h2>
                <p className="text-gray-500 mt-2 font-medium">Find exactly what you need for your little one.</p>
              </div>
              <Link to="/all-products" className="hidden md:flex items-center gap-2 font-bold text-qblack hover:text-primary-blue transition-colors group">
                View All <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat, idx) => (
                <Link key={idx} to="/all-products">
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group relative h-[420px] rounded-[2rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
                  >
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 w-full p-8">
                      <div className="w-10 h-1 bg-white mb-4 rounded-full opacity-50 group-hover:w-16 group-hover:opacity-100 transition-all duration-300"></div>
                      <h3 className="text-3xl font-bold text-white mb-2">{cat.name}</h3>
                      <div className="flex items-center gap-2 text-white/90 font-bold text-sm group-hover:text-white transition-colors">
                        Explore <FiArrowRight />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-24 bg-white">
          <div className="container-x mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-qblack mb-4">Fresh Finds</h2>
              <p className="text-gray-500 font-medium">New items added every hour by parents like you.</p>
            </div>
            <SectionStyleTwo products={products.slice(0, 4)} />
            <div className="mt-16 text-center">
              <Link to="/all-products">
                <button className="px-10 py-4 rounded-full bg-white border-2 border-qblack font-bold text-qblack hover:bg-qblack hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  View All Products
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials - Clean Cards */}
        <section className="py-24 bg-[#F8F0EA] overflow-hidden">
          <div className="container-x mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => <FiStar key={i} className="text-yellow-400 fill-current w-5 h-5" />)}
              </div>
              <h2 className="text-4xl font-black text-qblack">Loved by Parents</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="mb-6 text-primary-blue">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.55228 16 10 15.5523 10 15V9C10 8.44772 9.55228 8 9 8H5C4.44772 8 4 8.44772 4 9V18C4 19.6569 5.34315 21 7 21H14.017ZM21.017 21L21.017 18C21.017 16.8954 20.1216 16 19.017 16H16C16.5523 16 17 15.5523 17 15V9C17 8.44772 16.5523 8 16 8H12C11.4477 8 11 8.44772 11 9V18C11 19.6569 12.3431 21 14 21H21.017Z" /></svg>
                  </div>
                  <p className="text-qblack font-medium text-lg leading-relaxed mb-8">"{t.text}"</p>
                  <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full bg-gray-200 object-cover" />
                    <div>
                      <h4 className="font-bold text-qblack">{t.name}</h4>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Creative & Bold */}
        <section className="py-24 px-4">
          <div className="container-x mx-auto">
            <div className="bg-gradient-to-br from-primary-blue to-purple-600 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-blue-900/20">
              {/* Abstract Shapes */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-white/10 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-[80px]"></div>
              </div>

              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
                  Ready to join the <br />
                  <span className="text-blue-200">Revolution?</span>
                </h2>
                <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
                  Whether you're decluttering or hunting for treasures, we've got you covered. Start your journey today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Link to="/signup">
                    <button className="h-[70px] px-12 rounded-full bg-white text-primary-blue font-black text-xl hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 min-w-[220px]">
                      Join Now
                    </button>
                  </Link>
                  <Link to="/about">
                    <button className="h-[70px] px-12 rounded-full bg-transparent border-2 border-white/30 text-white font-bold text-xl hover:bg-white/10 hover:border-white transition-all min-w-[220px]">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
