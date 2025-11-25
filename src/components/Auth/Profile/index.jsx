import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import BreadcrumbCom from "../../BreadcrumbCom";
import Layout from "../../Partials/Layout";
import IcoAdress from "./icons/IcoAdress";
import IcoCart from "./icons/IcoCart";
import IcoDashboard from "./icons/IcoDashboard";
import IcoLogout from "./icons/IcoLogout";
import IcoLove from "./icons/IcoLove";
import IcoPassword from "./icons/IcoPassword";
import IcoPeople from "./icons/IcoPeople";
import AddressesTab from "./tabs/AddressesTab";
import Dashboard from "./tabs/Dashboard";
import OrderTab from "./tabs/OrderTab";
import PasswordTab from "./tabs/PasswordTab";
import ProfileTab from "./tabs/ProfileTab";
import WishlistTab from "./tabs/WishlistTab";

export default function Profile() {
  const location = useLocation();
  const getHashContent = location.hash.split("#");
  const [active, setActive] = useState("dashboard");

  // Get auth state from Redux
  const authState = useSelector((state) => state.auth);

  // Extract user data from auth state
  const userData = authState?.user?.user || authState?.user || {};

  useEffect(() => {
    setActive(
      getHashContent && getHashContent.length > 1
        ? getHashContent[1]
        : "dashboard"
    );
  }, [getHashContent]);

  const menuItems = [
    { name: "Dashboard", link: "/profile#dashboard", icon: <IcoDashboard />, id: "dashboard" },
    { name: "Personal Info", link: "/profile#profile", icon: <IcoPeople />, id: "profile" },
    { name: "Orders", link: "/profile#order", icon: <IcoCart />, id: "order" },
    { name: "Wishlist", link: "/profile#wishlist", icon: <IcoLove />, id: "wishlist" },
    { name: "Addresses", link: "/profile#address", icon: <IcoAdress />, id: "address" },
    { name: "Change Password", link: "/profile#password", icon: <IcoPassword />, id: "password" },
  ];

  return (
    <Layout childrenClasses="pt-0 pb-0 bg-gray-50">
      <div className="profile-page-wrapper w-full min-h-screen pb-12">
        <div className="container-x mx-auto">
          <div className="w-full py-10">
            <BreadcrumbCom
              paths={[
                { name: "home", path: "/" },
                { name: "profile", path: "/profile" },
              ]}
            />

            <div className="w-full mt-8 flex flex-col lg:flex-row gap-8">
              {/* Sidebar */}
              <div className="w-full lg:w-[280px] flex-shrink-0">
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
                  <div className="p-6 border-b border-gray-100 bg-primary-blue">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white text-xl font-bold">
                        {userData.name ? userData.name[0] : "U"}
                      </div>
                      <div className="text-white">
                        <h3 className="font-bold text-lg leading-tight">{userData.name || "User"}</h3>
                        <p className="text-blue-100 text-sm">Member</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 space-y-1">
                    {menuItems.map((item) => (
                      <Link
                        key={item.id}
                        to={item.link}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${active === item.id
                            ? "bg-blue-50 text-primary-blue"
                            : "text-gray-600 hover:bg-gray-50 hover:text-qblack"
                          }`}
                      >
                        <span className={`${active === item.id ? "text-primary-blue" : "text-gray-400"}`}>
                          {item.icon}
                        </span>
                        <span>{item.name}</span>
                      </Link>
                    ))}

                    <div className="my-2 border-t border-gray-100"></div>

                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium text-red-500 hover:bg-red-50">
                      <span className="text-red-500">
                        <IcoLogout />
                      </span>
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1">
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 min-h-[600px]">
                  {active === "dashboard" && <Dashboard userData={userData} />}
                  {active === "profile" && <ProfileTab userData={userData} />}
                  {active === "order" && <OrderTab userData={userData} />}
                  {active === "wishlist" && <WishlistTab userData={userData} />}
                  {active === "address" && <AddressesTab userData={userData} />}
                  {active === "password" && <PasswordTab userData={userData} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
