import { Shield, Zap, BarChart3, Lock } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Privacy-first",
    desc: "Only the email you enter is transmitted. No selling, no sharing.",
  },
  {
    icon: Zap,
    title: "Fast checks",
    desc: "Get results in seconds with a globally cached edge API.",
  },
  {
    icon: BarChart3,
    title: "Actionable insights",
    desc: "See breach details and exposed data classes to prioritize fixes.",
  },
  {
    icon: Lock,
    title: "Enterprise-ready",
    desc: "SLA, audit logs, SSO and API access for teams.",
  },
]

export default function Features(){
  return (
    <section id="features" className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i)=>{
          const Icon = f.icon
          return (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 hover:border-white/20 transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500/80 to-cyan-400/80 text-slate-950 flex items-center justify-center shadow shadow-blue-500/20">
                <Icon size={18} />
              </div>
              <h3 className="text-white mt-4 font-medium">{f.title}</h3>
              <p className="text-blue-200/80 text-sm mt-1">{f.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
