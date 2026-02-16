import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function TermsConditionsPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[30vh] min-h-[250px] flex items-center justify-center bg-charcoal"
      >
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center text-white px-8"
        >
          <h1 className="text-4xl md:text-5xl font-heading mb-4">Terms & Conditions</h1>
        </motion.div>
      </section>

      {/* Content */}
      <section ref={contentRef} className="py-24 px-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-[800px] mx-auto prose-warm"
        >
          <h2 className="text-2xl font-semibold mb-4">Credit Card Surcharge</h2>
          <p className="text-warm-gray mb-8">
            A 2.5% surcharge applies to all credit card payments.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Cancellation Policy – Individual Bookings</h2>
          <p className="text-warm-gray mb-4">
            Cancellation must be received no later than three days prior to your arrival. Written cancellation must be received via email.
          </p>
          <p className="text-warm-gray mb-4">
            If you cancel within three days prior to your arrival, you will be charged 100% of the total booking amount.
          </p>
          <p className="text-warm-gray mb-8">
            However, we will try to resell your room/s and if we are successful we will refund the difference, less an administrative fee equal to the first night's room rate.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Cancellation Policy – Group/Multiple Bookings</h2>
          <p className="text-warm-gray mb-4">
            Amendments to group or multiple room bookings with less than 14 days' notice will incur full accommodation charges for the cancelled rooms.
          </p>
          <p className="text-warm-gray mb-8">
            We will endeavour to resell those rooms and if successful will refund the difference, less an administrative fee.
          </p>

          <h2 className="text-2xl font-semibold mb-4">No-Show Policy</h2>
          <p className="text-warm-gray mb-8">
            If you haven't cancelled your booking in writing within the required time and you don't turn up, the full room rate will be charged to your credit card.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Reception Hours</h2>
          <p className="text-warm-gray mb-4">
            Reception is open 7:30am – 8:30pm weekdays and 8:00am – 8:00pm weekends and public holidays.
          </p>
          <p className="text-warm-gray mb-8">
            Early check-in and late checkout are available by prior arrangement with management and may incur additional charges.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Noise & Parties Policy</h2>
          <p className="text-warm-gray mb-4">
            Chelsea Park Motor Lodge will not tolerate excessive noise at any time. No parties are permitted on the premises.
          </p>
          <p className="text-warm-gray mb-8">
            Guests who do not comply with these policies and disrupt the peace and quiet enjoyment of other guests will be required to vacate the premises immediately and without refund. Their credit card may also be charged for any damages and for other guests' room costs arising from noise complaints.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Travel Insurance</h2>
          <p className="text-warm-gray">
            Chelsea Park Motor Lodge strongly recommends that all guests purchase comprehensive travel insurance to cover unforeseen circumstances that may affect your travel plans.
          </p>
        </motion.div>
      </section>
    </div>
  )
}
