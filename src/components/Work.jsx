export default function Work() {
  const projects = [
    { title: 'Immersive Commerce Platform', industry: 'Retail / Luxury', impact: 'Increased engagement by 42%', image: '', color: '#FFF' },
    { title: 'Spatial UX Toolkit', industry: 'Spatial Computing', impact: 'Adopted by global design teams', image: '', color: '#F9F9F7' },
    { title: 'Next-Gen Real Estate Explorer', industry: 'PropTech', impact: 'Reduced decision time 30%', image: '', color: '#FFF' },
    { title: 'AI Design System for Agentic Brands', industry: 'AI / Design', impact: 'Systematized brand behaviors', image: '', color: '#F9F9F7' },
  ]

  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-2xl md:text-3xl text-[#111111]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Selected Work</h2>
          <a href="#contact" className="text-sm text-[#D34A00] hover:underline underline-offset-4">Request full portfolio</a>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <a key={i} href="#contact" className="group rounded-lg border border-[#D9D9D6] bg-white overflow-hidden hover:shadow-sm transition-all">
              <div className="aspect-[16/9] bg-[#F5F5F3]" />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg text-[#111111] group-hover:text-[#D34A00] transition-colors" style={{ fontFamily: 'Space Grotesk, ui-sans-serif' }}>{p.title}</h3>
                  <span className="text-[10px] uppercase tracking-wide text-[#111111]/60">{p.industry}</span>
                </div>
                <p className="mt-2 text-sm text-[#111111]/70">{p.impact}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
