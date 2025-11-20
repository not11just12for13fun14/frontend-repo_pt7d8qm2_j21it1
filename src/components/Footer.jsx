export default function Footer(){
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-blue-300/70 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p>© {new Date().getFullYear()} BreachGuard. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Security</a>
        </div>
      </div>
    </footer>
  )
}
