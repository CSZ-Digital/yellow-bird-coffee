"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/cart";
import Navbar from "@/components/Navbar";

function ConfirmationContent() {
  const orderNumber = `YB-${Date.now().toString(36).toUpperCase().slice(-6)}`;

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-stone-50 flex items-center justify-center py-20">
        <div className="max-w-md mx-auto text-center px-4">
          <div
            className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl"
            style={{ backgroundColor: "var(--color-brand-light)" }}
          >
            ✓
          </div>
          <h1
            className="text-3xl font-bold mb-3"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--color-brand)" }}
          >
            Order Confirmed!
          </h1>
          <p className="text-stone-500 mb-2">
            Thank you for your order. Your drinks will be ready for pickup shortly.
          </p>
          <p className="text-sm text-stone-400 mb-8">
            Order #{orderNumber}
          </p>

          <div className="bg-white rounded-2xl border border-stone-200 p-6 mb-8 text-left">
            <h3 className="font-semibold mb-2" style={{ color: "var(--color-brand)" }}>
              Pickup Details
            </h3>
            <p className="text-sm text-stone-600">903 Ragland Street, Mission, TX 78572</p>
            <p className="text-sm text-stone-600 mt-1">Estimated wait: 10–15 minutes</p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-800">
            This was a simulated order. No payment was processed and no real order was placed.
          </div>

          <Link
            href="/"
            className="inline-flex px-8 py-3 rounded-full font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "var(--color-brand)" }}
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function Page() {
  return (
    <CartProvider>
      <ConfirmationContent />
    </CartProvider>
  );
}
