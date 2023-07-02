import React, { FC } from "react"
import { EnvelopeIcon } from "@heroicons/react/24/outline"
import contactUsers from "@/Data/contact-users"
import TiltItem from "@/FrontEnd/Parts/TiltItem"
import ContactCard from "@/Components/ContactCard"
import { usePage } from "@inertiajs/react"
import { twMerge } from "tailwind-merge"
import Heading from "@/FrontEnd/Typography/Heading"
import { PrimaryLink } from "@/FrontEnd/Links"

const ContactSection: FC<{ className?: string }> = ({ className }) => {
  const component = usePage().component
  return (
    <div className={twMerge(`@container grid grid-cols-6  my-12 gap-6`, className)}>
      <header className={`flex justify-center flex-col pr-6 col-span-6 @lg:col-span-6 @5xl:col-span-2`}>
        <Heading as={`h1`} type={`h1`}>
          Get in touch
        </Heading>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 sm:mt-3">We’d love to hear from you! Send us a message via email, whatapp or simply give us a call.</p>
        {component !== "Frontend/Quote" && (
          <div>
            <PrimaryLink size={`2xl`} href={route("quote")} className={`card mt-4 `}>
              Contact Us{" "}
              <span aria-hidden="true" className={`pl-2`}>
                <EnvelopeIcon className={`h-5 w-5`} />
              </span>
            </PrimaryLink>
          </div>
        )}
      </header>

      {contactUsers.map((details: any, index: number) => (
        <TiltItem key={index} className={`shadow-lg shadow-primary-600/10 col-span-6 @lg:col-span-6 @5xl:col-span-2`} options={{ max: 5 }}>
          <ContactCard details={details} />
        </TiltItem>
      ))}
    </div>
  )
}

export default ContactSection
