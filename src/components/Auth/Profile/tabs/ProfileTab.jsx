import { useRef, useState, useEffect } from "react";
import InputCom from "../../../Helpers/InputCom";

export default function ProfileTab({ userData }) {
  const [profileImg, setProfileImg] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const profileImgInput = useRef(null);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    bio: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    taxId: ""
  });

  useEffect(() => {
    // Log the user data passed as prop
    console.log("ProfileTab - User data from props:", userData);
    
    if (userData) {
      // Extract user information from the user object based on the login response structure
      const fullNameParts = userData.fullName ? userData.fullName.split(' ') : ["", ""];
      
      setFormData({
        firstName: fullNameParts[0] || "",
        lastName: fullNameParts.length > 1 ? fullNameParts.slice(1).join(' ') : "",
        email: userData.username || "",
        phone: userData.phoneNumber || "",
        bio: userData.role || userData.authorities?.[0]?.authority || "",
        country: userData.country || "",
        city: userData.city || "",
        address: userData.address || "",
        postalCode: userData.postCode || "",
        taxId: userData.userId || ""
      });
      
      // Set profile image if available (placeholder for now)
      setProfileImg(userData.profileImage || null);
    }
  }, [userData]);

  const handleProfileImgInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImg(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = () => {
    // Here you would typically dispatch an action to update the user profile
    console.log("Saving changes:", formData);
    setIsEditing(false);
  };

  return (
    <div className="profile-wrapper w-full">
      {/* Gradient header */}
      <div className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-5 mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">Your Profile</h1>
        <p className="text-white/80">Manage your personal information and account settings</p>
      </div>

      <div className="w-full bg-white p-5 rounded-lg shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row">
          {/* Profile Image Section */}
          <div className="md:w-1/3 flex flex-col items-center p-4">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-100 shadow-md mb-4">
              {profileImg ? (
                <img
                  src={profileImg}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
                  <span className="text-5xl font-bold text-indigo-500">
                    {formData.firstName && formData.firstName[0]}
                    {formData.lastName && formData.lastName[0]}
                  </span>
                </div>
              )}
            </div>
            <input
              type="file"
              className="hidden"
              ref={profileImgInput}
              onChange={handleProfileImgInputChange}
            />
            <button
              type="button"
              className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200 transition duration-300 mb-2"
              onClick={() => profileImgInput.current.click()}
            >
              Change Photo
            </button>
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold text-gray-800">{userData?.fullName || "User"}</h2>
              <p className="text-gray-500">{userData?.username || "user@example.com"}</p>
              <p className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded mt-2 inline-block">
                {userData?.authorities?.[0]?.authority || "USER"}
              </p>
            </div>
          </div>

          {/* Profile Form Section */}
          <div className="md:w-2/3 md:pl-8 mt-6 md:mt-0">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
              {!isEditing ? (
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 flex items-center"
                  onClick={handleEditToggle}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                  Edit Profile
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300"
                    onClick={handleEditToggle}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                    onClick={handleSaveChanges}
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="input-item">
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  First Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-800 py-2 border-b border-gray-100">
                    {formData.firstName || "Not provided"}
                  </p>
                )}
              </div>

              <div className="input-item">
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  Last Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-800 py-2 border-b border-gray-100">
                    {formData.lastName || "Not provided"}
                  </p>
                )}
              </div>

              <div className="input-item">
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  Email Address
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-800 py-2 border-b border-gray-100">
                    {formData.email || "Not provided"}
                  </p>
                )}
              </div>

              <div className="input-item">
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  Phone Number
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-800 py-2 border-b border-gray-100">
                    {formData.phone || "Not provided"}
                  </p>
                )}
              </div>

              <div className="input-item md:col-span-2">
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  Address
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-800 py-2 border-b border-gray-100">
                    {formData.address || "Not provided"}
                  </p>
                )}
              </div>

              <div className="input-item">
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  City
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-800 py-2 border-b border-gray-100">
                    {formData.city || "Not provided"}
                  </p>
                )}
              </div>

              <div className="input-item">
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  Country
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-800 py-2 border-b border-gray-100">
                    {formData.country || "Not provided"}
                  </p>
                )}
              </div>

              <div className="input-item">
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  Postal Code
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-800 py-2 border-b border-gray-100">
                    {formData.postalCode || "Not provided"}
                  </p>
                )}
              </div>

              <div className="input-item">
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  User ID
                </label>
                <p className="text-gray-800 py-2 border-b border-gray-100">
                  {userData?.userId || "Not available"}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Account Status</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${userData?.accountNonExpired ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
                    <span className="text-sm font-medium text-gray-700">Account Status:</span>
                    <span className={`ml-2 text-sm ${userData?.accountNonExpired ? 'text-green-600' : 'text-red-600'}`}>
                      {userData?.accountNonExpired ? 'Active' : 'Expired'}
                    </span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${!userData?.accountNonLocked ? 'bg-red-500' : 'bg-green-500'} mr-2`}></div>
                    <span className="text-sm font-medium text-gray-700">Lock Status:</span>
                    <span className={`ml-2 text-sm ${!userData?.accountNonLocked ? 'text-red-600' : 'text-green-600'}`}>
                      {!userData?.accountNonLocked ? 'Locked' : 'Unlocked'}
                    </span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${userData?.credentialsNonExpired ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
                    <span className="text-sm font-medium text-gray-700">Credentials:</span>
                    <span className={`ml-2 text-sm ${userData?.credentialsNonExpired ? 'text-green-600' : 'text-red-600'}`}>
                      {userData?.credentialsNonExpired ? 'Valid' : 'Expired'}
                    </span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${userData?.enabled ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
                    <span className="text-sm font-medium text-gray-700">Account:</span>
                    <span className={`ml-2 text-sm ${userData?.enabled ? 'text-green-600' : 'text-red-600'}`}>
                      {userData?.enabled ? 'Enabled' : 'Disabled'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {userData?.resetTokenExpiry && (
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                <h4 className="text-sm font-medium text-yellow-800 mb-1">Password Reset Status</h4>
                <p className="text-sm text-yellow-700">
                  Your password reset token expires on: {new Date(userData.resetTokenExpiry).toLocaleString()}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
