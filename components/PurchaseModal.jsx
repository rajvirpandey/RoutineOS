'use client'

import { useState, useEffect } from 'react'

const PLANS = [
  {
    id: '1month',
    label: '1 Month Access',
    price: 39,
    description: 'Ultimate Habit Tracker (1 Month Access)',
  },
  {
    id: '6months',
    label: '6 Months Access',
    price: 99,
    description: 'Ultimate Habit Tracker (6 Months Access)',
  },
  {
    id: 'lifetime',
    label: 'Lifetime Access',
    price: 149,
    description:
      'Ultimate Habit Tracker + Goal Planner + Weight Loss Tracker',
    badge: 'BEST VALUE',
    bonus: 'Includes Goal Planner + Weight Loss Tracker',
  },
]

export default function PurchaseModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedPlan, setSelectedPlan] = useState('1month')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  // status popup state
  const [statusModal, setStatusModal] = useState({
    open: false,
    type: '',
    title: '',
    message: '',
  })

  const showStatus = (type, title, message) => {
    setStatusModal({
      open: true,
      type,
      title,
      message,
    })
  }

  const plan = PLANS.find((p) => p.id === selectedPlan)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const validate = () => {
    const errs = {}

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Enter a valid email address'
    }

    if (!phone || !/^[6-9]\d{9}$/.test(phone)) {
      errs.phone = 'Enter a valid 10-digit Indian mobile number'
    }

    setErrors(errs)

    return Object.keys(errs).length === 0
  }

  const handlePayment = async () => {
    if (!validate()) return

    setLoading(true)

    try {
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: plan.price,
          plan: plan.id,
          email,
        }),
      })

      const order = await response.json()

      if (!response.ok) {
        throw new Error(
          order.error || 'Could not create the payment order'
        )
      }

      const options = {
        key: order.keyId,
        amount: order.amount,
        currency: 'INR',
        name: 'RoutineOS',
        description: plan.description,
        order_id: order.id,
        image: '/favicon.ico',

        prefill: {
          email,
          contact: `+91${phone}`,
        },

        theme: {
          color: '#3d1a5e',
        },

        modal: {
          ondismiss: () => {
            setLoading(false)
          },
        },

        handler: async function (paymentResponse) {
          const verifyResponse = await fetch(
            '/api/verify-payment',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(paymentResponse),
            }
          )

          const result = await verifyResponse.json()

          if (!verifyResponse.ok) {
            showStatus(
              'error',
              'Payment Verification Failed',
              result.paymentVerified
                ? `${result.error}. Please contact support with Payment ID: ${paymentResponse.razorpay_payment_id}`
                : result.error ||
                    'We could not verify your payment.'
            )

            setLoading(false)
            return
          }

          if (result.success) {
            showStatus(
              'success',
              'Payment Successful 🎉',
              `Your payment was successful. Download files will be sent to ${email} shortly.`
            )

            setTimeout(() => {
              onClose()
            }, 10000)
          } else {
            showStatus(
              'error',
              'Verification Failed',
              'We were unable to verify your payment. Please contact support.'
            )
          }

          setLoading(false)
        },
      }

      if (window.Razorpay) {
        const razorpay = new window.Razorpay(options)

        razorpay.on('payment.failed', function (response) {
          setLoading(false)

          showStatus(
            'error',
            'Payment Failed',
            response.error.description ||
              'Transaction could not be completed.'
          )
        })

        razorpay.open()
      } else {
        showStatus(
          'error',
          'Checkout Error',
          'Payment gateway could not load. Please refresh and try again.'
        )

        setLoading(false)
      }
    } catch (error) {
      console.error(error)

      showStatus(
        'error',
        'Something Went Wrong',
        error.message ||
          'Unexpected error occurred. Please try again.'
      )

      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 text-xl"
          >
            ×
          </button>

          <h2 className="text-2xl font-bold mb-1">
            Complete Your Purchase
          </h2>

          <p className="text-sm text-gray-500 mb-6">
            Files will be sent to this email.
          </p>

          <input
            type="email"
            placeholder="Email Address *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 mb-2"
          />

          {errors.email && (
            <p className="text-red-500 text-xs mb-3">
              {errors.email}
            </p>
          )}

          <div className="flex border rounded-xl mb-2">
            <span className="px-3 py-3 bg-gray-50">+91</span>

            <input
              type="tel"
              maxLength={10}
              value={phone}
              onChange={(e) =>
                setPhone(
                  e.target.value.replace(/\D/g, '')
                )
              }
              placeholder="Phone number"
              className="flex-1 px-3"
            />
          </div>

          {errors.phone && (
            <p className="text-red-500 text-xs mb-3">
              {errors.phone}
            </p>
          )}

          <div className="space-y-3 mb-6">
            {PLANS.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPlan(p.id)}
                className={`w-full text-left p-4 rounded-xl border-2 ${
                  selectedPlan === p.id
                    ? 'border-[#3d1a5e] bg-purple-50'
                    : 'border-gray-200'
                }`}
              >
                <div className="flex justify-between">
                  <span>{p.label}</span>
                  <b>₹{p.price}</b>
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-between mb-5 font-bold">
            <span>Total</span>
            <span>₹{plan.price}</span>
          </div>

          <button
            onClick={handlePayment}
            disabled={loading}
            className="w-full bg-[#3d1a5e] text-white py-4 rounded-full font-bold"
          >
            {loading ? 'Processing...' : 'Proceed to Payment'}
          </button>
        </div>
      </div>

      {/* STATUS POPUP */}
      {statusModal.open && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() =>
              setStatusModal((prev) => ({
                ...prev,
                open: false,
              }))
            }
          />

          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-center animate-in fade-in zoom-in duration-300">
            <div
              className={`mx-auto mb-5 flex items-center justify-center w-16 h-16 rounded-full ${
                statusModal.type === 'success'
                  ? 'bg-green-100'
                  : 'bg-red-100'
              }`}
            >
              {statusModal.type === 'success' ? (
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>

            <h3 className="text-xl font-bold mb-3">
              {statusModal.title}
            </h3>

            <p className="text-gray-600 text-sm leading-6 mb-6">
              {statusModal.message}
            </p>

            <button
              onClick={() =>
                setStatusModal((prev) => ({
                  ...prev,
                  open: false,
                }))
              }
              className={`w-full py-3 rounded-full font-semibold ${
                statusModal.type === 'success'
                  ? 'bg-green-600 text-white'
                  : 'bg-[#3d1a5e] text-white'
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  )
}