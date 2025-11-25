import { Link } from "react-router-dom";
import IcoCart from "../icons/IcoCart";
import IcoLove from "../icons/IcoLove";
import IcoPeople from "../icons/IcoPeople";

export default function Dashboard({ userData }) {
    return (
        <div className="dashboard-wrapper w-full">
            {/* Welcome Section */}
            <div className="w-full bg-primary-blue rounded-xl p-8 mb-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full -ml-10 -mb-10 blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
                <div className="relative z-10">
                    <h1 className="text-3xl font-bold text-white mb-2">
                        Hello, {userData?.name || userData?.fullName || "User"}!
                    </h1>
                    <p className="text-blue-100 text-lg">
                        Welcome back to your profile dashboard. Here's what's happening with your account today.
                    </p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Orders Card */}
                <Link to="/profile#order" className="block group">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-all duration-300 group-hover:scale-110"></div>
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary-blue mb-4 group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                                <IcoCart />
                            </div>
                            <div>
                                <p className="text-gray-500 font-medium mb-1">Total Orders</p>
                                <h3 className="text-3xl font-bold text-qblack group-hover:text-primary-blue transition-colors">
                                    {userData?.orders?.length || 0}
                                </h3>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Wishlist Card */}
                <Link to="/profile#wishlist" className="block group">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-4 -mt-4 transition-all duration-300 group-hover:scale-110"></div>
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                                <IcoLove />
                            </div>
                            <div>
                                <p className="text-gray-500 font-medium mb-1">Wishlist Items</p>
                                <h3 className="text-3xl font-bold text-qblack group-hover:text-red-500 transition-colors">
                                    {userData?.wishlist?.length || 0}
                                </h3>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Profile Card */}
                <Link to="/profile#profile" className="block group">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-24 h-24 bg-purple-50 rounded-bl-full -mr-4 -mt-4 transition-all duration-300 group-hover:scale-110"></div>
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                <IcoPeople />
                            </div>
                            <div>
                                <p className="text-gray-500 font-medium mb-1">Account Status</p>
                                <h3 className="text-xl font-bold text-qblack group-hover:text-purple-600 transition-colors">
                                    {userData?.enabled ? "Active" : "Inactive"}
                                </h3>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Account Info Summary */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-qblack">Account Information</h2>
                    <Link to="/profile#profile" className="text-primary-blue font-medium hover:underline">
                        Edit Profile
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 mr-4 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Full Name</p>
                                <p className="text-qblack font-medium">{userData?.name || userData?.fullName || "Not provided"}</p>
                            </div>
                        </div>

                        <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 mr-4 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Email Address</p>
                                <p className="text-qblack font-medium">{userData?.email || userData?.username || "Not provided"}</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 mr-4 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Phone Number</p>
                                <p className="text-qblack font-medium">{userData?.phone || userData?.phoneNumber || "Not provided"}</p>
                            </div>
                        </div>

                        <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 mr-4 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Location</p>
                                <p className="text-qblack font-medium">
                                    {userData?.city ? `${userData.city}, ` : ""}
                                    {userData?.country || "Not provided"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
