import React from "react"
import { Head } from "@inertiajs/react"

import LiveLabel from "@/Components/LiveLabel"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Panel } from "@/Components/Panel"
import EditGalleriesForm from "@/Pages/Dashboard/Galleries/Partials/EditGalleriesForm"
import { ImageUpload } from "@/Components/Upload"

const Edit = ({ auth, gallery }: any) => {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <>
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Gallery Edit</h2>
          <LiveLabel live={gallery.live} size={"md"} />
        </>
      }
    >
      <Head title="Dashboard Post Edit" />
      <div className="py-12">
        <div className="wrapper text-white ">
          <Panel>
            <ImageUpload model={gallery} namedRoute={"dashboard.galleries.upload"} />
            <EditGalleriesForm />
          </Panel>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Edit
