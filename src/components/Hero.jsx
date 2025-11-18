import { useState } from 'react'

function Hero() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simple scroll to contact form
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.25),transparent_45%)]" />
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 ring-1 ring-inset ring-indigo-500/30">Dev Hi Tech • Web & SEO Agency</span>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Build a high‑converting website and rank on Google
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              We craft performant WordPress sites and execute data‑driven SEO strategies so you get more traffic, more leads, and more revenue.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 font-semibold shadow-lg shadow-indigo-600/30 transition">
                Get a free strategy call
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-semibold backdrop-blur border border-white/20 transition">
                See services
              </a>
            </div>
            <div className="mt-6 text-slate-400 text-sm">
              Trusted for WordPress development and SEO campaigns.
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-indigo-500/20 via-blue-500/10 to-transparent blur-2xl rounded-3xl" />
            <div className="relative rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6">
              <div className="grid grid-cols-3 gap-3">
                {["Speed", "Security", "SEO", "Design", "Leads", "Growth"].map((tag) => (
                  <div key={tag} className="text-center py-4 rounded-xl bg-white/5 text-white/90 text-sm border border-white/10">
                    {tag}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-slate-300 text-sm">
                WordPress + SEO done right. Modern design, clean code, measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
