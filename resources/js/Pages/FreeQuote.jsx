import AppLayout from "@/Layouts/AppLayout"
import QuoteForm from "@/Components/Parts/QuoteForm"
import { Head } from "@inertiajs/react"

const FreeQuote = () => {
  return (
    <AppLayout>
      <Head>
        <title>Get you free quote</title>
      </Head>

      <div className="wrapper pt-32">
        <h1 className="text-5xl font-black">Free Quote</h1>
        <div className="my-12">
          <QuoteForm />
        </div>
      </div>
    </AppLayout>
  )
}

export default FreeQuote
