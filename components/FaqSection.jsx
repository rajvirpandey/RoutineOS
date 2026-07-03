'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'Is this a one-time payment?',
    a: 'Yes. You pay once and get lifetime access. No subscriptions.',
  },
  {
    q: 'What happens after I purchase?',
    a: 'You get instant access to download the file. You can start using it within 2 minutes.',
  },
  {
    q: 'Does this work on mobile?',
    a: 'It works best on desktop via Excel or Google Sheets. The Google Sheets version can be accessed on mobile via the Sheets app.',
  },
  {
    q: 'Can I use this offline?',
    a: 'Yes! The Excel version works fully offline. The Google Sheets version requires internet to sync but can be cached for offline use.',
  },
  {
    q: 'Can I edit or customize the habits?',
    a: 'Absolutely. You can add up to 99 habits, rename them, and customize the tracker to fit your lifestyle.',
  },
  {
    q: 'What if I need help?',
    a: "Reach out via the contact form and we'll get back to you within 24 hours.",
  },
]

export default function FaqSection() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-4 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-display font-bold text-gray-900 text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-medium text-gray-800">{faq.q}</span>
                <span className="text-gray-400 text-lg ml-4 flex-shrink-0">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
