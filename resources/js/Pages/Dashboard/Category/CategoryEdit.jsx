import Authenticated from "@/Layouts/AuthenticatedLayout"

const CategoryEdit = () => {
  return (
    <Authenticated>
      <div className="bg-gray-800 rounded-xl p-4 md:p-6 lg:p-8 max-w-3xl">
        <h1>Edit</h1>
      </div>
    </Authenticated>
  )
}

export default CategoryEdit
