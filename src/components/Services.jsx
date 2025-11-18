function Services() {
  const services = [
    {
      title: "WordPress Development",
      desc: "Custom, fast, and secure WordPress sites tailored to your business goals. From corporate pages to landing funnels and blogs.",
      bullets: ["Custom theme setup", "Performance optimization", "Security hardening", "Responsive UI/UX"],
    },
    {
      title: "SEO & Growth",
      desc: "Full-funnel SEO that blends technical optimization, content, and authority building to increase qualified traffic.",
      bullets: ["Technical SEO audit", "On-page optimization", "Content strategy", "Link building"],
    },
    {
      title: "Care & Support",
      desc: "Ongoing maintenance, updates, backups, and support so your site stays healthy and generates results.",
      bullets: ["Monthly updates", "Monitoring & backups", "Issue fixes", "Analytics & reporting"],
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">What we do</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl p-6 bg-white/5 border border-white/10 text-white">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
