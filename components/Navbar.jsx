export default function Navbar({ onOpenModal }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight">
            <span className="text-pink-500">Routine</span>
            <span className="text-gray-800">OS</span>
          </span>
          <span className="hidden sm:inline text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
            Works with Excel & Google Sheets
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:flex items-center gap-1 text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
            ⭐ 4.9 · 25,000+ customers
          </span>
          <button
            onClick={onOpenModal}
            className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            Download Now
          </button>
        </div>
      </div>
    </nav>
  )
}
