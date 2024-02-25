const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const data = await req.json();
  console.log('data: ', data.plan);
  let priceId = process.env.STRIPE_PRICE_ID;

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_HOSTNAME}/quiz?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_HOSTNAME}/quiz?canceled=true`,
    });
    return Response.json(session, {
      status: 200,
    });
  } catch (err) {
    return Response.json(err.message, {
      status: err.statusCode || 500,
    });
  }
}
