import React from "react"
import AppLayout from "@/Layouts/AppLayout"
import { Head, usePage } from "@inertiajs/react"
import HeroComponent from "@/FrontEnd/Hero/HeroComponent"
import IntroIcons2 from "@/FrontEnd/Parts/IntroIcons2"
import { meta_home as meta } from "@/Data/header-data"

const Home = () => {
  const { ziggy } = usePage<any>().props

  return (
    <AppLayout>
      <Head title={meta.title}>
        {/* HTML Meta Tags */}
        <link rel="canonical" href={ziggy.location} />
        <meta name="description" content={meta.description} />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content={ziggy.location} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Eloquent Blinds" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="eloquentblinds.co.za" />
        <meta property="twitter:url" content={ziggy.location} />
        <meta name="twitter:title" content="Eloquent Blinds" />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
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
