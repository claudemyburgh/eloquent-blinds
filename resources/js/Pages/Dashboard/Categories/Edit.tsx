import React from "react"
import { Head } from "@inertiajs/react"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Panel } from "@/Components/Panel"
import EditCategoryForm from "@/Pages/Dashboard/Categories/Partials/EditCategoryForm"
import LiveLabel from "@/Components/LiveLabel"
import { ImageUpload } from "@/Components/Upload"

const Edit = ({ auth, category, galleries }: any) => {
  return (
    <AuthenticatedLayout
      header={
        <>
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Category Edit</h2>

          <div className="space-x-4 flex">
            <a className={`text-white rounded-full px-3 py-0.5 bg-white/10 hover:bg-primary-500`} href={route("category", category.slug)} target="_blank">
              View
            </a>
            <LiveLabel live={category.live} size={"md"} />
          </div>
        </>
      }
      user={auth.user}
    >
      <Head title="Dashboard Category Edit" />
      <div className="py-12">
        <div className="wrapper text-white">
          <Panel className={`col-span-4`}>
            <ImageUpload model={category} namedRoute={"dashboard.categories.upload"} />
            <EditCategoryForm />
          </Panel>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Edit
