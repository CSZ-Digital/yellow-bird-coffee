"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/cart";
import { drinks } from "@/lib/menu";

function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--color-brand-light)" }}
      >
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 flex flex-col items-center text-center">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--color-brand)" }}
          >
            Yellow Bird Cafe
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-xl mb-8">
            Your neighborhood coffee shop in Mission, Texas. Artisan beverages, warm
            community, one cup at a time.
          </p>
          <Link
            href="/order"
            className="inline-flex items-center px-8 py-3 text-lg font-semibold rounded-full border-2 transition-all hover:scale-105"
            style={{
              borderColor: "var(--color-brand)",
              color: "var(--color-brand)",
              backgroundColor: "white",
            }}
          >
            Order Now
          </Link>
        </div>
      </section>

      {/* Signature Drinks */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--color-brand)" }}
          >
            Signature Drinks
          </h2>
          <p className="text-center text-stone-500 mb-12">Our most-loved creations</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {drinks.map((drink) => (
              <div
                key={drink.id}
                className="bg-stone-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-full h-48 rounded-xl mb-4 flex items-center justify-center text-4xl"
                  style={{ backgroundColor: "var(--color-yellow-light)" }}
                >
                  ☕
                </div>
                <h3
                  className="text-xl font-semibold mb-1"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--color-brand)" }}
                >
                  {drink.name}
                </h3>
                <p className="text-stone-500 text-sm mb-3">{drink.description}</p>
                <p className="font-semibold text-stone-700">
                  S ${drink.prices.S.toFixed(2)} / M ${drink.prices.M.toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/order"
              className="inline-flex items-center px-8 py-3 text-white font-semibold rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--color-brand)" }}
            >
              View Full Menu & Order
            </Link>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--color-brand-light)" }}>
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--color-brand)" }}
            >
              Visit Us
            </h2>
            <p className="text-stone-700 mb-4">
              903 Ragland Street, Mission, TX 78572
            </p>
            <p className="mb-6">
              <a href="tel:9562714600" className="text-stone-700 hover:underline">
                (956) 271-4600
              </a>
            </p>

            <div className="space-y-1 text-sm text-stone-600 mb-6">
              <p><span className="font-semibold w-24 inline-block">Mon:</span> CLOSED</p>
              <p><span className="font-semibold w-24 inline-block">Tue-Fri:</span> 9:00 am - 8:00 pm</p>
              <p><span className="font-semibold w-24 inline-block">Sat:</span> 9:00 am - 6:00 pm</p>
              <p><span className="font-semibold w-24 inline-block">Sun:</span> 10:00 am - 4:00 pm</p>
            </div>

            <a
              href="https://maps.google.com/?q=903+Ragland+Street+Mission+TX+78572"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 rounded-full border-2 font-semibold text-sm transition-colors"
              style={{ borderColor: "var(--color-brand)", color: "var(--color-brand)" }}
            >
              Get Directions
            </a>
          </div>
          <div
            className="h-72 md:h-96 rounded-2xl flex items-center justify-center text-6xl"
            style={{ backgroundColor: "var(--color-yellow-light)" }}
          >
            🏪
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--color-brand)" }}
          >
            Meet the Founder
          </h2>
          <div
            className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center text-5xl"
            style={{ backgroundColor: "var(--color-brand-light)" }}
          >
            👩
          </div>
          <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--color-brand)" }}>
            Tessa
          </h3>
          <p className="text-stone-600 leading-relaxed">
            &ldquo;I graduated from Texas State University in 2022 with a degree in Criminal Justice
            and worked in children&apos;s advocacy. I was born and raised in Mission, Texas. My
            family owns one of the oldest restaurants in the city. I wanted to create a space
            that feels welcoming — a place for community connection over a great cup of
            coffee.&rdquo;
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default function Page() {
  return (
    <CartProvider>
      <HomePage />
    </CartProvider>
  );
}
