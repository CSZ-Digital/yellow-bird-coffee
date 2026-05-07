"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingBag, Menu, X, Bird } from "lucide-react";
import { useCart } from "@/lib/cart";

export default function Navbar() {
  const { itemCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
            style={{ backgroundColor: "var(--color-yellow)" }}
          >
            <Bird className="w-5 h-5 text-white" />
          </div>
          <span
            className="text-lg font-bold tracking-tight hidden sm:block"
            style={{ color: "var(--color-brand)", fontFamily: "var(--font-playfair)" }}
          >
            Yellow Bird Cafe
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">
            Home
          </Link>
          <Link href="/#drinks" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">
            Menu
          </Link>
          <Link href="/#visit" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">
            Visit
          </Link>
          <Link
            href="/order"
            className="relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full text-white transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "var(--color-brand)" }}
          >
            <ShoppingBag className="w-4 h-4" />
            Order Online
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold bg-[#F5C518] text-[#5C1A1B]">
                {itemCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <Link href="/order" className="relative p-2">
            <ShoppingBag className="w-5 h-5" style={{ color: "var(--color-brand)" }} />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold bg-[#F5C518] text-[#5C1A1B]">
                {itemCount}
              </span>
            )}
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-stone-100 bg-white px-4 py-4 space-y-3 animate-fade-in-up">
          <Link href="/" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-stone-700 py-2">Home</Link>
          <Link href="/#drinks" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-stone-700 py-2">Menu</Link>
          <Link href="/#visit" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-stone-700 py-2">Visit</Link>
          <Link
            href="/order"
            onClick={() => setMobileOpen(false)}
            className="block text-center text-sm font-semibold rounded-full py-2.5 text-white"
            style={{ backgroundColor: "var(--color-brand)" }}
          >
            Order Online
          </Link>
        </div>
      )}
    </nav>
  );
}
