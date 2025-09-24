const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = async function (req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { amount } = req.body;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Panier MAPS BUSINESS" },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.origin}/payment-success?amount=${amount / 100}`,
      cancel_url: `${req.headers.origin}/cart`,
    });
    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
