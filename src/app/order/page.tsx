"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider, useCart } from "@/lib/cart";
import { drinks, Drink, DrinkSize } from "@/lib/menu";

function DrinkCard({ drink }: { drink: Drink }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<DrinkSize>("S");
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(drink, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-lg transition-shadow">
      <div
        className="h-44 flex items-center justify-center text-5xl"
        style={{ backgroundColor: "var(--color-yellow-light)" }}
      >
        ☕
      </div>
      <div className="p-5">
        <h3
          className="text-lg font-semibold mb-1"
          style={{ fontFamily: "var(--font-playfair)", color: "var(--color-brand)" }}
        >
          {drink.name}
        </h3>
        <p className="text-stone-500 text-sm mb-4">{drink.description}</p>

        <div className="flex items-center gap-2 mb-4">
          {(["S", "M"] as DrinkSize[]).map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border-2 transition-colors ${
                selectedSize === size
                  ? "text-white"
                  : "text-stone-600 border-stone-300 hover:border-stone-400"
              }`}
              style={
                selectedSize === size
                  ? { backgroundColor: "var(--color-brand)", borderColor: "var(--color-brand)" }
                  : {}
              }
            >
              {size} — ${drink.prices[size].toFixed(2)}
            </button>
          ))}
        </div>

        <button
          onClick={handleAdd}
          className="w-full py-2.5 rounded-full font-semibold text-sm transition-all"
          style={
            added
              ? { backgroundColor: "#16a34a", color: "white" }
              : { backgroundColor: "var(--color-brand)", color: "white" }
          }
        >
          {added ? "Added!" : "Add to Order"}
        </button>
      </div>
    </div>
  );
}

function CartSidebar() {
  const { items, updateQuantity, removeItem, total, itemCount } = useCart();

  if (itemCount === 0) {
    return (
      <div className="bg-white rounded-2xl border border-stone-200 p-6 text-center">
        <p className="text-stone-400 text-lg mb-2">Your order is empty</p>
        <p className="text-stone-400 text-sm">Add some drinks to get started!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-6">
      <h3
        className="text-xl font-bold mb-4"
        style={{ fontFamily: "var(--font-playfair)", color: "var(--color-brand)" }}
      >
        Your Order ({itemCount})
      </h3>

      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={`${item.drink.id}-${item.size}`} className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-stone-800 truncate">{item.drink.name}</p>
              <p className="text-xs text-stone-500">Size: {item.size}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.drink.id, item.size, item.quantity - 1)}
                className="w-7 h-7 rounded-full border border-stone-300 text-sm flex items-center justify-center hover:bg-stone-100"
              >
                −
              </button>
              <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.drink.id, item.size, item.quantity + 1)}
                className="w-7 h-7 rounded-full border border-stone-300 text-sm flex items-center justify-center hover:bg-stone-100"
              >
                +
              </button>
              <button
                onClick={() => removeItem(item.drink.id, item.size)}
                className="text-stone-400 hover:text-red-500 text-sm ml-1"
              >
                ✕
              </button>
            </div>
            <p className="text-sm font-semibold text-stone-700 w-14 text-right">
              ${(item.drink.prices[item.size] * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-stone-200 pt-4 mb-4">
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span style={{ color: "var(--color-brand)" }}>${total.toFixed(2)}</span>
        </div>
      </div>

      <Link
        href="/checkout"
        className="block w-full py-3 rounded-full font-semibold text-center text-white transition-all hover:opacity-90"
        style={{ backgroundColor: "var(--color-brand)" }}
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}

function OrderPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h1
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--color-brand)" }}
          >
            Order Online
          </h1>
          <p className="text-stone-500 mb-10">Pick your favorites, then checkout below.</p>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-6">
                {drinks.map((drink) => (
                  <DrinkCard key={drink.id} drink={drink} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <CartSidebar />
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
      <OrderPage />
    </CartProvider>
  );
}
