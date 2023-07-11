import React from "react"
import AppLayout from "@/Layouts/AppLayout"
import { Head, Link, usePage } from "@inertiajs/react"
import Heading from "@/FrontEnd/Typography/Heading"
import { meta_faq as meta } from "@/Data/header-data"

const Faq = () => {
  const { ziggy, faqs } = usePage<any>().props

  return (
    <AppLayout>
      <Head title={meta.title}>
        {/* HTML Meta Tags */}
        <link head-key={`canonical`} rel="canonical" href={ziggy.location} />
        <meta head-key={`description`} name="description" content={meta.description} />
        {/* Facebook Meta Tags */}
        <meta head-key="fb-url" property="og:url" content={ziggy.location} />
        <meta head-key="fb-type" property="og:type" content="website" />
        <meta head-key="fb-title" property="og:title" content="Eloquent Blinds" />
        <meta head-key="fb-description" property="og:description" content={meta.description} />
        <meta head-key="fb-image" property="og:image" content={meta.image} />
        {/* Twitter Meta Tags */}
        <meta head-key="tw-card" name="twitter:card" content="summary_large_image" />
        <meta head-key="tw-domain" property="twitter:domain" content="eloquentblinds.co.za" />
        <meta head-key="tw-url" property="twitter:url" content={ziggy.location} />
        <meta head-key="tw-title" name="twitter:title" content="Eloquent Blinds" />
        <meta head-key="tw-description" name="twitter:description" content={meta.description} />
        <meta head-key="tw-image" name="twitter:image" content={meta.image} />
      </Head>
      <div className="relative wrapper pt-24 lg:pt-32">
        <div className="grid md:grid-cols-2 md:divide-x md:divide-dashed md:divide-gray-900/10 md:dark:divide-gray-500/10">
          <div className="relative md:pr-6">
            <header className="md:sticky top-32">
              <Heading as={`h1`} type={`h1`}>
                Frequently asked questions
              </Heading>
              <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-300">
                Questions. Frequently asked ones. Plus our answers. That's how FAQs work. If you can't find what you're looking for, you can always{" "}
                <Link href={route("quote")} className="font-medium  text-primary-600 hover:text-primary-500">
                  send us an email
                </Link>{" "}
                with your enquiry.
              </p>
              {/*<Video className={`w-full my-6`} src={`https://www.youtube.com/embed/FwIDKoVmtsY`} />*/}
            </header>
          </div>
          <section className={`md:pl-6`}>
            <dl className="sm:mt-16 divide-y divide-dashed divide-gray-900/10 dark:divide-gray-500/10">
              {faqs.map((faq: { id: number; question: string; answer: string }) => (
                <div className={`py-8`} key={faq.id}>
                  <dt className="text-xl font-medium text-gray-900 dark:text-gray-100">{faq.question}</dt>
                  <dd className="mt-3 text-lg text-gray-500 dark:text-gray-400">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>
    </AppLayout>
  )
}

export default Faq
