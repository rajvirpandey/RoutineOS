'use client'
import { useState, useEffect } from 'react'

export default function FloatingDownloadButton({ onOpenModal }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show floating button when hero download button is NOT visible
        setVisible(!entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    const target = document.getElementById('hero-download-btn')
    if (target) observer.observe(target)

    return () => {
      if (target) observer.unobserve(target)
    }
  }, [])

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <button
        onClick={onOpenModal}
        className="flex flex-col items-center justify-center bg-[#3d1a5e] hover:bg-[#4e2278] text-white font-bold px-10 py-3.5 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 transform"
        style={{ minWidth: '220px' }}
      >
        <span className="text-base tracking-wide">Download Now</span>
        <span className="text-[10px] font-semibold tracking-[0.15em] opacity-90 mt-0.5">INSTANT ACCESS</span>
      </button>
    </div>
  )
}
