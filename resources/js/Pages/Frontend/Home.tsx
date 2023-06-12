import React from "react"
import AppLayout from "@/Layouts/AppLayout"
import { Head, Link, usePage } from "@inertiajs/react"
import ReviewPanel from "@/FrontEnd/Review/ReviewPanel"
import HeroComponent from "@/FrontEnd/Hero/HeroComponent"
import SectionProducts from "@/Sections/SectionProducts"

const Home = () => {
  const { ziggy } = usePage<any>().props

  const url = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDLdXj8ZeKNd3GgtBbHJLQrgCMWeuInbvc&libraries=places`

  return (
    <AppLayout>
      <Head title="Home">
        <link rel="canonical" href={ziggy.location} />
      </Head>

      <div className="relative">
        <HeroComponent />
        <SectionProducts />
        <div className="wrapper">
          <div className="max-w-3xl">
            <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-300">
              We offer a wide range of high-quality blinds at affordable prices. Our blinds are perfect for any room in the house and will add style and function to your space. We
              have a variety of options to choose from, including Aluminium Blinds , Bamboo Blinds , Basswood Blinds , Honeycomb Blinds , Roller Blinds , Venetian Blinds , and
              Zebra Blinds.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-300">
              At Eloquent Blinds, we believe that the installation of your blinds should be just as hassle-free as the purchasing process. That's why we offer professional
              installation services for all of our blinds.
            </p>
          </div>

          <ReviewPanel />
        </div>
        <div className="h-[220px] bg-gradient-to-t from-white via-white dark:from-gray-900 dark:via-gray-900 to-transparent absolute bottom-0 inset-x-0 flex items-center justify-center">
          <Link
            className={`mt-24 inline-flex w-full bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-[300px]`}
            href={route("reviews")}
          >
            See more
          </Link>
        </div>
      </div>
    </AppLayout>
  )
}

export default Home
