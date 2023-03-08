import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head } from "@inertiajs/react"

export default function Dashboard({ users, auth, errors }) {
  return (
    <AuthenticatedLayout auth={auth} errors={errors} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}>
      <Head title="Dashboard" />

      <div className={`bg-white p-8 rounded-xl `}>{JSON.stringify(auth)}</div>
    </AuthenticatedLayout>
  )
}
