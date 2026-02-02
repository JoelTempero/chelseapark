import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { contactInfo, bookingUrl } from '../../data/contact'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' }
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled ? 'shadow-[0_2px_40px_rgba(42,42,42,0.08)]' : ''
      }`}
      style={{
        background: 'rgba(250, 247, 242, 0.95)',
        backdropFilter: 'blur(20px)'
      }}
    >
      <nav className="max-w-[1400px] mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="font-heading text-2xl font-semibold text-charcoal no-underline tracking-[0.02em]"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Chelsea <span className="text-gold">Park</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 items-center list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-warm-gray no-underline text-[0.9rem] font-normal tracking-[0.03em] transition-colors duration-300 hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Contact */}
        <div className="hidden md:flex gap-6 items-center">
          <a
            href={`tel:${contactInfo.freephone.replace(/\s/g, '')}`}
            className="text-charcoal no-underline font-normal text-[0.9rem] flex items-center gap-2 hover:text-gold transition-colors"
          >
            <Phone className="w-4 h-4" />
            {contactInfo.freephone}
          </a>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-3 bg-gold text-white no-underline font-medium text-[0.85rem] tracking-[0.05em] uppercase transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(196,163,90,0.3)]"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2.5 bg-transparent border-none cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-charcoal" />
          ) : (
            <Menu className="w-6 h-6 text-charcoal" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-[72px] bg-cream z-40 transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="py-4 text-charcoal no-underline text-lg font-normal border-b border-light-gray"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-8 flex flex-col gap-4">
            <a
              href={`tel:${contactInfo.freephone.replace(/\s/g, '')}`}
              className="text-charcoal no-underline font-normal text-lg flex items-center gap-3"
            >
              <Phone className="w-5 h-5 text-gold" />
              {contactInfo.freephone}
            </a>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-4 bg-gold text-white no-underline font-medium text-center text-[0.9rem] tracking-[0.05em] uppercase"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
