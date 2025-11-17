export default function About() {
  return (
    <section id="about" className="bg-[#F5F5F3] py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="aspect-[3/4] rounded-md overflow-hidden border border-[#D9D9D6] bg-white">
              <div className="w-full h-full bg-gradient-to-br from-white to-[#F0F0EE] flex items-center justify-center text-[#D9D9D6]">
                {/* Minimal portrait placeholder */}
                <div className="w-24 h-24 rounded-full border border-[#D9D9D6]" />
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <h2 className="text-2xl md:text-3xl text-[#111111] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>About</h2>
            <p className="text-[#111111]/80 leading-relaxed" style={{ fontFamily: 'Space Grotesk, ui-sans-serif' }}>
              Executive Design Director and Creative Technologist focused on spatial computing, AI, gaming and innovation leadership. I build agentic, human-centered systems and immersive experiences for global brands — from luxury to next-gen real estate — with a precise, timeless, and playful intelligence.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {['Spatial Computing', 'AI Design Systems', 'Immersive Commerce', 'Spatial UX', 'Gaming', 'Innovation Leadership'].map((tag) => (
                <div key={tag} className="rounded border border-[#D9D9D6] bg-white px-3 py-2 text-sm text-[#111111]/80">
                  {tag}
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-[#D9D9D6] pt-6 text-sm text-[#111111]/70">
              Visual references: design notebooks, sketches, systems thinking; Braun and Bauhaus influences applied with contemporary computational craft.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
