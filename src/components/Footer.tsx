import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-[#7A6B6D]" style={{ backgroundColor: "var(--color-pink)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.webp"
              alt="Yellow Bird Coffee Shop"
              width={140}
              height={56}
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-[#7A6B6D] leading-relaxed">
              Your neighborhood coffee shop in Mission, Texas. Artisan beverages, warm community.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold text-[#3D2C2E] uppercase tracking-wider mb-4">Hours</h4>
            <div className="space-y-1.5 text-sm">
              <p>Mon: <span className="text-[#3D2C2E]/50">CLOSED</span></p>
              <p>Tue - Fri: <span className="text-[#3D2C2E]">9:00am - 8:00pm</span></p>
              <p>Sat: <span className="text-[#3D2C2E]">9:00am - 6:00pm</span></p>
              <p>Sun: <span className="text-[#3D2C2E]">10:00am - 4:00pm</span></p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-[#3D2C2E] uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a href="https://maps.google.com/?q=903+Ragland+Street+Mission+TX+78572" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-[#3D2C2E] transition-colors">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                903 Ragland Street, Mission, TX 78572
              </a>
              <a href="tel:9562714600" className="flex items-center gap-2 hover:text-[#3D2C2E] transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                (956) 271-4600
              </a>
              <div className="flex items-center gap-4 pt-2">
                <a href="#" className="hover:text-[#3D2C2E] transition-colors text-sm font-medium">Instagram</a>
                <a href="#" className="hover:text-[#3D2C2E] transition-colors text-sm font-medium">Facebook</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3D2C2E]/10 mt-10 pt-6 text-center text-xs text-[#7A6B6D]">
          &copy; 2026 Yellow Bird Coffee Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
