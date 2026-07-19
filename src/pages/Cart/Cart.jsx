import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

import { CartContext } from "../../cart/CartProvider";
import PageBanner from "../shared/Component/PageBanner";
import { Button as UiButton } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import img from "../../assets/shop/banner2.jpg";

const Cart = () => {
  const { items, removeItem, updateQty, clearCart, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    toast.success("Order placed! Thanks for choosing Bistro Boss.");
    navigate("/");
  };

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
              <UiButton variant="outline" className="rounded-full" onClick={clearCart}>
                Clear cart
              </UiButton>
              <UiButton className="rounded-full" onClick={handleCheckout}>
                Checkout
              </UiButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
