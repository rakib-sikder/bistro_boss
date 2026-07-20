import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Minus, Plus, Trash2, ShoppingBag, PartyPopper } from "lucide-react";
import { toast } from "sonner";

import { CartContext } from "../../cart/CartProvider";
import PageBanner from "../shared/Component/PageBanner";
import { Button as UiButton } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import img from "../../assets/shop/banner2.jpg";

const Cart = () => {
  const { items, removeItem, updateQty, clearCart, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [checkingOut, setCheckingOut] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    const cancelled = searchParams.get("cancelled");

    if (cancelled) {
      toast.error("Checkout was cancelled — no charge was made.");
      setSearchParams({}, { replace: true });
      return;
    }
    if (!sessionId) return;

    setConfirming(true);
    fetch("/api/confirm-checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Could not confirm your payment");
        setConfirmedOrder(data);
        clearCart();
      })
      .catch((err) => toast.error(err instanceof Error ? err.message : "Could not confirm your payment"))
      .finally(() => setConfirming(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleCheckout = async () => {
    setCheckingOut(true);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not start checkout");
      window.location.href = data.url;
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not start checkout");
      setCheckingOut(false);
    }
  };

  if (confirming) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <div className="size-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <p className="text-neutral-500">Confirming your payment…</p>
      </div>
    );
  }

  if (confirmedOrder) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center px-6 py-24 text-center">
        <Helmet>
          <title>Bistro boss | Order confirmed</title>
        </Helmet>
        <div className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
          <PartyPopper className="size-7" />
        </div>
        <h1 className="mt-6 text-3xl font-semibold">Order confirmed</h1>
        <p className="mt-2 text-neutral-500">Thanks for your order — we're firing it up now.</p>
        <Card className="mt-6 w-full rounded-2xl text-left">
          <CardContent className="space-y-2">
            {confirmedOrder.items.map((it, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-neutral-600">{it.qty} × {it.name}</span>
              </div>
            ))}
            <Separator className="my-2" />
            <div className="flex justify-between text-sm">
              <span className="text-neutral-500">Total paid</span>
              <span className="font-semibold text-primary">${confirmedOrder.amountTotal.toFixed(2)}</span>
            </div>
            {confirmedOrder.customerEmail && (
              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">Receipt sent to</span>
                <span className="font-medium">{confirmedOrder.customerEmail}</span>
              </div>
            )}
          </CardContent>
        </Card>
        <UiButton className="mt-8 rounded-full" onClick={() => navigate("/")}>
          Back to home
        </UiButton>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Bistro boss | Your Cart</title>
      </Helmet>
      <PageBanner img={img} header={"Your Cart"} textDetails={"Review your order before checkout"} />

      <div className="mx-auto max-w-3xl px-6 py-16">
        {items.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-16 text-center text-neutral-500">
            <ShoppingBag className="size-10 text-neutral-300" />
            <p>Your cart is empty.</p>
            <Link to="/menu">
              <UiButton className="rounded-full">Browse the menu</UiButton>
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item._id} className="flex items-center gap-4 rounded-2xl border border-neutral-100 p-4 shadow-sm">
                  <img src={item.image} alt={item.name} className="h-20 w-20 shrink-0 rounded-xl object-cover" />
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-semibold uppercase tracking-wide">{item.name}</h3>
                    <p className="text-sm text-neutral-500">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQty(item._id, item.qty - 1)}
                      className="flex size-7 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 hover:border-primary hover:text-primary"
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      <Minus className="size-3.5" />
                    </button>
                    <span className="w-6 text-center text-sm font-medium">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item._id, item.qty + 1)}
                      className="flex size-7 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 hover:border-primary hover:text-primary"
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      <Plus className="size-3.5" />
                    </button>
                  </div>
                  <p className="w-16 shrink-0 text-right font-semibold text-primary">
                    ${(item.price * item.qty).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeItem(item._id)}
                    className="text-neutral-400 hover:text-red-500"
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              ))}
            </div>

            <Separator className="my-8" />

            <div className="flex items-center justify-between text-lg">
              <span className="font-medium text-neutral-600">Total</span>
              <span className="font-semibold text-primary">${totalPrice.toFixed(2)}</span>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <UiButton variant="outline" className="rounded-full" onClick={clearCart} disabled={checkingOut}>
                Clear cart
              </UiButton>
              <UiButton className="rounded-full" onClick={handleCheckout} disabled={checkingOut}>
                {checkingOut ? "Redirecting to checkout…" : `Checkout · $${totalPrice.toFixed(2)}`}
              </UiButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
