import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../../../redux/actions/authAction";
import Layout from "../../Partials/Layout";
import Thumbnail from "./Thumbnail";

export default function Signup() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { success, error } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log('useEffect triggered: success =', success);
    if (success) {
      console.log('useEffect triggered 1 success =', success);
      navigate("/home-one")
    }
  }, [navigate, success])

  const [checked, setValue] = useState(false);
  const rememberMe = () => {
    setValue(!checked);
  };

  const [vPassword, setVPassword] = useState('');
  const [fName, setFNameError] = useState("");
  const [vUsername, setVUserName] = useState("");

  const [userType, setUserType] = useState(""); // "buyer" or "seller"
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
    username: "",
    phoneNumber: "",
    country: "",
    address: "",
    city: "",
    postCode: "",
    userType: "",
  });

  /*  const hasUpperCase = /[A-Z]/.test(password);
   const hasLowerCase = /[a-z]/.test(password);
   const hasNumber = /[0-9]/.test(password);
   const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  

   && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
   */
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUserTypeSelect = (type) => {
    setUserType(type);
    setFormData({
      ...formData,
      userType: type,
    });
  };
  function validatePassword(password) {
    const minLength = 5;
    const maxLength = 9;
    const lengthValid = password.length >= minLength && password.length <= maxLength;
    return lengthValid;

  }


  function validationForm() {
    const message = {
      emptyFirstName: "Full Name cannot be empty",
      emptyUsername: "Email cannot be empty",
      invalidPassword: "Password must be 8-9 chars",
      emptyPassword: "Password cannot be empty",
      emptyUserType: "Please select account type"
    };

    let isValid = true;

    if (!formData.userType) {
      alert(message.emptyUserType);
      isValid = false;
      return isValid;
    }

    if (!formData.fullName) {
      setFNameError(message.emptyFirstName);
      isValid = false
    } else {
      setFNameError("");
    }


    if (!formData.username) {
      setVUserName(message.emptyUsername);
      isValid = false;
    } else {
      setVUserName('');
    }

    if (validatePassword(formData.password)) {
      setVPassword(message.invalidPassword);
      isValid = false;
    } else if (!formData.password) {
      setVPassword(message.emptyPassword);
    } else {
      setVPassword('');
    }

    return isValid;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validationForm()) {
      dispatch(signUpUser(formData));
    }
  };

  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="login-page-wrapper w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 flex items-center py-12 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-peachy-pink/5 rounded-full blur-3xl"></div>

        <div className="container-x mx-auto relative z-10">
          <div className="lg:flex items-center justify-center relative">
            <div className="lg:w-[520px] w-full max-w-lg mx-auto bg-white/80 backdrop-blur-xl flex flex-col justify-center sm:p-10 p-8 rounded-3xl shadow-2xl border border-white/20">
              <div className="w-full">
                <div className="title-area flex flex-col justify-center items-center relative text-center mb-8">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-peachy-pink rounded-2xl blur-md opacity-50"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-primary-blue to-peachy-pink rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                    </div>
                  </div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-qblack to-gray-700 bg-clip-text text-transparent mb-2">
                    Join Our Community
                  </h1>
                  <p className="text-medium-grey text-sm font-medium">Toddler Kingdom Pre-Loved Market</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary-blue to-peachy-pink rounded-full mt-3"></div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="input-area">
                    {/* User Type Selection */}
                    <div className="mb-6">
                      <label className="text-sm font-semibold text-gray-700 mb-3 block">
                        I want to register as*
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => handleUserTypeSelect("buyer")}
                          className={`h-[60px] border-2 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all duration-300 ${userType === "buyer"
                            ? "border-primary-blue bg-gradient-to-br from-primary-blue/10 to-primary-blue/5 text-primary-blue shadow-md"
                            : "border-gray-200 hover:border-primary-blue hover:shadow-sm bg-gray-50"
                            }`}
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                          <span className="font-semibold text-sm">Buyer</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleUserTypeSelect("seller")}
                          className={`h-[60px] border-2 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all duration-300 ${userType === "seller"
                            ? "border-peachy-pink bg-gradient-to-br from-peachy-pink/10 to-peachy-pink/5 text-peachy-pink shadow-md"
                            : "border-gray-200 hover:border-peachy-pink hover:shadow-sm bg-gray-50"
                            }`}
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span className="font-semibold text-sm">Seller</span>
                        </button>
                      </div>
                    </div>

                    {/* Full Name */}
                    <div className="input-item mb-5 group">
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Full Name*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="w-full h-[56px] pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-blue focus:bg-white transition-all duration-300 hover:border-gray-300"
                        />
                      </div>
                      {fName && <p className="text-xs text-red-500 mt-1">{fName}</p>}
                    </div>

                    {/* Email */}
                    <div className="input-item mb-5 group">
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Email Address*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          name="username"
                          value={formData.username}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="w-full h-[56px] pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-blue focus:bg-white transition-all duration-300 hover:border-gray-300"
                        />
                      </div>
                      {vUsername && <p className="text-xs text-red-500 mt-1">{vUsername}</p>}
                    </div>

                    {/* Password */}
                    <div className="input-item mb-5 group">
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Password*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="Create a password"
                          className="w-full h-[56px] pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-blue focus:bg-white transition-all duration-300 hover:border-gray-300"
                        />
                      </div>
                      {vPassword && <p className="text-xs text-red-500 mt-1">{vPassword}</p>}
                    </div>

                    {/* Phone */}
                    <div className="input-item mb-5 group">
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Phone Number*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full h-[56px] pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-blue focus:bg-white transition-all duration-300 hover:border-gray-300"
                        />
                      </div>
                    </div>
                    {/* Terms Checkbox */}
                    <div className="terms-area mb-6">
                      <div className="flex items-center space-x-2.5">
                        <button
                          onClick={rememberMe}
                          type="button"
                          className={`w-5 h-5 rounded-md flex justify-center items-center border-2 transition-all duration-300 ${checked
                            ? 'bg-gradient-to-br from-primary-blue to-blue-600 border-primary-blue shadow-md'
                            : 'border-gray-300 hover:border-primary-blue hover:shadow-sm'
                            }`}
                        >
                          {checked && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3.5 w-3.5 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </button>
                        <span
                          onClick={rememberMe}
                          className="text-sm text-gray-600 font-medium cursor-pointer hover:text-gray-800 transition-colors"
                        >
                          I agree to all{' '}
                          <a href="/terms-condition" className="text-primary-blue hover:text-peachy-pink transition-colors">
                            terms and conditions
                          </a>
                        </span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="signin-area mb-6">
                      <button
                        type="submit"
                        className="relative w-full h-[56px] bg-gradient-to-r from-primary-blue to-blue-600 text-white font-semibold rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Create Account
                          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                      </button>
                    </div>

                    {/* Login Link */}
                    <div className="signup-area text-center">
                      <p className="text-sm text-gray-600">
                        Already have an account?
                        <a href="/login" className="ml-2 text-primary-blue font-semibold hover:text-peachy-pink transition-colors relative group">
                          Sign in
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-peachy-pink group-hover:w-full transition-all duration-300"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex-1 lg:flex hidden transform scale-60 xl:scale-100   xl:justify-center">
              <div
                className="absolute xl:-right-20 -right-[138px]"
                style={{ top: "calc(50% - 258px)" }}
              >
                <Thumbnail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
