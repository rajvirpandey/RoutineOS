import { createHmac, timingSafeEqual } from 'node:crypto'
import { Resend } from 'resend'

export const runtime = 'nodejs'

const PRODUCTS = {
  'lifetime': {
    label: 'Lifetime Access',
    amount: 99,
    links: [
      {
        label: 'Download Excel Habit Tracker',
        env: 'EXCEL_HABIT_TRACKER_DOWNLOAD_URL'
      },
      {
        label: 'Download PDF Habit Tracker',
        env: 'PDF_HABIT_TRACKER_DOWNLOAD_URL'
      },
      {
        label: 'Download Excel Goal Planner',
        env: 'EXEL_GOAL_PLANNER_DOWNLOAD_URL'
      },
      {
        label: 'Download Excel Weight Loss Tracker',
        env: 'EXCEL_WEIGHT_LOSS_TRACKER_DOWNLOAD_URL'
      },
      {
        label: 'Download PDF Weight Loss Tracker',
        env: 'PDF_WEIGHT_LOSS_TRACKER_DOWNLOAD_URL'
      }
    ],
  },
}

function razorpayAuthorization(keyId, keySecret) {
  return `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString('base64')}`
}

export async function POST(request) {
  try {
    const {
      razorpay_order_id: orderId,
      razorpay_payment_id: paymentId,
      razorpay_signature: signature,
    } = await request.json()

    const keyId = process.env.RAZORPAY_KEY_ID
    const keySecret = process.env.RAZORPAY_KEY_SECRET

    if (!keyId || !keySecret) {
      return Response.json({ error: 'Payment service is not configured' }, { status: 500 })
    }

    if (!orderId || !paymentId || !signature) {
      return Response.json({ error: 'Missing payment details' }, { status: 400 })
    }

    const expectedSignature = createHmac('sha256', keySecret)
      .update(`${orderId}|${paymentId}`)
      .digest('hex')
    const received = Buffer.from(signature, 'utf8')
    const expected = Buffer.from(expectedSignature, 'utf8')
    const signatureIsValid =
      received.length === expected.length && timingSafeEqual(received, expected)

    if (!signatureIsValid) {
      return Response.json({ success: false, error: 'Invalid payment signature' }, { status: 400 })
    }

    // Read the trusted plan and recipient from the Razorpay order. Do not trust
    // the plan/email values supplied by the browser after payment.
    const orderResponse = await fetch(`https://api.razorpay.com/v1/orders/${orderId}`, {
      headers: { Authorization: razorpayAuthorization(keyId, keySecret) },
      cache: 'no-store',
    })
    const order = await orderResponse.json()

    if (!orderResponse.ok) {
      console.error('Could not retrieve Razorpay order:', order)
      return Response.json(
        { paymentVerified: true, error: 'Payment succeeded, but the order could not be retrieved' },
        { status: 502 },
      )
    }

    const planId = order.notes?.plan
    const email = order.notes?.email
    const product = PRODUCTS[planId]

    if (!product || order.amount !== product.amount * 100) {
      return Response.json(
        { paymentVerified: true, error: 'Payment succeeded, but the purchased plan is invalid' },
        { status: 400 },
      )
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { paymentVerified: true, error: 'Payment succeeded, but the delivery email is invalid' },
        { status: 400 },
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const fromEmail = process.env.RESEND_FROM_EMAIL

    if (!resendApiKey || !fromEmail) {
      console.error('Resend environment variables are not configured')
      return Response.json(
        { paymentVerified: true, error: 'Payment succeeded, but email delivery is not configured' },
        { status: 500 },
      )
    }

    let downloadLinks
    try {
      downloadLinks = product.links.map(link => {
        const value = process.env[link.env]
        const url = new URL(value)

        if (!['http:', 'https:'].includes(url.protocol)) {
          throw new Error(`${link.env} must use HTTP or HTTPS`)
        }

        return { label: link.label, url: url.toString() }
      })
    } catch (error) {
      console.error('Download links are not configured correctly:', error)
      return Response.json(
        { paymentVerified: true, error: 'Payment succeeded, but the download links are unavailable' },
        { status: 500 },
      )
    }

    const linksHtml = downloadLinks
      .map(({ label, url }) => `
        <p style="margin:16px 0">
          <a href="${url}" target="_blank" rel="noopener noreferrer"
             style="display:inline-block;background:#3d1a5e;color:#fff;text-decoration:none;padding:12px 20px;border-radius:999px">
            ${label}
          </a>
        </p>
      `)
      .join('')
    const linksText = downloadLinks.map(({ label, url }) => `${label}: ${url}`).join('\n')

    const resend = new Resend(resendApiKey)
    const { data, error: emailError } = await resend.emails.send(
      {
        from: fromEmail,
        to: email,
        subject: `Your OSroutine Purchase • ${product.label} Download Ready`,

          html: `
             <div style="margin:0;padding:40px 20px;background:#0d0d10;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;color:#e5e7eb;">
      
             <div style="max-width:620px;margin:0 auto;background:#141417;border-radius:20px;overflow:hidden;border:1px solid #232327;">
        
        <!-- Header -->
        <div style="background:linear-gradient(135deg,#2d1457,#7c3aed);padding:32px;text-align:center;">
          <h1 style="margin:0;font-size:28px;font-weight:700;color:#ffffff;">
            OSroutine
          </h1>
          <p style="margin:10px 0 0;color:#ddd;font-size:14px;">
            Digital Product Delivery
          </p>
        </div>

        <!-- Body -->
        <div style="padding:36px;">
          <h2 style="margin:0 0 16px;font-size:22px;color:#f4f4f5;">
            Thank you for your purchase 🎉
          </h2>

          <p style="margin:0 0 18px;font-size:15px;color:#a1a1aa;line-height:1.7;">
            Your order has been successfully confirmed and your digital product is now ready for download.
          </p>

          <div style="background:#1a1a1f;border:1px solid #2a2a30;padding:18px;border-radius:12px;margin-bottom:24px;">
            <p style="margin:0;font-size:15px;color:#d4d4d8;">
              Product Purchased:
              <strong style="color:#ffffff;">${product.label}</strong>
            </p>
          </div>

          <!-- Steps to use -->
          <p style="margin:0 0 8px;font-size:15px;color:#f4f4f5;font-weight:700;">
            ✅ Steps to use:
          </p>
          <p style="margin:0 0 20px;font-size:15px;color:#a1a1aa;line-height:1.7;">
            Please ensure to install <span style="color:#86efac;">Google Sheets</span> to open the tracker in mobile and laptop devices for better compatibility.
          </p>

          <!-- Note box -->
          <div style="border:1px solid #facc15;border-radius:12px;padding:16px 18px;margin-bottom:24px;">
            <p style="margin:0;font-size:13px;letter-spacing:1.5px;color:#facc15;line-height:1.8;">
              ⭐ NOTE: PLEASE MAKE A COPY, DON'T REQUEST EDIT ACCESS.
            </p>
          </div>

          <p style="font-size:15px;margin-bottom:14px;color:#d4d4d8;">
            Access your download files below:
          </p>

          <div style="margin-bottom:24px;">
            ${linksHtml}
          </div>

          <div style="padding:14px 16px;background:#1a1a1f;border-radius:10px;border:1px solid #2a2a30;margin-bottom:24px;">
            <span style="font-size:14px;color:#8b8b93;">Payment ID</span><br />
            <strong style="font-size:14px;color:#f4f4f5;">${paymentId}</strong>
          </div>

          <p style="font-size:14px;color:#8b8b93;line-height:1.6;margin-bottom:8px;">
            Please save this email for your purchase records and future access.
          </p>

          <p style="font-size:14px;color:#8b8b93;line-height:1.6;">
            If you experience any issue accessing your files, simply reply to this email and our team will help you.
          </p>
        </div>

        <!-- Footer -->
        <div style="border-top:1px solid #232327;padding:20px;text-align:center;background:#111113;">
          <p style="margin:0;font-size:13px;color:#71717a;">
            Thank you for choosing <strong style="color:#a1a1aa;">OSroutine</strong><br/>
            Helping you build better systems, habits & consistency.
          </p>
        </div>

      </div>
    </div>
            `,

        text: `
Thank you for your purchase!

Your order has been successfully confirmed.

Product: ${product.label}

Download Links:
${linksText}

Payment ID: ${paymentId}

Please keep this email for your purchase records.

Thank you for choosing OSroutine.
  `,
      },
      { idempotencyKey: `OSroutine-payment-${paymentId}` },
    )

    if (emailError) {
      console.error('Resend email failed:', emailError)
      return Response.json(
        { paymentVerified: true, error: 'Payment succeeded, but the email could not be sent' },
        { status: 502 },
      )
    }

    return Response.json({ success: true, emailSent: true, emailId: data.id })
  } catch (error) {
    console.error('Verify payment error:', error)
    return Response.json({ error: 'Invalid request' }, { status: 400 })
  }
}
