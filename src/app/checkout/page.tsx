"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider, useCart } from "@/lib/cart";

function CheckoutForm() {
  const { items, total, itemCount, clearCart } = useCart();
  const router = useRouter();
  const [processing, setProcessing] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    zip: "",
  });

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const formatCard = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(\d{4})(?=\d)/g, "$1 ");
  };

  const formatExpiry = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 4);
    if (digits.length >= 3) return digits.slice(0, 2) + " / " + digits.slice(2);
    return digits;
  };

  const tax = total * 0.0825;
  const grandTotal = total + tax;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      router.push("/confirmation");
    }, 2000);
  };

  if (itemCount === 0) {
    return (
      <>
        <Navbar />
        <main className="flex-1 bg-stone-50 flex items-center justify-center py-20">
          <div className="text-center">
            <p className="text-5xl mb-4">🛒</p>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--color-brand)" }}>
              Your cart is empty
            </h2>
            <p className="text-stone-500 mb-6">Add some drinks before checking out.</p>
            <Link
              href="/order"
              className="inline-flex px-6 py-2.5 rounded-full font-semibold text-white"
              style={{ backgroundColor: "var(--color-brand)" }}
            >
              Browse Menu
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 py-10">
          <Link href="/order" className="text-sm text-stone-500 hover:text-stone-700 mb-4 inline-block">
            ← Back to Menu
          </Link>

          <h1
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--color-brand)" }}
          >
            Checkout
          </h1>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Payment Form */}
            <form onSubmit={handleSubmit} className="md:col-span-3 space-y-6">
              {/* Contact */}
              <div className="bg-white rounded-2xl border border-stone-200 p-6">
                <h2 className="font-bold text-lg mb-4" style={{ color: "var(--color-brand)" }}>
                  Contact Info
                </h2>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C1A1B]/30 focus:border-[#5C1A1B]"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C1A1B]/30 focus:border-[#5C1A1B]"
                    />
                    <input
                      type="tel"
                      placeholder="Phone"
                      required
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C1A1B]/30 focus:border-[#5C1A1B]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="bg-white rounded-2xl border border-stone-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-lg" style={{ color: "var(--color-brand)" }}>
                    Payment
                  </h2>
                  <span className="text-xs text-stone-400 bg-stone-100 px-2 py-1 rounded-full">
                    SIMULATED — no real charge
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="4242 4242 4242 4242"
                      required
                      value={form.cardNumber}
                      onChange={(e) => update("cardNumber", formatCard(e.target.value))}
                      className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C1A1B]/30 focus:border-[#5C1A1B]"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1 text-stone-400">
                      <span className="text-lg">💳</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <input
                      type="text"
                      placeholder="MM / YY"
                      required
                      value={form.expiry}
                      onChange={(e) => update("expiry", formatExpiry(e.target.value))}
                      className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C1A1B]/30 focus:border-[#5C1A1B]"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      required
                      maxLength={4}
                      value={form.cvc}
                      onChange={(e) => update("cvc", e.target.value.replace(/\D/g, "").slice(0, 4))}
                      className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C1A1B]/30 focus:border-[#5C1A1B]"
                    />
                    <input
                      type="text"
                      placeholder="ZIP"
                      required
                      maxLength={5}
                      value={form.zip}
                      onChange={(e) => update("zip", e.target.value.replace(/\D/g, "").slice(0, 5))}
                      className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C1A1B]/30 focus:border-[#5C1A1B]"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={processing}
                className="w-full py-3.5 rounded-full font-bold text-lg text-white transition-all disabled:opacity-60"
                style={{ backgroundColor: "var(--color-brand)" }}
              >
                {processing ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </span>
                ) : (
                  `Pay $${grandTotal.toFixed(2)}`
                )}
              </button>

              <p className="text-xs text-center text-stone-400">
                This is a simulated payment. No real transaction will occur.
              </p>
            </form>

            {/* Order Summary */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sticky top-24">
                <h2 className="font-bold text-lg mb-4" style={{ color: "var(--color-brand)" }}>
                  Order Summary
                </h2>

                <div className="space-y-3 mb-4">
                  {items.map((item) => (
                    <div key={`${item.drink.id}-${item.size}`} className="flex justify-between text-sm">
                      <span className="text-stone-600">
                        {item.drink.name} ({item.size}) × {item.quantity}
                      </span>
                      <span className="font-medium">
                        ${(item.drink.prices[item.size] * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-stone-200 pt-3 space-y-2 text-sm">
                  <div className="flex justify-between text-stone-500">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-stone-500">
                    <span>Tax (8.25%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-stone-200">
                    <span>Total</span>
                    <span style={{ color: "var(--color-brand)" }}>${grandTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
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
      <CheckoutForm />
    </CartProvider>
  );
}
