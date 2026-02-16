import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, ArrowRight } from 'lucide-react'

// Sample news data - can be expanded with actual news from the old site
const newsItems = [
  {
    id: '1',
    slug: 'travellers-choice-2025',
    title: "Chelsea Park Named in Tripadvisor's Best of the Best 2025",
    date: '2025-05-15',
    excerpt: "We're thrilled to announce that Chelsea Park Motor Lodge has been recognised in Tripadvisor's Best of the Best awards for 2025, placing us in the top 1% of accommodations worldwide.",
    image: 'https://www.chelseapark.co.nz/wp-content/uploads/sites/454/2025/05/TC_BotB_thank-you-social_LL_1080-x-1350_2025.png',
    category: 'Awards'
  },
  {
    id: '2',
    slug: 'sustainable-tourism-commitment',
    title: 'Our Commitment to Sustainable Tourism',
    date: '2024-12-10',
    excerpt: "Chelsea Park is proud to hold Qualmark's Tourism Sustainability Commitment certification. Learn about the steps we're taking to reduce our environmental impact while providing quality accommodation.",
    image: 'https://www.chelseapark.co.nz/wp-content/uploads/sites/454/2024/01/TIA_TSC_Lockup_with_Year-1013x1024.png',
    category: 'Sustainability'
  },
  {
    id: '3',
    slug: 'booking-award-2024',
    title: 'Booking.com Traveller Review Award 2024',
    date: '2024-01-20',
    excerpt: "We've received the Booking.com Traveller Review Award 2024, thanks to our wonderful guests who have shared their positive experiences staying with us.",
    image: 'https://www.chelseapark.co.nz/wp-content/uploads/sites/454/2024/01/Digital-Award-TRA-2024.png',
    category: 'Awards'
  },
  {
    id: '4',
    slug: 'nelson-summer-activities',
    title: 'Summer Activities in Nelson',
    date: '2024-11-01',
    excerpt: "Nelson offers endless summer activities. From the golden beaches of Tahunanui to the art galleries and cafes of the city centre, discover what makes Nelson New Zealand's sunniest destination.",
    image: 'https://chelsea-park-motor-lodge.southislandnz.net/data/Pics/OriginalPhoto/17133/1713307/1713307113/chelsea-park-motor-lodge-nelson-nelson-pic-1.JPEG',
    category: 'Local Guide'
  }
]

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-NZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default function NewsPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [gridRef, gridInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[40vh] min-h-[350px] flex items-center justify-center"
      >
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/82/a7/ce/chelsea-park-motor-lodge.jpg?w=900&h=500&s=1"
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
          <h1 className="text-4xl md:text-5xl font-heading mb-4">Latest News</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Updates and stories from Chelsea Park
          </p>
        </motion.div>
      </section>

      {/* News Grid */}
      <section ref={gridRef} className="py-24 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-cream overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-white text-xs font-medium uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-warm-gray text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={item.date}>{formatDate(item.date)}</time>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-gold transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-warm-gray text-[0.9rem] mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-gold font-medium text-sm group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-8 bg-cream">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[2rem] mb-4">Stay Updated</h2>
          <p className="text-warm-gray mb-8">
            Subscribe to receive updates about special offers, events, and news from Chelsea Park Motor Lodge.
          </p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-light-gray focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors bg-white"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gold text-white font-medium text-[0.85rem] tracking-[0.05em] uppercase transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(196,163,90,0.3)]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
