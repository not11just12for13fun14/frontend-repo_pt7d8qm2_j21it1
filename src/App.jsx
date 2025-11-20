import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Results from './components/Results'
import Footer from './components/Footer'

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

      <Navbar />

      <main className="relative max-w-6xl mx-auto px-6 py-12">
        <section className="mb-12">
          <Hero onCheck={checkEmail} />
        </section>

        {status === 'loading' && (
          <div className="text-center text-blue-200 animate-pulse">Checking breaches…</div>
        )}

        <Results result={result} />

        <Features />
      </main>

      <Footer />
    </div>
  )
}

export default App
