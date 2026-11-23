import QuoteForm from './components/QuoteForm'
import Products from './components/Products'
import { useState } from 'react'
import {
  ArrowRight,
  Menu,
  X,
  MessageCircle,
} from 'lucide-react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen bg-[#F8F6F0]">

      {/* NAVIGATION */}
      <header className="relative z-50 border-b border-[#14283d]/10 bg-[#F8F6F0]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">

          <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
            <div className="flex h-11 w-11 items-center justify-center border border-[#B69A62] text-xl font-serif text-[#B69A62]">
              P
            </div>
            <div>
              <h1 className="font-serif text-xl tracking-[0.17em] text-[#14283D]">
                PUSHPA
              </h1>
              <p className="text-[9px] tracking-[0.43em] text-[#B69A62]">
                EXPORTS
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-9 text-sm text-[#14283D] md:flex">
            <a href="#home" className="hover:text-[#B69A62]">Home</a>
            <a href="#about" className="hover:text-[#B69A62]">About Us</a>
            <a href="#products" className="hover:text-[#B69A62]">Products</a>
            <a href="#quality" className="hover:text-[#B69A62]">Our Approach</a>
            <a href="#contact" className="hover:text-[#B69A62]">Contact</a>
          </nav>

          <a href="#contact" className="hidden bg-[#14283D] px-6 py-3 text-xs tracking-wider text-white transition hover:bg-[#B69A62] md:block">
            REQUEST A QUOTE
          </a>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <nav className="absolute left-0 top-full flex w-full flex-col gap-5 border-t bg-[#F8F6F0] px-8 py-7 md:hidden">
            {['Home', 'About Us', 'Products', 'Our Approach', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item === 'Our Approach' ? 'quality' : item === 'About Us' ? 'about' : item.toLowerCase()}`}
                onClick={closeMenu}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative flex min-h-[650px] items-center overflow-hidden bg-[#14283D]">
        <img
          src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=2000"
          alt="Textile fabric texture"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#14283D] via-[#14283D]/90 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-28 lg:px-12">
          <p className="mb-8 text-xs tracking-[0.35em] text-[#D0B77D]">
            TEXTILE SOURCING FROM INDIA
          </p>

          <h2 className="max-w-3xl font-serif text-5xl leading-tight text-white md:text-7xl">
            Connecting Indian Textiles to{' '}
            <span className="italic text-[#D0B77D]">Global Markets.</span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-8 text-white/75">
            Your sourcing partner for cotton grey fabrics from India.
            Exploring textile opportunities through dependable sourcing
            and professional communication.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#products" className="flex items-center gap-3 bg-[#B69A62] px-8 py-4 text-xs tracking-wider text-white transition hover:bg-white hover:text-[#14283D]">
              EXPLORE PRODUCTS <ArrowRight size={16} />
            </a>

            <a href="#contact" className="border border-white/50 px-8 py-4 text-xs tracking-wider text-white transition hover:bg-white hover:text-[#14283D]">
              REQUEST A QUOTE
            </a>
          </div>

          <div className="mt-20 flex items-center gap-4 text-xs tracking-widest text-white/60">
            <span className="h-px w-12 bg-[#B69A62]" />
            KISHANGARH, RAJASTHAN, INDIA
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section id="about" className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-2 lg:px-12">

        <div>
          <p className="mb-5 text-xs tracking-[0.3em] text-[#B69A62]">ABOUT PUSHPA EXPORTS</p>
          <h2 className="font-serif text-4xl leading-tight text-[#14283D] md:text-5xl">
            Indian textile sourcing with a global outlook.
          </h2>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-base leading-8 text-gray-600">
            Based in Kishangarh, Rajasthan, Pushpa Exports is focused on
            sourcing cotton grey fabrics for international textile buyers.
            We aim to connect buyers with suitable Indian textile supply
            opportunities through clear communication and attention to
            product specifications.
          </p>

          <a href="#contact" className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#B69A62]">
            CONNECT WITH US <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* PRODUCTS */}
     <Products />

      {/* CONTACT */}
      <QuoteForm />

      {/* FOOTER */}
      <footer className="bg-[#101F30] px-6 py-12 text-white lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">

          <div>
            <h2 className="font-serif text-2xl tracking-[0.2em]">
              PUSHPA EXPORTS
            </h2>
            <p className="mt-3 text-xs tracking-wider text-white/50">
              CONNECTING INDIAN TEXTILES TO GLOBAL MARKETS.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-white/60">
            <a href="#home" className="hover:text-[#D0B77D]">Home</a>
            <a href="#about" className="hover:text-[#D0B77D]">About</a>
            <a href="#products" className="hover:text-[#D0B77D]">Products</a>
            <a href="#contact" className="hover:text-[#D0B77D]">Contact</a>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-7 text-xs text-white/40">
          © {new Date().getFullYear()} Pushpa Exports. All rights reserved.
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918209460900?text=Hello%20PUSHPA%20EXPORTS%2C%20I%20would%20like%20to%20enquire%20about%20your%20cotton%20grey%20fabric."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with PUSHPA EXPORTS on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 text-white shadow-xl transition hover:scale-105"
      >
        <MessageCircle size={23} />
        <span className="text-sm font-semibold">WhatsApp Us</span>
      </a>

    </div>
  )
}

export default App
