import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Send } from 'lucide-react'
import { contactInfo, bookingUrl } from '../data/contact'

export default function ContactPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[40vh] min-h-[350px] flex items-center justify-center"
      >
        <img
          src="https://www.chelseapark.co.nz/wp-content/uploads/sites/454/2023/12/IMGL4249-Edit_1024.jpg"
          alt="Chelsea Park Motor Lodge"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center text-white px-8"
        >
          <h1 className="text-4xl md:text-5xl font-heading mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We'd love to hear from you
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section ref={formRef} className="py-24 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[2rem] mb-8">Get in Touch</h2>
            <p className="text-warm-gray mb-8">
              Have a question about your stay or need help with a booking? We're here to help.
              Feel free to reach out through any of the methods below.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <strong className="block font-medium mb-1">Address</strong>
                  <span className="text-warm-gray">{contactInfo.address}</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
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
                    {contactInfo.freephone} (Freephone NZ)
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
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

              {/* Reception Hours */}
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <strong className="block font-medium mb-1">Reception Hours</strong>
                  <span className="text-warm-gray">7:30am - 9:00pm daily</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <strong className="block font-medium mb-4">Follow Us</strong>
              <div className="flex gap-4">
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
            </div>

            {/* Book Now CTA */}
            <div className="mt-10 p-6 bg-cream">
              <h3 className="text-xl font-semibold mb-3">Ready to Book?</h3>
              <p className="text-warm-gray mb-4 text-[0.9rem]">
                Book directly with us for the best rates and flexible cancellation.
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-7 py-3 bg-gold text-white no-underline font-medium text-[0.85rem] tracking-[0.05em] uppercase transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(196,163,90,0.3)]"
              >
                Book Now
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-[2rem] mb-8">Send Us a Message</h2>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800">
                Thank you for your message! We'll get back to you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-light-gray focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email <span className="text-gold">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-light-gray focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-white"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-light-gray focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject <span className="text-gold">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-light-gray focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Enquiry</option>
                    <option value="general">General Enquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message <span className="text-gold">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-light-gray focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-white font-medium text-[0.85rem] tracking-[0.05em] uppercase transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(196,163,90,0.3)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-light-gray">
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
      </section>
    </div>
  )
}
