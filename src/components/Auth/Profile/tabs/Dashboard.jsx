import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const { wishlist } = useSelector((state) => state.wishlist) || { wishlist: [] };
  const { cart } = useSelector((state) => state.cart) || { cart: [] };
  
  const [cartCount, setCartCount] = useState(0);
  const [recentlyViewed, setRecentlyViewed] = useState([
    {
      id: "1",
      name: "iPhone 13 Pro Max",
      price: 1099.99,
      image: "/assets/images/product-img-1.jpg",
      category: "Smartphones"
    },
    {
      id: "2",
      name: "Samsung Galaxy S22",
      price: 899.99,
      image: "/assets/images/product-img-2.jpg",
      category: "Smartphones"
    },
    {
      id: "3",
      name: "MacBook Pro 16",
      price: 2499.99,
      image: "/assets/images/product-img-3.jpg",
      category: "Laptops"
    }
  ]);
  
  // Calculate cart items count
  useEffect(() => {
    if (cart && cart.length > 0 && cart[0].cartItems) {
      const totalItems = cart[0].cartItems.reduce((acc, item) => acc + (item.quantity || 0), 0);
      setCartCount(totalItems);
    }
  }, [cart]);
  
  // Get user's first name
  const getFirstName = () => {
    if (user?.firstName) return user.firstName;
    if (user?.name) return user.name.split(' ')[0];
    if (user?.username) return user.username;
    return "Valued Customer";
  };
  
  return (
    <div className="dashboard-container">
      {/* Welcome Section with Gradient Background */}
      <div className="welcome-section bg-gradient-to-r from-customBlue to-blue-500 rounded-xl p-8 mb-8 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, {getFirstName()}!</h1>
            <p className="text-blue-100">Here's what's happening with your shopping today</p>
          </div>
          <div className="hidden md:block">
            <img 
              src={`${process.env.PUBLIC_URL}/assets/images/mobileLogo.png`} 
              alt="Logo" 
              className="h-16 w-16 object-contain"
            />
          </div>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="stats-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Cart Items Card */}
        <div className="stat-card bg-white rounded-xl p-6 shadow-md border-l-4 border-customBlue transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm uppercase font-medium">Cart Items</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">{cartCount}</h3>
              <a href="/cart" className="text-customBlue text-sm font-medium mt-2 inline-block hover:underline">
                View Cart →
              </a>
            </div>
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-customBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Wishlist Card */}
        <div className="stat-card bg-white rounded-xl p-6 shadow-md border-l-4 border-pink-500 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm uppercase font-medium">Wishlist</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">{wishlist?.length || 0}</h3>
              <a href="/wishlist" className="text-pink-500 text-sm font-medium mt-2 inline-block hover:underline">
                View Wishlist →
              </a>
            </div>
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Orders Card */}
        <div className="stat-card bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm uppercase font-medium">Orders</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">{user?.orders?.length || 0}</h3>
              <a href="/profile#order" className="text-green-500 text-sm font-medium mt-2 inline-block hover:underline">
                View Orders →
              </a>
            </div>
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="quick-actions bg-white rounded-xl p-6 shadow-md mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="/all-products" className="action-card bg-blue-50 rounded-lg p-4 text-center transition-all duration-300 hover:bg-blue-100">
            <div className="w-12 h-12 rounded-full bg-white mx-auto flex items-center justify-center shadow-sm mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-customBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <p className="text-gray-700 font-medium">Shop Now</p>
          </a>
          
          <a href="/profile#order" className="action-card bg-green-50 rounded-lg p-4 text-center transition-all duration-300 hover:bg-green-100">
            <div className="w-12 h-12 rounded-full bg-white mx-auto flex items-center justify-center shadow-sm mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <p className="text-gray-700 font-medium">Track Orders</p>
          </a>
          
          <a href="/profile#address" className="action-card bg-purple-50 rounded-lg p-4 text-center transition-all duration-300 hover:bg-purple-100">
            <div className="w-12 h-12 rounded-full bg-white mx-auto flex items-center justify-center shadow-sm mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-gray-700 font-medium">My Addresses</p>
          </a>
          
          <a href="/profile#password" className="action-card bg-yellow-50 rounded-lg p-4 text-center transition-all duration-300 hover:bg-yellow-100">
            <div className="w-12 h-12 rounded-full bg-white mx-auto flex items-center justify-center shadow-sm mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <p className="text-gray-700 font-medium">Change Password</p>
          </a>
        </div>
      </div>
      
      {/* Recently Viewed Products */}
      <div className="recently-viewed bg-white rounded-xl p-6 shadow-md mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recently Viewed Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentlyViewed.map(product => (
            <div key={product.id} className="product-card bg-gray-50 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src={`${process.env.PUBLIC_URL}${product.image}`} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <span className="text-xs text-gray-500 uppercase font-medium">{product.category}</span>
                <h3 className="font-medium text-gray-800 mt-1">{product.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-customBlue font-bold">${product.price.toFixed(2)}</span>
                  <a href={`/single-product?id=${product.id}`} className="text-sm text-gray-600 hover:text-customBlue">View Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Personal Information Card */}
      <div className="personal-info bg-white rounded-xl p-6 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Personal Information</h2>
          <a href="/profile#profile" className="text-customBlue hover:underline text-sm font-medium">Edit</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="info-item">
            <p className="text-gray-500 text-sm mb-1">Full Name</p>
            <p className="text-gray-800 font-medium">{user?.name || `${user?.firstName || ''} ${user?.lastName || ''}`}</p>
          </div>
          <div className="info-item">
            <p className="text-gray-500 text-sm mb-1">Email Address</p>
            <p className="text-gray-800 font-medium">{user?.email || "Not provided"}</p>
          </div>
          <div className="info-item">
            <p className="text-gray-500 text-sm mb-1">Phone Number</p>
            <p className="text-gray-800 font-medium">{user?.phone || user?.phoneNumber || "Not provided"}</p>
          </div>
          <div className="info-item">
            <p className="text-gray-500 text-sm mb-1">Location</p>
            <p className="text-gray-800 font-medium">
              {user?.city && user?.country 
                ? `${user.city}, ${user.country}` 
                : user?.city || user?.country || "Not provided"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
