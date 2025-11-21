import { useRef, useState } from "react";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";

export default function BecomeSaller() {
  const [profileImg, setProfileImg] = useState(null);
  const [logoImg, setLogoImg] = useState(null);
  const [coverImg, setCoverImg] = useState(null);
  const experienceHighlights = [
    "Unlock curated traffic with personalised analytics from day one.",
    "Sync inventory, orders, and fulfilment through a single dashboard.",
    "Access launch-ready marketing boosts tailored to new storefronts.",
  ];

  const logoImgInput = useRef(null);
  const browseLogoImg = () => {
    logoImgInput.current?.click();
  };
  const logoImgChangHandler = (e) => {
    if (e.target.value !== "") {
      const imgReader = new FileReader();
      imgReader.onload = (event) => {
        setLogoImg(event.target.result);
      };
      imgReader.readAsDataURL(e.target.files[0]);
    }
  };

  const profileImgInput = useRef(null);
  const browseProfileImg = () => {
    profileImgInput.current?.click();
  };
  const profileImgChangHandler = (e) => {
    if (e.target.value !== "") {
      const imgReader = new FileReader();
      imgReader.onload = (event) => {
        setProfileImg(event.target.result);
      };
      imgReader.readAsDataURL(e.target.files[0]);
    }
  };

  const coverImgInput = useRef(null);
  const browseCoverImg = () => {
    coverImgInput.current?.click();
  };
  const coverImgChangHandler = (e) => {
    if (e.target.value !== "") {
      const imgReader = new FileReader();
      imgReader.onload = (event) => {
        setCoverImg(event.target.result);
      };
      imgReader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="become-saller-wrapper w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 flex items-center py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-peachy-pink/5 rounded-full blur-3xl" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto w-[520px] h-[520px] bg-white/10 rounded-full blur-3xl" />

        <div className="container-x mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-5">
            <aside className="lg:col-span-2 space-y-8">
              <div className="bg-white/80 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl">
                <PageTitle
                  title="Become a Seller"
                  breadcrumb={[
                    { name: "home", path: "/" },
                    { name: "Become Saller", path: "/become-saller" },
                  ]}
                />
                <div className="flex items-center justify-center mt-6 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-peachy-pink rounded-2xl blur-md opacity-40" />
                    <div className="relative w-16 h-16 bg-gradient-to-br from-primary-blue to-peachy-pink rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M5 7v12h14V7m-9 0V4h4v3" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-qblack to-gray-700 bg-clip-text text-transparent text-center">
                  Launch your storefront with confidence
                </h1>
                <p className="text-sm text-medium-grey mt-3 text-center">
                  Share the essentials so we can verify your brand, personalise onboarding, and put your products in front of shoppers who love them.
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-primary-blue to-peachy-pink rounded-full mx-auto mt-6" />
              </div>

              <div className="bg-white/80 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-xl space-y-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[#8A8AA5]">
                  Why sellers love us
                </p>
                <ul className="space-y-4">
                  {experienceHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                      <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary-blue/10 text-xs font-semibold text-primary-blue">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/80 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-xl space-y-5">
                <h3 className="text-lg font-semibold text-qblack">Brand assets</h3>
                <p className="text-sm text-qgraytwo">
                  Upload crisp imagery so shoppers trust your storefront from the very first visit.
                </p>
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                      <img
                        src={
                          profileImg ||
                          `${process.env.PUBLIC_URL}/assets/images/edit-profileimg.jpg`
                        }
                        alt="Profile"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-qblack">Profile image</p>
                      <p className="text-xs text-qgraytwo">300x300px minimum, GIFs up to 5mb.</p>
                    </div>
                    <input
                      ref={profileImgInput}
                      onChange={(e) => profileImgChangHandler(e)}
                      type="file"
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={browseProfileImg}
                      className="text-xs font-semibold text-primary-blue border border-primary-blue/40 rounded-full px-4 py-2 transition hover:bg-primary-blue hover:text-white"
                    >
                      Change
                    </button>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-white shadow">
                      <img
                        src={
                          logoImg ||
                          `${process.env.PUBLIC_URL}/assets/images/edit-logoimg.jpg`
                        }
                        alt="Logo"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-qblack">Logo</p>
                      <p className="text-xs text-qgraytwo">PNG, SVG, or GIF up to 5mb.</p>
                    </div>
                    <input
                      ref={logoImgInput}
                      onChange={(e) => logoImgChangHandler(e)}
                      type="file"
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={browseLogoImg}
                      className="text-xs font-semibold text-primary-blue border border-primary-blue/40 rounded-full px-4 py-2 transition hover:bg-primary-blue hover:text-white"
                    >
                      Upload
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div className="relative overflow-hidden rounded-2xl border border-[#ECECF5] bg-[#F7F7FB]">
                      <img
                        src={
                          coverImg ||
                          `${process.env.PUBLIC_URL}/assets/images/edit-coverimg.jpg`
                        }
                        alt="Cover"
                        className="h-[140px] w-full object-cover"
                      />
                      <input
                        ref={coverImgInput}
                        onChange={(e) => coverImgChangHandler(e)}
                        type="file"
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={browseCoverImg}
                        className="absolute right-4 bottom-4 rounded-full bg-gradient-to-r from-primary-blue to-peachy-pink px-4 py-2 text-xs font-semibold text-white shadow"
                      >
                        Refresh cover
                      </button>
                    </div>
                    <p className="text-xs text-qgraytwo">
                      Recommended size 1170x920px for a crisp storefront header.
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-3 bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl sm:p-10 p-8">
              <div className="space-y-8">
                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-qblack">Seller details</h2>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="group">
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        First Name*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.314 0-6 1.79-6 4v1h12v-1c0-2.21-2.686-4-6-4z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          placeholder="Jane"
                          className="w-full h-[56px] pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-blue focus:bg-white transition-all duration-300 hover:border-gray-300"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Last Name*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.314 0-6 1.79-6 4v1h12v-1c0-2.21-2.686-4-6-4z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          placeholder="Doe"
                          className="w-full h-[56px] pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-blue focus:bg-white transition-all duration-300 hover:border-gray-300"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Business Email*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12a4 4 0 11-8 0 4 4 0 018 0zm0 0v1.5a2.5 2.5 0 105 0V12a9 9 0 10-9 9" />
                          </svg>
                        </div>
                        <input
                          type="email"
                          placeholder="your.email@example.com"
                          className="w-full h-[56px] pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-blue focus:bg-white transition-all duration-300 hover:border-gray-300"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Phone Number*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h2l3 7-1.5 2.5a11.05 11.05 0 005 5L14 15l7 3v2a2 2 0 01-2 2A17 17 0 013 5z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          placeholder="+1 (555) 123-4567"
                          className="w-full h-[56px] pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-blue focus:bg-white transition-all duration-300 hover:border-gray-300"
                        />
                      </div>
                    </div>
                    <div className="group md:col-span-2">
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Country*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h18M3 10h18M3 15h18M3 20h18" />
                          </svg>
                        </div>
                        <select className="w-full h-[56px] pl-12 pr-10 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-blue focus:bg-white transition-all duration-300 hover:border-gray-300 appearance-none">
                          <option value="">Select your country</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="UK">United Kingdom</option>
                          <option value="AU">Australia</option>
                          <option value="Other">Other</option>
                        </select>
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="group md:col-span-2">
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Business Address*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z" />
                            <circle cx="12" cy="11" r="3" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          placeholder="Street, city, state, ZIP"
                          className="w-full h-[56px] pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-blue focus:bg-white transition-all duration-300 hover:border-gray-300"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                <section className="space-y-4 pt-4 border-t border-gray-100">
                  <h2 className="text-xl font-semibold text-qblack">Shop information</h2>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="group">
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Shop Name*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7h18M5 7v12h14V7m-9 0V4h4v3" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          placeholder="e.g. Shine Boutique"
                          className="w-full h-[56px] pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-blue focus:bg-white transition-all duration-300 hover:border-gray-300"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Storefront URL
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5C7.03 5 3 9.03 3 14s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 0V1m0 0L8 5m4-4l4 4" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          placeholder="https://yourstore.com"
                          className="w-full h-[56px] pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-blue focus:bg-white transition-all duration-300 hover:border-gray-300"
                        />
                      </div>
                    </div>
                    <div className="group md:col-span-2">
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Shop story (optional)
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Share what makes your catalogue special, how you fulfil orders, or your customer promise."
                        className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-4 text-sm text-qgraytwo focus:border-primary-blue focus:bg-white focus:outline-none transition-all duration-300 hover:border-gray-300"
                      />
                    </div>
                    <div className="group">
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Password*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c1.657 0 3-1.343 3-3V6a3 3 0 10-6 0v2c0 1.657 1.343 3 3 3z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 11h14v10H5z" />
                          </svg>
                        </div>
                        <input
                          type="password"
                          placeholder="● ● ● ● ● ●"
                          className="w-full h-[56px] pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-blue focus:bg-white transition-all duration-300 hover:border-gray-300"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">
                        Re-enter Password*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c1.657 0 3-1.343 3-3V6a3 3 0 10-6 0v2c0 1.657 1.343 3 3 3z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 11h14v10H5z" />
                          </svg>
                        </div>
                        <input
                          type="password"
                          placeholder="● ● ● ● ● ●"
                          className="w-full h-[56px] pl-12 pr-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-blue focus:bg-white transition-all duration-300 hover:border-gray-300"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                <div className="flex flex-col gap-4 pt-6 border-t border-gray-100 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    className="relative w-full sm:w-auto h-[56px] bg-gradient-to-r from-primary-blue to-blue-600 text-white font-semibold rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 px-8">
                      Create Seller Account
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </button>
                  <p className="text-center text-sm text-gray-600 sm:text-left">
                    Already have an account?
                    <a href="/login" className="ml-2 font-semibold text-primary-blue hover:text-peachy-pink transition-colors relative inline-flex group">
                      Log In
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-peachy-pink group-hover:w-full transition-all duration-300" />
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:hidden bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-qblack">Need a hand?</h3>
              <p className="text-sm text-qgraytwo">
                Our onboarding team can walk you through catalogue uploads, fulfilment, and launch promotions.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center text-sm font-semibold text-primary-blue hover:text-peachy-pink transition-colors mt-3"
              >
                Book a 20-minute call
                <svg
                  className="ml-2"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.3335 3.33331H12.6668V10.6666M12.6668 3.33331L3.3335 12.6666"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
