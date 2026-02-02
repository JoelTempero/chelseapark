import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, Award, Heart, Sun, MapPin } from 'lucide-react'
import { features, awards } from '../data/contact'

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [awardsRef, awardsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const values = [
    {
      icon: Heart,
      title: 'Personal Service',
      description: 'Your host Carey White is dedicated to making your stay memorable with genuine Kiwi hospitality.'
    },
    {
      icon: Sun,
      title: 'Sunny Nelson Location',
      description: 'North-facing rooms designed to capture Nelson\'s famous sunshine, the sunniest place in New Zealand.'
    },
    {
      icon: Award,
      title: 'Quality & Sustainability',
      description: 'Qualmark 4-Star rated and committed to sustainable tourism practices for a greener future.'
    },
    {
      icon: MapPin,
      title: 'Central Location',
      description: 'Walking distance to the city centre, restaurants, cafes, and Nelson\'s beautiful waterfront.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center"
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
          <h1 className="text-4xl md:text-5xl font-heading mb-4">About Chelsea Park</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your home away from home in sunny Nelson
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-24 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={storyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[2.5rem] mb-6">Our Story</h2>
            <p className="text-warm-gray mb-6">
              Chelsea Park Motor Lodge is a friendly 4 star motor lodge located in the heart of Nelson City.
              We pride ourselves on providing comfortable, quality accommodation with genuine Kiwi hospitality.
            </p>
            <p className="text-warm-gray mb-6">
              Your host, Carey White, isn't just here to check you in—he's here to make your Nelson experience
              unforgettable. With local knowledge and a passion for hospitality, Carey ensures every guest
              feels welcome and well looked after.
            </p>
            <p className="text-warm-gray mb-8">
              Our boutique motor lodge is the perfect size for personal, attentive service. Every room features
              north-facing patios to catch that famous Nelson sunshine, fully equipped kitchenettes, and all
              the comforts you need for a relaxing stay.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={storyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-[0.9rem]"
                >
                  <Check className="w-[18px] h-[18px] text-gold flex-shrink-0" />
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={storyInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://www.chelseapark.co.nz/wp-content/uploads/sites/454/2023/12/IMGL4171-Edit_1024.jpg"
              alt="Chelsea Park Motor Lodge Interior"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute -top-5 -left-5 right-5 bottom-5 border-2 border-gold -z-10 hidden md:block" />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-24 px-8 bg-cream">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[2.5rem] mb-4">What Sets Us Apart</h2>
            <p className="text-warm-gray max-w-2xl mx-auto">
              At Chelsea Park, we believe in providing more than just a place to sleep.
              We offer an experience that makes you feel truly at home.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border-2 border-gold text-gold">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-warm-gray text-[0.9rem]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section ref={awardsRef} className="py-24 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={awardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[2.5rem] mb-4">Awards & Recognition</h2>
            <p className="text-warm-gray max-w-2xl mx-auto">
              We're proud to be recognised for our commitment to quality and sustainability.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={awardsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={award.image}
                  alt={award.title}
                  className="h-32 w-auto mx-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
