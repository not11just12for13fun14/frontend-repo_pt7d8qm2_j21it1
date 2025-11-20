import { useState } from 'react'
import Hero from './components/Hero'
import Results from './components/Results'

function App() {
  const [result, setResult] = useState(null)
  const [status, setStatus] = useState('idle')

  const checkEmail = async (email) => {
    setStatus('loading')
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    const resp = await fetch(`${baseUrl}/api/check`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
    if (!resp.ok) {
      const txt = await resp.text()
      throw new Error(txt || 'Request failed')
    }
    const data = await resp.json()
    setResult(data)
    setStatus('done')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_30%),radial-gradient(circle_at_80%_50%,rgba(14,165,233,0.12),transparent_30%)]" />

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <Hero onCheck={checkEmail} />
        </div>

        {status === 'loading' && (
          <div className="text-center text-blue-200">Checking breaches…</div>
        )}

        <Results result={result} />

        <footer className="mt-16 text-center text-blue-300/60 text-sm">
          Privacy-first: we only transmit the email you submit for the check. No data is stored beyond the lookup result for analytics purposes.
        </footer>
      </div>
    </div>
  )
}

export default App
