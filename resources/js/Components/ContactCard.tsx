import React from "react"
import GridPattern from "@/FrontEnd/Theme/GridPattern"

interface DetailsProps {
  details: {
    first_name: string
    last_name: string
    phone: string
    email: string
    image: string
  }
}

const ContactCard = ({ details }: DetailsProps) => {
  return (
    <div className={`bg-gray-100 dark:bg-gray-900 overflow-clip relative card w-full p-6 rounded-lg border dark:border-gray-800 border-gray-300`}>
      <GridPattern className={`h-[100px] absolute -top-[20px] -rotate-6 inset-x-0`} />
      <figure className={`w-[160px] h-[160px] block mx-auto rounded-full overflow-clip shadow-lg shadow-primary-500/30 border-[4px] border-primary-500/50`}>
        <img src={details.image} alt={`${details.first_name} ${details.last_name}`} />
        <figcaption className={`sr-only`}>
          A profile image for {details.first_name} {details.last_name}.
        </figcaption>
      </figure>
      <div className="space-y-2">
        <p className={`text-3xl text-gray-700 dark:text-gray-100 text-center mt-4 font-black`}>
          {details.first_name} {details.last_name}
        </p>
        <p className={`text-3xl text-gray-700 dark:text-gray-300 text-center font-bold tracking-wide`}>
          <a className={`hover:text-primary-500 hover:underline`} href={`tel:${details.phone.replace(/\s/g, "")}`}>
            {details.phone}
          </a>
        </p>
        <p className={`text-center text-gray-700 dark:text-gray-300 font-light tracking-widest`}>
          <a className={`hover:text-primary-500 hover:underline`} href={`mail:${details.email}`}>
            {details.email}
          </a>
        </p>
      </div>
    </div>
  )
}

export default ContactCard
