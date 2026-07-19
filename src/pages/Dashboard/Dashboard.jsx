import { useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ShoppingBag, UtensilsCrossed, LogOut } from "lucide-react";

import { AuthContext } from "../../userAuthentication/AuthProvider";
import { CartContext } from "../../cart/CartProvider";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const { items, totalCount, totalPrice } = useContext(CartContext);

  if (!user) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center gap-4 px-6 py-24 text-center">
        <Helmet>
          <title>Bistro boss | Dashboard</title>
        </Helmet>
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Members only</p>
        <h1 className="text-2xl font-semibold">Sign in to view your dashboard</h1>
        <p className="text-sm text-neutral-500">
          Track your cart and account details once you&apos;re signed in.
        </p>
        <Link to="/login">
          <Button className="rounded-full">Sign in</Button>
        </Link>
      </div>
    );
  }

  const initials = user.email ? user.email.charAt(0).toUpperCase() : "?";
  const memberSince = user.metadata?.creationTime
    ? new Date(user.metadata.creationTime).toLocaleDateString("en-US", { month: "long", year: "numeric" })
    : null;

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Helmet>
        <title>Bistro boss | Dashboard</title>
      </Helmet>

      <Reveal className="grid gap-6 md:grid-cols-[auto_1fr]">
        <Card className="rounded-2xl">
          <CardContent className="flex flex-col items-center gap-3 py-8 text-center">
            <Avatar size="lg">
              <AvatarFallback className="bg-primary/20 text-lg text-primary">{initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{user.email}</p>
              {memberSince && <p className="text-xs text-neutral-500">Member since {memberSince}</p>}
            </div>
            <Button variant="outline" size="sm" className="rounded-full" onClick={() => logOut()}>
              <LogOut className="size-3.5" /> Sign out
            </Button>
          </CardContent>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="rounded-2xl">
            <CardContent className="flex flex-col gap-2 py-6">
              <ShoppingBag className="size-5 text-primary" />
              <p className="text-2xl font-semibold">{totalCount}</p>
              <p className="text-sm text-neutral-500">
                {totalCount === 1 ? "item" : "items"} in cart · ${totalPrice.toFixed(2)}
              </p>
              <Link to="/cart" className="text-xs font-medium text-primary hover:underline">
                {items.length ? "View cart" : "Start an order"} →
              </Link>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardContent className="flex flex-col gap-2 py-6">
              <UtensilsCrossed className="size-5 text-primary" />
              <p className="text-2xl font-semibold">Explore</p>
              <p className="text-sm text-neutral-500">Browse the full menu and place a new order.</p>
              <Link to="/menu" className="text-xs font-medium text-primary hover:underline">
                Our menu →
              </Link>
            </CardContent>
          </Card>
        </div>
      </Reveal>
    </div>
  );
};

export default Dashboard;
