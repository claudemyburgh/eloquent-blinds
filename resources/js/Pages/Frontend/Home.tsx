import React from "react"
import AppLayout from "@/Layouts/AppLayout"
import { Head, usePage } from "@inertiajs/react"
import HeroComponent from "@/FrontEnd/Hero/HeroComponent"
import IntroIcons2 from "@/FrontEnd/Parts/IntroIcons2"

const Home = () => {
  const { ziggy, csrf, categories_all } = usePage<any>().props

  return (
    <AppLayout>
      <Head title="Blind supplies and installers.">
        <link rel="canonical" href={ziggy.location} />
        <meta
          name={`description`}
          content={`We offer a wide range of high-quality blinds at affordable prices. Our blinds are perfect for any room in the house and will add style and function to your space.`}
        />
      </Head>
      <div className="relative">
        <HeroComponent />
        <IntroIcons2 />
        {/*<Reviews />*/}
        {/*<div className="wrapper ">*/}
        {/*  <ReviewPanel />*/}
        {/*</div>*/}
        {/*<div className="h-[350px] bg-gradient-to-t from-white via-white dark:from-gray-900 dark:via-gray-900 to-transparent absolute bottom-0 inset-x-0 flex items-center justify-center">*/}
        {/*  <DefaultLink className={`min-w-[220px]`} size={`xl`} href={route("reviews")}>*/}
        {/*    See more*/}
        {/*  </DefaultLink>*/}
        {/*</div>*/}
      </div>
    </AppLayout>
  )
}

export default Home
