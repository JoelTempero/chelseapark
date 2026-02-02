import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { awards } from '../../data/contact'

export default function Awards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="py-16 px-8 bg-white" ref={ref}>
      <div className="max-w-[900px] mx-auto flex justify-center items-center gap-16 flex-wrap">
        {awards.map((award, index) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="text-center"
          >
            <img
              src={award.image}
              alt={award.title}
              className="h-[100px] w-auto mb-3 opacity-80 transition-opacity duration-300 hover:opacity-100"
            />
            <span className="block text-[0.8rem] text-warm-gray tracking-[0.05em]">
              {award.title}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
