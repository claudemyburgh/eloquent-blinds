import React, { Fragment } from "react"
import { Head, Link, usePage } from "@inertiajs/react"
import AppLayout from "@/Layouts/AppLayout"
import { convertedImage } from "@/lib/helpers"

const Categories = () => {
  const { ziggy, categories } = usePage<any>().props

  return (
    <AppLayout>
      <Head title="Categories">
        <link rel="canonical" href={ziggy.location} />
      </Head>

      <div className="relative">
        <div className="wrapper pt-24 ">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {categories.map((cat: any) => (
              <Fragment key={cat.id}>
                <Link href={`#`} className={`col-span-2`}>
                  <div className={`p-4 border card border-gray-800 bg-gray-900 rounded-lg`}>
                    <img width={400} height={300} className={`rounded-lg w-full object-cover aspect-4/3 mb-6`} src={convertedImage(cat.media[0]?.original_url, "medium")} alt="" />
                    <h3 className={`text-xl`}>{cat.title}</h3>
                  </div>
                </Link>
                <div className={`p-4 border col-span-4 card border-gray-800 bg-gray-900 rounded-lg`}>
                  <ul className={`list-outside list-disc ml-6 space-y-2`}>
                    {cat.children.map((child: any) => (
                      <li key={child.id}>
                        <Link href={route("category", { category: child.slug })} className={`hover:text-primary-500`}>
                          {child.title}
                        </Link>
                        <ul className={`ml-4 space-y-2`}>
                          {child?.products.map((product: any) => (
                            <li key={product.id}>
                              <Link
                                href={route("product", {
                                  product,
                                  category: child.slug,
                                })}
                              >
                                {product.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </Fragment>
            ))}
            <pre>{JSON.stringify(categories[0].children, null, 2)}</pre>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Categories
