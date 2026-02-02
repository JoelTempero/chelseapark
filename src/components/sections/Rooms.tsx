import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, Bed, Check, Home, Clock, X } from 'lucide-react'
import { rooms } from '../../data/rooms'
import { bookingUrl, contactInfo } from '../../data/contact'
import type { Room } from '../../types'

function RoomCard({ room, onClick, index }: { room: Room; onClick: () => void; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const getHighlightIcon = (highlight: string) => {
    if (highlight === 'Accessible') return <Check className="w-4 h-4" />
    if (highlight === 'Balcony') return <Home className="w-4 h-4" />
    if (highlight === 'Spa Bath') return <Clock className="w-4 h-4" />
    return <Check className="w-4 h-4" />
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="bg-white overflow-hidden cursor-pointer transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(42,42,42,0.15)] group"
    >
      {/* Image */}
      <div className="relative h-[280px] overflow-hidden">
        <img
          src={room.images[0]}
          alt={room.title}
          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <span className="text-white text-[0.8rem] tracking-[0.1em] uppercase border-b border-gold pb-1">
            View Details
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-[1.4rem] mb-3">{room.title}</h3>
        <p className="text-warm-gray text-[0.9rem] mb-4 leading-relaxed">{room.description}</p>

        {/* Meta */}
        <div className="flex gap-6 pt-4 border-t border-light-gray">
          <span className="flex items-center gap-[0.4rem] text-[0.8rem] text-warm-gray">
            <User className="w-4 h-4 text-gold" />
            Sleeps {room.sleeps}
          </span>
          <span className="flex items-center gap-[0.4rem] text-[0.8rem] text-warm-gray">
            <Bed className="w-4 h-4 text-gold" />
            {room.bedType}
          </span>
          {room.highlights[0] && (
            <span className="flex items-center gap-[0.4rem] text-[0.8rem] text-warm-gray">
              {getHighlightIcon(room.highlights[0])}
              {room.highlights[0]}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function RoomModal({ room, onClose }: { room: Room; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 bg-charcoal/90 z-[2000] flex items-center justify-center p-8 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-[900px] w-full max-h-[90vh] overflow-y-auto relative animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-white flex items-center justify-center border-none cursor-pointer z-10 hover:bg-light-gray transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-charcoal" />
        </button>

        {/* Image Gallery */}
        <div className="grid grid-cols-4 gap-1">
          {room.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${room.title} ${index + 1}`}
              className={`w-full object-cover ${
                index === 0 ? 'col-span-2 row-span-2 h-full' : 'h-[150px]'
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="p-8">
          <h2 className="text-[2rem] mb-6">{room.title}</h2>

          {/* Features */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 list-none p-0 m-0">
            {room.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-[0.9rem] text-warm-gray">
                <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Amenities */}
          <h4 className="font-heading text-[1.2rem] mt-8 mb-4 pt-8 border-t border-light-gray">
            Amenities
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {room.amenities.map((amenity, index) => (
              <span key={index} className="text-[0.85rem] text-warm-gray py-1">
                {amenity}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 pt-8 border-t border-light-gray flex gap-4 flex-wrap">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-4 bg-gold text-white no-underline font-medium text-[0.85rem] tracking-[0.05em] uppercase transition-all duration-300 hover:bg-gold-light"
            >
              Book This Room
            </a>
            <a
              href={`tel:${contactInfo.freephone.replace(/\s/g, '')}`}
              className="inline-block px-7 py-4 bg-transparent border border-gold text-gold no-underline font-medium text-[0.85rem] tracking-[0.05em] uppercase transition-all duration-300 hover:bg-gold hover:text-white"
            >
              Call to Enquire
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="rooms" className="py-24 px-8 bg-cream">
      {/* Section Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-[700px] mx-auto mb-16"
      >
        <h2 className="text-[clamp(2rem,4vw,3rem)] mb-4">Our Accommodation</h2>
        <div className="w-[60px] h-[2px] bg-gold mx-auto mb-6" />
        <p className="text-warm-gray text-[1.05rem]">
          Six room types to suit every traveler, from cozy studios to spacious two-bedroom apartments
        </p>
      </motion.div>

      {/* Rooms Grid */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room, index) => (
          <RoomCard
            key={room.id}
            room={room}
            index={index}
            onClick={() => setSelectedRoom(room)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedRoom && (
        <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
      )}
    </section>
  )
}
