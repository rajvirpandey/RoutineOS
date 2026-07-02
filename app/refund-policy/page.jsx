import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f7f3f5] flex items-start justify-center px-4 py-20">
      <div className="w-full max-w-4xl text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-black">
          Refund Policy
        </h1>

        {/* Content */}
        <p className="mt-8 text-gray-800 text-base md:text-2xl leading-9 md:leading-[3rem] max-w-4xl mx-auto px-2">
          Since this is a digital download product, we generally do not offer
          refunds once the file has been downloaded. However, if you face
          technical issues that we cannot resolve, please contact us at{" "}
          <a
            href="mailto:support@osroutine.online"
            className="text-blue-600 underline break-all"
          >
            support@osroutine.online
          </a>
          .
        </p>

        {/* Button */}
        <div className="mt-12">
          <Link href="/">
            <button className="bg-purple-900 hover:bg-purple-950 transition-all text-white px-14 md:px-24 py-4 md:py-5 rounded-full shadow-2xl text-base md:text-xl font-semibold">
              ← Back to Home
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}