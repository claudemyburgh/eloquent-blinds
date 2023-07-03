import React from "react"
import { Head, usePage } from "@inertiajs/react"
import AppLayout from "@/Layouts/AppLayout"
import ReviewPanel from "@/FrontEnd/Review/ReviewPanel"
import Heading from "@/FrontEnd/Typography/Heading"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

const Reviews = () => {
  const { ziggy } = usePage<any>().props

  const url = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDLdXj8ZeKNd3GgtBbHJLQrgCMWeuInbvc&libraries=places`

  return (
    <AppLayout>
      <Head title="Reviews">
        <link rel="canonical" href={ziggy.location} />
        <meta name="description" content=""></meta>
      </Head>
      <div className="relative">
        <div className="wrapper pt-32">
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
