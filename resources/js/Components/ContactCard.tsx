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
    <div className={`@container/card`}>
      <div className={`bg-gray-100 @[550px]:flex items-center dark:bg-gray-900 overflow-clip relative card w-full p-6 rounded-lg border dark:border-gray-800 border-gray-300`}>
        <GridPattern className={`h-[100px] absolute top-0 inset-x-0`} />
        <figure
          className={`w-[150px] shrink-0 h-[150px] @[550px]:w-[110px] @[550px]:h-[110px] mx-auto @[550px]:mx-0 block  rounded-2xl overflow-clip shadow-lg shadow-primary-500/30 border-[4px] border-primary-500/50`}
        >
          <img width={149} height={149} src={details.image} alt={`${details.first_name} ${details.last_name}`} />
          <figcaption className={`sr-only`}>
            A profile image for {details.first_name} {details.last_name}.
          </figcaption>
        </figure>
        <div className="-space-y-0.5 text-center @[550px]:text-left @[550px]:ml-6 mt-4 @[550px]:mt-0">
          <p className={`text-3xl @[550px]:text-xl text-gray-700 dark:text-gray-100 font-black`}>
            {details.first_name} {details.last_name}
          </p>
          <p className={`text-lg @xs:text-3xl text-gray-700 dark:text-gray-300 font-black tracking-tight`}>
            <a className={`hover:text-primary-500 hover:underline`} href={`tel:${details.phone.replace(/\s/g, "")}`}>
              {details.phone}
            </a>
          </p>
          <p className={`text-xs @xs:text-lg text-gray-700 dark:text-gray-300 font-light tracking-widest`}>
            <a className={`hover:text-primary-500 hover:underline`} href={`mail:${details.email}`}>
              {details.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
