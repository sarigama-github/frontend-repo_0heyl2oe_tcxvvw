function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-300">
        <div className="text-white font-semibold">Dev Hi Tech</div>
        <div className="text-sm">© {new Date().getFullYear()} Dev Hi Tech. All rights reserved.</div>
        <div className="text-sm">Built with WordPress expertise and SEO best practices.</div>
      </div>
    </footer>
  )
}

export default Footer
