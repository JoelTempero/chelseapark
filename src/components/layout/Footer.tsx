import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import { contactInfo } from '../../data/contact'
import logo from '../../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80 py-16 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src={logo}
                alt="Chelsea Park Motor Lodge"
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              A friendly 4 star motor lodge in the heart of Nelson City, New Zealand.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li>
                <Link to="/" className="text-white/60 hover:text-gold transition-colors no-underline text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/60 hover:text-gold transition-colors no-underline text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#rooms" className="text-white/60 hover:text-gold transition-colors no-underline text-sm">
                  Rooms
                </Link>
              </li>
              <li>
                <Link to="/latest-news" className="text-white/60 hover:text-gold transition-colors no-underline text-sm">
                  Latest News
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-white/60 hover:text-gold transition-colors no-underline text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href={`tel:${contactInfo.freephone.replace(/\s/g, '')}`}
                  className="text-white/60 hover:text-gold transition-colors no-underline text-sm"
                >
                  {contactInfo.freephone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-white/60 hover:text-gold transition-colors no-underline text-sm"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-white"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-white"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Chelsea Park Motor Lodge. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
