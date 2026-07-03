const testimonials = [
  {
    name: 'Prem Patel',
    role: 'College Student',
    text: 'As a college student, my routine was very messy. After using this tracker, I finally have a clear view of my study hours, screen time and health habits. It keeps me honest and accountable.',
    stars: 5,
  },
  {
    name: 'Sneha Malhotra',
    role: 'Working Professional',
    text: 'Using this habit tracker completely changed how I track my goals. The charts and weekly breakdowns help me see exactly where I am slacking and where I am improving.',
    stars: 5,
  },
  {
    name: 'James Alvarez',
    role: 'Wellness Coach',
    text: 'I recommend this to all my clients. The visual progress charts make staying consistent feel natural. The fact it works offline in Excel is a huge bonus.',
    stars: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-pink-400 mb-3">What our users say</p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-12">
          Loved by 2500+ people worldwide
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl p-6 text-left border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.stars)].map((_, s) => (
                  <span key={s} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2].map(i => (
            <span key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-pink-500' : 'bg-gray-200'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
