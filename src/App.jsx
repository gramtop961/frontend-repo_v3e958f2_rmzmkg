import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Writing from './components/Writing'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-[#111111]" style={{ scrollBehavior: 'smooth' }}>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Writing />
        <Contact />
      </main>
      <footer className="border-t border-[#D9D9D6] bg-[#F5F5F3]">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-8 flex items-center justify-between text-sm text-[#111111]/70">
          <span>© {new Date().getFullYear()} Tommaso Nervegna</span>
          <span>Precise · Thoughtful · Timeless</span>
        </div>
      </footer>
    </div>
  )
}

export default App
