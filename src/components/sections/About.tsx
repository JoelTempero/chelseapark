import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check } from 'lucide-react'
import { features } from '../../data/contact'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="about" className="py-24 px-8 bg-white" ref={ref}>
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src="https://www.chelseapark.co.nz/wp-content/uploads/sites/454/2023/12/IMGL4171-Edit_1024.jpg"
            alt="Chelsea Park Motor Lodge Interior"
            className="w-full h-[500px] object-cover"
          />
          <div
            className="absolute -top-5 -left-5 right-5 bottom-5 border-2 border-gold -z-10 hidden md:block"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-[2.5rem] mb-6">Your Home Away From Home in Sunny Nelson</h2>
          <p className="text-warm-gray mb-6">
            Your host, Carey White, isn't just here to check you in—he's here to make your Nelson experience unforgettable. Settle in, breathe out, and let Nelson work its sunny magic.
          </p>
          <p className="text-warm-gray mb-8">
            Chelsea Park Motor Lodge is the perfect size for personal, attentive service. Every room features north-facing patios to catch that famous Nelson sunshine, fully equipped kitchenettes, and all the comforts you need for a relaxing stay.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 text-[0.9rem]"
              >
                <Check className="w-[18px] h-[18px] text-gold flex-shrink-0" />
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
