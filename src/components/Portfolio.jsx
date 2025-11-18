function Portfolio() {
  const items = [
    { title: "SaaS Landing", tag: "WordPress", color: "from-indigo-500 to-blue-500" },
    { title: "Local Business", tag: "SEO", color: "from-emerald-500 to-teal-500" },
    { title: "E‑commerce", tag: "WooCommerce", color: "from-fuchsia-500 to-pink-500" },
  ]

  return (
    <section id="work" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Recent work</h2>
          <a href="#contact" className="text-indigo-300 hover:text-white transition">Start your project →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-2xl bg-slate-900/60 border border-white/10">
              <div className={`h-40 bg-gradient-to-br ${item.color}`} />
              <div className="p-5 text-white">
                <div className="text-xs uppercase tracking-wide text-slate-300">{item.tag}</div>
                <div className="text-xl font-semibold mt-1">{item.title}</div>
                <div className="mt-3 text-slate-400 text-sm">Clean, fast, SEO‑ready builds focused on conversion.</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
