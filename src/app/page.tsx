"use client";

import Link from "next/link";
import { ArrowRight, Clock, MapPin, Phone, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/cart";
import { drinks } from "@/lib/menu";

function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "var(--color-brand)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#F5C518] blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#F5C518] blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-36 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm mb-8 backdrop-blur-sm">
            <Star className="w-3.5 h-3.5 fill-[#F5C518] text-[#F5C518]" />
            Mission, Texas&apos; Favorite Coffee Shop
          </div>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Yellow Bird
            <span className="block text-[#F5C518]">Cafe</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-lg mb-10 leading-relaxed">
            Artisan beverages crafted with care. Warm community vibes, one cup at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/order"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold rounded-full transition-all hover:scale-105 active:scale-95"
              style={{ backgroundColor: "#F5C518", color: "#5C1A1B" }}
            >
              Order Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#visit"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all"
            >
              Visit Us
            </Link>
          </div>
        </div>
      </section>

      {/* Signature Drinks */}
      <section id="drinks" className="py-20 md:py-28" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-yellow)" }}>
              Our Menu
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--color-brand)" }}
            >
              Signature Drinks
            </h2>
            <p className="text-stone-500 max-w-md mx-auto">
              Handcrafted with the finest ingredients, each drink tells a story.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {drinks.map((drink, i) => (
              <div
                key={drink.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div
                  className="h-44 flex items-center justify-center text-5xl relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${drink.accent}15, ${drink.accent}30)` }}
                >
                  <span className="group-hover:scale-125 transition-transform duration-300">
                    {drink.emoji}
                  </span>
                </div>
                <div className="p-5">
                  <h3
                    className="text-lg font-semibold mb-1.5"
                    style={{ fontFamily: "var(--font-playfair)", color: "var(--color-brand)" }}
                  >
                    {drink.name}
                  </h3>
                  <p className="text-stone-500 text-sm mb-4 leading-relaxed">{drink.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-stone-400">
                      S <span className="text-stone-700 font-semibold">${drink.prices.S.toFixed(2)}</span>
                      <span className="mx-2 text-stone-300">/</span>
                      M <span className="text-stone-700 font-semibold">${drink.prices.M.toFixed(2)}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/order"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold rounded-full transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "var(--color-brand)" }}
            >
              View Full Menu & Order
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-yellow)" }}>
              Find Us
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold mb-8"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--color-brand)" }}
            >
              Come Say Hello
            </h2>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-brand-light)" }}>
                  <MapPin className="w-5 h-5" style={{ color: "var(--color-brand)" }} />
                </div>
                <div>
                  <p className="font-medium text-stone-800">903 Ragland Street</p>
                  <p className="text-sm text-stone-500">Mission, TX 78572</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-brand-light)" }}>
                  <Phone className="w-5 h-5" style={{ color: "var(--color-brand)" }} />
                </div>
                <div>
                  <a href="tel:9562714600" className="font-medium text-stone-800 hover:underline">(956) 271-4600</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-brand-light)" }}>
                  <Clock className="w-5 h-5" style={{ color: "var(--color-brand)" }} />
                </div>
                <div className="text-sm text-stone-600 space-y-1">
                  <p className="font-medium text-stone-800">Hours</p>
                  <p>Mon: <span className="text-stone-400">CLOSED</span></p>
                  <p>Tue - Fri: 9:00am - 8:00pm</p>
                  <p>Sat: 9:00am - 6:00pm</p>
                  <p>Sun: 10:00am - 4:00pm</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=903+Ragland+Street+Mission+TX+78572"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 font-semibold text-sm transition-all hover:bg-[#FCE8E6] active:scale-95"
              style={{ borderColor: "var(--color-brand)", color: "var(--color-brand)" }}
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
          </div>

          {/* Map placeholder */}
          <div className="relative">
            <div
              className="aspect-square rounded-3xl flex flex-col items-center justify-center gap-4 shadow-lg"
              style={{ background: "linear-gradient(135deg, #FCE8E6, #FFF8DC)" }}
            >
              <span className="text-7xl">🐦</span>
              <p className="text-sm font-medium" style={{ color: "var(--color-brand)" }}>Mission, TX</p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-[#F5C518] opacity-20 blur-xl" />
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-yellow)" }}>
            Our Story
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-10"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--color-brand)" }}
          >
            Meet the Founder
          </h2>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <div
              className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl shadow-inner"
              style={{ background: "linear-gradient(135deg, #FCE8E6, #FFF8DC)" }}
            >
              👩
            </div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--color-brand)" }}
            >
              Tessa
            </h3>
            <blockquote className="text-stone-600 leading-relaxed text-base md:text-lg italic">
              &ldquo;I graduated from Texas State University in 2022 with a degree in Criminal Justice
              and worked in children&apos;s advocacy. I was born and raised in Mission, Texas. My
              family owns one of the oldest restaurants in the city. I wanted to create a space
              that feels welcoming — a place for community connection over a great cup of
              coffee.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ backgroundColor: "var(--color-brand)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Ready to Order?
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Skip the line. Order ahead and pick up your favorite drinks.
          </p>
          <Link
            href="/order"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold rounded-full transition-all hover:scale-105 active:scale-95"
            style={{ backgroundColor: "#F5C518", color: "#5C1A1B" }}
          >
            Start Your Order
            <ArrowRight className="w-4 h-4" />
          </Link>
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
