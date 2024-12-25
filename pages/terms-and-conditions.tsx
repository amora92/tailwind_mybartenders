import Link from 'next/link'

const TermsAndConditions = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-4'>Terms and Conditions</h1>

      <p className='text-lg mb-4'>
        These Terms and Conditions ("Terms") govern your use of our website,
        services, and the purchase of alcoholic beverages. By accessing or using
        this website, placing an order, or using our services, you agree to
        comply with these Terms. Please read them carefully.
      </p>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>1. Introduction</h2>
        <p className='mb-4'>
          Welcome to Mybartenders.co.uk. By using our website and services,
          including the sale and delivery of alcoholic beverages, you agree to
          abide by these Terms. These Terms are subject to change without
          notice, and your continued use of the site signifies your acceptance
          of the updated Terms.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>2. Age Restrictions</h2>
        <p className='mb-4'>
          You must be at least 18 years of age to place an order for alcoholic
          beverages on this website. By placing an order, you confirm that you
          are of legal drinking age in your country of residence.
        </p>
        <p className='mb-4'>
          We reserve the right to refuse service to anyone who cannot provide
          proof of legal age upon request or if the delivery address is found to
          be underage.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>
          3. Non-Refundable Deposits
        </h2>
        <p className='mb-4'>
          In certain circumstances, we may require a non-refundable deposit to
          secure a booking for services such as cocktail catering, event
          planning, or the delivery of alcoholic beverages for an event. By
          paying the deposit, you agree that it is non-refundable, regardless of
          whether you cancel or modify your booking.
        </p>
        <p className='mb-4'>
          If you cancel your booking after paying the non-refundable deposit, we
          will retain the deposit to cover administrative and operational costs.
          If your booking is rescheduled or modified, any deposit paid will be
          applied to the new booking date, subject to availability.
        </p>
        <p className='mb-4'>
          The non-refundable deposit is separate from any additional charges for
          goods or services that may apply. Full payment for all services is due
          before the event date, as per the agreed terms.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>4. Use of the Website</h2>
        <p className='mb-4'>
          You are granted a limited, non-exclusive, non-transferable license to
          access and use the website for personal and lawful purposes only. You
          agree not to use the website for any unlawful or prohibited
          activities, including, but not limited to, purchasing alcohol for
          minors or engaging in fraudulent activity.
        </p>
        <ul className='list-inside list-disc mb-4'>
          <li>
            Do not post, upload, or share any content that is illegal,
            offensive, or infringes upon the rights of others.
          </li>
          <li>
            Do not use the website in a way that could damage, disable, or
            impair the site or interfere with others' use of the website.
          </li>
          <li>
            Do not attempt to gain unauthorized access to any part of the
            website or any systems connected to it.
          </li>
        </ul>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>
          5. Sale of Alcoholic Beverages
        </h2>
        <p className='mb-4'>
          All alcoholic beverages sold on this website are intended for personal
          use only and are subject to the laws of the United Kingdom. The sale
          of alcohol is regulated, and we strictly comply with all applicable
          laws, including the Licensing Act 2003.
        </p>
        <p className='mb-4'>
          Alcoholic beverages are only sold to individuals who are at least 18
          years old. By placing an order for alcohol, you confirm that you are
          legally permitted to do so.
        </p>
        <p className='mb-4'>
          If an order contains alcoholic beverages, we may require proof of age
          upon delivery. We reserve the right to refuse delivery of alcohol to
          any individual who is unable to provide acceptable proof of age or is
          visibly intoxicated.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>6. Payment</h2>
        <p className='mb-4'>
          Payment for orders is processed through secure payment methods
          available on the website. Prices for alcoholic beverages are inclusive
          of VAT where applicable. We reserve the right to change prices at any
          time without notice.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>7. Privacy Policy</h2>
        <p className='mb-4'>
          Your use of the website is also governed by our{' '}
          <Link href='/privacy-policy' className='text-blue-500'>
            Privacy Policy
          </Link>
          . Please review the Privacy Policy to understand how we collect, use,
          and protect your personal information.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>
          8. Intellectual Property
        </h2>
        <p className='mb-4'>
          All content on the website, including but not limited to text, images,
          graphics, logos, and software, is the property of Mybartenders.co.uk
          or its licensors and is protected by copyright, trademark, and other
          intellectual property laws.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>
          9. Limitation of Liability
        </h2>
        <p className='mb-4'>
          Mybartenders.co.uk will not be liable for any indirect, incidental,
          special, or consequential damages arising from the use of the website,
          including but not limited to loss of profits, data, or business
          opportunities, even if advised of the possibility of such damages.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>10. Termination</h2>
        <p className='mb-4'>
          We reserve the right to suspend or terminate your access to the
          website at our discretion, without notice, for any reason, including
          but not limited to violations of these Terms and Conditions.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>11. Changes to Terms</h2>
        <p className='mb-4'>
          We reserve the right to modify or update these Terms at any time. Any
          changes will be posted on this page, and the date of the most recent
          update will be indicated at the top of the page. Your continued use of
          the website after any changes constitutes your acceptance of the
          revised Terms.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>12. Governing Law</h2>
        <p className='mb-4'>
          These Terms and Conditions are governed by and construed in accordance
          with the laws of England and Wales. Any disputes will be subject to
          the exclusive jurisdiction of the courts in England and Wales.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>13. Contact Us</h2>
        <p className='mb-4'>
          If you have any questions about these Terms and Conditions, please
          contact us at{' '}
          <Link
            href='mailto:contact@mybartenders.co.uk'
            className='text-blue-500'
          >
            contact@mybartenders.co.uk
          </Link>
          .
        </p>
      </section>
    </div>
  )
}

export default TermsAndConditions
