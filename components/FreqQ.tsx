import Link from 'next/link'

const faqsByCategory = {
  'Getting Started': [
    {
      question: 'What is your typical response time after contact?',
      answer:
        'We pride ourselves on quick response times, typically within 24 hours on business days. For urgent enquiries, we recommend calling directly.'
    },
    {
      question: 'How far in advance should I book for my event?',
      answer:
        'For the best availability, we recommend booking 2 to 3 months in advance, especially for peak season dates and weekends. We can still often accommodate last-minute bookings.'
    }
  ],
  'Services & Coverage': [
    {
      question: 'Which areas do you cover?',
      answer:
        "While we're based in Northampton, we provide services across the UK. Our primary areas include Northamptonshire, London, Milton Keynes, and surrounding counties. Distance surcharges may apply beyond our core service area."
    },
    {
      question: 'Do you offer non-alcoholic alternatives?',
      answer:
        'Absolutely. We offer craft mocktails, premium coffee service, fresh smoothies, and alcohol-free spirits so every guest can enjoy the experience.'
    }
  ],
  'Setup & Requirements': [
    {
      question: 'Is there a minimum or maximum guest capacity?',
      answer:
        'We have a minimum hire time of 2 hours. We can serve events with up to 500 guests, with staffing and equipment scaled to suit the booking.'
    },
    {
      question: 'What about glasses, ice, and equipment?',
      answer:
        'We provide the glassware, ice, garnishes, and bar equipment included in your package, so the service arrives ready to run smoothly.'
    }
  ],
  'Pricing & Legal': [
    {
      question: 'How much does it cost?',
      answer:
        'Pricing depends on the date, duration, staffing, drinks package, and event requirements. We build tailored quotes rather than forcing every booking into the same package.'
    },
    {
      question: 'Are you licensed and certified?',
      answer:
        'Yes, our team holds personal alcohol licences and is DBS checked. If your venue needs additional insurance or compliance paperwork, we can discuss that during the quote stage.'
    }
  ]
}

const allFaqs = Object.entries(faqsByCategory).flatMap(([category, questions]) =>
  questions.map(question => ({ ...question, category }))
)

const categoryIcons: Record<string, React.ReactNode> = {
  'Getting Started': (
    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M13 10V3L4 14h7v7l9-11h-7z' />
    </svg>
  ),
  'Services & Coverage': (
    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
    </svg>
  ),
  'Setup & Requirements': (
    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
    </svg>
  ),
  'Pricing & Legal': (
    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
    </svg>
  )
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
}

const FreqQ = () => {
  return (
    <section id='faq' className='relative overflow-hidden bg-gray-950 py-24 lg:py-32'>
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black' />
      <div className='absolute top-1/4 left-0 h-[600px] w-[600px] rounded-full bg-pink-500/5 blur-3xl' />
      <div className='absolute right-0 bottom-1/4 h-[600px] w-[600px] rounded-full bg-amber-500/5 blur-3xl' />

      <div className='relative container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className='mb-16 text-center'>
          <span className='mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-pink-400'>
            FAQ
          </span>
          <h2 className='mb-6 text-4xl font-bold text-white md:text-5xl'>
            Frequently Asked{' '}
            <span className='bg-gradient-to-r from-pink-400 via-rose-400 to-amber-400 bg-clip-text text-transparent'>
              Questions
            </span>
          </h2>
          <p className='mx-auto max-w-2xl text-xl text-gray-400'>
            Everything you need to know about our mobile bar services
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-2'>
          {Object.entries(faqsByCategory).map(([category, questions]) => (
            <div key={category} className='space-y-4'>
              <div className='mb-6 flex items-center gap-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-xl border border-pink-500/30 bg-gradient-to-br from-pink-500/20 to-amber-500/20 text-pink-400'>
                  {categoryIcons[category]}
                </div>
                <h3 className='text-lg font-semibold text-white'>
                  {category}
                </h3>
              </div>

              <div className='space-y-3'>
                {questions.map(faq => (
                  <details
                    key={faq.question}
                    className='group rounded-xl border border-white/5 bg-gray-900/30 transition-colors hover:border-white/10 hover:bg-gray-900/50 open:border-pink-500/30 open:bg-white/5'
                  >
                    <summary className='flex cursor-pointer list-none items-center justify-between gap-3 p-4 text-left'>
                      <span className='text-sm font-medium text-gray-300 transition-colors group-open:text-white'>
                        {faq.question}
                      </span>
                      <span className='flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/5 text-gray-500 group-open:bg-pink-500/20 group-open:text-pink-400'>
                        <svg
                          className='h-3 w-3'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                        </svg>
                      </span>
                    </summary>
                    <div className='px-4 pb-4'>
                      <p className='text-sm leading-relaxed text-gray-400'>
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <div className='inline-flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-gradient-to-r from-pink-500/10 via-rose-500/5 to-amber-500/10 p-8 backdrop-blur-sm sm:flex-row'>
            <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 shadow-lg shadow-pink-500/25'>
              <svg className='w-7 h-7 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
            </div>
            <div className='text-center sm:text-left'>
              <p className='mb-1 text-lg font-semibold text-white'>Still have questions?</p>
              <p className='text-sm text-gray-400'>Our team is here to help with anything you want to ask before booking.</p>
            </div>
            <Link
              href='/contact_us'
              className='group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-8 py-4 font-semibold text-white shadow-xl shadow-pink-500/25 transition-all hover:shadow-pink-500/40'
            >
              Contact Us
              <svg className='w-5 h-5 transition-transform group-hover:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FreqQ
