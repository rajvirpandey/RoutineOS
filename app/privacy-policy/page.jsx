import Link from 'next/link'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Privacy Policy – RoutineOS',
  description: 'How RoutineOS collects, uses, and protects your information.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f7f3f5] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-[#f7f3f5] text-center">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-black">
          Privacy Policy
        </h1>

        <p className="mt-3 text-gray-600 text-sm md:text-lg">
          Last updated: January 2026
        </p>

        {/* Section 1 */}
        <section className="mt-10 space-y-4">
          <h2 className="text-xl md:text-3xl font-serif font-semibold">
            1. Information We Collect
          </h2>

          <p className="text-gray-700 leading-8 max-w-3xl mx-auto text-sm md:text-lg px-2">
            We collect information you provide directly to us when you make a
            purchase, such as your name and email address. We do not store your
            payment information on our servers; payments are processed securely
            by our third-party payment processors.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl md:text-3xl font-serif font-semibold">
            2. How We Use Your Information
          </h2>

          <p className="text-gray-700 text-sm md:text-lg">
            We use the information we collect to:
          </p>

          <ul className="text-left max-w-2xl mx-auto text-gray-700 space-y-3 text-sm md:text-lg px-4">
            <li>• Process your transactions and deliver your digital product.</li>
            <li>• Send you transaction receipts and download links.</li>
            <li>
              • Respond to your comments, questions, and customer service
              requests.
            </li>
            <li>
              • Send you updates or news about our products (only if you opted
              in).
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl md:text-3xl font-serif font-semibold">
            3. Data Protection
          </h2>

          <p className="text-gray-700 leading-8 max-w-3xl mx-auto text-sm md:text-lg px-2">
            We take reasonable measures to help protect information about you
            from loss, theft, misuse, and unauthorized access.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl md:text-3xl font-serif font-semibold">
            4. Cookies
          </h2>

          <p className="text-gray-700 leading-8 max-w-3xl mx-auto text-sm md:text-lg px-2">
            We may use cookies and similar tracking technologies to track the
            activity on our service and hold certain information. You can
            instruct your browser to refuse all cookies or to indicate when a
            cookie is being sent.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl md:text-3xl font-serif font-semibold">
            5. Contact Us
          </h2>

          <p className="text-gray-700 text-sm md:text-lg">
            If you have any questions about this Privacy Policy, please contact
            us at
          </p>

          <a
            href="mailto:support@osroutine.online"
            className="text-blue-600 underline text-sm md:text-lg break-all"
          >

            support@osroutine.online
          </a>
        </section>

        {/* Button */}
        <div className="mt-12">
          <Link href="/">
            <button className="bg-purple-800 hover:bg-purple-900 transition-all text-white px-10 md:px-16 py-4 rounded-full shadow-xl text-sm md:text-lg font-medium">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
