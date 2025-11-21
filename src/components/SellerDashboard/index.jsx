import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import {
    FiBell,
    FiBox,
    FiChevronDown,
    FiChevronRight,
    FiDollarSign,
    FiEye,
    FiFilter,
    FiGrid,
    FiList,
    FiPlus,
    FiSearch,
    FiStar,
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
    const imageInputRef = useRef(null);

    // Product form data
    const [productData, setProductData] = useState({
        name: "",
        category: "",
        price: "",
        stock: "",
        description: ""
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
    ];

    const tabs = [
        { id: "overview", label: "Overview" },
        { id: "listings", label: "My Listings" },
        { id: "history", label: "Sales History" }
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
                setProductImages(prev => [...prev, ...images].slice(0, 5));
            })
            .catch(error => console.error("Error uploading images:", error));
    };

    const removeImage = (index) => {
        setProductImages(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmitProduct = (e) => {
        e.preventDefault();
        console.log("Submitting product:", { ...productData, images: productImages });
        setProductData({ name: "", category: "", price: "", stock: "", description: "" });
        setProductImages([]);
        setShowUploadForm(false);
        alert("Product submitted for verification!");
    };

    // Stats
    const totalRevenue = products.reduce((acc, p) => acc + (p.price * (p.stock > 0 ? 5 : 20)), 0);
    const activeListings = products.filter(p => p.status === "Active").length;
    const totalViews = products.reduce((acc, p) => acc + p.views, 0);

    return (
        <Layout childrenClasses="pt-0 pb-0 bg-gray-50">
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
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-100"
                            >
                                <div className="p-8 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur z-10">
                                    <div>
                                        <h2 className="text-2xl font-bold text-qblack">Add New Product</h2>
                                        <p className="text-sm text-gray-500 mt-1">Fill in the details to list your item</p>
                                    </div>
                                    <button
                                        onClick={() => setShowUploadForm(false)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-qblack"
                                    >
                                        <FiX className="w-6 h-6" />
                                    </button>
                                </div>
                                <div className="p-8">
                                    <form onSubmit={handleSubmitProduct} className="space-y-6">
                                        <div className="grid grid-cols-2 gap-6">
                                            <InputCom
                                                label="Product Name"
                                                placeholder="e.g. UPPAbaby Vista V2"
                                                name="name"
                                                type="text"
                                                value={productData.name}
                                                inputHandler={handleInputChange}
                                                inputClasses="h-[50px] rounded-xl border-gray-200 focus:border-primary-blue"
                                            />
                                            <InputCom
                                                label="Category"
                                                placeholder="Select category"
                                                name="category"
                                                type="text"
                                                value={productData.category}
                                                inputHandler={handleInputChange}
                                                inputClasses="h-[50px] rounded-xl border-gray-200 focus:border-primary-blue"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-6">
                                            <InputCom
                                                label="Price ($)"
                                                placeholder="0.00"
                                                name="price"
                                                type="number"
                                                value={productData.price}
                                                inputHandler={handleInputChange}
                                                inputClasses="h-[50px] rounded-xl border-gray-200 focus:border-primary-blue"
                                            />
                                            <InputCom
                                                label="Stock"
                                                placeholder="0"
                                                name="stock"
                                                type="number"
                                                value={productData.stock}
                                                inputHandler={handleInputChange}
                                                inputClasses="h-[50px] rounded-xl border-gray-200 focus:border-primary-blue"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
                                            <textarea
                                                name="description"
                                                value={productData.description}
                                                onChange={handleInputChange}
                                                rows="4"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all resize-none text-sm"
                                                placeholder="Describe your product features, condition, etc..."
                                            ></textarea>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Product Images</label>
                                            <div
                                                onClick={() => imageInputRef.current.click()}
                                                className="border-2 border-dashed border-gray-200 rounded-2xl p-10 text-center hover:border-primary-blue hover:bg-blue-50/50 transition-all cursor-pointer group"
                                            >
                                                <input
                                                    ref={imageInputRef}
                                                    type="file"
                                                    multiple
                                                    accept="image/*"
                                                    onChange={handleImageUpload}
                                                    className="hidden"
                                                />
                                                <div className="w-16 h-16 bg-blue-50 text-primary-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                                    <FiUploadCloud className="w-8 h-8" />
                                                </div>
                                                <p className="text-base font-bold text-qblack">Click to upload images</p>
                                                <p className="text-sm text-gray-400 mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                            </div>

                                            {productImages.length > 0 && (
                                                <div className="grid grid-cols-5 gap-4 mt-6">
                                                    {productImages.map((img, index) => (
                                                        <div key={index} className="relative group">
                                                            <img
                                                                src={img}
                                                                alt={`Preview ${index}`}
                                                                className="w-full h-24 object-cover rounded-xl border border-gray-200 shadow-sm"
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    removeImage(index);
                                                                }}
                                                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all shadow-md hover:bg-red-600 transform hover:scale-110"
                                                            >
                                                                <FiX className="w-3 h-3" />
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex gap-4 pt-6 border-t border-gray-100">
                                            <button
                                                type="button"
                                                onClick={() => setShowUploadForm(false)}
                                                className="flex-1 px-6 py-3.5 rounded-xl border border-gray-200 text-gray-700 font-bold hover:bg-gray-50 transition-colors"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="flex-1 px-6 py-3.5 rounded-xl bg-qblack text-white font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                            >
                                                Create Listing
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </Layout>
    );
}
