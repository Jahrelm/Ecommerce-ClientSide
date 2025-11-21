import Layout from "../Partials/Layout";

const sections = [
    {
        id: "introduction",
        title: "Introduction",
        content: `At Toddler Kingdom Pre-Loved Market, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our marketplace platform.`,
    },
    {
        id: "information-collection",
        title: "Information We Collect",
        content: `We collect information that you provide directly to us, including:`,
        list: [
            "Account information (name, email address, password)",
            "Profile information (shipping address, phone number)",
            "Payment information (processed securely through our payment partners)",
            "Listing information for sellers (product descriptions, photos, pricing)",
            "Communication data (messages between buyers and sellers)",
            "Transaction history and purchase records",
        ],
    },
    {
        id: "information-use",
        title: "How We Use Your Information",
        content: `We use the information we collect to:`,
        list: [
            "Facilitate transactions between buyers and sellers",
            "Verify seller accounts and maintain marketplace integrity",
            "Process payments and prevent fraudulent transactions",
            "Communicate with you about orders, listings, and account updates",
            "Improve our platform and develop new features",
            "Send promotional communications (with your consent)",
        ],
    },
    {
        id: "information-sharing",
        title: "Information Sharing",
        content: `We may share your information in the following circumstances:`,
        list: [
            "With other users to facilitate transactions (e.g., sharing shipping addresses)",
            "With service providers who assist in operating our platform",
            "With payment processors to complete transactions",
            "When required by law or to protect our legal rights",
            "In connection with a business transfer or acquisition",
        ],
        note: "We never sell your personal information to third parties for marketing purposes.",
    },
    {
        id: "data-security",
        title: "Data Security",
        content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.`,
    },
    {
        id: "your-rights",
        title: "Your Privacy Rights",
        content: `You have the right to:`,
        list: [
            "Access and review your personal information",
            "Request correction of inaccurate data",
            "Request deletion of your account and data",
            "Opt-out of marketing communications",
            "Export your data in a portable format",
        ],
    },
    {
        id: "cookies",
        title: "Cookies and Tracking",
        content: `We use cookies and similar tracking technologies to enhance your experience, analyze site usage, and assist in our marketing efforts. You can control cookie preferences through your browser settings.`,
    },
    {
        id: "children",
        title: "Children's Privacy",
        content: `Our platform is designed for parents and caregivers. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child, please contact us immediately.`,
    },
    {
        id: "updates",
        title: "Policy Updates",
        content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date.`,
    },
    {
        id: "contact",
        title: "Contact Us",
        content: `If you have questions or concerns about this Privacy Policy or our data practices, please contact us:`,
        contact: {
            email: "privacy@toddlerkingdom.com",
            address: "Toddler Kingdom Pre-Loved Market, Privacy Department",
        },
    },
];

export default function PrivacyPolicy() {
    return (
        <Layout>
            <div className="privacy-policy-page w-full bg-gradient-to-b from-gray-50 to-white">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-primary-blue to-blue-500 text-white py-10 sm:py-12 -mt-[30px] mb-8">
                    <div className="container-x mx-auto">
                        <div className="max-w-3xl">
                            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold uppercase tracking-wider mb-3">
                                Last Updated: November 2024
                            </span>
                            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                                Privacy Policy
                            </h1>
                            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                                Your privacy matters to us. Learn how we collect, use, and protect your personal information.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container-x mx-auto py-16">
                    <div className="max-w-4xl mx-auto">
                        {/* Content Sections */}
                        <div className="space-y-16">
                            {sections.map((section, index) => (
                                <div
                                    key={section.id}
                                    id={section.id}
                                    className="scroll-mt-24"
                                >
                                    <div className="flex gap-6">
                                        {/* Number */}
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-peachy-pink to-soft-lavender flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                                {index + 1}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h2 className="text-2xl font-bold text-qblack mb-4">
                                                {section.title}
                                            </h2>
                                            <p className="text-base text-gray-700 leading-relaxed mb-6">
                                                {section.content}
                                            </p>

                                            {section.list && (
                                                <div className="space-y-3 mb-6">
                                                    {section.list.map((item, idx) => (
                                                        <div key={idx} className="flex items-start gap-3">
                                                            <div className="flex-shrink-0 mt-1.5">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-peachy-pink"></div>
                                                            </div>
                                                            <p className="text-base text-gray-700 leading-relaxed">
                                                                {item}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {section.note && (
                                                <div className="mt-6 p-4 bg-accent-cream/30 border-l-4 border-peachy-pink rounded-r-lg">
                                                    <p className="text-sm text-gray-700 leading-relaxed">
                                                        <strong className="text-peachy-pink">Important:</strong> {section.note}
                                                    </p>
                                                </div>
                                            )}

                                            {section.contact && (
                                                <div className="mt-6 p-6 bg-gray-50 rounded-xl border border-gray-200">
                                                    <div className="space-y-3">
                                                        <p className="text-base text-gray-700">
                                                            <strong className="text-qblack">Email:</strong>{' '}
                                                            <a href={`mailto:${section.contact.email}`} className="text-peachy-pink hover:underline font-medium">
                                                                {section.contact.email}
                                                            </a>
                                                        </p>
                                                        <p className="text-base text-gray-700">
                                                            <strong className="text-qblack">Address:</strong> {section.contact.address}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer Note */}
                        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
                            <p className="text-gray-600">
                                Thank you for trusting Toddler Kingdom with your information. We're committed to protecting your privacy.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Illustration Section */}
                <div className="bg-white border-t border-gray-200 py-16">
                    <div className="container-x mx-auto">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                {/* Left Content */}
                                <div>
                                    <h2 className="text-3xl font-bold text-qblack mb-6">
                                        Your Privacy is Important to Us
                                    </h2>
                                    <p className="text-base text-gray-700 leading-relaxed mb-6">
                                        At Toddler Kingdom, we respect your privacy regarding any information we may collect from you across our website and other sites we own and operate.
                                    </p>

                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-lg font-bold text-qblack mb-3">We Only Collect What We Need</h3>
                                            <p className="text-base text-gray-700 leading-relaxed">
                                                We only collect information about you if we have a reason to do so – for example, to provide our services, to communicate with you, or to make our services better.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-bold text-qblack mb-3">Your Data is Secure</h3>
                                            <p className="text-base text-gray-700 leading-relaxed">
                                                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or destruction.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-bold text-qblack mb-3">You Have Control</h3>
                                            <p className="text-base text-gray-700 leading-relaxed">
                                                You can access, update, or delete your personal information at any time. We believe you should have control over your data.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Illustration */}
                                <div className="relative">
                                    <div className="relative w-full aspect-square">
                                        {/* Illustration placeholder - you can replace with actual SVG or image */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 via-peachy-pink/10 to-soft-lavender/10 rounded-3xl flex items-center justify-center">
                                            <div className="text-center p-8">
                                                <svg className="w-48 h-48 mx-auto mb-4 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                                <p className="text-lg font-semibold text-qblack">Your Data is Protected</p>
                                                <p className="text-sm text-gray-600 mt-2">We use industry-standard security measures</p>
                                            </div>
                                        </div>
                                        {/* Decorative elements */}
                                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-peachy-pink/20 rounded-full blur-2xl"></div>
                                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-blue/20 rounded-full blur-2xl"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
