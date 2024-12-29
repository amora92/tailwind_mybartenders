import React from 'react'

const FAQ = () => {
  const faqs = [
    {
      question: 'What areas do you cover?',
      answer:
        "We primarily serve Northampton and surrounding areas, including Milton Keynes and London. We're happy to travel further for special events - just ask!",
      category: 'Services'
    },
    {
      question: 'How far in advance should I book?',
      answer:
        'We recommend booking 2-3 months in advance, especially for peak season events. However, we can sometimes accommodate last-minute bookings depending on availability.',
      category: 'Booking'
    },
    {
      question: "What's included in your non-alcoholic and mocktail menu?",
      answer:
        'Our extensive non-alcoholic menu features creative mocktails, craft sodas, and alcohol-free versions of classic cocktails. We use premium ingredients like house-made syrups, fresh-pressed juices, and botanical infusions.',
      category: 'Services'
    },
    {
      question: 'Do you provide all the equipment needed?',
      answer:
        'Yes, we bring everything needed for a complete mobile bar service, including glassware, ice, garnishes, and professional equipment.',
      category: 'Equipment'
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept bank transfers, credit/debit cards, and other standard payment methods. A deposit is typically required to secure your booking.',
      category: 'Payment'
    }
  ]

  return (
    <section className='bg-gradient-to-b from-white via-pink-50/30 to-white py-16'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-center mb-8'>
          Frequently Asked <span className='text-pink-500'>Questions</span>
        </h2>

        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <details
              key={index}
              className='group bg-white rounded-xl border border-pink-100 [&_summary::-webkit-details-marker]:hidden'
            >
              <summary className='flex cursor-pointer items-center justify-between gap-1.5 p-6 text-gray-900'>
                <h3 className='text-lg font-medium'>{faq.question}</h3>
                <span className='relative h-5 w-5 shrink-0'>
                  <svg
                    className='absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 text-pink-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>

                  <svg
                    className='absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 text-pink-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </span>
              </summary>

              <div className='px-6 pb-6 text-gray-600'>
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
