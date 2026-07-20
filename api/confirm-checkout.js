import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { sessionId } = req.body || {};
  if (!sessionId) return res.status(400).json({ error: "Missing sessionId" });

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items"],
    });

    if (session.payment_status !== "paid") {
      return res.status(402).json({ error: "Payment not completed" });
    }

    return res.status(200).json({
      id: session.id,
      amountTotal: (session.amount_total || 0) / 100,
      customerEmail: session.customer_details?.email || null,
      items: (session.line_items?.data || []).map((li) => ({
        name: li.description,
        qty: li.quantity,
      })),
    });
  } catch (err) {
    return res.status(500).json({ error: err.message || "Could not confirm payment" });
  }
}
