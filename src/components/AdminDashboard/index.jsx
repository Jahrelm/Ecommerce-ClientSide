import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
    FiBell,
    FiBox,
    FiDollarSign,
    FiSettings,
    FiShoppingBag,
    FiUsers,
    FiX
} from "react-icons/fi";
import Layout from "../Partials/Layout";

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const [selectedListing, setSelectedListing] = useState(null);
    const [listingStatusTab, setListingStatusTab] = useState("pending");

    // Mock data - replace with actual API calls
    const [listings, setListings] = useState([
        {
            id: 1,
            title: "UPPAbaby Vista V2 Stroller",
            brand: "uppababy",
            category: "stroller",
            condition: "like-new",
            askingPrice: 450,
            originalPrice: 900,
            seller: "John Doe",
            sellerEmail: "john@example.com",
            submittedDate: "2024-11-15",
            status: "pending",
            description: "Gently used stroller in excellent condition. Includes all accessories.",
            photos: [],
            ageRange: "0-4 years"
        },
        {
            id: 2,
            title: "Chicco KeyFit 30 Car Seat",
            brand: "chicco",
            category: "car-seat",
            condition: "good",
            askingPrice: 120,
            originalPrice: 200,
            seller: "Jane Smith",
            sellerEmail: "jane@example.com",
            submittedDate: "2024-11-16",
            status: "pending",
            description: "Clean car seat, never in an accident. Expires in 2026.",
            photos: [],
            ageRange: "0-2 years"
        }
    ]);

    const handleApprove = (listingId) => {
        setListings(listings.map(listing =>
            listing.id === listingId ? { ...listing, status: "approved" } : listing
        ));
        setSelectedListing(null);
    };

    const handleReject = (listingId) => {
        setListings(listings.map(listing =>
            listing.id === listingId ? { ...listing, status: "rejected" } : listing
        ));
        setSelectedListing(null);
    };

    const filteredListings = listings.filter(listing => listing.status === listingStatusTab);

    const stats = {
        pending: listings.filter(l => l.status === "pending").length,
        approved: listings.filter(l => l.status === "approved").length,
        rejected: listings.filter(l => l.status === "rejected").length,
        total: listings.length
    };

    const tabs = [
        { id: "overview", label: "Dashboard" },
        { id: "listings", label: "Products" },
        { id: "category", label: "Category" },
        { id: "users", label: "Customers" },
        { id: "sells", label: "Sells" },
        { id: "coupons", label: "Coupons" },
        { id: "settings", label: "Settings" }
    ];

    return (
        <Layout childrenClasses="pt-0 pb-0 bg-gray-50" discountBannerProps={{ compact: true }} footerProps={{ compact: true }}>
            <div className="min-h-screen pb-12">
                {/* Blue Header Banner */}
                <div className="bg-primary-blue w-full h-[280px] relative">
                    <div className="container-x mx-auto pt-12">
                        <div className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-xs font-medium mb-4 backdrop-blur-sm">
                            ADMIN PORTAL
                        </div>
                        <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
                        <p className="text-blue-100 text-lg">Manage products, orders, customers, and platform settings.</p>
                    </div>
                </div>

                <div className="container-x mx-auto -mt-24 relative z-10 space-y-8">
                    {/* Welcome Card */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg shadow-blue-900/5 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-purple-200">
                                A
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-qblack flex items-center gap-2">
                                    Hello, Admin! <span className="text-2xl">👋</span>
                                </h2>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                    <p className="text-gray-500 text-sm">System is running smoothly</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl text-gray-600 font-medium hover:bg-gray-50 transition-colors shadow-sm">
                                <FiBell className="w-5 h-5" />
                                Notifications
                            </button>
                        </div>
                    </div>

                    {/* Navigation Tabs */}
                    <div className="flex items-center gap-2 bg-white p-2 rounded-2xl w-fit shadow-sm border border-gray-100 overflow-x-auto max-w-full">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 whitespace-nowrap ${activeTab === tab.id
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
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {/* Total Sales */}
                                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                            <FiDollarSign className="w-24 h-24 text-orange-500 transform rotate-12" />
                                        </div>
                                        <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-orange-200">
                                            <FiDollarSign className="w-6 h-6" />
                                        </div>
                                        <div className="relative z-10">
                                            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Total Sales</p>
                                            <h3 className="text-3xl font-black text-qblack mt-1">$76.9k</h3>
                                            <p className="text-xs text-gray-400 mt-1">Last 30 days</p>
                                        </div>
                                    </div>

                                    {/* Total Orders */}
                                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                            <FiShoppingBag className="w-24 h-24 text-blue-500 transform rotate-12" />
                                        </div>
                                        <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-200">
                                            <FiShoppingBag className="w-6 h-6" />
                                        </div>
                                        <div className="relative z-10">
                                            <span className="inline-block px-2 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-lg mb-2">↑ 12%</span>
                                            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Total Orders</p>
                                            <h3 className="text-3xl font-black text-qblack mt-1">1,645</h3>
                                        </div>
                                    </div>

                                    {/* Total Customers */}
                                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                            <FiUsers className="w-24 h-24 text-purple-500 transform rotate-12" />
                                        </div>
                                        <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-purple-200">
                                            <FiUsers className="w-6 h-6" />
                                        </div>
                                        <div className="relative z-10">
                                            <span className="inline-block px-2 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-lg mb-2">↑ 5%</span>
                                            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Total Customers</p>
                                            <h3 className="text-3xl font-black text-qblack mt-1">14.6k</h3>
                                        </div>
                                    </div>

                                    {/* Total Products */}
                                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                            <FiBox className="w-24 h-24 text-green-500 transform rotate-12" />
                                        </div>
                                        <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-green-200">
                                            <FiBox className="w-6 h-6" />
                                        </div>
                                        <div className="relative z-10">
                                            <span className="inline-block px-2 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-lg mb-2">↑ 8%</span>
                                            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Total Products</p>
                                            <h3 className="text-3xl font-black text-qblack mt-1">254</h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Recent Orders & Top Products Grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="text-xl font-bold text-qblack">Recent Orders</h3>
                                            <button className="text-sm text-primary-blue font-bold hover:underline">View All</button>
                                        </div>
                                        <div className="space-y-4">
                                            {[
                                                { name: "Baby Bottle Set", id: "#8641573", status: "Pending", color: "bg-yellow-100 text-yellow-700", icon: "🍼", iconBg: "bg-blue-100 text-blue-600" },
                                                { name: "Baby Monitor", id: "#2457821", status: "Cancelled", color: "bg-red-100 text-red-700", icon: "📱", iconBg: "bg-purple-100 text-purple-600" },
                                                { name: "Sound Machine", id: "#1024184", status: "Shipped", color: "bg-green-100 text-green-700", icon: "🎧", iconBg: "bg-green-100 text-green-600" }
                                            ].map((order, i) => (
                                                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-primary-blue/30 hover:bg-blue-50/30 transition-all">
                                                    <div className={`w-12 h-12 rounded-xl ${order.iconBg} flex items-center justify-center text-xl`}>
                                                        {order.icon}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-bold text-qblack">{order.name}</h4>
                                                        <p className="text-xs text-gray-500">Order {order.id}</p>
                                                    </div>
                                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${order.color}`}>
                                                        {order.status}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="text-xl font-bold text-qblack">Top Selling Products</h3>
                                            <button className="text-sm text-primary-blue font-bold hover:underline">View All</button>
                                        </div>
                                        <div className="space-y-4">
                                            {[
                                                { name: "UPPAbaby Stroller", id: "1261380", sales: "128", icon: "🚼", iconBg: "bg-orange-100 text-orange-600" },
                                                { name: "Diaper Backpack", id: "1261318", sales: "401", icon: "🎒", iconBg: "bg-blue-100 text-blue-600" },
                                                { name: "Baby Bottles", id: "8441573", sales: "1K+", icon: "🍼", iconBg: "bg-green-100 text-green-600" }
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-primary-blue/30 hover:bg-blue-50/30 transition-all">
                                                    <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center text-xl`}>
                                                        {item.icon}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-bold text-qblack">{item.name}</h4>
                                                        <p className="text-xs text-gray-500">ID: {item.id}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="font-bold text-qblack">{item.sales}</p>
                                                        <p className="text-xs text-gray-500">Sales</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === "listings" && (
                            <motion.div
                                key="listings"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                                    <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <h2 className="text-xl font-bold text-qblack">Product Listings</h2>
                                        <div className="flex gap-2 bg-gray-50 p-1 rounded-xl">
                                            {["pending", "approved", "rejected"].map(status => (
                                                <button
                                                    key={status}
                                                    onClick={() => setListingStatusTab(status)}
                                                    className={`px-4 py-2 rounded-lg text-xs font-bold capitalize transition-all ${listingStatusTab === status
                                                        ? "bg-white text-qblack shadow-sm"
                                                        : "text-gray-500 hover:text-qblack"
                                                        }`}
                                                >
                                                    {status} ({stats[status]})
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead className="bg-gray-50/50">
                                                <tr>
                                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Product</th>
                                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Seller</th>
                                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Category</th>
                                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Condition</th>
                                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Price</th>
                                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                                                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-400 uppercase tracking-wider">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                {filteredListings.length === 0 ? (
                                                    <tr>
                                                        <td colSpan="7" className="px-6 py-12 text-center text-gray-500">
                                                            No {listingStatusTab} listings found
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    filteredListings.map((listing) => (
                                                        <tr key={listing.id} className="hover:bg-gray-50/50 transition-colors">
                                                            <td className="px-6 py-4">
                                                                <div className="font-bold text-qblack text-sm">{listing.title}</div>
                                                                <div className="text-xs text-gray-500 capitalize mt-1">{listing.brand}</div>
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <div className="text-sm text-gray-900">{listing.seller}</div>
                                                                <div className="text-xs text-gray-500 mt-0.5">{listing.sellerEmail}</div>
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <span className="text-sm text-gray-600 capitalize">{listing.category}</span>
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <span className="inline-flex px-2.5 py-1 text-xs font-bold rounded-lg bg-blue-50 text-blue-600 capitalize">
                                                                    {listing.condition}
                                                                </span>
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <div className="text-sm font-bold text-qblack">${listing.askingPrice}</div>
                                                                {listing.originalPrice && (
                                                                    <div className="text-xs text-gray-400 line-through mt-0.5">${listing.originalPrice}</div>
                                                                )}
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <span className={`inline-flex px-2.5 py-1 text-xs font-bold rounded-lg capitalize ${listing.status === 'approved' ? 'bg-green-50 text-green-600' :
                                                                    listing.status === 'rejected' ? 'bg-red-50 text-red-600' :
                                                                        'bg-yellow-50 text-yellow-600'
                                                                    }`}>
                                                                    {listing.status}
                                                                </span>
                                                            </td>
                                                            <td className="px-6 py-4 text-right">
                                                                <button
                                                                    onClick={() => setSelectedListing(listing)}
                                                                    className="text-sm text-primary-blue font-bold hover:text-blue-700 hover:underline"
                                                                >
                                                                    Review
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Placeholder for other tabs */}
                        {["category", "users", "sells", "coupons", "settings"].includes(activeTab) && (
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm"
                            >
                                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <FiSettings className="w-8 h-8 text-gray-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-qblack mb-2 capitalize">{activeTab} Management</h3>
                                <p className="text-gray-500">This module is currently under development.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Detail Modal */}
                <AnimatePresence>
                    {selectedListing && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                            onClick={() => setSelectedListing(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                            >
                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <h2 className="text-2xl font-bold text-qblack">Review Listing</h2>
                                            <p className="text-gray-500 text-sm">Review product details before approving</p>
                                        </div>
                                        <button
                                            onClick={() => setSelectedListing(null)}
                                            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                                        >
                                            <FiX className="w-5 h-5 text-gray-500" />
                                        </button>
                                    </div>

                                    <div className="space-y-8">
                                        {/* Product Summary */}
                                        <div className="flex gap-6">
                                            <div className="w-32 h-32 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                                <FiBox className="w-10 h-10 text-gray-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-qblack mb-2">{selectedListing.title}</h3>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg capitalize">{selectedListing.condition}</span>
                                                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-lg capitalize">{selectedListing.category}</span>
                                                </div>
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-2xl font-black text-primary-blue">${selectedListing.askingPrice}</span>
                                                    {selectedListing.originalPrice && (
                                                        <span className="text-sm text-gray-400 line-through">${selectedListing.originalPrice}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Details Grid */}
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="bg-gray-50 p-4 rounded-2xl">
                                                <p className="text-xs text-gray-500 font-bold uppercase mb-1">Brand</p>
                                                <p className="font-bold text-qblack capitalize">{selectedListing.brand}</p>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-2xl">
                                                <p className="text-xs text-gray-500 font-bold uppercase mb-1">Age Range</p>
                                                <p className="font-bold text-qblack">{selectedListing.ageRange}</p>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div>
                                            <h4 className="font-bold text-qblack mb-2">Description</h4>
                                            <p className="text-gray-600 leading-relaxed text-sm">{selectedListing.description}</p>
                                        </div>

                                        {/* Seller Info */}
                                        <div className="border-t border-gray-100 pt-6">
                                            <h4 className="font-bold text-qblack mb-4">Seller Information</h4>
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-lg">
                                                    {selectedListing.seller[0]}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-qblack">{selectedListing.seller}</p>
                                                    <p className="text-sm text-gray-500">{selectedListing.sellerEmail}</p>
                                                </div>
                                                <div className="ml-auto text-right">
                                                    <p className="text-xs text-gray-400">Submitted</p>
                                                    <p className="text-sm font-bold text-qblack">{selectedListing.submittedDate}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        {selectedListing.status === "pending" && (
                                            <div className="grid grid-cols-2 gap-4 pt-4">
                                                <button
                                                    onClick={() => handleReject(selectedListing.id)}
                                                    className="py-4 rounded-xl border-2 border-red-100 text-red-600 font-bold hover:bg-red-50 transition-colors"
                                                >
                                                    Reject Listing
                                                </button>
                                                <button
                                                    onClick={() => handleApprove(selectedListing.id)}
                                                    className="py-4 rounded-xl bg-primary-blue text-white font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                                                >
                                                    Approve Listing
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </Layout>
    );
};

export default AdminDashboard;
