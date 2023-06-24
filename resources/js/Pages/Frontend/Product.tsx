import React from "react"
import { Head, usePage } from "@inertiajs/react"
import AppLayout from "@/Layouts/AppLayout"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { convertedImage } from "@/lib/helpers"

const Product = () => {
  const { ziggy, product, category } = usePage<any>().props
  return (
    <AppLayout>
      <Head title={`${product.title} ${category.title}`}>
        <link rel="canonical" href={ziggy.location} />
      </Head>
      <div className="wrapper my-24 relative z-10">
        <div className="mt-6 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img src={convertedImage(product?.media[0]?.original_url, "tail")} alt={``} className="w-full h-full object-center object-cover" />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 max-h-[240px] rounded-lg overflow-hidden">
              <img src={convertedImage(product?.media[1]?.original_url, "medium")} alt={``} className="w-full h-full object-center object-cover" />
            </div>
            <div className="aspect-w-3 aspect-h-2 max-h-[240px] rounded-lg overflow-hidden">
              <img src={convertedImage(product?.media[2]?.original_url, "medium")} alt={``} className="w-full h-full object-center object-cover" />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <img src={`https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg`} alt={``} className="w-full h-full object-center object-cover" />
          </div>
        </div>
        <div className={`border-t mt-12 border-gray-200 dark:border-gray-800`}>
          <h1 className={`mt-5 max-w-3xl text-4xl font-black tracking-tight text-gray-800 dark:text-white sm:text-6xl text-shadow-lg`}>
            {product.title} {category.title}
          </h1>
          {/*<AudioPlayer src={sound} />*/}
          <ReactMarkdown className={`prose prose-lg dark:prose-invert my-8 `} children={product.body} remarkPlugins={[remarkGfm]} />
        </div>
      </div>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </AppLayout>
  )
}

export default Product
