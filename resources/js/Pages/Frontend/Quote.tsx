import React from "react"
import { Head, usePage } from "@inertiajs/react"
import AppLayout from "@/Layouts/AppLayout"
import ContactForm from "@/Components/ContactForm"
import ContactSection from "@/Sections/ContactSection"
import { meta_quote as meta } from "@/Data/header-data"

const Quote = () => {
  const { ziggy } = usePage<any>().props

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

      <div className="relative wrapper pt-24 lg:pt-32 lg:flex lg:space-x-8">
        <div className={`w-full lg:w-1/2 relative`}>
          <ContactSection className={"sticky top-32"} />
        </div>
        <div className={`w-full lg:w-1/2`}>
          <ContactForm />
        </div>
      </div>
    </AppLayout>
  )
}

export default Quote
