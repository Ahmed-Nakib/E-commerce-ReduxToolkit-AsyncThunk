import React, { useEffect, useRef, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, User, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  // close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      const btn = mobileMenuRef.current?.querySelector("button[data-close]");
      btn?.focus();
    }
  }, [open]);

  return (
    <header className="w-full bg-white/95 backdrop-blur-md border-b border-slate-200 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold">
                PN
              </div>
              <div className="hidden sm:block">
                <span className="font-semibold text-lg text-slate-900">
                  ShopName
                </span>
                <div className="text-xs text-slate-500 -mt-0.5">
                  Fast & Stylish
                </div>
              </div>
            </Link>
          </div>

          {/* Links */}
          <nav className="hidden md:flex gap-1 items-center ml-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Search"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-slate-50 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              <Search size={16} />
              <span className="text-slate-700">Search</span>
            </button>

            <Link
              to="/cart"
              className="p-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-300 relative"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </Link>
            <button
              aria-haspopup="true"
              aria-label="Account"
              className="p-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              <User size={18} />
            </button>

            {/* Mobile menu */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-controls="mobile-menu"
              aria-expanded={open}
              className="inline-flex items-center justify-center p-2 rounded-md md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <Motion.div
            ref={mobileMenuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute right-0 top-0 h-full w-full max-w-xs bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-500 text-white shadow-2xl p-6 flex flex-col"
          >
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white font-bold">
                  PN
                </div>
                <span className="font-semibold">ShopName</span>
              </Link>

              <div className="flex items-center gap-2">
                <Link
                  to="/signup"
                  className="px-3 py-2 rounded-md text-sm font-semibold bg-white text-indigo-700"
                >
                  Sign up
                </Link>
                <button
                  data-close
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-md hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <nav className="mt-6 flex-1">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className="block w-full text-left px-3 py-3 rounded-md font-medium hover:bg-white/20"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
