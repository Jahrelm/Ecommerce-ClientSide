import { useRef } from "react";
import { Link } from "react-router-dom";
import SimpleSlider from "../Helpers/SliderCom";
import Star from "../Helpers/icons/Star";
import Layout from "../Partials/Layout";

const stats = [
  { label: "Global sellers", value: "12k+" },
  { label: "Orders delivered", value: "3.5M" },
  { label: "Countries served", value: "84" },
  { label: "Satisfaction score", value: "4.9/5" },
];

const values = [
  {
    title: "Powered by people",
    description:
      "We celebrate the humans behind every package—founders, makers, and parents building meaningful brands.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 12c2.138 0 3.87-1.732 3.87-3.87S14.138 4.26 12 4.26 8.13 5.992 8.13 8.13 9.862 12 12 12z" />
        <path d="M5.75 19.74c0-3.445 2.805-6.25 6.25-6.25s6.25 2.805 6.25 6.25" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Curated discovery",
    description:
      "Smart merchandising, storytelling, and data insights ensure every product finds the right home.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
        <path d="M7 4v3M7 12v5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Built responsibly",
    description:
      "We champion sustainable logistics, conscious shopping, and transparent partnerships at every step.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 21c4.971 0 9-4.029 9-9 0-3.173-1.657-5.957-4.147-7.554L12 21z" />
        <path d="M12 21c-4.971 0-9-4.029-9-9 0-3.173 1.657-5.957 4.147-7.554L12 21z" />
      </svg>
    ),
  },
];

const milestones = [
  {
    year: "2016",
    title: "Marketplace launched",
    description:
      "We opened our digital doors with a mission to help thoughtful brands reach modern families.",
  },
  {
    year: "2018",
    title: "Global fulfilment",
    description:
      "Expanded our logistic network to 25 new hubs, unlocking faster, greener delivery options.",
  },
  {
    year: "2021",
    title: "Seller studio",
    description:
      "Introduced analytics, promo boosts, and brand-story templates inspired by our community feedback.",
  },
  {
    year: "2023",
    title: "Certified impact",
    description:
      "Became a certified climate-positive marketplace, reinvesting in circular packaging initiatives.",
  },
];

