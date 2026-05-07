import { Bird, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2C1810] text-stone-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#F5C518]">
                <Bird className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                Yellow Bird Cafe
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Your neighborhood coffee shop in Mission, Texas. Artisan beverages, warm community.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Hours</h4>
            <div className="space-y-1.5 text-sm text-stone-400">
              <p>Mon: <span className="text-stone-500">CLOSED</span></p>
              <p>Tue - Fri: <span className="text-stone-300">9:00am - 8:00pm</span></p>
              <p>Sat: <span className="text-stone-300">9:00am - 6:00pm</span></p>
              <p>Sun: <span className="text-stone-300">10:00am - 4:00pm</span></p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a href="https://maps.google.com/?q=903+Ragland+Street+Mission+TX+78572" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-stone-400 hover:text-white transition-colors">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                903 Ragland Street, Mission, TX 78572
              </a>
              <a href="tel:9562714600" className="flex items-center gap-2 text-stone-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                (956) 271-4600
              </a>
              <div className="flex items-center gap-3 pt-2">
                <a href="#" className="text-stone-400 hover:text-white transition-colors text-sm font-medium" aria-label="Instagram">
                  Instagram
                </a>
                <a href="#" className="text-stone-400 hover:text-white transition-colors text-sm font-medium" aria-label="Facebook">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-stone-500">
          &copy; 2026 Yellow Bird Coffee Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
