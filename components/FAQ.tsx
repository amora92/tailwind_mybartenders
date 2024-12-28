import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'When will you get back to me?',
    answer: 'We usually respond within a business day.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We provide our services nationwide!'
  },
  {
    question: 'How far in advance should I book your services?',
    answer:
      'As much notice as possible, but we can work within really tight timeframes. We suggest at least 3 days of notice.'
  },
  {
    question: 'Do you offer non-alcoholic options or mocktails?',
    answer:
      'Yes, we offer a wide range of non-alcoholic beverages and mocktails.'
  },
  {
    question: 'Have you got a personal licence to legally serve alcohol?',
    answer: 'Yes, we are fully certified and licenced.'
  },
  {
    question: 'Can you accommodate dietary restrictions or allergies?',
    answer:
      'Yes, we can accommodate various dietary restrictions and allergies. Please let us know your requirements in advance.'
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className='max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
      <h2 className='text-3xl font-bold text-center mb-8 text-gray-900'>
        Frequently Asked Questions
      </h2>
      <div className='space-y-4'>
        {faqs.map((faq, index) => (
          <div key={index} className='border rounded-lg overflow-hidden'>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className='w-full px-6 py-4 text-left bg-white hover:bg-gold-50 
                transition-colors duration-300 flex justify-between items-center
                group'
            >
              <span className='text-gray-900 group-hover:text-gold-600 transition-colors font-medium'>
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-gray-500 group-hover:text-gold-600 transition-all transform
                  ${openIndex === index ? 'rotate-180' : ''}`}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className='px-6 py-4 bg-white border-t'>
                <p className='text-gray-600'>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
