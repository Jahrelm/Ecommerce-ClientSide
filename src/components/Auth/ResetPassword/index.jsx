import { /* useEffect, */ useState } from "react";
import {resetPasswordRequest, resetPassword } from "../../../redux/actions/authAction";
import { useDispatch} from "react-redux";
import InputCom from "../../Helpers/InputCom";
import Layout from "../../Partials/Layout";
import Thumbnail from "./Thumbnail";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginPage = () => {
    navigate("/");

  };
  
  const [resetFormData, setResetFormData] = useState({
    token: "" ,
    newPassword: "",
 

  })
  const [formData, setFormData] = useState({
    username: "",
  });

  const [showFirstForm, setShowFirstForm] = useState(true);

  const handleRequestInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleResetInput = (e) => {
    setResetFormData({ ...resetFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showFirstForm) {
      setShowFirstForm(false); 
      dispatch(resetPasswordRequest(formData));
    } else { 
      setShowFirstForm(true); 
      dispatch(resetPassword(resetFormData));
      setFormData({ ...resetFormData,  token: "" , newPassword: "" });
      
    }
  };

  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="login-page-wrapper w-full py-10">
        <div className="container-x mx-auto">
          <div className="lg:flex items-center relative">
            <div className="lg:w-[572px] w-full h-[783px] bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]">
              <div className="w-full">
                <div className="title-area flex flex-col justify-center items-center relative text-center mb-7">
                  <h1 className="text-[34px] font-bold leading-[74px] text-qblack">
                    Reset Password
                  </h1>
                  <div className="shape -mt-6">
                    <svg
                      width="250"
                      height="50"
                      viewBox="0 0 172 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.08742C17.6667 19.0972 30.5 31.1305 62.5 27.2693C110.617 21.4634 150 -10.09 171 5.08727"
                        stroke="#FFBB38"
                      />
                    </svg>
                  </div>
                </div>
           
                {showFirstForm ? (
                  <form onSubmit={handleSubmit}>
                    <div className="input-area">
                      <div className="input-item mb-5">
                        <InputCom
                          placeholder="example@quomodosoft.com"
                          label="Email Address*"
                          name="username"
                          type="text"
                          value={formData.username}
                          inputHandler={handleRequestInput}
                          inputClasses="h-[50px]"
                        />
                      </div>
                      <div className="signin-area mb-3.5">
                        <div className="flex justify-center">
                          <button
                            type="submit"
                            className="bg-customBlue mb-6 mr-5 text-sm text-white w-full h-[50px] font-semibold flex justify-center bg-purple items-center"
                          >
                            <span>Send Reset Link</span>
                          </button>
                          <button
                          type="button"
                          onClick={loginPage}
                            
                            className="bg-customBlue mb-6 ml-5 text-sm text-white w-full h-[50px] font-semibold flex justify-center bg-purple items-center"
                          >
                            
                            <span>Login</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="input-item mb-5">
                      <InputCom
                        placeholder="Enter your token"
                        label="Token*"
                        name="token"
                        type="text"
                        value={resetFormData.token}
                        inputHandler={handleResetInput}
                        inputClasses="h-[50px]"
                      />
                    </div>
                    <div className="input-item mb-5">
                      <InputCom
                        placeholder="Enter new password"
                        label="New Password*"
                        name="newPassword"
                        type="password"
                        value={resetFormData.newPassword}
                        inputHandler={handleResetInput}
                        inputClasses="h-[50px]"
                      />
                    </div>
                    <div className="signin-area mb-3.5">
                      <div className="flex justify-center">
                        <button
                          type="submit"
                         
                          className="black-btn mb-6 mr-6 text-sm text-white w-full h-[50px] font-semibold flex justify-center bg-purple items-center"
                        >
                          <span>Submit</span>
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
            <div className="flex-1 lg:flex hidden transform scale-60 xl:scale-100 xl:justify-center">
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
