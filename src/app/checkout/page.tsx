"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CreditCard,
  Lock,
  ShieldCheck,
  User,
  Mail,
  Phone,
  Loader2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider, useCart } from "@/lib/cart";

function SquareLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#006AFF" />
      <rect x="7" y="7" width="10" height="10" rx="2" fill="white" />
    </svg>
  );
}

function CheckoutForm() {
  const { items, total, itemCount, clearCart } = useCart();
  const router = useRouter();
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "applepay">("card");

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
    setTimeout(() => {
      clearCart();
      router.push("/confirmation");
    }, 2500);
  };

  if (itemCount === 0) {
    return (
      <>
        <Navbar />
        <main className="flex-1 flex items-center justify-center py-20" style={{ backgroundColor: "var(--color-cream)" }}>
          <div className="text-center px-4">
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: "var(--color-pink)" }}>
              <CreditCard className="w-8 h-8" style={{ color: "var(--color-orange)" }} />
            </div>
            <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-text)" }}>
              Nothing to checkout
            </h2>
            <p className="text-[#7A6B6D] mb-6">Add some drinks to your order first.</p>
            <Link
              href="/order"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-white"
              style={{ backgroundColor: "var(--color-orange)" }}
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
      <main className="flex-1" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <Link
            href="/order"
            className="inline-flex items-center gap-1.5 text-sm text-[#7A6B6D] hover:text-[#3D2C2E] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Menu
          </Link>

          <h1
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--color-text)" }}
          >
            Checkout
          </h1>

          <div className="grid md:grid-cols-5 gap-8">
            <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5">
              {/* Contact */}
              <div className="bg-white rounded-2xl border border-pink-100 shadow-sm p-6">
                <h2 className="font-bold text-base mb-4 flex items-center gap-2" style={{ color: "var(--color-text)" }}>
                  <User className="w-4 h-4" style={{ color: "var(--color-blue-dark)" }} />
                  Contact Information
                </h2>
                <div className="space-y-3">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pink-300" />
                    <input
                      type="text"
                      placeholder="Full name"
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-pink-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#89CFF0]/30 focus:border-[#89CFF0] transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pink-300" />
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-pink-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#89CFF0]/30 focus:border-[#89CFF0] transition-all"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pink-300" />
                      <input
                        type="tel"
                        placeholder="Phone"
                        required
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-pink-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#89CFF0]/30 focus:border-[#89CFF0] transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment — Square */}
              <div className="bg-white rounded-2xl border border-pink-100 shadow-sm overflow-hidden">
                <div className="px-6 pt-6 pb-4">
                  <div className="flex items-center justify-between mb-1">
                    <h2 className="font-bold text-base flex items-center gap-2" style={{ color: "var(--color-text)" }}>
                      <CreditCard className="w-4 h-4" style={{ color: "var(--color-blue-dark)" }} />
                      Payment
                    </h2>
                    <div className="flex items-center gap-1.5 text-xs text-[#7A6B6D]">
                      <Lock className="w-3 h-3" />
                      Secured by
                      <SquareLogo className="w-4 h-4" />
                      <span className="font-semibold text-[#006AFF]">Square</span>
                    </div>
                  </div>
                </div>

                <div className="px-6 flex gap-2 mb-5">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-medium border-2 transition-all ${
                      paymentMethod === "card"
                        ? "border-[#89CFF0] bg-[#E8F4FD] text-[#5BA3D9]"
                        : "border-pink-200 text-[#7A6B6D] hover:border-pink-300"
                    }`}
                  >
                    <CreditCard className="w-4 h-4 inline mr-1.5" />
                    Credit Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("applepay")}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-medium border-2 transition-all ${
                      paymentMethod === "applepay"
                        ? "border-[#89CFF0] bg-[#E8F4FD] text-[#5BA3D9]"
                        : "border-pink-200 text-[#7A6B6D] hover:border-pink-300"
                    }`}
                  >
                    Apple Pay
                  </button>
                </div>

                {paymentMethod === "card" ? (
                  <div className="px-6 pb-6 space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-[#7A6B6D] mb-1.5">Card Number</label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          required
                          value={form.cardNumber}
                          onChange={(e) => update("cardNumber", formatCard(e.target.value))}
                          className="w-full px-4 py-3 border border-pink-200 rounded-xl text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#89CFF0]/30 focus:border-[#89CFF0] transition-all"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                          <div className="w-8 h-5 rounded bg-[#1A1F71] flex items-center justify-center">
                            <span className="text-[8px] text-white font-bold">VISA</span>
                          </div>
                          <div className="w-8 h-5 rounded bg-stone-800 flex items-center justify-center">
                            <span className="text-[8px] text-white font-bold">MC</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-[#7A6B6D] mb-1.5">Expiry</label>
                        <input
                          type="text"
                          placeholder="MM / YY"
                          required
                          value={form.expiry}
                          onChange={(e) => update("expiry", formatExpiry(e.target.value))}
                          className="w-full px-4 py-3 border border-pink-200 rounded-xl text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#89CFF0]/30 focus:border-[#89CFF0] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#7A6B6D] mb-1.5">CVC</label>
                        <input
                          type="text"
                          placeholder="123"
                          required
                          maxLength={4}
                          value={form.cvc}
                          onChange={(e) => update("cvc", e.target.value.replace(/\D/g, "").slice(0, 4))}
                          className="w-full px-4 py-3 border border-pink-200 rounded-xl text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#89CFF0]/30 focus:border-[#89CFF0] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#7A6B6D] mb-1.5">ZIP Code</label>
                        <input
                          type="text"
                          placeholder="78572"
                          required
                          maxLength={5}
                          value={form.zip}
                          onChange={(e) => update("zip", e.target.value.replace(/\D/g, "").slice(0, 5))}
                          className="w-full px-4 py-3 border border-pink-200 rounded-xl text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#89CFF0]/30 focus:border-[#89CFF0] transition-all"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="px-6 pb-6">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-semibold text-white bg-black flex items-center justify-center gap-2 text-base"
                    >
                      Pay with Apple Pay
                    </button>
                    <p className="text-xs text-center text-[#7A6B6D] mt-3">
                      You&apos;ll confirm with Face ID or Touch ID
                    </p>
                  </div>
                )}
              </div>

              {paymentMethod === "card" && (
                <button
                  type="submit"
                  disabled={processing}
                  className="w-full py-3.5 rounded-xl font-bold text-base text-white transition-all disabled:opacity-60 flex items-center justify-center gap-2"
                  style={{ backgroundColor: "var(--color-blue-dark)" }}
                >
                  {processing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing with Square...
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      Pay ${grandTotal.toFixed(2)}
                    </>
                  )}
                </button>
              )}

              <div className="flex items-center justify-center gap-4 text-xs text-[#7A6B6D]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  PCI Compliant
                </span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5" />
                  256-bit Encryption
                </span>
                <span className="flex items-center gap-1">
                  <SquareLogo className="w-3.5 h-3.5" />
                  Powered by Square
                </span>
              </div>
            </form>

            {/* Order Summary */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl border border-pink-100 shadow-sm overflow-hidden sticky top-24">
                <div className="p-5 border-b border-pink-100" style={{ backgroundColor: "var(--color-yellow)" }}>
                  <h2 className="font-bold text-[#3D2C2E]">Order Summary</h2>
                </div>

                <div className="p-5 space-y-3">
                  {items.map((item) => (
                    <div key={`${item.drink.id}-${item.size}`} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg overflow-hidden shrink-0 relative">
                        <Image src={item.drink.image} alt={item.drink.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-[#3D2C2E] truncate">{item.drink.name}</p>
                        <p className="text-xs text-[#7A6B6D]">{item.size === "S" ? "Small" : "Medium"} x {item.quantity}</p>
                      </div>
                      <p className="text-sm font-semibold text-[#3D2C2E]">
                        ${(item.drink.prices[item.size] * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-pink-100 p-5 space-y-2 text-sm">
                  <div className="flex justify-between text-[#7A6B6D]">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#7A6B6D]">
                    <span>Tax (8.25%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-3 border-t border-pink-100">
                    <span>Total</span>
                    <span style={{ color: "var(--color-orange)" }}>${grandTotal.toFixed(2)}</span>
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
