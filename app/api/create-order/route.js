const PLANS = {
  'lifetime': 99,
}

export async function POST(request) {
  try {
    const { plan, email } = await request.json()
    const amount = PLANS[plan]

    if (!amount) {
      return Response.json({ error: 'Invalid plan selected' }, { status: 400 })
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'A valid email is required' }, { status: 400 })
    }

    const keyId = process.env.RAZORPAY_KEY_ID
    const keySecret = process.env.RAZORPAY_KEY_SECRET

    if (!keyId || !keySecret) {
      console.error('Razorpay environment variables are not configured')
      return Response.json({ error: 'Payment service is not configured' }, { status: 500 })
    }

    const razorpayResponse = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount * 100,
        currency: 'INR',
        receipt: `OSroutine_${Date.now()}`,
        notes: { plan, email },
      }),
      cache: 'no-store',
    })

    const order = await razorpayResponse.json()

    if (!razorpayResponse.ok) {
      console.error('Razorpay order creation failed:', order)
      return Response.json({ error: 'Could not create the payment order' }, { status: 502 })
    }

    return Response.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId,
    })
  } catch (error) {
    console.error('Create order error:', error)
    return Response.json({ error: 'Invalid request' }, { status: 400 })
  }
}
