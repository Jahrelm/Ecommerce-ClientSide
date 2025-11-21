import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../redux/actions/authAction";
import Layout from "../../Partials/Layout";
import Thumbnail from "./Thumbnail";



export default function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { success, error } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log('useEffect triggered: success =', success);
    if (success) {
      console.log('useEffect triggered 1 success =', success);
      // Check user role from session storage or response
      const userRole = sessionStorage.getItem('userRole');
      if (userRole === 'seller') {
        navigate("/seller-dashboard");
      } else {
        navigate("/home-one");
      }
    }
  }, [navigate, success])





  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [checked, setValue] = useState(false);
  const rememberMe = () => {
    setValue(!checked);
  };

  const handleLoginInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="login-page-wrapper w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 flex items-center py-12 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-peachy-pink/5 rounded-full blur-3xl"></div>

        <div className="container-x mx-auto relative z-10">
          <div className="lg:flex items-center justify-center relative">
            <div className="lg:w-[480px] w-full max-w-md mx-auto bg-white/80 backdrop-blur-xl flex flex-col justify-center sm:p-10 p-8 rounded-3xl shadow-2xl border border-white/20">
              <div className="w-full">
                <div className="title-area flex flex-col justify-center items-center relative text-center mb-8">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-peachy-pink rounded-2xl blur-md opacity-50"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-primary-blue to-peachy-pink rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                  </div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-qblack to-gray-700 bg-clip-text text-transparent mb-2">
                    Welcome Back
                  </h1>
                  <p className="text-medium-grey text-sm font-medium">Toddler Kingdom Pre-Loved Market</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary-blue to-peachy-pink rounded-full mt-3"></div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="input-area">
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
                          onChange={handleLoginInput}
                          placeholder="your.email@example.com"
                          className="w-full h-[56px] pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-blue focus:bg-white transition-all duration-300 hover:border-gray-300"
                        />
                      </div>
                    </div>
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
                          onChange={handleLoginInput}
                          placeholder="Enter your password"
                          className="w-full h-[56px] pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-blue focus:bg-white transition-all duration-300 hover:border-gray-300"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="mb-4 text-red-400">{error}</p>
                    </div>
                    <div className="forgot-password-area flex justify-between items-center mb-6">
                      <div className="remember-checkbox flex items-center space-x-2.5">
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
                          Remember Me
                        </span>
                      </div>
                      <a
                        href="/reset-password"
                        className="text-sm font-semibold text-primary-blue hover:text-peachy-pink transition-colors relative group"
                      >
                        Forgot Password?
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-peachy-pink group-hover:w-full transition-all duration-300"></span>
                      </a>
                    </div>
                    <div className="signin-area mb-6">
                      <button
                        type="submit"
                        className="relative w-full h-[56px] bg-gradient-to-r from-primary-blue to-blue-600 text-white font-semibold rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Sign In
                          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                      </button>
                    </div>

                    <div className="divider flex items-center gap-4 mb-6">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                      <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">or continue with</span>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                    </div>

                    <div className="social-login mb-6">
                      <div className="grid grid-cols-2 gap-3">
                        <button type="button" className="flex items-center justify-center gap-2 h-12 bg-white border-2 border-gray-200 rounded-xl hover:border-primary-blue hover:shadow-md transition-all duration-300 group">
                          <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                          </svg>
                          <span className="text-sm font-medium text-gray-700 group-hover:text-primary-blue transition-colors">Google</span>
                        </button>
                        <button type="button" className="flex items-center justify-center gap-2 h-12 bg-white border-2 border-gray-200 rounded-xl hover:border-primary-blue hover:shadow-md transition-all duration-300 group">
                          <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                          <span className="text-sm font-medium text-gray-700 group-hover:text-primary-blue transition-colors">Facebook</span>
                        </button>
                      </div>
                    </div>

                    <div className="signup-area text-center">
                      <p className="text-sm text-gray-600">
                        Don't have an account?
                        <a href="/signup" className="ml-2 text-primary-blue font-semibold hover:text-peachy-pink transition-colors relative group">
                          Sign up for free
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-peachy-pink group-hover:w-full transition-all duration-300"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                </form>

              </div>
            </div>
            <div className="flex-1 lg:flex hidden transform scale-60 xl:scale-100   xl:justify-center ">
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
