import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="testimonials"
      className="py-24 px-8 bg-charcoal text-white relative overflow-hidden"
      ref={ref}
    >
      {/* Decorative Quote */}
      <div
        className="absolute -top-12 left-[10%] font-heading text-[400px] text-gold/5 leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        "
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-[700px] mx-auto mb-16"
      >
        <h2 className="text-[clamp(2rem,4vw,3rem)] mb-4 text-white">Guest Reviews</h2>
        <div className="w-[60px] h-[2px] bg-gold mx-auto mb-6" />
        <p className="text-white/60 text-[1.05rem]">
          Don't just take our word for it — hear from our guests
        </p>
      </motion.div>

      {/* Testimonials Slider */}
      <div className="max-w-[1200px] mx-auto relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="min-w-full px-8 text-center"
              >
                <div className="max-w-[800px] mx-auto">
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="font-heading text-[clamp(1.3rem,2.5vw,1.8rem)] italic leading-relaxed mb-8 text-white/90">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex flex-col items-center gap-1">
                    <strong className="text-gold-light font-medium">
                      {testimonial.author}
                    </strong>
                    <span className="text-[0.85rem] text-white/50">
                      {testimonial.source}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full border-none cursor-pointer transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gold scale-125'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
