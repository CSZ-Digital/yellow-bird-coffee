"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";

export default function Navbar() {
  const { itemCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🐦</span>
          <span
            className="text-xl font-bold"
            style={{ color: "var(--color-brand)", fontFamily: "'Playfair Display', serif" }}
          >
            Yellow Bird Cafe
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-stone-600 hover:text-stone-900">
            Home
          </Link>
          <Link href="/order" className="text-sm font-medium text-stone-600 hover:text-stone-900">
            Menu
          </Link>
          <Link
            href="/order"
            className="relative inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-full border-2 transition-colors"
            style={{
              borderColor: "var(--color-brand)",
              color: "var(--color-brand)",
            }}
          >
            Order Online
            {itemCount > 0 && (
              <span
                className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center font-bold"
                style={{ backgroundColor: "var(--color-brand)" }}
              >
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
