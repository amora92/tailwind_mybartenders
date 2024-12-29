import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head'

interface FAQItem {
  question: string
  answer: string
  category: string
  keywords?: string[] // For SEO
}

const faqs: FAQItem[] = [
  {
    question: 'How quickly can you respond to event inquiries?',
    answer: `We pride ourselves on swift communication. You'll receive an initial response within 24 hours, and a detailed quote within 48 hours. For urgent events, we have an express response service - just mark your inquiry as "Urgent". We understand that event planning can be time-sensitive, so we prioritize quick, thorough responses to all inquiries.`,
    category: 'Booking',
    keywords: ['response time', 'quotes', 'urgent events', 'booking process']
  },
  {
    question: 'What geographical areas do you cover?',
    answer: 'We primarily serve London and the Home Counties, including Surrey, Kent, Essex, and Hertfordshire. For special events, we can travel nationwide. International events can be arranged with advance notice.',
    category: 'Service Area'
  },
  {
    question: 'How far in advance should I book for different types of events?',
    answer: 'For wedding celebrations, we recommend 3-6 months advance booking. Corporate events typically need 1-2 months notice. Last-minute events can often be accommodated within 72 hours, subject to availability. Peak seasons (December, Summer months) require earlier booking.',
    category: 'Booking'
  },
  {
    question: 'What\'s included in your non-alcoholic and mocktail menu?',
    answer: 'Our extensive non-alcoholic menu features creative mocktails, craft sodas, and alcohol-free versions of classic cocktails. We use premium ingredients like house-made syrups, fresh-pressed juices, and botanical infusions. Perfect for designated drivers, pregnant guests, or those who don't drink alcohol.',
    category: 'Services'
  },
  {
    question: 'What licensing and insurance do you carry?',
    answer: 'We hold full personal alcohol licenses, comprehensive public liability insurance up to £5 million, and all necessary food safety certifications. Our team regularly updates their qualifications and follows strict safety protocols.',
    category: 'Legal'
  },
  {
    question: 'How do you handle dietary requirements and allergies?',
    answer: 'We take dietary requirements very seriously. Our team is trained in allergen awareness and cross-contamination prevention. We can accommodate gluten-free, dairy-free, vegan, and other specific dietary needs. We maintain detailed ingredient lists and can create custom menus for any dietary restriction.',
    category: 'Safety'
  },
  {
    question: 'What equipment do you provide for events?',
    answer: 'We bring professional-grade mobile bars, premium glassware, ice machines, refrigeration, and all necessary tools. Our setup includes LED lighting, branded elements, and optional features like smoke machines for molecular cocktails. We're fully self-sufficient with backup equipment.',
    category: 'Services'
  },
  {
    question: 'Do you offer cocktail masterclass packages?',
    answer: 'Yes! Our popular masterclass packages range from 2-4 hours and can accommodate 6-20 people. Each participant learns 3-5 cocktails, receives hands-on training, and takes home a certificate. Corporate team-building sessions and private group bookings are available.',
    category: 'Services'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit/debit cards, bank transfers, and secure online payments. For large events, we offer flexible payment plans with a deposit to secure your date. All transactions are protected and we provide detailed digital invoices.',
    category: 'Booking',
    keywords: ['payment', 'deposit', 'invoicing', 'credit cards']
  },
  {
    question: 'Can you create custom cocktail menus for my event?',
    answer: 'Absolutely! We specialize in creating bespoke cocktail menus tailored to your event theme, preferences, and guest requirements. Our mixologists can design signature drinks that match your color scheme, incorporate your favorite flavors, or tell your story through creative presentations.',
    category: 'Services',
    keywords: ['custom cocktails', 'bespoke menu', 'signature drinks']
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>('all')

  // Group FAQs by category
  const categories = ['all', ...new Set(faqs.map(faq => faq.category))]
  const filteredFaqs = filter === 'all' ? faqs : faqs.filter(faq => faq.category === filter)

  return (
    <>
      <Head>
        <title>FAQ - Mobile Bar Services & Event Mixology | Your Company</title>
        <meta 
          name="description" 
          content="Find answers to common questions about our mobile bar services, cocktail masterclasses, and event planning. Expert mixology services in London and surrounding areas."
        />
        <meta 
          name="keywords" 
          content="mobile bar FAQ, event mixology, cocktail services, bar hire London, event planning, cocktail masterclass"
        />
      </Head>

      <section id="faq" className="max-w-4xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our mixology services, events, and booking process. 
            Can't find what you're looking for? <a href="/contact" className="text-nav_color_1 hover:text-nav_color_2 underline">Contact us</a>.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
                ${filter === category 
                  ? 'bg-nav_color_1 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          <AnimatePresence>
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50
                    transition-colors duration-300 flex justify-between items-center
                    group"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg text-gray-900 group-hover:text-nav_color_1 transition-colors font-medium">
                    {faq.question}
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="text-sm text-gray-500 font-medium">{faq.category}</span>
                    <motion.svg
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      className="w-6 h-6 text-nav_color_1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 py-6 bg-white border-t border-gray-100"
                    >
                      <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent 
              text-base font-medium rounded-md text-white bg-nav_color_1 hover:bg-nav_color_2 
              transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  )
}

export default FAQ
