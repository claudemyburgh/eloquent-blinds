import React from "react"
import { Head, usePage } from "@inertiajs/react"
import AppLayout from "@/Layouts/AppLayout"
import ReviewPanel from "@/FrontEnd/Review/ReviewPanel"
import Heading from "@/FrontEnd/Typography/Heading"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { meta_quote as meta } from "@/Data/header-data"

const Reviews = () => {
  const { ziggy } = usePage<any>().props

  const url = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDLdXj8ZeKNd3GgtBbHJLQrgCMWeuInbvc&libraries=places`

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
        <div className="wrapper pt-24 lg:pt-32">
          <div className="mb-10">
            <Heading as={`h1`} type={`h1`}>
              Customer Reviews
            </Heading>
            <ReactMarkdown
              className={`prose prose-lg dark:prose-invert my-4  `}
              children={`We value your feedback and invite you to share your experience with us. Your opinion matters to us, and we would greatly appreciate it if you could take a moment to leave a Google review.`}
              remarkPlugins={[remarkGfm]}
            />
          </div>
          <ReviewPanel />
        </div>
      </div>
    </AppLayout>
  )
}

export default Reviews
