export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7">
            <h2 className="text-2xl md:text-3xl text-[#111111]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Contact / Connect</h2>
            <p className="mt-3 text-[#111111]/80" style={{ fontFamily: 'Space Grotesk, ui-sans-serif' }}>
              Clean, friendly, confident. Let’s build something meaningful.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Email', href: 'mailto:hello@tommasonervegna.com' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com' },
                { label: 'Instagram', href: 'https://www.instagram.com' },
                { label: 'Substack', href: '#' },
              ].map((c) => (
                <a key={c.label} href={c.href} className="rounded border border-[#D9D9D6] bg-white px-4 py-3 text-[#111111]/90 hover:border-[#D34A00] hover:shadow-sm transition-all">
                  {c.label}
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-lg border border-[#D9D9D6] bg-white p-5">
              <form className="grid gap-4">
                <input className="rounded border border-[#D9D9D6] px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#D34A00]" placeholder="Name" />
                <input className="rounded border border-[#D9D9D6] px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#D34A00]" placeholder="Email" />
                <textarea className="rounded border border-[#D9D9D6] px-3 py-2 h-28 focus:outline-none focus:ring-1 focus:ring-[#D34A00]" placeholder="Project / Message" />
                <button type="button" className="rounded-full bg-[#D34A00] text-white px-5 py-2 text-sm hover:bg-[#b73f00] transition-colors w-max">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
