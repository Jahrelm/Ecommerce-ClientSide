import InputCom from "../Helpers/InputCom";
import Layout from "../Partials/Layout";

export default function Faq() {
  return (
    <Layout>
      <div className="faq-page-wrapper w-full bg-off-white">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-primary-blue to-blue-500 text-white py-10 sm:py-12 -mt-[30px] mb-8">
          <div className="container-x mx-auto">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold uppercase tracking-wider mb-3">
                Support
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                Frequently Asked Questions
              </h1>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                Find answers to common questions about our marketplace and services.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full py-16">
          <div className="container-x mx-auto max-w-4xl">
            {/* FAQ List */}
            <div className="space-y-4 mb-16">
              <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-qblack mb-3">How do I create an account?</h3>
                <p className="text-gray-600 leading-relaxed">Click the "Sign Up" button in the top right corner, fill in your details, and verify your email address to get started.</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-qblack mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-600 leading-relaxed">We accept all major credit cards, PayPal, Apple Pay, and Google Pay for secure and convenient transactions.</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-qblack mb-3">How long does shipping take?</h3>
                <p className="text-gray-600 leading-relaxed">Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery at checkout.</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-qblack mb-3">What is your return policy?</h3>
                <p className="text-gray-600 leading-relaxed">We offer a 30-day return policy for most items. Products must be unused and in original packaging for a full refund.</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-qblack mb-3">How can I track my order?</h3>
                <p className="text-gray-600 leading-relaxed">Once shipped, you'll receive a tracking number via email. You can also track orders in your account dashboard.</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-qblack mb-3">Do you offer international shipping?</h3>
                <p className="text-gray-600 leading-relaxed">Yes! We ship to over 50 countries worldwide. Shipping costs and delivery times vary by location.</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-qblack mb-3">Can I cancel or modify my order?</h3>
                <p className="text-gray-600 leading-relaxed">You can cancel or modify your order within 24 hours of placement. After that, please contact our support team for assistance.</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-qblack mb-3">How do I contact customer support?</h3>
                <p className="text-gray-600 leading-relaxed">You can reach our support team via email at support@example.com or use the contact form below. We typically respond within 24 hours.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-qblack mb-2">Still have questions?</h2>
                <p className="text-gray-600">Send us a message and we'll get back to you shortly.</p>
              </div>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <InputCom label="First Name*" placeholder="First Name" name="first_name" inputClasses="h-[50px]" />
                  <InputCom label="Last Name*" placeholder="Last Name" name="last_name" inputClasses="h-[50px]" />
                </div>
                <InputCom label="Email Address*" placeholder="your@email.com" name="email" inputClasses="h-[50px]" />
                <div>
                  <h6 className="text-gray-700 text-sm font-semibold mb-2">Message*</h6>
                  <textarea placeholder="Type your message here" className="w-full h-[120px] focus:ring-2 focus:ring-primary-blue focus:outline-none p-4 border-2 border-gray-200 rounded-xl placeholder:text-sm hover:border-gray-300 transition-colors resize-none"></textarea>
                </div>
                <button className="w-full h-[52px] bg-gradient-to-r from-primary-blue to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
