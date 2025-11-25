import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import {
    FiBell,
    FiBox,
    FiCheck,
    FiChevronDown,
    FiChevronRight,
    FiDollarSign,
    FiEye,
    FiFilter,
    FiGrid,
    FiImage,
    FiList,
    FiPlus,
    FiSearch,
    FiStar,
    FiTag,
    FiUploadCloud,
    FiX
} from "react-icons/fi";
import { useSelector } from "react-redux";
import InputCom from "../Helpers/InputCom";
import Layout from "../Partials/Layout";

export default function SellerDashboard() {
    const { user } = useSelector((state) => state.auth || {});
    const [activeTab, setActiveTab] = useState("overview");
    const [showUploadForm, setShowUploadForm] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const imageInputRef = useRef(null);

    // Product form data
    const [productData, setProductData] = useState({
        name: "",
        category: "",
        brand: "",
        model: "",
        year: "",
        color: "",
        material: "",
        condition: "",
        features: [],
        description: "",
        defects: "",
        price: "",
        originalPrice: "",
        stock: "",
        shippingCost: "",
    });

    // Product images for upload
    const [productImages, setProductImages] = useState([]);

    // Sample product data
    const products = [
        { id: "#TKPROD001", name: "UPPAbaby Vista V2 Stroller", category: "Strollers", date: "1 Jan 2025", price: 850.00, stock: 1300, status: "Active", views: 1240, image: "https://images.unsplash.com/photo-1591543620767-58262e7a30e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
        { id: "#TKPROD002", name: "Chicco KeyFit 30 Car Seat", category: "Car Seats", date: "5 Jan 2025", price: 120.00, stock: 328, status: "Sold", views: 850, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
        { id: "#TKPROD003", name: "Fisher-Price Rock 'n Play", category: "Baby Gear", date: "10 Feb 2025", price: 33.00, stock: 0, status: "Pending", views: 2100, image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
        { id: "#TKPROD004", name: "Graco Pack 'n Play", category: "Playards", date: "12 Feb 2025", price: 65.00, stock: 5, status: "Active", views: 600, image: "https://images.unsplash.com/photo-1531297461137-81f96953c093?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
    ];

    // Sample sales history data
    const salesHistory = [
        { id: 1, product: "Chicco KeyFit 30 Car Seat", soldPrice: 115, originalPrice: 120, buyer: "Jennifer M.", date: "2024-01-20", status: "shipped" },
        { id: 2, product: "Carter's Clothing Bundle", soldPrice: 45, originalPrice: 50, buyer: "Sarah K.", date: "2024-01-18", status: "delivered" },
        { id: 3, product: "Fisher-Price Sit-Me-Up Floor Seat", soldPrice: 35, originalPrice: 40, buyer: "Emily R.", date: "2024-01-15", status: "delivered" },
        { id: 4, product: "Dr. Brown's Options+ Bottles (Set of 4)", soldPrice: 20, originalPrice: 25, buyer: "Michael T.", date: "2024-01-12", status: "processing" },
        { id: 5, product: "Halo BassiNest Swivel Sleeper", soldPrice: 150, originalPrice: 180, buyer: "Jessica L.", date: "2024-01-10", status: "shipped" },
        { id: 6, product: "Ergobaby Omni 360 Carrier", soldPrice: 90, originalPrice: 100, buyer: "David W.", date: "2024-01-08", status: "cancelled" },
        { id: 7, product: "Skip Hop Moby Bath Tub", soldPrice: 25, originalPrice: 30, buyer: "Ashley P.", date: "2024-01-05", status: "delivered" },
    ];

    const tabs = [
        { id: "overview", label: "Overview" },
        { id: "listings", label: "My Listings" },
        { id: "history", label: "Sales History" }
    ];

    const steps = [
        { id: 1, title: "Basics", icon: FiTag, description: "Name, Brand & Category" },
        { id: 2, title: "Photos", icon: FiImage, description: "Upload Images" },
        { id: 3, title: "Details", icon: FiList, description: "Condition & Description" },
        { id: 4, title: "Pricing", icon: FiDollarSign, description: "Price & Stock" },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case "Active": return "text-green-500 bg-green-50";
            case "Pending": return "text-yellow-600 bg-yellow-50";
            case "Sold": return "text-orange-500 bg-orange-50";
            case "Out of Stock": return "text-red-500 bg-red-50";
            default: return "text-gray-500 bg-gray-50";
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        const imagePromises = files.map(file => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (e) => resolve(e.target.result);
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        });

        Promise.all(imagePromises)
            .then(images => {
                setProductImages(prev => [...prev, ...images].slice(0, 4));
            })
            .catch(error => console.error("Error uploading images:", error));
    };

    const removeImage = (index) => {
        setProductImages(prev => prev.filter((_, i) => i !== index));
    };

    const handleNextStep = () => {
        if (currentStep < 4) setCurrentStep(prev => prev + 1);
    };

    const handlePrevStep = () => {
        if (currentStep > 1) setCurrentStep(prev => prev - 1);
    };

    const handleSubmitProduct = (e) => {
        e.preventDefault();
        console.log("Submitting product:", { ...productData, images: productImages });
        setProductData({ name: "", category: "", brand: "", condition: "", description: "", price: "", stock: "" });
        setProductImages([]);
        setShowUploadForm(false);
        setCurrentStep(1);
        alert("Product submitted for verification!");
    };

    // Stats
    const totalRevenue = products.reduce((acc, p) => acc + (p.price * (p.stock > 0 ? 5 : 20)), 0);
    const activeListings = products.filter(p => p.status === "Active").length;
    const totalViews = products.reduce((acc, p) => acc + p.views, 0);

    return (
        <Layout childrenClasses="pt-0 pb-0 bg-gray-50" discountBannerProps={{ compact: true }} footerProps={{ compact: true }}>
            <div className="min-h-screen pb-12">
                {/* Blue Header Banner */}
                <div className="bg-primary-blue w-full h-[280px] relative">
                    <div className="container-x mx-auto pt-12">
                        <div className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-xs font-medium mb-4 backdrop-blur-sm">
                            SELLER PORTAL
                        </div>
                        <h1 className="text-4xl font-bold text-white mb-2">Seller Dashboard</h1>
                        <p className="text-blue-100 text-lg">Manage your listings, track sales, and grow your business on Toddler Kingdom.</p>
                    </div>
                </div>

                <div className="container-x mx-auto -mt-24 relative z-10 space-y-8">
                    {/* Welcome Card */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg shadow-blue-900/5 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-primary-blue flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-blue-200">
                                {user ? user.name[0] : "J"}
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-qblack flex items-center gap-2">
                                    Welcome back, {user ? user.name : "Johns"}! <span className="text-2xl">👋</span>
                                </h2>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                    <p className="text-gray-500 text-sm">Here's what's happening with your store today</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl text-gray-600 font-medium hover:bg-gray-50 transition-colors shadow-sm">
                                <FiBell className="w-5 h-5" />
                                Notifications
                            </button>
                            <button
                                onClick={() => setShowUploadForm(true)}
                                className="flex items-center gap-2 px-6 py-3 bg-primary-blue text-white rounded-xl font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200"
                            >
                                <FiPlus className="w-5 h-5" />
                                New Listing
                            </button>
                        </div>
                    </div>

                    {/* Navigation Tabs */}
                    <div className="flex items-center gap-2 bg-white p-2 rounded-2xl w-fit shadow-sm border border-gray-100">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${activeTab === tab.id
                                    ? "bg-qblack text-white shadow-md"
                                    : "text-gray-500 hover:bg-gray-50 hover:text-qblack"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <AnimatePresence mode="wait">
                        {activeTab === "overview" && (
                            <motion.div
                                key="overview"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-8"
                            >
                                {/* Stats Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {/* Total Earnings */}
                                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                            <FiDollarSign className="w-24 h-24 text-green-500 transform rotate-12" />
                                        </div>
                                        <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-green-200">
                                            <FiDollarSign className="w-6 h-6" />
                                        </div>
                                        <div className="relative z-10">
                                            <span className="inline-block px-2 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-lg mb-2">+12%</span>
                                            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Total Earnings</p>
                                            <h3 className="text-3xl font-black text-qblack mt-1">$160</h3>
                                            <p className="text-xs text-gray-400 mt-1">+$45 this month</p>
                                        </div>
                                    </div>

                                    {/* Active Listings */}
                                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                            <FiBox className="w-24 h-24 text-blue-500 transform rotate-12" />
                                        </div>
                                        <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-200">
                                            <FiBox className="w-6 h-6" />
                                        </div>
                                        <div className="relative z-10">
                                            <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg mb-2">Active</span>
                                            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Active Listings</p>
                                            <h3 className="text-3xl font-black text-qblack mt-1">{activeListings}</h3>
                                            <p className="text-xs text-gray-400 mt-1">2 sold this week</p>
                                        </div>
                                    </div>

                                    {/* Total Views */}
                                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                            <FiEye className="w-24 h-24 text-purple-500 transform rotate-12" />
                                        </div>
                                        <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-purple-200">
                                            <FiEye className="w-6 h-6" />
                                        </div>
                                        <div className="relative z-10">
                                            <span className="inline-block px-2 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-lg mb-2">↑ 10%</span>
                                            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Total Views</p>
                                            <h3 className="text-3xl font-black text-qblack mt-1">{totalViews.toLocaleString()}</h3>
                                            <p className="text-xs text-gray-400 mt-1">vs last week</p>
                                        </div>
                                    </div>

                                    {/* Seller Rating */}
                                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                            <FiStar className="w-24 h-24 text-orange-400 transform rotate-12" />
                                        </div>
                                        <div className="w-12 h-12 bg-orange-400 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-orange-200">
                                            <FiStar className="w-6 h-6" />
                                        </div>
                                        <div className="relative z-10">
                                            <div className="flex gap-1 mb-2">
                                                {[1, 2, 3, 4, 5].map(i => <FiStar key={i} className="w-3 h-3 text-orange-400 fill-current" />)}
                                            </div>
                                            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Seller Rating</p>
                                            <h3 className="text-3xl font-black text-qblack mt-1">4.9</h3>
                                            <p className="text-xs text-gray-400 mt-1">Based on 24 reviews</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Recent Listings Section */}
                                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary-blue">
                                                <FiList className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-xl font-bold text-qblack">Recent Listings</h3>
                                        </div>
                                        <button className="text-primary-blue font-bold text-sm hover:underline">View All</button>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="border-b border-gray-100">
                                                    <th className="text-left py-4 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Item</th>
                                                    <th className="text-left py-4 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Price</th>
                                                    <th className="text-left py-4 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Stock</th>
                                                    <th className="text-left py-4 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                                                    <th className="text-right py-4 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-50">
                                                {products.map((product, index) => (
                                                    <tr key={index} className="group hover:bg-gray-50/50 transition-colors">
                                                        <td className="py-4 px-4">
                                                            <div className="flex items-center gap-4">
                                                                <span className="text-gray-300 font-bold text-sm">{index + 1}</span>
                                                                <div className="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden border border-gray-200">
                                                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                                                </div>
                                                                <div>
                                                                    <p className="text-sm font-bold text-qblack group-hover:text-primary-blue transition-colors">{product.name}</p>
                                                                    <p className="text-xs text-gray-400">{product.category}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="py-4 px-4 text-sm font-bold text-qblack">${product.price}</td>
                                                        <td className="py-4 px-4 text-sm text-gray-500 flex items-center gap-2">
                                                            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                                                            {product.stock}
                                                        </td>
                                                        <td className="py-4 px-4">
                                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(product.status)}`}>
                                                                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                                                                {product.status}
                                                            </span>
                                                        </td>
                                                        <td className="py-4 px-4 text-right">
                                                            <button className="text-primary-blue text-xs font-bold hover:underline flex items-center justify-end gap-1 ml-auto">
                                                                View Details <FiChevronRight />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === "listings" && (
                            <motion.div
                                key="listings"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-qblack flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-primary-blue text-white flex items-center justify-center">
                                                <FiList className="w-5 h-5" />
                                            </div>
                                            My Listings
                                        </h3>
                                        <p className="text-sm text-gray-400 mt-1 ml-14">Manage all your products</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl">
                                            <span className="text-sm font-bold text-qblack">2</span>
                                            <FiChevronDown className="text-gray-400" />
                                        </div>
                                        <button
                                            onClick={() => setShowUploadForm(true)}
                                            className="flex items-center gap-2 px-6 py-2.5 bg-primary-blue text-white rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200"
                                        >
                                            <FiPlus /> New Listing
                                        </button>
                                        <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-200 text-gray-600 rounded-xl font-bold hover:bg-gray-50">
                                            <FiUploadCloud /> Export
                                        </button>
                                    </div>
                                </div>

                                {/* Filters Bar */}
                                <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                    <div className="relative flex-1 min-w-[200px]">
                                        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Search by name, Item ID..."
                                            className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:border-primary-blue focus:ring-0"
                                        />
                                    </div>
                                    <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-600 flex items-center gap-2 hover:bg-gray-50">
                                        All Statuses <FiChevronDown />
                                    </button>
                                    <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-600 flex items-center gap-2 hover:bg-gray-50">
                                        Last 30 Days <FiChevronDown />
                                    </button>
                                    <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-600 flex items-center gap-2 hover:bg-gray-50">
                                        <FiGrid /> View By <FiChevronDown />
                                    </button>
                                    <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-600 flex items-center gap-2 hover:bg-gray-50">
                                        <FiFilter /> Filters
                                    </button>
                                </div>

                                {/* Table */}
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-gray-100">
                                                <th className="text-left py-4 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Item</th>
                                                <th className="text-left py-4 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Price</th>
                                                <th className="text-left py-4 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Stock</th>
                                                <th className="text-left py-4 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                                                <th className="text-right py-4 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {products.map((product, index) => (
                                                <tr key={index} className="group hover:bg-gray-50/50 transition-colors">
                                                    <td className="py-4 px-4">
                                                        <div className="flex items-center gap-4">
                                                            <span className="text-gray-300 font-bold text-sm">{index + 1}</span>
                                                            <div className="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden border border-gray-200">
                                                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                                            </div>
                                                            <div>
                                                                <p className="text-sm font-bold text-qblack group-hover:text-primary-blue transition-colors">{product.name}</p>
                                                                <p className="text-xs text-gray-400">{product.category}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-4 text-sm font-bold text-qblack">${product.price}</td>
                                                    <td className="py-4 px-4 text-sm text-gray-500 flex items-center gap-2">
                                                        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                                                        {product.stock}
                                                    </td>
                                                    <td className="py-4 px-4">
                                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(product.status)}`}>
                                                            <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                                                            {product.status}
                                                        </span>
                                                    </td>
                                                    <td className="py-4 px-4 text-right">
                                                        <button className="text-primary-blue text-xs font-bold hover:underline flex items-center justify-end gap-1 ml-auto">
                                                            View Details <FiChevronRight />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === "history" && (
                            <motion.div
                                key="history"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8"
                            >
                                <h3 className="text-2xl font-bold text-qblack mb-8">Sales History</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-gray-100">
                                                <th className="text-left py-4 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Product</th>
                                                <th className="text-left py-4 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Sold Price</th>
                                                <th className="text-left py-4 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Buyer</th>
                                                <th className="text-left py-4 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Date</th>
                                                <th className="text-left py-4 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {salesHistory.map((sale, index) => (
                                                <tr key={index} className="group hover:bg-gray-50/50 transition-colors">
                                                    <td className="py-5 px-4">
                                                        <p className="text-sm font-bold text-qblack">{sale.product}</p>
                                                    </td>
                                                    <td className="py-5 px-4">
                                                        <div className="flex items-center gap-1">
                                                            <span className="text-sm font-bold text-qblack">${sale.soldPrice}</span>
                                                            <span className="text-xs text-gray-400">(was ${sale.originalPrice})</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-5 px-4 text-sm font-medium text-qblack">{sale.buyer}</td>
                                                    <td className="py-5 px-4 text-sm text-gray-500">{sale.date}</td>
                                                    <td className="py-5 px-4">
                                                        <span className="inline-block px-4 py-1 rounded-full bg-gray-200 text-gray-600 text-xs font-bold capitalize">
                                                            {sale.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Upload Modal */}
                <AnimatePresence>
                    {showUploadForm && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[95vh] overflow-hidden border border-gray-100 flex flex-col md:flex-row"
                            >
                                {/* Sidebar Stepper */}
                                <div className="w-full md:w-80 bg-primary-blue p-10 border-r border-blue-600 flex flex-col">
                                    <div className="mb-12">
                                        <h2 className="text-3xl font-bold text-white">Add Product</h2>
                                        <p className="text-base text-blue-100 mt-2">List your item in 4 steps</p>
                                    </div>

                                    <div className="space-y-8 relative">
                                        {/* Connecting Line */}
                                        <div className="absolute left-6 top-5 bottom-5 w-0.5 bg-blue-400/30 -z-10"></div>

                                        {steps.map((step) => {
                                            const isActive = currentStep === step.id;
                                            const isCompleted = currentStep > step.id;

                                            return (
                                                <button
                                                    key={step.id}
                                                    onClick={() => setCurrentStep(step.id)}
                                                    className="flex items-start gap-5 relative w-full text-left group"
                                                >
                                                    <div
                                                        className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 z-10 ${isActive
                                                            ? "bg-white border-white text-primary-blue shadow-lg scale-110"
                                                            : isCompleted
                                                                ? "bg-green-400 border-green-400 text-white"
                                                                : "bg-blue-800/50 border-blue-400/30 text-blue-200 group-hover:border-white group-hover:text-white"
                                                            }`}
                                                    >
                                                        {isCompleted ? <FiCheck className="w-6 h-6" /> : <step.icon className="w-6 h-6" />}
                                                    </div>
                                                    <div className={`transition-opacity duration-300 pt-1 ${isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"}`}>
                                                        <p className={`font-bold text-base ${isActive ? "text-white" : "text-blue-200 group-hover:text-white"}`}>{step.title}</p>
                                                        <p className="text-sm text-blue-300 mt-0.5">{step.description}</p>
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Main Content */}
                                <div className="flex-1 flex flex-col h-full overflow-hidden bg-white">
                                    <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-white z-10">
                                        <div>
                                            <h3 className="text-2xl font-bold text-qblack">{steps[currentStep - 1].title}</h3>
                                            <p className="text-gray-500 text-sm mt-1">Please fill in the details below</p>
                                        </div>
                                        <button
                                            onClick={() => setShowUploadForm(false)}
                                            className="p-3 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-qblack"
                                        >
                                            <FiX className="w-6 h-6" />
                                        </button>
                                    </div>

                                    <div className="flex-1 overflow-y-auto p-10">
                                        <form onSubmit={handleSubmitProduct} className="h-full max-w-4xl mx-auto">
                                            {currentStep === 1 && (
                                                <motion.div
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    className="space-y-8"
                                                >
                                                    <InputCom
                                                        label="Product Name"
                                                        placeholder="e.g. UPPAbaby Vista V2 Stroller - Jake (Black/Carbon)"
                                                        name="name"
                                                        type="text"
                                                        value={productData.name}
                                                        inputHandler={handleInputChange}
                                                        inputWrapperClasses="border-b border-gray-200"
                                                        inputClasses="text-lg font-medium text-qblack placeholder:text-gray-300 px-0 bg-transparent h-auto pb-0 pt-3"
                                                        className="h-auto"
                                                        labelClasses="text-gray-500 text-sm font-medium"
                                                    />
                                                    <div className="grid grid-cols-2 gap-8">
                                                        <InputCom
                                                            label="Brand"
                                                            placeholder="e.g. UPPAbaby"
                                                            name="brand"
                                                            type="text"
                                                            value={productData.brand}
                                                            inputHandler={handleInputChange}
                                                            inputWrapperClasses="border-b border-gray-200"
                                                            inputClasses="text-lg font-medium text-qblack placeholder:text-gray-300 px-0 bg-transparent h-auto pb-0 pt-3"
                                                            className="h-auto"
                                                            labelClasses="text-gray-500 text-sm font-medium"
                                                        />
                                                        <InputCom
                                                            label="Model"
                                                            placeholder="e.g. Vista V2"
                                                            name="model"
                                                            type="text"
                                                            value={productData.model || ""}
                                                            inputHandler={handleInputChange}
                                                            inputWrapperClasses="border-b border-gray-200"
                                                            inputClasses="text-lg font-medium text-qblack placeholder:text-gray-300 px-0 bg-transparent h-auto pb-0 pt-3"
                                                            className="h-auto"
                                                            labelClasses="text-gray-500 text-sm font-medium"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-8">
                                                        <InputCom
                                                            label="Category"
                                                            placeholder="Select category"
                                                            name="category"
                                                            type="text"
                                                            value={productData.category}
                                                            inputHandler={handleInputChange}
                                                            inputWrapperClasses="border-b border-gray-200"
                                                            inputClasses="text-lg font-medium text-qblack placeholder:text-gray-300 px-0 bg-transparent h-auto pb-0 pt-3"
                                                            className="h-auto"
                                                            labelClasses="text-gray-500 text-sm font-medium"
                                                        />
                                                        <InputCom
                                                            label="Year of Purchase"
                                                            placeholder="e.g. 2023"
                                                            name="year"
                                                            type="number"
                                                            value={productData.year || ""}
                                                            inputHandler={handleInputChange}
                                                            inputWrapperClasses="border-b border-gray-200"
                                                            inputClasses="text-lg font-medium text-qblack placeholder:text-gray-300 px-0 bg-transparent h-auto pb-0 pt-3"
                                                            className="h-auto"
                                                            labelClasses="text-gray-500 text-sm font-medium"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-8">
                                                        <InputCom
                                                            label="Color"
                                                            placeholder="e.g. Black"
                                                            name="color"
                                                            type="text"
                                                            value={productData.color || ""}
                                                            inputHandler={handleInputChange}
                                                            inputWrapperClasses="border-b border-gray-200"
                                                            inputClasses="text-lg font-medium text-qblack placeholder:text-gray-300 px-0 bg-transparent h-auto pb-0 pt-3"
                                                            className="h-auto"
                                                            labelClasses="text-gray-500 text-sm font-medium"
                                                        />
                                                        <InputCom
                                                            label="Material (Optional)"
                                                            placeholder="e.g. Aluminum, Fabric"
                                                            name="material"
                                                            type="text"
                                                            value={productData.material || ""}
                                                            inputHandler={handleInputChange}
                                                            inputWrapperClasses="border-b border-gray-200"
                                                            inputClasses="text-lg font-medium text-qblack placeholder:text-gray-300 px-0 bg-transparent h-auto pb-0 pt-3"
                                                            className="h-auto"
                                                            labelClasses="text-gray-500 text-sm font-medium"
                                                        />
                                                    </div>
                                                </motion.div>
                                            )}

                                            {currentStep === 3 && (
                                                <motion.div
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    className="space-y-8"
                                                >


                                                    <div>
                                                        <label className="block text-base font-bold text-gray-700 mb-3">Features</label>
                                                        <div className="flex flex-wrap gap-3">
                                                            {["Original Box", "Manual Included", "Warranty", "Accessories", "Pet Free Home", "Smoke Free Home"].map((feature) => (
                                                                <button
                                                                    key={feature}
                                                                    type="button"
                                                                    onClick={() => {
                                                                        const currentFeatures = productData.features || [];
                                                                        const newFeatures = currentFeatures.includes(feature)
                                                                            ? currentFeatures.filter(f => f !== feature)
                                                                            : [...currentFeatures, feature];
                                                                        setProductData({ ...productData, features: newFeatures });
                                                                    }}
                                                                    className={`px-4 py-2 rounded-full border transition-all text-sm font-bold ${(productData.features || []).includes(feature)
                                                                        ? "bg-qblack text-white border-qblack"
                                                                        : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                                                                        }`}
                                                                >
                                                                    {feature}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="block text-gray-500 text-sm font-medium mb-1">Description</label>
                                                        <textarea
                                                            name="description"
                                                            value={productData.description}
                                                            onChange={handleInputChange}
                                                            rows="4"
                                                            className="w-full px-0 pt-3 pb-0 border-b border-gray-200 focus:border-primary-blue outline-none transition-all resize-none text-lg font-medium text-qblack placeholder:text-gray-300 bg-transparent"
                                                            placeholder="Describe your product features, condition, any flaws, and why you're selling it..."
                                                        ></textarea>
                                                    </div>

                                                    <div>
                                                        <label className="block text-gray-500 text-sm font-medium mb-1">Defects or Flaws (if any)</label>
                                                        <textarea
                                                            name="defects"
                                                            value={productData.defects || ""}
                                                            onChange={handleInputChange}
                                                            rows="2"
                                                            className="w-full px-0 pt-3 pb-0 border-b border-gray-200 focus:border-primary-blue outline-none transition-all resize-none text-lg font-medium text-qblack placeholder:text-gray-300 bg-transparent"
                                                            placeholder="Please be honest about any scratches, stains, or missing parts..."
                                                        ></textarea>
                                                    </div>
                                                </motion.div>
                                            )}

                                            {currentStep === 2 && (
                                                <motion.div
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    className="space-y-6"
                                                >
                                                    <div className="grid grid-cols-3 gap-6">
                                                        <input
                                                            ref={imageInputRef}
                                                            type="file"
                                                            multiple
                                                            accept="image/*"
                                                            onChange={handleImageUpload}
                                                            className="hidden"
                                                        />
                                                        {[0, 1, 2, 3].map((index) => (
                                                            <div
                                                                key={index}
                                                                onClick={() => !productImages[index] && imageInputRef.current.click()}
                                                                className={`relative rounded-3xl border-2 border-dashed transition-all flex flex-col items-center justify-center cursor-pointer overflow-hidden
                                                                    ${productImages[index] ? "border-transparent bg-gray-50" : "border-gray-200 hover:border-primary-blue hover:bg-blue-50/30"}
                                                                    ${index === 0 ? "col-span-3 h-64" : "col-span-1 h-40"}
                                                                `}
                                                            >
                                                                {productImages[index] ? (
                                                                    <>
                                                                        <img src={productImages[index]} alt={`Preview ${index}`} className="w-full h-full object-cover" />
                                                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                                                                        <button
                                                                            type="button"
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                removeImage(index);
                                                                            }}
                                                                            className="absolute top-3 right-3 bg-white text-red-500 p-2 rounded-full shadow-lg hover:bg-red-50 transition-colors z-10"
                                                                        >
                                                                            <FiX className="w-4 h-4" />
                                                                        </button>
                                                                        {index === 0 && (
                                                                            <div className="absolute top-3 left-3 bg-primary-blue text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-md z-10">
                                                                                Main Photo
                                                                            </div>
                                                                        )}
                                                                    </>
                                                                ) : (
                                                                    <div className="text-center p-4">
                                                                        <div className={`rounded-full bg-blue-50 text-primary-blue flex items-center justify-center mx-auto mb-2 ${index === 0 ? "w-16 h-16" : "w-10 h-10"}`}>
                                                                            {index === 0 ? <FiImage className="w-8 h-8" /> : <FiPlus className="w-5 h-5" />}
                                                                        </div>
                                                                        <p className={`font-bold text-qblack ${index === 0 ? "text-lg" : "text-sm"}`}>
                                                                            {index === 0 ? "Main Photo" : `Photo ${index + 1}`}
                                                                        </p>
                                                                        {index === 0 && <p className="text-gray-400 text-sm mt-1">Upload the main image</p>}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <p className="text-sm text-gray-400 text-center">
                                                        Upload 4 photos. The first one will be the main image.
                                                    </p>
                                                </motion.div>
                                            )}

                                            {currentStep === 4 && (
                                                <motion.div
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    className="space-y-8"
                                                >
                                                    <div>
                                                        <label className="block text-base font-bold text-gray-700 mb-3">Condition *</label>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            {[
                                                                { label: "New", desc: "Brand new, never used" },
                                                                { label: "Like New", desc: "Used once or twice, no visible wear" },
                                                                { label: "Good", desc: "Used with minor signs of wear" },
                                                                { label: "Fair", desc: "Used with noticeable wear but fully functional" }
                                                            ].map((item) => (
                                                                <div
                                                                    key={item.label}
                                                                    onClick={() => setProductData({ ...productData, condition: item.label })}
                                                                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all text-left ${productData.condition === item.label
                                                                        ? "border-primary-blue bg-blue-50 text-primary-blue shadow-md"
                                                                        : "border-gray-100 hover:border-gray-200 text-gray-600 hover:bg-gray-50"
                                                                        }`}
                                                                >
                                                                    <p className="font-bold text-lg text-qblack">{item.label}</p>
                                                                    <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-8">
                                                        <InputCom
                                                            label="Original Retail Price"
                                                            placeholder="$ 0.00"
                                                            name="originalPrice"
                                                            type="number"
                                                            value={productData.originalPrice || ""}
                                                            inputHandler={handleInputChange}
                                                            inputWrapperClasses="border border-gray-200 rounded-xl"
                                                            inputClasses="text-lg font-medium text-qblack placeholder:text-gray-300 px-4 bg-transparent h-12"
                                                            className="h-auto"
                                                            labelClasses="text-gray-700 text-base font-bold mb-2"
                                                        />
                                                        <InputCom
                                                            label="Your Asking Price *"
                                                            placeholder="$ 0.00"
                                                            name="price"
                                                            type="number"
                                                            value={productData.price}
                                                            inputHandler={handleInputChange}
                                                            inputWrapperClasses="border border-gray-200 rounded-xl"
                                                            inputClasses="text-lg font-medium text-qblack placeholder:text-gray-300 px-4 bg-transparent h-12"
                                                            className="h-auto"
                                                            labelClasses="text-gray-700 text-base font-bold mb-2"
                                                        />
                                                    </div>

                                                    <div className="space-y-4 pt-2">
                                                        <label className="flex items-center gap-3 cursor-pointer group">
                                                            <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${productData.acceptOffers ? "bg-qblack border-qblack text-white" : "border-gray-300 bg-white"}`}>
                                                                <input
                                                                    type="checkbox"
                                                                    className="hidden"
                                                                    checked={productData.acceptOffers || false}
                                                                    onChange={(e) => setProductData({ ...productData, acceptOffers: e.target.checked })}
                                                                />
                                                                {productData.acceptOffers && <FiCheck className="w-4 h-4" />}
                                                            </div>
                                                            <span className="text-base font-medium text-qblack group-hover:text-gray-600">Accept offers from buyers</span>
                                                        </label>

                                                        <label className="flex items-center gap-3 cursor-pointer group">
                                                            <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${productData.includeShipping ? "bg-qblack border-qblack text-white" : "border-gray-300 bg-white"}`}>
                                                                <input
                                                                    type="checkbox"
                                                                    className="hidden"
                                                                    checked={productData.includeShipping || false}
                                                                    onChange={(e) => setProductData({ ...productData, includeShipping: e.target.checked })}
                                                                />
                                                                {productData.includeShipping && <FiCheck className="w-4 h-4" />}
                                                            </div>
                                                            <span className="text-base font-medium text-qblack group-hover:text-gray-600">Include shipping in price</span>
                                                        </label>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </form>
                                    </div>

                                    <div className="p-8 border-t border-gray-100 flex justify-between bg-white z-10">
                                        <button
                                            type="button"
                                            onClick={currentStep === 1 ? () => setShowUploadForm(false) : handlePrevStep}
                                            className="px-8 py-3 rounded-xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-colors text-base"
                                        >
                                            {currentStep === 1 ? "Cancel" : "Back"}
                                        </button>

                                        {currentStep < 4 ? (
                                            <button
                                                type="button"
                                                onClick={handleNextStep}
                                                className="px-8 py-3 rounded-xl bg-qblack text-white font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-3 text-base"
                                            >
                                                Next Step <FiChevronRight />
                                            </button>
                                        ) : (
                                            <button
                                                onClick={handleSubmitProduct}
                                                className="px-8 py-3 rounded-xl bg-primary-blue text-white font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-3 text-base"
                                            >
                                                Publish Listing <FiCheck />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </Layout>
    );
}
