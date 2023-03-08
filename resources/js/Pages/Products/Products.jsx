import AppLayout from "@/Layouts/AppLayout"
import { Head } from "@inertiajs/react"

const Products = ({ category }) => {
  return (
    <AppLayout>
      <Head>
        <title>{category.title}</title>
      </Head>

      <div className="wrapper pt-32">
        <h1 className="text-7xl font-black">{category.title}</h1>
      </div>
    </AppLayout>
  )
}

export default Products
