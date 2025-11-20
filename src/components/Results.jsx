function Badge({ children }) {
  return <span className="inline-flex items-center px-2 py-0.5 rounded bg-slate-700 text-blue-200 text-xs mr-2 mb-2">{children}</span>
}

function BreachCard({ b }) {
  return (
    <div className="p-4 rounded-xl border border-slate-700 bg-slate-800/60">
      <div className="flex items-center justify-between">
        <h4 className="text-white font-semibold text-lg">{b.name}</h4>
        {b.isVerified && <span className="text-emerald-400 text-xs">Verified</span>}
      </div>
      <p className="text-blue-200/80 text-sm mt-1">{b.description || 'No description available.'}</p>
      <div className="text-xs text-blue-300/70 mt-2 flex flex-wrap gap-2">
        {b.domain && <Badge>Domain: {b.domain}</Badge>}
        {b.breachDate && <Badge>Breach: {b.breachDate}</Badge>}
        {b.addedDate && <Badge>Added: {b.addedDate}</Badge>}
        {Array.isArray(b.dataClasses) && b.dataClasses.slice(0,6).map((c,i)=> (
          <Badge key={i}>{c}</Badge>
        ))}
      </div>
    </div>
  )
}

export default function Results({ result }){
  if (!result) return null
  return (
    <div className="mt-10 max-w-3xl mx-auto">
      {result.found ? (
        <div>
          <h3 className="text-white text-xl mb-4">We found {result.count} breach{result.count!==1?'es':''} for <span className="font-mono text-blue-300">{result.email}</span></h3>
          <div className="grid md:grid-cols-2 gap-4">
            {result.breaches.map((b,idx)=> <BreachCard key={idx} b={b} />)}
          </div>
          {result.is_demo && (
            <p className="text-blue-300/70 text-sm mt-3">Demo data shown. Add an API key to check live breaches.</p>
          )}
        </div>
      ) : (
        <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700">
          <p className="text-white">Good news — no breaches found for <span className="font-mono text-blue-300">{result.email}</span>.</p>
          {result.is_demo && (
            <p className="text-blue-300/70 text-sm mt-2">Demo mode: try an email at example.com to see a sample result.</p>
          )}
        </div>
      )}
    </div>
  )
}
