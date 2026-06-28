export default function CtaSection({ onOpenModal }) {
  return (
    <section className="py-24 bg-gradient-to-b from-[#fdf6fb] to-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
          Ready to stay{' '}
          <span className="italic text-pink-500">consistent?</span>
        </h2>
        <p className="text-gray-500 text-base mb-8">
          Download the habit tracker and start under 2 minutes.
        </p>
        <button
          onClick={onOpenModal}
          className="inline-block bg-gray-900 text-white font-semibold px-10 py-4 rounded-full text-base hover:bg-gray-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 transform"
        >
          Download Now — Instant Access
        </button>
        <p className="mt-4 text-xs text-gray-400">One-time purchase · No subscriptions · Lifetime access</p>
      </div>
    </section>
  )
}
