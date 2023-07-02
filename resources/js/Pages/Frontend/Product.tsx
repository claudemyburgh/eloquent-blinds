import React from "react"
import { Head, usePage } from "@inertiajs/react"
import AppLayout from "@/Layouts/AppLayout"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { convertedImage } from "@/lib/helpers"
import ContactForm from "@/Components/ContactForm"
import Image from "@/FrontEnd/Image/Image"
import Heading from "@/FrontEnd/Typography/Heading"

const Product = () => {
  const { ziggy, product, category } = usePage<any>().props
  return (
    <AppLayout>
      <Head title={`${product.title} ${category.title}`}>
        <link rel="canonical" href={ziggy.location} />
        <meta name="description" content={product.description}></meta>
      </Head>
      <div className="wrapper pt-32 relative z-10">
        <div className="mt-6 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden md:block">
            <Image
              width={388}
              height={641}
              src={convertedImage(product?.media[0]?.original_url, "tail")}
              alt={`${product.title} ${category.title} product `}
              className="w-full h-full object-center object-cover aspect-[3/2]"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-[3/2] rounded-lg overflow-hidden">
              <Image
                width={390}
                height={258}
                src={convertedImage(product?.media[1]?.original_url, "medium")}
                alt={`${product.title} ${category.title} materials `}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="aspect-[3/2]  rounded-lg overflow-hidden">
              <Image
                width={390}
                height={258}
                src={convertedImage(product?.media[2]?.original_url, "medium")}
                alt={`${product.title} ${category.title} materials `}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <div className="hidden lg:block aspect-w-4 aspect-h-5 rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <Image
              width={388}
              height={641}
              src={convertedImage(product?.media[2]?.original_url, "tail")}
              alt={`${product.title} ${category.title} materials `}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        <div className={`border-t mt-12 border-gray-200 grid lg:grid-cols-2 gap-6 dark:border-gray-800`}>
          <div>
            <Heading className={`mt-5`}>
              {product.title} {category.title}
            </Heading>
            {/*<AudioPlayer src={sound} />*/}
            <ReactMarkdown className={`prose prose-lg dark:prose-invert my-8 `} children={product.body} remarkPlugins={[remarkGfm]} />
          </div>
          <div className={`relative`}>
            <ContactForm className={`sticky top-32`} subject={`${product.title} ${category.title}`} />
          </div>
        </div>
      </div>
      {/*<pre>{JSON.stringify(product, null, 2)}</pre>*/}
    </AppLayout>
  )
}

export default Product
