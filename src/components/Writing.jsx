export default function Writing() {
  const items = [
    { title: 'Agentic Brands: Designing with AI Behaviours', meta: 'Talk · Milano Digital Week', link: '#' },
    { title: 'Spatial Computing for Human Systems', meta: 'Essay', link: '#' },
    { title: 'Gaming & Digital Futures', meta: 'Panel', link: '#' },
    { title: 'Designing for Immersive Commerce', meta: 'Article', link: '#' },
  ]

  return (
    <section id="writing" className="bg-[#F5F5F3] py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl text-[#111111] mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Writing & Speaking</h2>
        <div className="divide-y divide-[#D9D9D6] border-t border-b border-[#D9D9D6] bg-white/70">
          {items.map((item, i) => (
            <a key={i} href={item.link} className="group grid grid-cols-12 gap-4 items-center px-4 md:px-6 py-5 hover:bg-[#FFF6F0]/60 transition-colors">
              <div className="col-span-8">
                <h3 className="text-[#111111] group-hover:text-[#D34A00]" style={{ fontFamily: 'Space Grotesk, ui-sans-serif' }}>{item.title}</h3>
              </div>
              <div className="col-span-4 text-right text-sm text-[#111111]/70">{item.meta}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
