import Link from 'next/link'
import Head from 'next/head'

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Mybartenders.co.uk</title>
        <meta
          name='description'
          content='Read the privacy policy of Mybartenders.co.uk to learn how we collect and protect your personal data.'
        />
      </Head>

      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold mb-4'>Privacy Policy</h1>

        <p className='text-lg mb-4'>
          This Privacy Policy explains how Mybartenders.co.uk collects, uses,
          and protects the personal data of users visiting our website or using
          our services. We are committed to safeguarding your privacy and
          ensuring that your personal information is handled securely.
        </p>

        <section className='mb-6'>
          <h2 className='text-2xl font-semibold mb-2'>
            1. Information We Collect
          </h2>
          <p className='mb-4'>
            We do not collect or process personal data from visitors to our
            website unless you provide it to us voluntarily through the contact
            form. The only personal information we may collect is your email
            address, which you provide when submitting an inquiry through our
            contact form.
          </p>
          <p className='mb-4'>
            This information is only used for the purpose of responding to your
            query or request and is not stored beyond that.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='text-2xl font-semibold mb-2'>
            2. How We Use Your Information
          </h2>
          <p className='mb-4'>
            Your email address is used exclusively to respond to inquiries made
            through our contact form. We do not use your email address for
            marketing purposes or share it with any third parties.
          </p>
          <p className='mb-4'>
            We will not send unsolicited emails or use your personal information
            for any purposes other than those explicitly stated here.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='text-2xl font-semibold mb-2'>3. Data Retention</h2>
          <p className='mb-4'>
            We will only retain your email address for as long as necessary to
            respond to your inquiry or request. Once the communication has been
            completed, your email address will be deleted from our system.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='text-2xl font-semibold mb-2'>
            4. Cookies and Tracking Technologies
          </h2>
          <p className='mb-4'>
            Our website may use cookies or similar tracking technologies to
            improve user experience, analyze usage patterns, and help us improve
            our services. However, we do not use cookies to collect personal
            data.
          </p>
          <p className='mb-4'>
            You can control cookie settings in your browser. Please note that
            disabling cookies may impact your ability to use some features of
            the website.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='text-2xl font-semibold mb-2'>
            5. Third-Party Services
          </h2>
          <p className='mb-4'>
            We do not share your email address or any other personal information
            with third-party services, except where required by law. If you
            choose to interact with third-party services (such as social media
            platforms or payment processors), please review their privacy
            policies.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='text-2xl font-semibold mb-2'>6. Your Rights</h2>
          <p className='mb-4'>
            Under the General Data Protection Regulation (GDPR) and the Data
            Protection Act 2018, you have the right to:
          </p>
          <ul className='list-inside list-disc mb-4'>
            <li>Request access to the personal data we hold about you.</li>
            <li>
              Request corrections to any inaccuracies in your personal data.
            </li>
            <li>
              Request the deletion of your personal data, where applicable.
            </li>
            <li>
              Request the restriction of processing your personal data in
              certain circumstances.
            </li>
          </ul>
          <p className='mb-4'>
            If you would like to exercise any of these rights or have any
            concerns about your personal data, please contact us at{' '}
            <Link
              href='mailto:contact@mybartenders.co.uk'
              className='text-blue-500'
            >
              contact@mybartenders.co.uk
            </Link>
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='text-2xl font-semibold mb-2'>7. Security</h2>
          <p className='mb-4'>
            We take appropriate measures to protect the personal data you
            provide through our website. However, no method of electronic
            transmission or storage is 100% secure. While we strive to use
            commercially acceptable means to protect your information, we cannot
            guarantee its absolute security.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='text-2xl font-semibold mb-2'>
            8. Changes to This Privacy Policy
          </h2>
          <p className='mb-4'>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated date at the top. We
            encourage you to review this Privacy Policy periodically to stay
            informed about how we are protecting your personal data.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='text-2xl font-semibold mb-2'>9. Governing Law</h2>
          <p className='mb-4'>
            This Privacy Policy is governed by the laws of the United Kingdom.
            Any disputes will be subject to the exclusive jurisdiction of the
            courts in the United Kingdom.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='text-2xl font-semibold mb-2'>10. Contact Us</h2>
          <p className='mb-4'>
            If you have any questions or concerns about this Privacy Policy, or
            if you wish to exercise your rights under the GDPR, please contact
            us at{' '}
            <Link
              href='mailto:contact@mybartenders.co.uk'
              className='text-blue-500'
            >
              contact@mybartenders.co.uk
            </Link>
          </p>
        </section>
      </div>
    </>
  )
}

export default PrivacyPolicy
