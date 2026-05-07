"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Minus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
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
    <div className="group bg-white rounded-2xl border border-pink-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="h-44 relative overflow-hidden" style={{ backgroundColor: "var(--color-yellow)" }}>
        <Image
          src={drink.image}
          alt={drink.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <h3
          className="text-lg font-semibold mb-1"
          style={{ fontFamily: "var(--font-playfair)", color: "var(--color-text)" }}
        >
          {drink.name}
        </h3>
        <p className="text-[#7A6B6D] text-sm mb-4 leading-relaxed">{drink.description}</p>

        <div className="flex gap-2 mb-4">
          {(["S", "M"] as DrinkSize[]).map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`flex-1 py-2 rounded-xl text-sm font-medium border-2 transition-all ${
                selectedSize === size
                  ? "text-white border-transparent shadow-sm"
                  : "text-[#7A6B6D] border-pink-200 hover:border-pink-300"
              }`}
              style={
                selectedSize === size
                  ? { backgroundColor: "var(--color-orange)" }
                  : {}
              }
            >
              {size === "S" ? "Small" : "Medium"} &middot; ${drink.prices[size].toFixed(2)}
            </button>
          ))}
        </div>

        <button
          onClick={handleAdd}
          className="w-full py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all active:scale-95"
          style={
            added
              ? { backgroundColor: "#16a34a", color: "white" }
              : { backgroundColor: "var(--color-yellow)", color: "var(--color-text)" }
          }
        >
          {added ? (
            "Added!"
          ) : (
            <>
              <Plus className="w-4 h-4" />
              Add to Order
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function CartSidebar() {
  const { items, updateQuantity, removeItem, total, itemCount } = useCart();

  if (itemCount === 0) {
    return (
      <div className="bg-white rounded-2xl border border-pink-100 p-8 text-center">
        <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: "var(--color-pink)" }}>
          <ShoppingBag className="w-7 h-7" style={{ color: "var(--color-orange)" }} />
        </div>
        <p className="font-medium text-[#3D2C2E] mb-1">Your order is empty</p>
        <p className="text-[#7A6B6D] text-sm">Add some drinks to get started!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-pink-100 shadow-sm overflow-hidden">
      <div className="p-5 border-b border-pink-100" style={{ backgroundColor: "var(--color-yellow)" }}>
        <h3 className="text-lg font-bold text-[#3D2C2E] flex items-center gap-2">
          <ShoppingBag className="w-5 h-5" />
          Your Order
          <span className="ml-auto text-sm font-normal text-[#3D2C2E]/60">{itemCount} item{itemCount !== 1 && "s"}</span>
        </h3>
      </div>

      <div className="p-5 space-y-4">
        {items.map((item, i) => (
          <div
            key={`${item.drink.id}-${item.size}`}
            className="flex items-center gap-3 animate-slide-in"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 relative">
              <Image src={item.drink.image} alt={item.drink.name} fill className="object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-[#3D2C2E] truncate">{item.drink.name}</p>
              <p className="text-xs text-[#7A6B6D]">{item.size === "S" ? "Small" : "Medium"}</p>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => updateQuantity(item.drink.id, item.size, item.quantity - 1)}
                className="w-7 h-7 rounded-lg border border-pink-200 flex items-center justify-center hover:bg-pink-50 transition-colors"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="text-sm font-semibold w-5 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.drink.id, item.size, item.quantity + 1)}
                className="w-7 h-7 rounded-lg border border-pink-200 flex items-center justify-center hover:bg-pink-50 transition-colors"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
            <p className="text-sm font-semibold text-[#3D2C2E] w-14 text-right">
              ${(item.drink.prices[item.size] * item.quantity).toFixed(2)}
            </p>
            <button
              onClick={() => removeItem(item.drink.id, item.size)}
              className="text-pink-300 hover:text-red-500 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="border-t border-pink-100 p-5">
        <div className="flex justify-between font-bold text-lg mb-4">
          <span>Total</span>
          <span style={{ color: "var(--color-orange)" }}>${total.toFixed(2)}</span>
        </div>
        <Link
          href="/checkout"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98]"
          style={{ backgroundColor: "var(--color-orange)" }}
        >
          Checkout
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

function OrderPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="mb-10">
            <Link href="/" className="text-sm text-[#7A6B6D] hover:text-[#3D2C2E] transition-colors mb-3 inline-block">
              &larr; Back to Home
            </Link>
            <h1
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--color-text)" }}
            >
              Order Online
            </h1>
            <p className="text-[#7A6B6D] mt-2">Pick your favorites, then checkout.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-5">
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