export default function About() {
  const slider = useRef(null);
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const prev = () => slider.current?.slickPrev();
  const next = () => slider.current?.slickNext();

  return (
    <Layout>
      <div className="about-page-wrapper w-full bg-off-white relative">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-primary-blue to-blue-500 text-white py-10 sm:py-12 -mt-[30px] mb-8">
          <div className="container-x mx-auto">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold uppercase tracking-wider mb-3">
                About Us
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                About
              </h1>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                Connecting families through quality pre-loved baby items and sustainable shopping.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <section className="grid lg:grid-cols-2 gap-10 lg:gap-16 pb-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-blue/10 to-peachy-pink/10 border border-primary-blue/20">
                  <span className="w-2 h-2 rounded-full bg-success-green animate-pulse"></span>
                  <span className="text-xs font-bold text-primary-blue uppercase tracking-wider">Est. 2016</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-qblack">
                  Curators of meaningful
                  <span className="block bg-gradient-to-r from-primary-blue to-peachy-pink bg-clip-text text-transparent">marketplaces</span>
                </h2>
              </div>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                We connect intentional brands with families who care about quality, sustainability, and story. What started as a local initiative is now a global community building the future of family commerce.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/shop">
                  <button className="group relative h-14 px-8 rounded-2xl bg-gradient-to-r from-primary-blue to-blue-600 text-white font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Marketplace
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="h-14 px-8 rounded-2xl border-2 border-gray-300 bg-white text-gray-700 font-bold shadow-sm hover:border-primary-blue hover:text-primary-blue hover:shadow-md transition-all">
                    Partner with us
                  </button>
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              {/* Main Feature Card */}
              <div className="relative group rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary-blue/5 via-transparent to-peachy-pink/5" />
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary-blue/20 to-peachy-pink/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-blue to-blue-600 flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="px-3 py-1.5 rounded-full bg-success-green/10 text-success-green text-xs font-bold">Active</span>
                  </div>
                  <h3 className="text-2xl font-bold text-qblack mb-2">Building mindful commerce</h3>
                  <p className="text-sm text-gray-600 mb-6">Empowering sustainable shopping since 2016</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="relative group/card cursor-pointer">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-blue to-blue-400 rounded-2xl opacity-0 group-hover/card:opacity-100 blur transition duration-300"></div>
                      <div className="relative rounded-2xl bg-gradient-to-br from-accent-cream to-white border border-primary-blue/10 p-5 hover:shadow-lg transition-shadow">
                        <p className="text-xs uppercase tracking-wider text-primary-blue/70 font-bold">Community impact</p>
                        <p className="text-4xl font-bold text-primary-blue mt-2">126 tons</p>
                        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                          Pre-loved products kept in circulation
                        </p>
                      </div>
                    </div>
                    <div className="relative group/card cursor-pointer">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-peachy-pink to-pink-400 rounded-2xl opacity-0 group-hover/card:opacity-100 blur transition duration-300"></div>
                      <div className="relative rounded-2xl bg-gradient-to-br from-soft-lavender/30 to-white border border-peachy-pink/20 p-5 hover:shadow-lg transition-shadow">
                        <p className="text-xs uppercase tracking-wider text-peachy-pink font-bold">Seller spotlight</p>
                        <p className="text-sm text-gray-700 mt-2 leading-relaxed italic">
                          "Made our brand feel seen."
                        </p>
                        <p className="text-xs uppercase tracking-wider text-gray-500 mt-3 font-semibold">— Little Loom</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group cursor-pointer">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-blue to-blue-400 rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                  <div className="relative rounded-3xl bg-white border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-blue to-blue-600 flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-1">Creators</p>
                    <p className="text-4xl font-bold text-primary-blue group-hover:text-blue-600 transition-colors">36k+</p>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      Shaping the marketplace
                    </p>
                  </div>
                </div>
                <div className="relative group cursor-pointer">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-peachy-pink to-pink-400 rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                  <div className="relative rounded-3xl bg-white border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-peachy-pink to-pink-500 flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-1">Repeat rate</p>
                    <p className="text-4xl font-bold text-peachy-pink group-hover:text-pink-600 transition-colors">92%</p>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      Customer loyalty
                    </p>
                  </div>
                </div>
              </div>

              {/* Weekly Dispatch Card */}
              <div className="relative group rounded-3xl bg-gradient-to-r from-primary-blue via-blue-500 to-blue-600 border border-gray-200 shadow-xl p-6 text-white overflow-hidden hover:shadow-2xl transition-all">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-xs uppercase tracking-wider text-white/90 font-bold">Weekly dispatch</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((idx) => (
                        <img
                          key={idx}
                          src={`${process.env.PUBLIC_URL}/assets/images/comment-user-${idx}.png`}
                          alt="Community member"
                          className="h-12 w-12 rounded-full border-2 border-white shadow-lg"
                        />
                      ))}
                    </div>
                    <div>
                      <p className="text-2xl font-bold">420</p>
                      <p className="text-sm text-white/90">
                        Curated stories delivered
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16 lg:mt-20 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl border border-gray-200 bg-white p-6 lg:p-8 shadow-lg space-y-6">
                <div className="flex items-center gap-3">
                  <span className="h-12 w-12 flex items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 7h16M6 7v10h12V7m-7-3h2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="text-sm uppercase tracking-[0.22em] text-primary-blue">
                    Behind the marketplace
                  </p>
                </div>
                <h2 className="text-2xl lg:text-3xl font-semibold text-qblack leading-tight">
                  The way we work is as thoughtful as the products we showcase.
                </h2>
                <p className="text-sm sm:text-base text-medium-grey leading-relaxed">
                  Our curation team, engineers, storytellers, and seller success leads collaborate daily to pair community insights with conscious commerce. Here’s a glimpse into the studio shaping each release.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-accent-cream to-white px-5 py-4 shadow-md">
                    <p className="text-xs uppercase tracking-[0.22em] text-primary-blue/70">Playbooks</p>
                    <p className="text-lg font-semibold text-qblack mt-1">124 seller experiments</p>
                    <p className="text-xs text-gray-500 mt-2">
                      Each quarter we share research-backed insights to help brands differentiate.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-soft-lavender/30 to-white px-5 py-4 shadow-md">
                    <p className="text-xs uppercase tracking-[0.22em] text-peachy-pink">Circular focus</p>
                    <p className="text-lg font-semibold text-qblack mt-1">62% reused packaging</p>
                    <p className="text-xs text-gray-500 mt-2">
                      We reinvest in carbon-neutral freight and reusable packaging initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 shadow-lg bg-gradient-to-br from-accent-cream to-white px-6 py-7 flex flex-col justify-between">
                  <div className="flex items-center gap-3">
                    <span className="h-10 w-10 flex items-center justify-center rounded-full bg-white/80 text-primary-blue shadow">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 7h16M6 7v10h12V7m-7-3h2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary-blue/80">
                      Studio session
                    </p>
                  </div>
                  <p className="text-[28px] font-semibold text-primary-blue mt-6">
                    3 weekly product labs
                  </p>
                  <p className="text-sm text-primary-blue/80 leading-relaxed">
                    Our curation squads review thousands of products every month to keep the marketplace intentional.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-2xl border border-gray-200 shadow-lg bg-gradient-to-br from-soft-lavender/30 to-white px-6 py-7">
                    <p className="text-xs uppercase tracking-[0.25em] text-peachy-pink">Seller stories</p>
                    <p className="text-[24px] font-semibold text-qblack mt-4">
                      520 narrative shoots
                    </p>
                    <p className="text-sm text-medium-grey leading-relaxed mt-3">
                      Our content team travels to founders' studios to capture the stories behind every product.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-md space-y-2">
                    <p className="text-xs uppercase tracking-[0.3em] text-primary-blue/70">Culture notes</p>
                    <p className="text-sm text-medium-grey leading-relaxed">
                      Bi-weekly open office for sellers, product co-design sessions, and a vibrant parent advisory council keep us grounded in what families actually need.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-14 bg-white border border-gray-200 rounded-2xl shadow-lg p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <p className="text-3xl font-semibold text-primary-blue">{item.value}</p>
                  <p className="text-sm text-gray-500 mt-2 uppercase tracking-widest">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 lg:mt-20 grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full bg-accent-cream px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary-blue border border-primary-blue/20">
                Our mission
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-qblack">
                We exist to help thoughtful products find the families who value them most.
              </h2>
              <p className="text-base text-medium-grey leading-relaxed">
                Every day we invest in better logistics, smarter discovery, and richer storytelling so our sellers can focus on what
                they do best—creating. We believe that commerce can feel personal, delightful, and responsible at scale.
              </p>
            </div>
            <div className="grid gap-5">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-qblack">{value.title}</h3>
                      <p className="text-sm text-medium-grey leading-relaxed mt-1">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 lg:mt-20 grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full bg-accent-cream px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary-blue border border-primary-blue/20">
                Our journey
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-qblack">Milestones the community made possible.</h2>
              <p className="text-base text-medium-grey leading-relaxed">
                From shipping our first order to becoming a global marketplace, every milestone was fueled by the brands and families who believe commerce can be more intentional.
              </p>
            </div>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative pl-8">
                  <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-primary-blue to-peachy-pink text-xs font-semibold text-white shadow" />
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
                    <p className="text-xs uppercase tracking-[0.2em] text-primary-blue">{milestone.year}</p>
                    <h3 className="text-lg font-semibold text-qblack mt-1">{milestone.title}</h3>
                    <p className="text-sm text-medium-grey leading-relaxed mt-2">{milestone.description}</p>
                  </div>
                  {index !== milestones.length - 1 && (
                    <span className="absolute left-[11px] top-6 bottom-[-24px] w-px bg-gradient-to-b from-primary-blue/30 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 lg:mt-20 pb-16">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-8">
              <div>
                <span className="inline-flex items-center rounded-full bg-accent-cream px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary-blue border border-primary-blue/20">
                  Testimonials
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-qblack mt-3">
                  Voices from our community.
                </h2>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="h-12 w-12 flex items-center justify-center rounded-full border border-primary-blue/30 text-primary-blue hover:bg-primary-blue hover:text-white transition"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="h-12 w-12 flex items-center justify-center rounded-full border border-primary-blue/30 text-primary-blue hover:bg-primary-blue hover:text-white transition"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="relative">
              <SimpleSlider selector={slider} settings={settings}>
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="px-3">
                    <div className="h-full rounded-2xl border border-gray-200 bg-white shadow-lg p-8 flex flex-col gap-6">
                      <div className="flex items-center gap-2">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} w="20" h="20" />
                        ))}
                        <span className="text-xs uppercase tracking-[0.2em] text-gray-500 ml-2">5.0 rating</span>
                      </div>
                      <p className="text-base text-medium-grey leading-relaxed">
                        “Toddler Kingdom helped us reach intentional families we’d never find on our own. Their team, storytelling support,
                        and analytics gave us the confidence to scale responsibly and stay true to our brand.”
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/images/comment-user-1.png`}
                            alt="Customer"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-qblack">Amelia Stone</p>
                          <p className="text-xs uppercase tracking-[0.22em] text-gray-400">Founder, Little Loom</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </SimpleSlider>
            </div>
          </section>

          <section className="pb-16">
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-r from-primary-blue via-blue-500 to-peachy-pink text-white shadow-xl px-8 sm:px-12 py-12 sm:py-16">
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">Ready to join?</p>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                    Let’s build the future of family commerce—together.
                  </h2>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    Apply in minutes, connect with our seller studio, and unlock tailored support built for thoughtful brands.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/become-saller">
                      <button className="h-[52px] px-7 rounded-xl bg-white text-primary-blue font-semibold shadow-lg hover:-translate-y-0.5 transition">
                        Start application
                      </button>
                    </Link>
                    <Link to="/contact">
                      <button className="h-[52px] px-7 rounded-xl border border-white/60 text-white font-semibold hover:bg-white/10 transition">
                        Talk with our team
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="grid gap-4 text-sm text-white/80">
                  <div className="rounded-2xl border border-white/30 bg-white/15 backdrop-blur-sm px-5 py-4 shadow-md">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">Concierge onboarding</p>
                    <p className="text-sm leading-relaxed mt-2">
                      “The onboarding team made sure our logistics and brand story were launch ready in under a week.”
                    </p>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/60 mt-3">— Jasper & Co.</p>
                  </div>
                  <div className="rounded-2xl border border-white/30 bg-white/15 backdrop-blur-sm px-5 py-4 shadow-md flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/70">Live support</p>
                      <p className="text-base font-semibold">Response time: 6h</p>
                    </div>
                    <span className="h-10 w-10 flex items-center justify-center rounded-full bg-white/20">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M21 15V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10m18 0v3a2 2 0 01-2 2h-5l-3 3-3-3H5a2 2 0 01-2-2v-3m18 0H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
