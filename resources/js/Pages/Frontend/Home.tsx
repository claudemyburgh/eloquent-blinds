import React from "react"
import AppLayout from "@/Layouts/AppLayout"
import { Head, Link, usePage } from "@inertiajs/react"
import ReviewPanel from "@/FrontEnd/Review/ReviewPanel"
import HeroComponent from "@/FrontEnd/Hero/HeroComponent"
import SectionProducts from "@/Sections/SectionProducts"
import IntroIcons2 from "@/FrontEnd/Parts/IntroIcons2"
import Incentives from "@/Sections/Incentives"
import Marquee from "@/Components/Marquee"
import ContactCard from "@/Components/ContactCard"
import contactUsers from "@/../js/Data/contact-users"
import TiltItem from "@/FrontEnd/Parts/TiltItem"

const Home = () => {
  const { ziggy, csrf } = usePage<any>().props

  return (
    <AppLayout>
      <Head title="Home">
        <link rel="canonical" href={ziggy.location} />
      </Head>

      <div className="relative">
        <HeroComponent />
        <div className="wrapper grid md:grid-cols-3 my-12 gap-6">
          <header className={`flex justify-center flex-col`}>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-gray-800 dark:text-white">Let's work together</h2>
            <p className="mt-4 text-lg  text-gray-500 dark:text-gray-300 sm:mt-3">
              We’d love to hear from you! Send us a message using the form opposite, or email us. We’d love to hear from you! Send us a message using the form opposite, or email
              us.
            </p>
          </header>

          {contactUsers.map((details: any, index: number) => (
            <TiltItem key={index} className={` shadow-lg shadow-primary-600/40 `} options={{ max: 5 }}>
              <ContactCard details={details} />
            </TiltItem>
          ))}
        </div>

        <Marquee speed={10000} className={`-rotate-3 relative z-10 shadow-xl shadow-black/20`}>
          <div className={`px-4 shrink-0`}>Lorem ipsum dolor sit amet, consectetur</div>
          <div className={`px-4 shrink-0`}>Lorem ipsum dolor sit amet, consectetur sadsadsaffasf</div>
          <div className={`px-4 shrink-0`}>Lorem ipsum dolor sit amet, consectetur</div>
        </Marquee>

        <IntroIcons2 />

        <div className="max-w-7xl mx-auto ">
          <div className="px-4">
            <ReviewPanel />
          </div>
        </div>
        <div className="h-[350px] bg-gradient-to-t from-white via-white dark:from-gray-900 dark:via-gray-900 to-transparent absolute bottom-0 inset-x-0 flex items-center justify-center">
          <Link
            className={`mt-24 inline-flex w-full bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-[300px]`}
            href={route("reviews")}
          >
            See more
          </Link>
        </div>
      </div>
      <Incentives />
      <SectionProducts className={`mb-12`} />
    </AppLayout>
  )
}

export default Home
