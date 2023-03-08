import AppLayout from "@/Layouts/AppLayout"
import Hero from "@/Components/Parts/Hero"
import { Head, usePage } from "@inertiajs/react"

const Home = () => {
  const { categories } = usePage().props
  return (
    <AppLayout>
      <Head>
        <title>Best Selection of Blinds at Affordable Prices</title>
      </Head>
      <Hero />

      <div className="wrapper pt-32">
        <h1 className="text-3xl font-semibold">Home page</h1>
        <p className="my-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet aspernatur assumenda aut commodi doloremque, eligendi est eum fugiat incidunt labore maxime, necessitatibus non omnis
          perferendis, praesentium qui sit voluptatibus.
        </p>
      </div>
    </AppLayout>
  )
}

export default Home
