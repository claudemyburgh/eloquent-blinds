import AppLayout from "@/Layouts/AppLayout"
import { Head, Link, usePage } from "@inertiajs/react"
import Marquee from "react-fast-marquee"

const CategoryList = () => {
  const { categories } = usePage().props

  return (
    <AppLayout>
      <Head>
        <title>Categories list of superior blinds</title>
      </Head>

      <div className="wrapper pt-32">
        <div className="max-w-xl space-y-4">
          <h1 className="text-4xl font-bold">Categories</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa fuga itaque nostrum numquam perspiciatis provident quisquam rem saepe! Est, perspiciatis?</p>
        </div>

        <div className="flex  my-6">
          <Marquee speed={100} gradientWidth={70} gradientColor={[17, 24, 39]} pauseOnHover>
            {categories[0].children.map((category) => (
              <div className={`min-w-[300px] mx-4 bg-gray-900/20 backdrop-blur-sm border border-gray-200 rounded-xl p-6`} key={category.id}>
                <Link href={route("products.index", category.slug)}>{category.title}</Link>
              </div>
            ))}
          </Marquee>
        </div>
        <div className="flex  my-6">
          <Marquee speed={100} gradientWidth={70} gradientColor={[17, 24, 39]} pauseOnHover direction={"right"}>
            {categories[0].children.map((category) => (
              <div className={`min-w-[300px] mx-4 bg-gray-900/20 backdrop-blur-sm border border-gray-200 rounded-xl p-6`} key={category.id}>
                <Link href={route("products.index", category.slug)}>{category.title}</Link>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </AppLayout>
  )
}

export default CategoryList
