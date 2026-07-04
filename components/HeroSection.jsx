'use client'
import { useEffect, useRef } from 'react'

export default function HeroSection({ onOpenModal }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => { })
    }
  }, [])

  return (
    <section className="pt-20 pb-0 bg-gradient-to-b from-[#fdf6fb] to-white min-h-screen flex flex-col items-center justify-start">
      {/* Top badge */}
      {/* <div className="mt-10 mb-6 flex items-center gap-2 text-xs text-gray-500 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">
        <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse inline-block"></span>
        Designed with love by OSroutine · One-time purchase · No subscriptions
      </div> */}

      {/* Headline */}
      <div className="text-center px-4 mb-8 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-900 leading-tight mb-4">
          Turn your life{' '}
          <span className="italic text-pink-500">into a game.</span>
        </h1>
        <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          A simple habit tracker that helps you stay consistent and see real progress — built for Excel & Google Sheets.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mb-10">
        <button
          onClick={onOpenModal}
          id="hero-download-btn"
          className="bg-[#3d1a5e] hover:bg-[#4e2278] text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform flex flex-col items-center"
        >
          <span>Download Now</span>
          <span className="text-[9px] tracking-[0.15em] opacity-90 font-semibold">INSTANT ACCESS</span>
        </button>
        <p className="text-xs text-gray-400">Instant download · One-time payment</p>
      </div>

      {/* Trust badges */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-10 text-xs text-gray-500">
        {['✓ One-time purchase', '✓ No subscriptions', '✓ Editable anytime', '✓ Lifetime access'].map(b => (
          <span key={b} className="flex items-center gap-1 font-medium text-gray-600">{b}</span>
        ))}
      </div>

      {/* Video / Dashboard preview */}
      <div className="relative w-full max-w-5xl mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
          {/* Re-use badge */}
          {/* <div className="absolute top-4 right-4 z-10 bg-white rounded-full shadow-md px-3 py-1.5 text-[10px] font-semibold text-gray-700 border border-gray-200">
            🔄 RE-USE<br/>YEAR &amp; YEAR
          </div> */}
          <video
            ref={videoRef}
            src="/habit-tracker.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Rating pill */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-full px-6 py-2 shadow-lg flex items-center gap-3 text-sm w-[350px]">
          <span className="text-yellow-400 text-base">★★★★★</span>
          <span className="font-semibold text-gray-800">4.9</span>
          <span className="text-gray-400">·</span>
          <span className="text-gray-600">2500+ happy customers</span>
        </div>
      </div>

      {/* <div className="h-16" /> */}
    </section>
  )
}
