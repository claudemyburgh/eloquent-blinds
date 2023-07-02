import React from "react"
import { Head, Link, usePage } from "@inertiajs/react"
import AppLayout from "@/Layouts/AppLayout"
import { CategoryProps } from "@/types/categories"
import Heading from "@/FrontEnd/Typography/Heading"
import CategoryCard from "@/FrontEnd/Card/CategoryCard"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { LinkIcon } from "@heroicons/react/20/solid"

const Categories = () => {
  const { ziggy, categories } = usePage<any>().props

  const bodyHTML = `Discover a world of stunning blinds as you explore our diverse product categories. From timeless classics to contemporary designs, our curated selection offers unparalleled style and functionality. Browse through our user-friendly website and find the perfect window coverings to enhance your living space.

Elevate your home with privacy, light control, and exquisite aesthetics. Start exploring now and transform your decor with our captivating blinds.`

  return (
    <AppLayout>
      <Head title="Products categories">
        <link rel="canonical" href={ziggy.location} />
        <meta
          name={`description`}
          content={`Discover a world of stunning blinds as you explore our diverse product categories. From timeless classics to contemporary designs, our curated selection offers unparalleled style and functionality.`}
        />
      </Head>
      <div className="relative">
        <div className="wrapper pt-32 space-y-4">
          <Heading as={`h1`} type={`h1`} className={`col-span-12`}>
            Product Categories
          </Heading>
          <ReactMarkdown className={`prose prose-lg dark:prose-invert my-8 `} children={bodyHTML} remarkPlugins={[remarkGfm]} />
          <div>
            {categories &&
              categories.map((category: CategoryProps) => (
                <div key={category.slug} className={` grid grid-cols-12 gap-6 my-12`}>
                  <div className="col-span-12">
                    <Link
                      href={route("category", category)}
                      className={`relative group hover:underline inline-block text-2xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white `}
                    >
                      <span>
                        <LinkIcon className={`h-8 w-8 absolute -left-[36px] top-2 hidden group-hover:lg:block`} />
                      </span>
                      {category.title}
                    </Link>
                  </div>
                  {category.children &&
                    category.children.map((cat: CategoryProps) => <CategoryCard key={cat.id} url={route("category", cat)} className={`col-span-6 md:col-span-3`} item={cat} />)}
                </div>
              ))}
          </div>
        </div>
        {/*<pre>{JSON.stringify(categories, null, 4)}</pre>*/}
      </div>
    </AppLayout>
  )
}

export default Categories
