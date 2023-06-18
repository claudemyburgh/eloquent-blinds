import React from "react"
import { Head, Link, usePage } from "@inertiajs/react"
import AppLayout from "@/Layouts/AppLayout"

const Categories = () => {
  const { ziggy, categories } = usePage<any>().props

  return (
    <AppLayout>
      <Head title="Categories">
        <link rel="canonical" href={ziggy.location} />
      </Head>

      <div className="relative">
        <div className="wrapper pt-24">
          <ul className={`list-outside list-disc space-y-2 mt-2`}>
            {categories &&
              categories.map((category: any) => (
                <li key={category.id}>
                  {category.title}
                  {category.children && (
                    <ul className={`list-outside list-disc ml-8 mt-2 space-y-2`}>
                      {category.children.map((categoryChild: any) => (
                        <li key={`${categoryChild.slug}-${categoryChild.id}`}>
                          {categoryChild.title}
                          {categoryChild.products && (
                            <ul className={`list-outside list-disc ml-8 mt-2 space-y-2`}>
                              {categoryChild.products.map((product: any) => (
                                <li key={`${product.slug}-${product.id}`}>
                                  <Link
                                    className={`hover:text-primary-500 hover:underline`}
                                    href={route("product", {
                                      category: categoryChild.slug,
                                      product,
                                    })}
                                  >
                                    {product.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
          </ul>

          {/*<pre>{JSON.stringify(categories[0].children, null, 2)}</pre>*/}
        </div>
      </div>
    </AppLayout>
  )
}

export default Categories
