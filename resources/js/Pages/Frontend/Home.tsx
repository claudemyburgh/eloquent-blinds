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
