import { useEffect, useRef, useState } from "react";

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
      <div className="w-full bg-primary-blue rounded-xl p-6 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full -ml-10 -mb-10 blur-2xl"></div>
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-white mb-2">Your Profile</h1>
          <p className="text-blue-100">Manage your personal information and account settings</p>
        </div>
      </div>

      <div className="w-full bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Image Section */}
          <div className="md:w-1/3 flex flex-col items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-50 shadow-sm mb-6 relative group">
              {profileImg ? (
                <img
                  src={profileImg}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-blue-50 flex items-center justify-center">
                  <span className="text-5xl font-bold text-primary-blue">
                    {formData.firstName && formData.firstName[0]}
                    {formData.lastName && formData.lastName[0]}
                  </span>
                </div>
              )}
              <div
                className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                onClick={() => profileImgInput.current.click()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <input
              type="file"
              className="hidden"
              ref={profileImgInput}
              onChange={handleProfileImgInputChange}
            />
            <button
              type="button"
              className="px-6 py-2.5 bg-blue-50 text-primary-blue font-bold rounded-xl hover:bg-blue-100 transition duration-300 mb-4 w-full"
              onClick={() => profileImgInput.current.click()}
            >
              Change Photo
            </button>
            <div className="text-center w-full">
              <h2 className="text-xl font-bold text-qblack">{userData?.fullName || "User"}</h2>
              <p className="text-gray-500 mb-3">{userData?.username || "user@example.com"}</p>
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full uppercase tracking-wider">
                {userData?.authorities?.[0]?.authority || "USER"}
              </span>
            </div>
          </div>

          {/* Profile Form Section */}
          <div className="md:w-2/3">
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
              <h3 className="text-xl font-bold text-qblack">Personal Information</h3>
              {!isEditing ? (
                <button
                  type="button"
                  className="px-5 py-2.5 bg-primary-blue text-white font-bold rounded-xl hover:bg-blue-600 transition duration-300 flex items-center shadow-lg shadow-blue-500/30"
                  onClick={handleEditToggle}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                  Edit Profile
                </button>
              ) : (
                <div className="flex space-x-3">
                  <button
                    type="button"
                    className="px-5 py-2.5 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200 transition duration-300"
                    onClick={handleEditToggle}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="px-5 py-2.5 bg-primary-blue text-white font-bold rounded-xl hover:bg-blue-600 transition duration-300 shadow-lg shadow-blue-500/30"
                    onClick={handleSaveChanges}
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="input-item">
                <label className="text-sm font-bold text-gray-500 block mb-2">
                  First Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                  />
                ) : (
                  <p className="text-qblack font-medium text-lg">
                    {formData.firstName || "Not provided"}
                  </p>
                )}
              </div>

              <div className="input-item">
                <label className="text-sm font-bold text-gray-500 block mb-2">
                  Last Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                  />
                ) : (
                  <p className="text-qblack font-medium text-lg">
                    {formData.lastName || "Not provided"}
                  </p>
                )}
              </div>

              <div className="input-item">
                <label className="text-sm font-bold text-gray-500 block mb-2">
                  Email Address
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                  />
                ) : (
                  <p className="text-qblack font-medium text-lg">
                    {formData.email || "Not provided"}
                  </p>
                )}
              </div>

              <div className="input-item">
                <label className="text-sm font-bold text-gray-500 block mb-2">
                  Phone Number
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                  />
                ) : (
                  <p className="text-qblack font-medium text-lg">
                    {formData.phone || "Not provided"}
                  </p>
                )}
              </div>

              <div className="input-item md:col-span-2">
                <label className="text-sm font-bold text-gray-500 block mb-2">
                  Address
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                  />
                ) : (
                  <p className="text-qblack font-medium text-lg">
                    {formData.address || "Not provided"}
                  </p>
                )}
              </div>

              <div className="input-item">
                <label className="text-sm font-bold text-gray-500 block mb-2">
                  City
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                  />
                ) : (
                  <p className="text-qblack font-medium text-lg">
                    {formData.city || "Not provided"}
                  </p>
                )}
              </div>

              <div className="input-item">
                <label className="text-sm font-bold text-gray-500 block mb-2">
                  Country
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                  />
                ) : (
                  <p className="text-qblack font-medium text-lg">
                    {formData.country || "Not provided"}
                  </p>
                )}
              </div>

              <div className="input-item">
                <label className="text-sm font-bold text-gray-500 block mb-2">
                  Postal Code
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                  />
                ) : (
                  <p className="text-qblack font-medium text-lg">
                    {formData.postalCode || "Not provided"}
                  </p>
                )}
              </div>

              <div className="input-item">
                <label className="text-sm font-bold text-gray-500 block mb-2">
                  User ID
                </label>
                <p className="text-qblack font-medium text-lg">
                  {userData?.userId || "Not available"}
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <h3 className="text-xl font-bold text-qblack mb-6">Account Status</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${userData?.accountNonExpired ? 'bg-green-500' : 'bg-red-500'} mr-3`}></div>
                    <span className="text-sm font-bold text-gray-500">Account Status:</span>
                    <span className={`ml-2 text-sm font-bold ${userData?.accountNonExpired ? 'text-green-600' : 'text-red-600'}`}>
                      {userData?.accountNonExpired ? 'Active' : 'Expired'}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${!userData?.accountNonLocked ? 'bg-red-500' : 'bg-green-500'} mr-3`}></div>
                    <span className="text-sm font-bold text-gray-500">Lock Status:</span>
                    <span className={`ml-2 text-sm font-bold ${!userData?.accountNonLocked ? 'text-red-600' : 'text-green-600'}`}>
                      {!userData?.accountNonLocked ? 'Locked' : 'Unlocked'}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${userData?.credentialsNonExpired ? 'bg-green-500' : 'bg-red-500'} mr-3`}></div>
                    <span className="text-sm font-bold text-gray-500">Credentials:</span>
                    <span className={`ml-2 text-sm font-bold ${userData?.credentialsNonExpired ? 'text-green-600' : 'text-red-600'}`}>
                      {userData?.credentialsNonExpired ? 'Valid' : 'Expired'}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${userData?.enabled ? 'bg-green-500' : 'bg-red-500'} mr-3`}></div>
                    <span className="text-sm font-bold text-gray-500">Account:</span>
                    <span className={`ml-2 text-sm font-bold ${userData?.enabled ? 'text-green-600' : 'text-red-600'}`}>
                      {userData?.enabled ? 'Enabled' : 'Disabled'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {userData?.resetTokenExpiry && (
              <div className="mt-6 p-4 bg-yellow-50 rounded-xl border border-yellow-100">
                <h4 className="text-sm font-bold text-yellow-800 mb-1">Password Reset Status</h4>
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
