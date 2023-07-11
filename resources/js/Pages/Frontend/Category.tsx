import React from "react"
import AppLayout from "@/Layouts/AppLayout"
import { Head, usePage } from "@inertiajs/react"
import Heading from "@/FrontEnd/Typography/Heading"
import remarkGfm from "remark-gfm"
import ReactMarkdown from "react-markdown"
import Image from "@/FrontEnd/Image/Image"
import { convertedImage } from "@/lib/helpers"
import GradientBorder from "@/Components/GradientBorder"
import { CategoryProps } from "@/types/categories"
import CategoryCard from "@/FrontEnd/Card/CategoryCard"
import { ProductsProps } from "@/types/products"
import { meta_categories as meta } from "@/Data/header-data"

const Category = () => {
  const { ziggy, category, descendants } = usePage<any>().props
  // @ts-ignore
  return (
    <AppLayout>
      <Head title={category.title}>
        {/* HTML Meta Tags */}
        <link head-key={`canonical`} rel="canonical" href={ziggy.location} />
        <meta head-key={`description`} name="description" content={category.description} />
        {/* Facebook Meta Tags */}
        <meta head-key="fb-url" property="og:url" content={ziggy.location} />
        <meta head-key="fb-type" property="og:type" content="website" />
        <meta head-key="fb-title" property="og:title" content={`Eloquent Blinds - ${category.title}`} />
        <meta head-key="fb-description" property="og:description" content={category.description} />
        <meta head-key="fb-image" property="og:image" content={convertedImage(category?.media[0]?.original_url, "card")} />
        {/* Twitter Meta Tags */}
        <meta head-key="tw-card" name="twitter:card" content="summary_large_image" />
        <meta head-key="tw-domain" property="twitter:domain" content="eloquentblinds.co.za" />
        <meta head-key="tw-url" property="twitter:url" content={ziggy.location} />
        <meta head-key="tw-title" name="twitter:title" content={`Eloquent Blinds - ${category.title}`} />
        <meta head-key="tw-description" name="twitter:description" content={category.description} />
        <meta head-key="tw-image" name="twitter:image" content={convertedImage(category?.media[0]?.original_url, "card")} />
      </Head>

      <div className="relative wrapper pt-24 lg:pt-32">
        <div className="wrapper md:flex md:flex-row-reverse gap-8 md:-mr-2">
          <div className={`md:w-1/2 mb-12 relative`}>
            <GradientBorder className="overflow-hidden sticky top-24 ">
              <Image
                width={1028}
                height={607}
                className={`rounded-lg aspect-4/3 object-cover`}
                src={convertedImage(category?.media[0]?.original_url, "large")}
                alt={category.title}
              />
            </GradientBorder>
          </div>
          <div className={`md:w-1/2 space-y-6 md:-ml-2`}>
            <Heading as={`h1`} type={`h1`}>
              {category.title}
            </Heading>
            <ReactMarkdown className={`prose prose-lg dark:prose-invert `} children={category.body} remarkPlugins={[remarkGfm]} />
          </div>
        </div>
      </div>
      <div className="wrapper my-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {descendants && descendants.map((category: CategoryProps) => <CategoryCard key={category.title} item={category} url={route("category", category)} />)}
        {category.products &&
          category.products.map((product: ProductsProps) => (
            <CategoryCard
              key={product.title}
              // @ts-expect-error
              item={product}
              url={route("product", {
                category,
                product,
              })}
            />
          ))}
      </div>
    </AppLayout>
  )
}

export default Category
