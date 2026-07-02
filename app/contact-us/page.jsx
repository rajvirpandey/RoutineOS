import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#f7f3f5] flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-4xl text-center">

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-black">
                    Contact Us
                </h1>

                {/* Intro Text */}
                <p className="mt-8 text-gray-800 text-base md:text-2xl leading-8 md:leading-[3rem] max-w-3xl mx-auto px-2">
                    We are here to help you on your journey to consistency.
                    Whether you have a question about the tracker, need
                    technical support, or just want to share your progress,
                    we’d love to hear from you.
                </p>

                {/* Secondary Heading */}
                <h2 className="mt-12 text-3xl md:text-5xl font-serif font-bold text-black">
                    Get in Touch
                </h2>

                {/* Support Text */}
                <p className="mt-6 text-gray-800 text-base md:text-2xl leading-8 md:leading-[3rem] max-w-3xl mx-auto px-2">
                    For fastest support, please email us directly. We aim to
                    respond to all inquiries within 24 hours.
                </p>

                {/* Email Box */}
                <div className="mt-10 bg-gray-100 border border-gray-200 rounded-xl p-8 md:p-12 max-w-3xl mx-auto shadow-sm">

                    <p className="uppercase font-semibold text-gray-700 text-lg md:text-2xl">
                        Support Email
                    </p>

                    <a
                        href="mailto:support@osroutine.online"
                        className="block mt-6 text-blue-600 font-semibold text-lg md:text-3xl break-all"
                    >

                        support@osroutine.online
                    </a>
                </div>

                {/* Button */}
                <div className="mt-12">
                    <Link href="/">
                        <button className="w-full md:w-auto bg-purple-900 hover:bg-purple-950 transition-all text-white px-16 md:px-24 py-5 rounded-full shadow-2xl font-semibold text-lg md:text-2xl">
                            ← Back to Home
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}