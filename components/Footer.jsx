export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm font-semibold text-gray-700">
          <span className="text-pink-500">Routine</span>OS
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
          <a href="#" className="hover:text-gray-600 transition-colors">Contact Us</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Terms and Conditions</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Refund Policy</a>
        </div>
        <p className="text-xs text-gray-400">© 2024 RoutineOS. All rights reserved.</p>
      </div>
    </footer>
  )
}
