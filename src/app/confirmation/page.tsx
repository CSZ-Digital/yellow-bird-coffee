"use client";

import Link from "next/link";
import { CheckCircle, MapPin, Clock, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/cart";
import Navbar from "@/components/Navbar";

function ConfirmationContent() {
  const orderNumber = `YB-${Date.now().toString(36).toUpperCase().slice(-6)}`;

  return (
    <>
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-16 md:py-24" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-md mx-auto text-center px-4">
          <div className="animate-fade-in-up">
            <div
              className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
              style={{ backgroundColor: "#dcfce7" }}
            >
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>

            <h1
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--color-brand)" }}
            >
              Order Confirmed!
            </h1>
            <p className="text-stone-500 mb-2">
              Thank you! Your drinks are being prepared.
            </p>
            <p className="text-sm font-mono text-stone-400 mb-8">
              Order #{orderNumber}
            </p>

            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 mb-6 text-left space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-brand-light)" }}>
                  <MapPin className="w-4 h-4" style={{ color: "var(--color-brand)" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-800">Pickup Location</p>
                  <p className="text-sm text-stone-500">903 Ragland Street, Mission, TX 78572</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-brand-light)" }}>
                  <Clock className="w-4 h-4" style={{ color: "var(--color-brand)" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-800">Estimated Ready</p>
                  <p className="text-sm text-stone-500">10 - 15 minutes</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-700">
              This was a demo order. No payment was processed.
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/order"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm border-2 transition-all hover:bg-[#FCE8E6] active:scale-95"
                style={{ borderColor: "var(--color-brand)", color: "var(--color-brand)" }}
              >
                Order More
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm text-white transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "var(--color-brand)" }}
              >
                Back to Home
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
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
