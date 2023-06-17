import React from "react"
import { Head, usePage } from "@inertiajs/react"
import AppLayout from "@/Layouts/AppLayout"

const Product = () => {
  const { ziggy, product, category } = usePage<any>().props
  return (
    <AppLayout>
      <Head title="Categories">
        <link rel="canonical" href={ziggy.location} />
      </Head>
      <div className="wrapper my-24">
        <div className="mt-6 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img src={`https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg`} alt={``} className="w-full h-full object-center object-cover" />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img src={`https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg`} alt={``} className="w-full h-full object-center object-cover" />
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img src={`https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg`} alt={``} className="w-full h-full object-center object-cover" />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <img src={`https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg`} alt={``} className="w-full h-full object-center object-cover" />
          </div>
        </div>
      </div>
      {/*<pre>{JSON.stringify(category, null, 2)}</pre>*/}
    </AppLayout>
  )
}

export default Product
