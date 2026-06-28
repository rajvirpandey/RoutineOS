# RoutineOS – Habit Tracker Landing Page

A Next.js 14 + Tailwind CSS marketing landing page for a habit tracking spreadsheet product, with Razorpay payment integration.

---

## Tech Stack

- **Framework** – Next.js 14 (App Router)
- **Styling** – Tailwind CSS v3
- **Fonts** – Google Fonts (Playfair Display + Inter)
- **Payments** – Razorpay Checkout.js
- **Output** – Static export ready

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## Project Structure

```
habit-tracker/
├── app/
│   ├── layout.jsx          # Root layout, Google Fonts
│   ├── page.jsx            # Main page, modal state
│   └── globals.css         # Tailwind + animations
├── components/
│   ├── Navbar.jsx
│   ├── HeroSection.jsx     # Autoplay video hero
│   ├── ProblemSection.jsx  # Pain points + quote
│   ├── FeaturesSection.jsx # Tabbed image slider
│   ├── DashboardPreview.jsx
│   ├── EverythingSection.jsx
│   ├── TestimonialsSection.jsx
│   ├── CtaSection.jsx
│   ├── FaqSection.jsx      # Accordion
│   ├── Footer.jsx
│   ├── FloatingDownloadButton.jsx
│   └── PurchaseModal.jsx   # Plans + Razorpay
├── public/
│   ├── sl1.webp – sl4.webp # Product screenshots
│   └── habit-tracker.mp4   # Promo video
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## Razorpay Setup

1. Create an account at [razorpay.com](https://razorpay.com)
2. Copy your API key from **Settings → API Keys**
3. Open `components/PurchaseModal.jsx` and replace:

```js
const RAZORPAY_KEY_ID = 'rzp_test_XXXXXXXXXXXXXXXX'
```

> For production, generate a Razorpay **Order ID** on your backend and pass it to the checkout options to prevent amount tampering.

---

## Pricing Plans

| Plan | Price |
|---|---|
| 1 Month Access | ₹39 |
| 6 Months Access | ₹99 |
| Lifetime Access | ₹149 |

---

## Build & Export

```bash
# Static export
npm run build

# Output folder: /out
```

---

## Features

- 📹 Autoplay video hero
- 🖼️ Tabbed product screenshot slider
- 🔔 Floating download button (IntersectionObserver)
- 💳 Purchase modal with plan selection
- ✅ Email + Indian phone validation
- 💰 Razorpay payment gateway
- 📱 Fully responsive

---

## License

MIT © 2024 RoutineOS
