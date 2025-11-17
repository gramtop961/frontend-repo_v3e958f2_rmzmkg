import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mt-4 flex items-center justify-between rounded-full border border-[#D9D9D6]/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <a href="#top" className="px-4 py-3 font-semibold tracking-wide text-[#111111] hover:text-[#D34A00] transition-colors" style={{ fontFamily: 'Space Grotesk, ui-sans-serif, system-ui' }}>
            Tommaso Nervegna
          </a>
          <nav className="hidden md:flex items-center gap-1 pr-1">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="px-4 py-2 text-sm text-[#111111]/80 hover:text-[#111111] hover:bg-[#F5F5F3] rounded-full transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="ml-1 mr-1 rounded-full border border-[#D9D9D6] bg-[#D34A00] text-white px-4 py-2 text-sm hover:bg-[#b73f00] transition-colors">
              Get in touch
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-3">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-6xl px-4 md:px-6">
          <div className="mt-2 rounded-2xl border border-[#D9D9D6] bg-white">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm text-[#111111]/90 hover:bg-[#F5F5F3] border-b border-[#F0F0EE] last:border-0"
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="m-3 text-center rounded-full border border-[#D9D9D6] bg-[#D34A00] text-white px-4 py-2 text-sm hover:bg-[#b73f00] transition-colors">
                Get in touch
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
