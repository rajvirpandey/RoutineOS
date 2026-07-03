'use client'
import { useState } from 'react'
import Image from 'next/image'
import ProductGallery from './ProductGallery'

const slides = [
  {
    src: '/sl4.webp',
    label: 'Daily Progress',
    desc: 'Track every habit with a clean daily view and instant progress feedback.',
  },
  {
    src: '/sl2.webp',
    label: 'Monthly Overview',
    desc: 'See your full month at a glance — weekly bars, streaks, and completion rates.',
  },
  {
    src: '/sl3.webp',
    label: 'Weekly Breakdown',
    desc: 'Motivational quotes, habit list, and a week-by-week check-in calendar.',
  },
  {
    src: '/sl1.webp',
    label: 'Full Dashboard',
    desc: 'Everything in one place: charts, stats, top habits, and streak records.',
  },
]

export default function FeaturesSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-4 bg-[#fdf6fb]">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-pink-400 mb-3">Here's how</p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
          This habit tracker makes progress visible
          <span className="block italic text-pink-500">so consistency becomes easier.</span>
        </h2>
        {/* <p className="text-gray-500 text-sm mb-12">Swipe to explore</p> */}

        {/* Tabs */}
        {/* <div className="flex flex-wrap justify-center gap-2 mb-8">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === i
                  ? 'bg-pink-500 text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-pink-300'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div> */}

        {/* Image display */}
        {/* <div className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-200 bg-white max-w-3xl mx-auto">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {slides.map((s, i) => (
              <div key={i} className="w-full flex-shrink-0">
                <Image
                  src={s.src}
                  alt={s.label}
                  width={400}
                  height={200}
                  className="w-full object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div> */}

        {/* Description */}
        {/* <div className="mt-6 max-w-md mx-auto">
          <p className="text-gray-600 text-sm leading-relaxed">{slides[active].desc}</p>
        </div> */}

        {/* Dots */}
        {/* <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                active === i ? 'bg-pink-500 w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div> */}
        
      </div>
      <ProductGallery/>
    </section>
  )
}
