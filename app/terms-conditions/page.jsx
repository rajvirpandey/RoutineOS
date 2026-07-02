import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f7f3f5] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl text-center">

        {/* Main Heading */}
        <h1 className="text-3xl md:text-6xl font-serif font-bold text-black leading-tight">
          Terms and Conditions
        </h1>

        <p className="mt-4 text-gray-600 text-sm md:text-lg">
          Last updated: January 2026
        </p>

        {/* Section 1 */}
        <section className="mt-12">
          <h2 className="text-xl md:text-4xl font-serif font-bold">
            1. Introduction
          </h2>

          <p className="mt-4 text-gray-800 text-sm md:text-xl leading-8 md:leading-10 max-w-3xl mx-auto px-2">
            Welcome to Ultimate Habit Tracker. By purchasing and downloading our
            digital products, you agree to be bound by these Terms and Conditions.
            Please read them carefully before making a purchase.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mt-12">
          <h2 className="text-xl md:text-4xl font-serif font-bold">
            2. License and Use
          </h2>

          <p className="mt-4 text-gray-800 text-sm md:text-xl leading-8 md:leading-10 max-w-3xl mx-auto px-2">
            When you purchase the Ultimate Habit Tracker, you are granted a
            non-exclusive, non-transferable license to use the product for
            personal, non-commercial use.
          </p>

          <ul className="mt-6 text-left max-w-3xl mx-auto text-gray-800 space-y-3 text-sm md:text-lg px-4">
            <li>• You <span className="font-bold">MAY</span> use the spreadsheet for your own personal habit tracking.</li>
            <li>• You <span className="font-bold">MAY NOT</span> resell, redistribute, or share the file with others.</li>
            <li>• You <span className="font-bold">MAY NOT</span> claim ownership of the design or structure of the spreadsheet.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mt-12">
          <h2 className="text-xl md:text-4xl font-serif font-bold">
            3. Intellectual Property
          </h2>

          <p className="mt-4 text-gray-800 text-sm md:text-xl leading-8 md:leading-10 max-w-3xl mx-auto px-2">
            All content, designs, and templates included in the Ultimate Habit
            Tracker are the intellectual property of TrackkarStore.
            Unauthorized reproduction or distribution is strictly prohibited.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mt-12">
          <h2 className="text-xl md:text-4xl font-serif font-bold">
            4. Refunds and Returns
          </h2>

          <p className="mt-4 text-gray-800 text-sm md:text-xl leading-8 md:leading-10 max-w-3xl mx-auto px-2">
            Due to the nature of digital goods, which are instantly downloadable,
            all sales are final. We do not offer refunds once the file has been
            sent to you. Please review our{" "}
            <span className="text-blue-600 underline cursor-pointer">
              Refund Policy
            </span>{" "}
            for more details.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mt-12">
          <h2 className="text-xl md:text-4xl font-serif font-bold">
            5. Limitation of Liability
          </h2>

          <p className="mt-4 text-gray-800 text-sm md:text-xl leading-8 md:leading-10 max-w-3xl mx-auto px-2">
            We are not liable for any data loss, damages, or issues arising from
            the use of our spreadsheets. It is your responsibility to keep backups
            of your data.
          </p>
        </section>

        {/* Back Button */}
        <div className="mt-14">
            <Link href="/">
          <button className="bg-purple-900 hover:bg-purple-950 transition-all text-white px-12 md:px-20 py-4 md:py-5 rounded-full shadow-2xl text-base md:text-xl font-semibold">
            ← Back to Home
          </button>
          </Link>
        </div>

      </div>
    </div>
  );
}