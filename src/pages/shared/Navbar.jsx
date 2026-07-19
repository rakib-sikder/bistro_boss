import { useContext, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Menu, ShoppingCart, LogOut } from "lucide-react";

import { AuthContext } from "../../userAuthentication/AuthProvider";
import LogoMark from "./Component/LogoMark";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const links = [
  { to: "/", label: "HOME", end: true },
  { to: "/contact", label: "CONTACT US" },
  { to: "/dashboard", label: "DASHBOARD" },
  { to: "/menu", label: "OUR MENU" },
  { to: "/order/salad", label: "OUR SHOP" },
];

const navLinkClass = ({ isActive }) =>
  `transition-colors hover:text-white ${isActive ? "font-bold text-primary" : "text-neutral-200"}`;

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext) ?? {};
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -24,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  }, { scope: navRef });

  const initials = user?.email ? user.email.charAt(0).toUpperCase() : "?";

  return (
    <div
      ref={navRef}
      className="fixed inset-x-0 top-0 z-20 mx-auto flex max-w-screen-xl items-center justify-between gap-4 rounded-b-2xl bg-neutral-900/90 px-4 py-3 text-white shadow-lg shadow-black/20 backdrop-blur lg:px-6"
    >
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="text-neutral-200 hover:bg-white/10 hover:text-white lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu />
        </Button>
        <Link to="/" className="flex items-center gap-2.5 leading-4 text-white">
          <LogoMark className="h-8 w-8" />
          <span className="text-xl font-bold">
            BISTRO <span className="text-primary">BOSS</span>
            <br />
            <span className="text-[10px] font-normal tracking-[0.3em] text-neutral-400">
              RESTAURANT
            </span>
          </span>
        </Link>
      </div>

      <ul className="hidden items-center gap-6 text-xs font-semibold tracking-wide lg:flex">
        {links.map((l) => (
          <li key={l.to}>
            <NavLink to={l.to} end={l.end} className={navLinkClass}>
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-5">
        <NavLink to="/cart" className="relative text-neutral-200 transition-colors hover:text-white">
          <ShoppingCart className="size-5" />
          <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
            7
          </span>
        </NavLink>

        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <Avatar>
                <AvatarFallback className="bg-primary/20 text-primary">{initials}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => logOut?.()}>
                <LogOut /> Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            to="/login"
            className="text-xs font-semibold tracking-wide text-neutral-200 transition-colors hover:text-white"
          >
            SIGN IN
          </Link>
        )}
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="bg-neutral-900 text-neutral-200">
          <SheetHeader>
            <SheetTitle className="text-white">Menu</SheetTitle>
          </SheetHeader>
          <ul className="flex flex-col gap-1 px-4 pb-4 text-sm font-semibold tracking-wide">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5 hover:text-white ${
                      isActive ? "text-primary" : "text-neutral-200"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
