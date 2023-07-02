import React from "react"
import { Head, Link, usePage } from "@inertiajs/react"
import AppLayout from "@/Layouts/AppLayout"
import { CategoryProps } from "@/types/categories"
import Heading from "@/FrontEnd/Typography/Heading"
import CategoryCard from "@/FrontEnd/Card/CategoryCard"

const Categories = () => {
  const { ziggy, categories } = usePage<any>().props

  return (
    <AppLayout>
      <Head title="Categories">
        <link rel="canonical" href={ziggy.location} />
      </Head>

      <div className="relative">
        <div className="wrapper pt-24 space-y-6">
          <Heading as={`h1`} type={`h1`} className={`col-span-12`}>
            Product Categories
          </Heading>
          <p className={`prose prose-lg col-span-6 text-gray-700 dark:text-white`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate dolores error facilis ipsam odit praesentium qui quia repellat totam? Assumenda
            distinctio dolore iure laborum neque odit, recusandae veniam voluptates.
          </p>

          <div>
            {categories &&
              categories.map((category: CategoryProps) => (
                <div key={category.slug} className={` grid grid-cols-12 gap-6 mb-6`}>
                  <Link href={route("category", category)} className={`text-2xl md:text-4xl font-bold tracking-tight col-span-12`}>
                    {category.title}
                  </Link>

                  {category.children &&
                    category.children.map((cat: CategoryProps) => (
                      <CategoryCard key={category.id} url={route("category", category)} className={`col-span-6 md:col-span-3`} item={category} />
                    ))}
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
