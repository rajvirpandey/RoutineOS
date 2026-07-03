import Image from 'next/image'

export default function DashboardPreview() {
  return (
    <section className="py-4 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: All habits in one dashboard */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src="/sl1.webp"
              alt="Full habit tracker dashboard"
              width={600}
              height={500}
              className="w-full object-cover"
              unoptimized
            />
          </div>
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">01</span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-4">
              All Your Habits in One Dashboard.
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              See daily completions, weekly progress bars, monthly streaks, and your top 10 performing habits — all in a single, beautiful view that makes progress impossible to ignore.
            </p>
            <ul className="space-y-2">
              {['Automated progress charts', 'Top 10 habits ranking', 'Monthly & weekly views', 'Streak tracking built-in'].map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center text-xs">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
          <div className="md:order-2 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src="/sl3.webp"
              alt="Habit checkmarks and momentum"
              width={600}
              height={500}
              className="w-full object-cover"
              unoptimized
            />
          </div>
          <div className="md:order-1">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-pink-400 mb-3">02</span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-4">
              Every checkmark builds momentum.
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Each tick on your tracker is a vote for the person you want to become. The calendar view makes your consistency visual — and your streaks impossible to break.
            </p>
            <ul className="space-y-2">
              {['Daily habit grid', 'Week-by-week checkboxes', 'Motivational affirmations', 'Progress % per habit'].map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-4 h-4 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center text-xs">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
