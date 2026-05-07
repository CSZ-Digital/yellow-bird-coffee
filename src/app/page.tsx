"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/cart";
import { drinks } from "@/lib/menu";

function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section style={{ backgroundColor: "var(--color-pink)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-blue-dark)" }}>
              Mission, Texas
            </p>
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--color-text)" }}
            >
              Yellow Bird
              <span className="block" style={{ color: "var(--color-orange)" }}>Cafe</span>
            </h1>
            <p className="text-lg text-[#7A6B6D] max-w-md mb-10 leading-relaxed">
              Artisan beverages crafted with care. Warm community vibes, one cup at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/order"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold rounded-full text-white transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "var(--color-orange)" }}
              >
                Order Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#visit"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold rounded-full border-2 transition-all hover:bg-white/50"
                style={{ borderColor: "var(--color-blue)", color: "var(--color-blue-dark)" }}
              >
                Visit Us
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full" style={{ backgroundColor: "var(--color-yellow)" }} />
              <Image
                src="/images/yellowbirdlatte.webp"
                alt="Yellow Bird Latte"
                width={400}
                height={400}
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Signature Drinks */}
      <section id="drinks" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-blue-dark)" }}>
              Our Menu
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--color-text)" }}
            >
              Signature Drinks
            </h2>
            <p className="text-[#7A6B6D] max-w-md mx-auto">
              Handcrafted with the finest ingredients, each drink tells a story.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {drinks.map((drink, i) => (
              <div
                key={drink.id}
                className="group bg-white rounded-2xl overflow-hidden border border-pink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="h-52 relative overflow-hidden" style={{ backgroundColor: "var(--color-yellow)" }}>
                  <Image
                    src={drink.image}
                    alt={drink.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3
                    className="text-lg font-semibold mb-1.5"
                    style={{ fontFamily: "var(--font-playfair)", color: "var(--color-text)" }}
                  >
                    {drink.name}
                  </h3>
                  <p className="text-[#7A6B6D] text-sm mb-4 leading-relaxed">{drink.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-[#7A6B6D]">
                      S <span className="font-semibold text-[#3D2C2E]">${drink.prices.S.toFixed(2)}</span>
                      <span className="mx-2 text-pink-200">/</span>
                      M <span className="font-semibold text-[#3D2C2E]">${drink.prices.M.toFixed(2)}</span>
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
              style={{ backgroundColor: "var(--color-orange)" }}
            >
              View Full Menu & Order
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="py-20 md:py-28" style={{ backgroundColor: "var(--color-blue-light)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-orange)" }}>
              Find Us
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold mb-8"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--color-text)" }}
            >
              Come Say Hello
            </h2>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-white/80">
                  <MapPin className="w-5 h-5" style={{ color: "var(--color-blue-dark)" }} />
                </div>
                <div>
                  <p className="font-medium text-[#3D2C2E]">903 Ragland Street</p>
                  <p className="text-sm text-[#7A6B6D]">Mission, TX 78572</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-white/80">
                  <Phone className="w-5 h-5" style={{ color: "var(--color-blue-dark)" }} />
                </div>
                <div>
                  <a href="tel:9562714600" className="font-medium text-[#3D2C2E] hover:underline">(956) 271-4600</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-white/80">
                  <Clock className="w-5 h-5" style={{ color: "var(--color-blue-dark)" }} />
                </div>
                <div className="text-sm text-[#7A6B6D] space-y-1">
                  <p className="font-medium text-[#3D2C2E]">Hours</p>
                  <p>Mon: <span className="opacity-50">CLOSED</span></p>
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
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 font-semibold text-sm transition-all hover:bg-white/50 active:scale-95"
              style={{ borderColor: "var(--color-blue)", color: "var(--color-blue-dark)" }}
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/founder.webp"
              alt="Yellow Bird Coffee Shop storefront"
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-blue-dark)" }}>
            Our Story
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-10"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--color-text)" }}
          >
            Meet the Founder
          </h2>

          <div className="rounded-3xl p-8 md:p-12" style={{ backgroundColor: "var(--color-pink)" }}>
            <div className="w-28 h-28 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/images/founder.webp"
                alt="Tessa - Founder of Yellow Bird Cafe"
                width={112}
                height={112}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--color-text)" }}
            >
              Tessa
            </h3>
            <blockquote className="text-[#7A6B6D] leading-relaxed text-base md:text-lg italic">
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
      <section style={{ backgroundColor: "var(--color-yellow)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#3D2C2E]" style={{ fontFamily: "var(--font-playfair)" }}>
            Ready to Order?
          </h2>
          <p className="text-[#3D2C2E]/60 mb-8 max-w-md mx-auto">
            Skip the line. Order ahead and pick up your favorite drinks.
          </p>
          <Link
            href="/order"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold rounded-full text-white transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "var(--color-orange)" }}
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
