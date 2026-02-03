import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { contactInfo, bookingUrl } from '../../data/contact'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Rooms', href: '/#rooms' },
  { label: 'Reviews', href: '/#testimonials' },
  { label: 'News', href: '/latest-news' },
  { label: 'Contact', href: '/contact-us' }
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)

    // Handle anchor links on the home page
    if (href.startsWith('/#')) {
      const anchor = href.substring(2)
      if (location.pathname === '/') {
        // Already on home page, scroll to anchor
        const element = document.getElementById(anchor)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
      // If not on home page, the Link will navigate there and the anchor will be handled
    }
  }

  // Handle hash navigation after page load
  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      const element = document.getElementById(location.hash.substring(1))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location])

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/'
    if (href.startsWith('/#')) return false
    return location.pathname === href
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
        <Link to="/" className="block">
          <img
            src="https://www.chelseapark.co.nz/wp-content/uploads/sites/454/2023/12/Chelsea-Park-Logo.jpg"
            alt="Chelsea Park Motor Lodge"
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.href.startsWith('/#') ? (
                <Link
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`no-underline text-[0.9rem] font-normal tracking-[0.03em] transition-colors duration-300 hover:text-gold ${
                    isActive(link.href) ? 'text-gold' : 'text-warm-gray'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  to={link.href}
                  className={`no-underline text-[0.9rem] font-normal tracking-[0.03em] transition-colors duration-300 hover:text-gold ${
                    isActive(link.href) ? 'text-gold' : 'text-warm-gray'
                  }`}
                >
                  {link.label}
                </Link>
              )}
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
        className={`md:hidden fixed inset-0 top-[88px] z-40 transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background: 'rgba(250, 247, 242, 0.98)',
          backdropFilter: 'blur(20px)'
        }}
      >
        <div className="flex flex-col p-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`py-4 no-underline text-lg font-normal border-b border-light-gray ${
                isActive(link.href) ? 'text-gold' : 'text-charcoal'
              }`}
            >
              {link.label}
            </Link>
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
