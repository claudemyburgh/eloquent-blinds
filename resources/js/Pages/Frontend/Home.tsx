import React from "react"
import AppLayout from "@/Layouts/AppLayout"
import { Head, usePage } from "@inertiajs/react"
import HeroComponent from "@/FrontEnd/Hero/HeroComponent"
import IntroIcons2 from "@/FrontEnd/Parts/IntroIcons2"

const Home = () => {
  const { ziggy, csrf, categories_all } = usePage<any>().props

  return (
    <AppLayout>
      <Head title="Home">
        <link rel="canonical" href={ziggy.location} />
      </Head>

      <div className="relative">
        <HeroComponent />

        <IntroIcons2 />

        {/*<Reviews />*/}

        {/*<div className="max-w-7xl mx-auto ">*/}
        {/*  <div className="px-4">*/}
        {/*    <ReviewPanel />*/}
        {/*  </div>*/}
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
