import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[88vh] flex items-end">
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[#D34A00] mix-blend-multiply" />
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl w-full px-4 md:px-6 pb-20">
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Designing Future Realities
            </h1>
          </div>
          <div className="md:col-span-4 md:self-end">
            <p className="text-white/90 text-base md:text-lg max-w-md" style={{ fontFamily: 'Space Grotesk, ui-sans-serif, system-ui' }}>
              Executive Design Director shaping immersive, agentic and AI-powered experiences for global brands.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#work" className="inline-flex items-center rounded-full bg-white text-[#111111] px-5 py-2 text-sm font-medium hover:bg-[#F5F5F3] transition-colors">
                View Work
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-white/60 text-white px-5 py-2 text-sm font-medium hover:bg-white/10 transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
