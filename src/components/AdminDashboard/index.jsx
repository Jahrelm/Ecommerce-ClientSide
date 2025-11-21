import { useState } from "react";
import Layout from "../Partials/Layout";

const AdminDashboard = () => {
    const [activeSection, setActiveSection] = useState("overview");
    const [activeTab, setActiveTab] = useState("pending");
    const [selectedListing, setSelectedListing] = useState(null);

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

    const filteredListings = listings.filter(listing => listing.status === activeTab);

    const stats = {
        pending: listings.filter(l => l.status === "pending").length,
        approved: listings.filter(l => l.status === "approved").length,
        rejected: listings.filter(l => l.status === "rejected").length,
        total: listings.length
    };

    const menuItems = [
        { id: "overview", label: "Overview", icon: "📊" },
        { id: "listings", label: "Product Listings", icon: "📦" },
        { id: "orders", label: "Orders", icon: "🛒" },
        { id: "users", label: "Users", icon: "👥" },
        { id: "sellers", label: "Sellers", icon: "🏪" },
        { id: "analytics", label: "Analytics", icon: "📈" },
        { id: "settings", label: "Settings", icon: "⚙️" }
    ];

    return (
        <Layout>
            <div className="admin-dashboard-wrapper w-full bg-gray-50 min-h-screen">
                {/* Top Header Bar */}
                <div className="bg-gradient-to-r from-primary-blue to-blue-500 -mt-[30px] mb-6">
                    <div className="container-x mx-auto">
                        <div className="flex items-center justify-between py-4">
                            <h1 className="text-2xl font-bold text-white">
                                Admin
                            </h1>
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-white/80">5 Aug, 2020</span>
                                <button className="p-2 hover:bg-white/10 rounded-lg text-white">🔔</button>
                                <button className="p-2 hover:bg-white/10 rounded-lg text-white">👤</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-x mx-auto pb-10">
                    {/* Sidebar + Main Content Layout */}
                    <div className="flex gap-6">
                        {/* Sidebar */}
                        <div className="w-56 flex-shrink-0">
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden sticky top-4">
                                <nav className="py-2">
                                    <button
                                        onClick={() => setActiveSection("overview")}
                                        className={`w-full flex items-center gap-3 px-6 py-3.5 text-left transition-all ${activeSection === "overview"
                                            ? "bg-primary-blue text-white"
                                            : "text-gray-700 hover:bg-gray-50"
                                            }`}
                                    >
                                        <span className="text-lg">🏠</span>
                                        <span className="font-medium text-sm">Dashboard</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveSection("listings")}
                                        className={`w-full flex items-center gap-3 px-6 py-3.5 text-left transition-all ${activeSection === "listings"
                                            ? "bg-primary-blue text-white"
                                            : "text-gray-700 hover:bg-gray-50"
                                            }`}
                                    >
                                        <span className="text-lg">📦</span>
                                        <span className="font-medium text-sm">Products</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveSection("category")}
                                        className={`w-full flex items-center gap-3 px-6 py-3.5 text-left transition-all ${activeSection === "category"
                                            ? "bg-primary-blue text-white"
                                            : "text-gray-700 hover:bg-gray-50"
                                            }`}
                                    >
                                        <span className="text-lg">📂</span>
                                        <span className="font-medium text-sm">Category</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveSection("users")}
                                        className={`w-full flex items-center gap-3 px-6 py-3.5 text-left transition-all ${activeSection === "users"
                                            ? "bg-primary-blue text-white"
                                            : "text-gray-700 hover:bg-gray-50"
                                            }`}
                                    >
                                        <span className="text-lg">👥</span>
                                        <span className="font-medium text-sm">Customers</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveSection("sells")}
                                        className={`w-full flex items-center gap-3 px-6 py-3.5 text-left transition-all ${activeSection === "sells"
                                            ? "bg-primary-blue text-white"
                                            : "text-gray-700 hover:bg-gray-50"
                                            }`}
                                    >
                                        <span className="text-lg">💰</span>
                                        <span className="font-medium text-sm">Sells</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveSection("coupons")}
                                        className={`w-full flex items-center gap-3 px-6 py-3.5 text-left transition-all ${activeSection === "coupons"
                                            ? "bg-primary-blue text-white"
                                            : "text-gray-700 hover:bg-gray-50"
                                            }`}
                                    >
                                        <span className="text-lg">🎟️</span>
                                        <span className="font-medium text-sm">Coupons</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveSection("settings")}
                                        className={`w-full flex items-center gap-3 px-6 py-3.5 text-left transition-all ${activeSection === "settings"
                                            ? "bg-primary-blue text-white"
                                            : "text-gray-700 hover:bg-gray-50"
                                            }`}
                                    >
                                        <span className="text-lg">⚙️</span>
                                        <span className="font-medium text-sm">Settings</span>
                                    </button>
                                </nav>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex-1">
                            {/* Overview Section */}
                            {activeSection === "overview" && (
                                <div>
                                    {/* Stats Cards */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
                                        {/* Total Sales Card */}
                                        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                                                    <span className="text-2xl">💰</span>
                                                </div>
                                                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                                    <span className="text-lg">📄</span>
                                                </div>
                                            </div>
                                            <div className="text-xs text-gray-500 mb-1">Total Sales</div>
                                            <div className="text-xs text-gray-400 mb-2">Last 30 days</div>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-sm text-gray-500">$</span>
                                                <span className="text-2xl font-bold text-gray-900">76,96,432</span>
                                            </div>
                                        </div>

                                        {/* Total Orders Card */}
                                        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                                                    <span className="text-2xl">📋</span>
                                                </div>
                                                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                                    <span className="text-lg">📄</span>
                                                </div>
                                            </div>
                                            <div className="text-xs text-gray-500 mb-1">Total Order</div>
                                            <div className="text-xs text-gray-400 mb-2">Last 30 days</div>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-sm text-success-green">↑</span>
                                                <span className="text-2xl font-bold text-gray-900">1645</span>
                                            </div>
                                        </div>

                                        {/* Total Customers Card */}
                                        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                                                    <span className="text-2xl">👥</span>
                                                </div>
                                                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                                                    <span className="text-lg">👤</span>
                                                </div>
                                            </div>
                                            <div className="text-xs text-gray-500 mb-1">Total Customer</div>
                                            <div className="text-xs text-gray-400 mb-2">Last 30 days</div>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-sm text-success-green">↑</span>
                                                <span className="text-2xl font-bold text-gray-900">14,634</span>
                                            </div>
                                        </div>

                                        {/* Total Products Card */}
                                        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                                                    <span className="text-2xl">📦</span>
                                                </div>
                                                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                                                    <span className="text-lg">🎁</span>
                                                </div>
                                            </div>
                                            <div className="text-xs text-gray-500 mb-1">Total Products</div>
                                            <div className="text-xs text-gray-400 mb-2">Last 30 days</div>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-sm text-success-green">↑</span>
                                                <span className="text-2xl font-bold text-gray-900">254</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Recent Orders & Top Listings */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                        {/* Recent Orders */}
                                        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/50 hover:-translate-y-0.5 transition-all duration-300">
                                            <div className="flex items-center justify-between mb-6">
                                                <h3 className="text-lg font-bold text-qblack">Recent Orders</h3>
                                                <button className="text-xs text-primary-blue hover:text-blue-700 font-semibold transition-colors">View All →</button>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-2xl hover:from-blue-100 transition-all border border-blue-100">
                                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-xl shadow-md">
                                                        🍼
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="font-bold text-gray-900 truncate">Baby Bottle Set</p>
                                                        <p className="text-xs text-gray-500">Order #8641573</p>
                                                    </div>
                                                    <span className="px-3 py-1.5 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full whitespace-nowrap">Pending</span>
                                                </div>
                                                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-transparent rounded-2xl hover:from-purple-100 transition-all border border-purple-100">
                                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center text-xl shadow-md">
                                                        📱
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="font-bold text-gray-900 truncate">Baby Monitor</p>
                                                        <p className="text-xs text-gray-500">Order #2457821</p>
                                                    </div>
                                                    <span className="px-3 py-1.5 bg-red-100 text-red-700 text-xs font-bold rounded-full whitespace-nowrap">Cancelled</span>
                                                </div>
                                                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-transparent rounded-2xl hover:from-green-100 transition-all border border-green-100">
                                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center text-xl shadow-md">
                                                        🎧
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="font-bold text-gray-900 truncate">Sound Machine</p>
                                                        <p className="text-xs text-gray-500">Order #1024184</p>
                                                    </div>
                                                    <span className="px-3 py-1.5 bg-green-100 text-green-700 text-xs font-bold rounded-full whitespace-nowrap">Shipped</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Top Selling Products */}
                                        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/50 hover:-translate-y-0.5 transition-all duration-300">
                                            <div className="flex items-center justify-between mb-6">
                                                <h3 className="text-lg font-bold text-qblack">Top Selling Products</h3>
                                                <button className="text-xs text-primary-blue hover:text-blue-700 font-semibold transition-colors">View All →</button>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-transparent rounded-2xl hover:from-orange-100 transition-all border border-orange-100">
                                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-xl shadow-md">
                                                        🚼
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="font-bold text-gray-900 truncate">UPPAbaby Stroller</p>
                                                        <p className="text-xs text-gray-500">ID: 1261380</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-lg font-bold text-gray-900">128</p>
                                                        <p className="text-xs text-gray-500">Sales</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-2xl hover:from-blue-100 transition-all border border-blue-100">
                                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-xl shadow-md">
                                                        🎒
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="font-bold text-gray-900 truncate">Diaper Backpack</p>
                                                        <p className="text-xs text-gray-500">ID: 1261318</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-lg font-bold text-gray-900">401</p>
                                                        <p className="text-xs text-gray-500">Sales</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-transparent rounded-2xl hover:from-green-100 transition-all border border-green-100">
                                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center text-xl shadow-md">
                                                        🍼
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="font-bold text-gray-900 truncate">Baby Bottles</p>
                                                        <p className="text-xs text-gray-500">ID: 8441573</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-lg font-bold text-gray-900">1K+</p>
                                                        <p className="text-xs text-gray-500">Sales</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Listings Section */}
                            {activeSection === "listings" && (
                                <div>
                                    <h2 className="text-2xl font-bold text-qblack mb-6">Product Listings</h2>

                                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
                                        {/* Tabs */}
                                        <div className="px-6 pt-6 pb-4 border-b border-gray-200">
                                            <div className="flex gap-6">
                                                <button
                                                    onClick={() => setActiveTab("pending")}
                                                    className={`pb-3 px-1 font-semibold text-sm transition-all border-b-2 ${activeTab === "pending"
                                                        ? "border-qblack text-qblack"
                                                        : "border-transparent text-gray-500 hover:text-gray-700"
                                                        }`}
                                                >
                                                    Pending ({stats.pending})
                                                </button>
                                                <button
                                                    onClick={() => setActiveTab("approved")}
                                                    className={`pb-3 px-1 font-semibold text-sm transition-all border-b-2 ${activeTab === "approved"
                                                        ? "border-qblack text-qblack"
                                                        : "border-transparent text-gray-500 hover:text-gray-700"
                                                        }`}
                                                >
                                                    Approved ({stats.approved})
                                                </button>
                                                <button
                                                    onClick={() => setActiveTab("rejected")}
                                                    className={`pb-3 px-1 font-semibold text-sm transition-all border-b-2 ${activeTab === "rejected"
                                                        ? "border-qblack text-qblack"
                                                        : "border-transparent text-gray-500 hover:text-gray-700"
                                                        }`}
                                                >
                                                    Rejected ({stats.rejected})
                                                </button>
                                            </div>
                                        </div>

                                        {/* Listings Table */}
                                        <div className="overflow-x-auto">
                                            <table className="w-full">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Product</th>
                                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Seller</th>
                                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
                                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Condition</th>
                                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Price</th>
                                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Submitted</th>
                                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    {filteredListings.length === 0 ? (
                                                        <tr>
                                                            <td colSpan="7" className="px-6 py-12 text-center text-gray-500">
                                                                No {activeTab} listings
                                                            </td>
                                                        </tr>
                                                    ) : (
                                                        filteredListings.map((listing) => (
                                                            <tr key={listing.id} className="hover:bg-gray-50 transition-colors">
                                                                <td className="px-6 py-5">
                                                                    <div className="font-semibold text-gray-900">{listing.title}</div>
                                                                    <div className="text-sm text-gray-500 capitalize mt-0.5">{listing.brand}</div>
                                                                </td>
                                                                <td className="px-6 py-5">
                                                                    <div className="text-sm text-gray-900">{listing.seller}</div>
                                                                    <div className="text-xs text-gray-500 mt-0.5">{listing.sellerEmail}</div>
                                                                </td>
                                                                <td className="px-6 py-5">
                                                                    <span className="text-sm text-gray-700 capitalize">{listing.category}</span>
                                                                </td>
                                                                <td className="px-6 py-5">
                                                                    <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-md bg-blue-50 text-blue-700 capitalize">
                                                                        {listing.condition}
                                                                    </span>
                                                                </td>
                                                                <td className="px-6 py-5">
                                                                    <div className="text-sm font-bold text-gray-900">${listing.askingPrice}</div>
                                                                    {listing.originalPrice && (
                                                                        <div className="text-xs text-gray-400 line-through mt-0.5">${listing.originalPrice}</div>
                                                                    )}
                                                                </td>
                                                                <td className="px-6 py-5">
                                                                    <div className="text-sm text-gray-500">{listing.submittedDate}</div>
                                                                </td>
                                                                <td className="px-6 py-5">
                                                                    <button
                                                                        onClick={() => setSelectedListing(listing)}
                                                                        className="text-sm text-primary-blue hover:text-blue-700 font-semibold hover:underline"
                                                                    >
                                                                        View Details
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Orders Section */}
                            {activeSection === "orders" && (
                                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                    <h3 className="text-2xl font-bold text-qblack mb-4">Order Management</h3>
                                    <p className="text-gray-600">Order management interface coming soon...</p>
                                </div>
                            )}

                            {/* Users Section */}
                            {activeSection === "users" && (
                                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                    <h3 className="text-2xl font-bold text-qblack mb-4">User Management</h3>
                                    <p className="text-gray-600">User management interface coming soon...</p>
                                </div>
                            )}

                            {/* Sellers Section */}
                            {activeSection === "sellers" && (
                                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                    <h3 className="text-2xl font-bold text-qblack mb-4">Seller Management</h3>
                                    <p className="text-gray-600">Seller management interface coming soon...</p>
                                </div>
                            )}

                            {/* Analytics Section */}
                            {activeSection === "analytics" && (
                                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                    <h3 className="text-2xl font-bold text-qblack mb-4">Analytics & Reports</h3>
                                    <p className="text-gray-600">Analytics dashboard coming soon...</p>
                                </div>
                            )}

                            {/* Settings Section */}
                            {activeSection === "settings" && (
                                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                    <h3 className="text-2xl font-bold text-qblack mb-4">Platform Settings</h3>
                                    <p className="text-gray-600">Settings interface coming soon...</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Detail Modal */}
                    {selectedListing && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                            <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                                {/* Modal Header */}
                                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                                    <h2 className="text-xl font-semibold text-gray-900">Listing Details</h2>
                                    <button
                                        onClick={() => setSelectedListing(null)}
                                        className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
                                    >
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Modal Content */}
                                <div className="px-6 py-6 space-y-6">
                                    {/* Product Info */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">{selectedListing.title}</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <div className="text-sm text-gray-600 mb-1">Brand</div>
                                                <div className="text-base font-medium text-gray-900 capitalize">{selectedListing.brand}</div>
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-600 mb-1">Category</div>
                                                <div className="text-base font-medium text-gray-900 capitalize">{selectedListing.category}</div>
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-600 mb-1">Condition</div>
                                                <div className="text-base font-medium text-gray-900 capitalize">{selectedListing.condition}</div>
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-600 mb-1">Age Range</div>
                                                <div className="text-base font-medium text-gray-900">{selectedListing.ageRange}</div>
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-600 mb-1">Original Price</div>
                                                <div className="text-base font-medium text-gray-900">${selectedListing.originalPrice}</div>
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-600 mb-1">Asking Price</div>
                                                <div className="text-xl font-bold text-primary-blue">${selectedListing.askingPrice}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <div className="text-sm text-gray-600 mb-2">Description</div>
                                        <p className="text-sm text-gray-700 leading-relaxed">{selectedListing.description}</p>
                                    </div>

                                    {/* Seller Info */}
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <div className="text-sm font-semibold text-gray-900 mb-3">Seller Information</div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <div className="text-xs text-gray-600 mb-1">Name</div>
                                                <div className="text-sm font-medium text-gray-900">{selectedListing.seller}</div>
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-600 mb-1">Email</div>
                                                <div className="text-sm font-medium text-gray-900">{selectedListing.sellerEmail}</div>
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-600 mb-1">Submitted Date</div>
                                                <div className="text-sm font-medium text-gray-900">{selectedListing.submittedDate}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Photos */}
                                    <div>
                                        <div className="text-sm text-gray-600 mb-2">Photos</div>
                                        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                                            <div className="text-center">
                                                <svg className="w-12 h-12 text-gray-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <span className="text-sm text-gray-400">No photos uploaded</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Modal Actions */}
                                {selectedListing.status === "pending" && (
                                    <div className="flex gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50">
                                        <button
                                            onClick={() => handleReject(selectedListing.id)}
                                            className="flex-1 py-3 border border-red-300 text-red-700 font-medium rounded-lg hover:bg-red-50 transition-colors"
                                        >
                                            Reject Listing
                                        </button>
                                        <button
                                            onClick={() => handleApprove(selectedListing.id)}
                                            className="flex-1 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                                        >
                                            Approve Listing
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default AdminDashboard;
