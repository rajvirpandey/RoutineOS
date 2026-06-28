const problems = [
  'You start strong, then miss one day.',
  'Tracking stops, motivation fades.',
  'Progress disappears, habits feel pointless.',
]

export default function ProblemSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
          Why staying consistent feels impossible?
        </h2>
        <p className="text-gray-500 mb-10 text-base">
          You don't fail at habits because you're lazy.<br />
          You fail because progress is hard to see.
        </p>

        {/* Problems list */}
        <div className="space-y-3 mb-12 text-left max-w-md mx-auto">
          {problems.map((p, i) => (
            <div key={i} className="flex items-start gap-3 bg-red-50 rounded-xl px-4 py-3">
              <span className="text-red-400 mt-0.5 flex-shrink-0 text-lg">✕</span>
              <span className="text-gray-700 text-sm font-medium">{p}</span>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="bg-gray-900 text-white rounded-2xl px-8 py-8 max-w-lg mx-auto">
          <p className="text-lg sm:text-xl font-display italic leading-relaxed mb-4">
            "You do not rise to the level of your goals. You fall to the level of your systems."
          </p>
          <p className="text-gray-400 text-sm">— James Clear, Atomic Habits</p>
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-gray-400">
          That's why systems matter more than motivation.
        </p>
      </div>
    </section>
  )
}
