import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl md:text-5xl font-heading mb-4">Privacy Policy</h1>
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
          <p className="text-warm-gray mb-8">
            Your Privacy and Security are very important to us. As we collect personal information it is our job to maintain a high level of security.
          </p>

          <h2 className="text-2xl font-semibold mb-4">About This Privacy Policy</h2>
          <p className="text-warm-gray mb-8">
            This Privacy policy has been created to provide a clear and concise summary of how and when personal information is collected, stored and distributed. This policy discloses our information gathering and dissemination practices for this site.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Changes To This Privacy Policy</h2>
          <p className="text-warm-gray mb-8">
            Chelsea Park Motor Lodge may make changes to this Privacy policy from time to time.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Contacting Chelsea Park Motor Lodge</h2>
          <p className="text-warm-gray mb-8">
            Should you have any questions regarding this Privacy policy, please contact us at{' '}
            <a href="mailto:stay@chelseapark.co.nz" className="text-gold hover:underline">
              stay@chelseapark.co.nz
            </a>
          </p>

          <h2 className="text-2xl font-semibold mb-4">Credit Card Information</h2>
          <p className="text-warm-gray mb-8">
            The credit card details you provided when you booked online were encrypted by our RMS secure encryption system.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Email Addresses</h2>
          <p className="text-warm-gray mb-8">
            Chelsea Park Motor Lodge will record your e-mail address if you transmit it to us electronically either in an e-mail message or via a web page form. It will only be used for the purpose for which you provide it, and will not be disclosed to any third party or added to a mailing list, unless you consent.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
          <p className="text-warm-gray mb-8">
            When you book online, Chelsea Park Motor Lodge stores your name and address, your telephone number, your email address on a secure site – only management have access to them. To confirm your booking we require your credit card details. All credit card details will be encrypted by our RMS secure encryption system.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Promotional Material Via Email</h2>
          <p className="text-warm-gray mb-8">
            Chelsea Park Motor Lodge communicates with its customers primarily using e-mail. This includes telling our customers about existing and new promotions. We acknowledge and respect a user's choice to opt-out of marketing communications activities. Should you decide you do not wish to receive marketing or promotional materials via e-mail from us please unsubscribe using the link on each email.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Safety</h2>
          <p className="text-warm-gray mb-8">
            All information provided to Chelsea Park Motor Lodge is stored, transmitted and used in a secure environment. All information is stored in a secure data centre with 24/7 security.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Searches</h2>
          <p className="text-warm-gray mb-8">
            Search terms that you enter when using our search engine are collected, but are not associated with any other information that we collect. We use these search terms for the purpose of aggregated statistical analyses so we can ascertain what people are looking for on our website.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Security System</h2>
          <p className="text-warm-gray mb-8">
            Chelsea Park Motor Lodge uses industry standard security measures to protect the loss, misuse and alteration of information under our control.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Statistical Information</h2>
          <p className="text-warm-gray mb-8">
            Chelsea Park Motor Lodge collects data for statistical purposes. This statistical data does not contain personal information and is used to improve our website and service delivery.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Subscription and Feedback Forms</h2>
          <p className="text-warm-gray mb-8">
            Our site's subscription and feedback forms require users to give us contact information. We use this contact information from these forms to send the user information about our company. The customer's contact information is also used to contact the visitor when necessary.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Use and Disclosure of Personal Information</h2>
          <p className="text-warm-gray">
            Chelsea Park Motor Lodge will not sell or otherwise provide your personal information to a third party, or make any other use of your personal information, for any purpose which is not incidental to your use of this website.
          </p>
        </motion.div>
      </section>
    </div>
  )
}
