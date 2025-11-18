import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <nav className="sticky top-0 z-20 backdrop-blur bg-slate-950/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-white">Dev Hi Tech</a>
          <div className="hidden md:flex items-center gap-6 text-slate-300 text-sm">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="/test" className="text-indigo-300 hover:text-white">Backend Test</a>
          </div>
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 text-sm font-semibold">Get a quote</a>
        </div>
      </nav>

      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
