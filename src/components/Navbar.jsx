import { ShieldCheck, Menu } from "lucide-react"
import { useState } from "react"

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-slate-950 shadow-lg shadow-blue-500/30">
            <ShieldCheck size={18} />
          </span>
          <span className="text-white font-semibold tracking-tight">BreachGuard</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="text-blue-200/80 hover:text-white transition" href="#features">Features</a>
          <a className="text-blue-200/80 hover:text-white transition" href="#how">How it works</a>
          <a className="text-blue-200/80 hover:text-white transition" href="#faq">FAQ</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button className="px-3 py-1.5 rounded-lg text-blue-200/90 hover:text-white transition">Log in</button>
          <button className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:bg-blue-50 transition">Get started</button>
        </div>
        <button onClick={()=>setOpen(!open)} className="md:hidden text-blue-200/80">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 px-6 py-3 bg-slate-900/70">
          <div className="flex flex-col gap-2 text-sm">
            <a className="text-blue-200/80" href="#features">Features</a>
            <a className="text-blue-200/80" href="#how">How it works</a>
            <a className="text-blue-200/80" href="#faq">FAQ</a>
          </div>
        </div>
      )}
    </header>
  )
}
