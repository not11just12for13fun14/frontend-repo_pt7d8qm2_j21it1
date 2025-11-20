import { useState } from 'react'

function Hero({ onCheck }) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    if (!email) {
      setError('Please enter an email')
      return
    }
    setLoading(true)
    try {
      await onCheck(email)
    } catch (e) {
      setError(e.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">BreachGuard</h1>
      <p className="text-lg text-blue-200/90 mb-8">Instantly check if your email appears in public data breaches.</p>

      <form onSubmit={submit} className="max-w-xl mx-auto flex gap-3">
        <input
          type="email"
          placeholder="you@company.com"
          className="flex-1 px-4 py-3 rounded-xl bg-slate-800/70 border border-blue-500/30 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Checking…' : 'Check'}
        </button>
      </form>
      {error && <p className="mt-3 text-red-300">{error}</p>}
    </div>
  )
}

export default Hero
