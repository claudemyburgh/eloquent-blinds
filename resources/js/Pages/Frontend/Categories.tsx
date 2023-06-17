import React from "react"
import { Head, usePage } from "@inertiajs/react"
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
          <div className="grid grid-cols-1 gap-8">
            {categories.map((cat: any) => (
              <div key={cat.id} className={`p-4 border border-gray-400 rounded`}>
                <img width={200} height={200} className={`rounded-lg w-1/3 object-fill mb-6`} src={convertedImage(cat.media[0]?.original_url, "medium")} alt="" />
                <h3 className={`text-xl`}>{cat.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: cat.description }}></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Categories
