import { useState } from "react";

export default function PasswordTab({ userData }) {
  const [oldPass, setOldPass] = useState("hide-password");
  const [newPass, setNewPass] = useState("hide-password");
  const [confirmPass, setConfirmPass] = useState("hide-password");
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  // Log user data for debugging
  console.log("PasswordTab - User data from props:", userData);

  const showPassword = (value) => {
    const password = document.getElementById(`${value}`);
    if (value && value === "old_password") {
      if (password.type === "password") {
        password.type = "text";
        setOldPass("show-password");
      } else {
        password.type = "password";
        setOldPass("hide-password");
      }
    }
    if (value && value === "new_password") {
      if (password.type === "password") {
        password.type = "text";
        setNewPass("show-password");
      } else {
        password.type = "password";
        setNewPass("hide-password");
      }
    }
    if (value && value === "confirm_password") {
      if (password.type === "password") {
        password.type = "text";
        setConfirmPass("show-password");
      } else {
        password.type = "password";
        setConfirmPass("hide-password");
      }
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id === "old_password" ? "currentPassword" :
        id === "new_password" ? "newPassword" : "confirmPassword"]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would dispatch an action to update the password
    console.log("Password update form submitted:", {
      userId: userData?.userId,
      username: userData?.username,
      ...formData
    });

    // Reset form after submission
    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
  };

  // Check if password reset token is available
  const hasResetToken = userData?.resetToken && userData?.resetTokenExpiry;
  const resetTokenExpiry = userData?.resetTokenExpiry ? new Date(userData.resetTokenExpiry) : null;
  const isTokenValid = resetTokenExpiry && new Date() < resetTokenExpiry;

  return (
    <div className="changePasswordTab w-full">
      <div className="w-full bg-primary-blue rounded-xl p-6 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full -ml-10 -mb-10 blur-2xl"></div>
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-white mb-2">Change Password</h1>
          <p className="text-blue-100">Update your password to keep your account secure</p>
        </div>
      </div>

      {hasResetToken && (
        <div className={`mb-6 p-4 rounded-lg ${isTokenValid ? 'bg-blue-50 border border-blue-200' : 'bg-red-50 border border-red-200'}`}>
          <div className="flex items-start">
            <div className={`mt-0.5 ${isTokenValid ? 'text-blue-500' : 'text-red-500'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className={`text-sm font-medium ${isTokenValid ? 'text-blue-800' : 'text-red-800'}`}>
                {isTokenValid ? 'Password Reset Available' : 'Password Reset Token Expired'}
              </h3>
              <div className={`mt-2 text-sm ${isTokenValid ? 'text-blue-700' : 'text-red-700'}`}>
                <p>
                  {isTokenValid
                    ? `You have a password reset token that expires on ${resetTokenExpiry.toLocaleString()}.`
                    : 'Your password reset token has expired. Please request a new one if needed.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-qblack mb-6 flex items-center border-b border-gray-100 pb-4">
            <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            Password Settings
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="input-field">
              <label className="block text-sm font-bold text-gray-500 mb-2" htmlFor="old_password">
                Current Password
              </label>
              <div className="relative">
                <input
                  placeholder="Enter your current password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                  type="password"
                  id="old_password"
                  value={formData.currentPassword}
                  onChange={handleInputChange}
                  required
                />
                <div
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => showPassword("old_password")}
                >
                  {oldPass === "show-password" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400 hover:text-primary-blue transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400 hover:text-primary-blue transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            <div className="input-field">
              <label className="block text-sm font-bold text-gray-500 mb-2" htmlFor="new_password">
                New Password
              </label>
              <div className="relative">
                <input
                  placeholder="Enter your new password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                  type="password"
                  id="new_password"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  required
                />
                <div
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => showPassword("new_password")}
                >
                  {newPass === "show-password" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400 hover:text-primary-blue transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400 hover:text-primary-blue transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            <div className="input-field">
              <label className="block text-sm font-bold text-gray-500 mb-2" htmlFor="confirm_password">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  placeholder="Confirm your new password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all"
                  type="password"
                  id="confirm_password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
                <div
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => showPassword("confirm_password")}
                >
                  {confirmPass === "show-password" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400 hover:text-primary-blue transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400 hover:text-primary-blue transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  )}
                </div>
              </div>
              {formData.newPassword && formData.confirmPassword &&
                formData.newPassword !== formData.confirmPassword && (
                  <p className="mt-2 text-sm text-red-500 font-medium">Passwords do not match</p>
                )}
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-blue hover:bg-blue-600 text-white font-bold rounded-xl transition duration-300 flex items-center justify-center shadow-lg shadow-blue-500/30"
                disabled={formData.newPassword !== formData.confirmPassword}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v-1l1-1 1-1-.257-.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                </svg>
                Update Password
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-qblack mb-6 flex items-center border-b border-gray-100 pb-4">
            <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            Password Tips
          </h2>

          <div className="space-y-5">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-600">Use at least 8 characters</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-600">Include at least one uppercase letter</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-600">Include at least one number</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-600">Include at least one special character (e.g., !@#$%)</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-600">Avoid using easily guessable information like birthdays or names</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-600">Don't reuse passwords across multiple sites</p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6 mt-6">
              <h3 className="text-sm font-bold text-gray-700 mb-3">Account Username</h3>
              <p className="text-sm text-gray-500 mb-2">Your current username:</p>
              <div className="bg-gray-50 p-3 rounded-xl flex items-center justify-between border border-gray-100">
                <span className="font-bold text-qblack">{userData?.username || "Not available"}</span>
                <span className="text-xs font-bold bg-blue-50 text-primary-blue px-3 py-1 rounded-full uppercase tracking-wider">
                  {userData?.enabled ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
