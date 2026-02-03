import { motion } from 'framer-motion'
import { bookingUrl } from '../../data/contact'

export default function Hero() {
  const handleViewRooms = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.querySelector('#rooms')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="h-screen min-h-[700px] relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2520 100%)'
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 30% 20%, rgba(196, 163, 90, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 80%, rgba(196, 163, 90, 0.1) 0%, transparent 40%)
            `
          }}
        />
      </div>

      {/* Hero Image */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url('https://www.chelseapark.co.nz/wp-content/uploads/sites/454/2023/12/IMGL3902-Edit_1024-2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(20%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-[900px] px-8">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-block px-5 py-2 bg-white/95 text-gold text-[0.75rem] tracking-[0.2em] uppercase mb-8 font-medium"
        >
          Nelson, New Zealand
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[clamp(2.5rem,6vw,4.5rem)] text-white mb-6"
        >
          Welcome to Chelsea Park Motor Lodge
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-[1.1rem] text-white/80 max-w-[600px] mx-auto mb-10"
        >
          Your holiday begins the moment you arrive. With 10 quality boutique rooms, we offer personal, attentive service where you're more than just a room number.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-4 bg-gold text-white no-underline font-medium text-[0.85rem] tracking-[0.05em] uppercase transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(196,163,90,0.3)]"
          >
            Book Your Stay
          </a>
          <a
            href="#rooms"
            onClick={handleViewRooms}
            className="inline-block px-7 py-4 bg-white text-gold no-underline font-medium text-[0.85rem] tracking-[0.05em] uppercase transition-all duration-300 hover:bg-gold hover:text-white"
          >
            View Rooms
          </a>
        </motion.div>
      </div>
    </section>
  )
}
