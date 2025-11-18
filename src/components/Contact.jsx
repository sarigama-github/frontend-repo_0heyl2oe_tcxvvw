import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: 'Both', message: '' })
  const [status, setStatus] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${backend}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('sent')
      setForm({ name: '', email: '', phone: '', service: 'Both', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Let’s talk about your growth</h2>
        <p className="mt-2 text-slate-300 text-center">Tell us about your business. We’ll come back with a tailored plan.</p>

        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 text-white">
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" required className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone (optional)" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <select name="service" value={form.service} onChange={handleChange} className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>WordPress Development</option>
              <option>SEO</option>
              <option>Both</option>
              <option>Other</option>
            </select>
          </div>
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project" rows="5" required className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
          <button type="submit" disabled={status==='sending'} className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 font-semibold">
            {status === 'sending' ? 'Sending...' : 'Send inquiry'}
          </button>
          {status === 'sent' && <p className="text-emerald-300">Thanks! We’ll get back to you shortly.</p>}
          {status === 'error' && <p className="text-pink-300">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
