export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐦</span>
          <span className="text-lg font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Yellow Bird Cafe
          </span>
        </div>
        <div className="text-sm text-center">
          <p>903 Ragland Street, Mission, TX 78572</p>
          <p className="mt-1">
            <a href="tel:9562714600" className="hover:text-white">(956) 271-4600</a>
          </p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white" aria-label="Instagram">Instagram</a>
          <a href="#" className="hover:text-white" aria-label="Facebook">Facebook</a>
        </div>
      </div>
      <div className="text-center text-xs text-stone-500 mt-8">
        &copy; 2026 Yellow Bird Coffee Shop. All rights reserved.
      </div>
    </footer>
  );
}
