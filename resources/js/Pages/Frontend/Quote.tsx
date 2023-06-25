import React from "react"
import { Head, usePage } from "@inertiajs/react"
import AppLayout from "@/Layouts/AppLayout"
import ContactForm from "@/Components/ContactForm"
import ContactSection from "@/Sections/ContactSection"

const Quote = () => {
  const { ziggy } = usePage<any>().props

  return (
    <AppLayout>
      <Head title="Get Free Quote">
        <link rel="canonical" href={ziggy.location} />
      </Head>

      <div className="relative">
        <div className="wrapper pt-24 lg:flex lg:space-x-8">
          <div className={`w-full lg:w-1/2 relative`}>
            <ContactSection className={"sticky top-32"} />
          </div>
          <div className={`w-full lg:w-1/2`}>
            <ContactForm />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Quote
