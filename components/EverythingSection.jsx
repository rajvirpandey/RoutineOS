const features = [
  { icon: '✅', label: 'Daily Habit Tracking' },
  { icon: '📊', label: 'Automated Progress Charts' },
  { icon: '🗓️', label: 'Weekly & Monthly View' },
  { icon: '♾️', label: 'Add Up to 99 Habits' },
  { icon: '🔥', label: 'Automatic Streaks' },
  { icon: '📋', label: 'Works with Google Sheets & Excel' },
  { icon: '✏️', label: 'Editable Offline' },
]

export default function EverythingSection() {
  return (
    <section className="py-4 bg-[#fdf6fb]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-3">
          Everything you need to
        </h2>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-pink-500 italic mb-12">
          stay consistent
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-xl">{f.icon}</span>
              <span className="text-gray-700 font-medium text-sm">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
