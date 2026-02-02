import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react'
import { contactInfo } from '../../data/contact'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="contact" className="py-24 px-8 bg-cream" ref={ref}>
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-[1.8rem] mb-8">Get in Touch</h3>

          {/* Address */}
          <div className="flex gap-4 mb-6">
            <MapPin className="w-6 h-6 text-gold flex-shrink-0" />
            <div>
              <strong className="block font-medium mb-1">Address</strong>
              <span className="text-warm-gray">{contactInfo.address}</span>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4 mb-6">
            <Phone className="w-6 h-6 text-gold flex-shrink-0" />
            <div>
              <strong className="block font-medium mb-1">Phone</strong>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="text-warm-gray no-underline hover:text-gold transition-colors block"
              >
                {contactInfo.phone}
              </a>
              <a
                href={`tel:${contactInfo.freephone.replace(/\s/g, '')}`}
                className="text-warm-gray no-underline hover:text-gold transition-colors block"
              >
                {contactInfo.freephone} (Freephone)
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4 mb-6">
            <Mail className="w-6 h-6 text-gold flex-shrink-0" />
            <div>
              <strong className="block font-medium mb-1">Email</strong>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-warm-gray no-underline hover:text-gold transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-8">
            <a
              href={contactInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-11 h-11 flex items-center justify-center border border-light-gray text-charcoal transition-all duration-300 hover:border-gold hover:bg-gold hover:text-white"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 flex items-center justify-center border border-light-gray text-charcoal transition-all duration-300 hover:border-gold hover:bg-gold hover:text-white"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-light-gray h-[400px] overflow-hidden"
        >
          <iframe
            src={contactInfo.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(20%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Chelsea Park Motor Lodge Location"
          />
        </motion.div>
      </div>
    </section>
  )
}
