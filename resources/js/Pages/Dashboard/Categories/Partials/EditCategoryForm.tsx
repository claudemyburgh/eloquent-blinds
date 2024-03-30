import React, { useState } from "react"
import { useForm, usePage } from "@inertiajs/react"
import { InputError, InputLabel, SaveSubmitButton, SelectInput, Textarea, TextInput } from "@/Components/Form"
import { PageProps } from "@/types"
import { slugIt } from "@/lib/helpers"
import CharCounter from "@/Components/Form/CharCounter"
import toast from "react-hot-toast"
import { ToastItem } from "@/Components/Notifications"

interface CategoryProps {
  category: {
    galleries?: any
    title: string
    slug: string
    parent_id: string
    excerpt: string
    description: string
    body: string
    live: string
    popular: string
    video_url?: string
    video_thumbnail?: string
    gallery?: string
  }
}

interface CountProps {
  slug: number
  description: number
  body: number
  excerpt: number
}

const EditCategoryForm = () => {
  const { category, categories_all, galleries } = usePage<CategoryProps & PageProps>().props

  const [count, setCount] = useState<CountProps>({
    description: category.description?.length,
    body: category.body?.length,
    slug: category.slug?.length,
    excerpt: category.excerpt?.length,
  })

  const { data, setData, put, errors, processing, recentlySuccessful } = useForm({
    title: category.title || "",
    slug: category.slug || "",
    parent_id: category.parent_id || "",
    description: category.description || "",
    body: category.body || "",
    excerpt: category.excerpt || "",
    live: category.live,
    popular: category.popular,
    video_url: category.video_url || "",
    gallery: category["galleries"][0]?.id || "",
  })

  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    put(route("dashboard.categories.update", category), {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        toast.custom((t) => <ToastItem t={t} type={`success`} title={`Success`} message={`Category successfully updated`} icon={`check`} />)
      },
      onError: () => {
        toast.custom((t) => <ToastItem t={t} type={`error`} title={`Error`} message={`Something went wrong`} icon={`cross`} />)
      },
    })
  }

  function handleFormInput(e: any) {
    e.preventDefault()
    setData({
      ...data,
      [e.target.id]: e.target.value,
    })
    setCount({
      ...count,
      [e.target.id]: e.target.value.length,
    })
  }

  return (
    <form className={`mt-6 space-y-6`} onSubmit={handleFormSubmit}>
      <div>
        <InputLabel htmlFor="title" value="Title" />
        <TextInput id="title" value={data.title} onChange={handleFormInput} type="text" className="mt-1 block w-full" />
        <InputError message={errors.title} className="mt-2" />
      </div>
      <div>
        <InputLabel htmlFor="slug" value="Slug" />
        <TextInput id="slug" value={slugIt(data.slug)} onChange={handleFormInput} type="text" className="mt-1 block w-full" />
        <CharCounter count={count.slug} max={100} />
        <InputError message={errors.slug} className="mt-4" />
      </div>
      <div>
        <InputLabel htmlFor="parent_id" value="Parent Id" />
        <SelectInput id="parent_id" defaultValue={data.parent_id} onChange={handleFormInput} className="mt-1 block w-full">
          <option value="">None</option>
          {categories_all &&
            (categories_all as unknown as any[]).map((cat) => (
              <option key={cat.uuid} value={cat.id}>
                {cat.title}
              </option>
            ))}
        </SelectInput>
        <InputError message={errors.parent_id} className="mt-2" />
      </div>

      <div>
        <InputLabel htmlFor="description" value="Description" />
        <Textarea id="description" value={data.description} onChange={handleFormInput} className="mt-1 block w-full min-h-[100px]" />
        <CharCounter count={count.description || 0} max={500} />
        <InputError message={errors.description} className="mt-4" />
      </div>
      <div>
        <InputLabel htmlFor="excerpt" value="Excerpt" />
        <Textarea id="excerpt" value={data.excerpt} onChange={handleFormInput} className="mt-1 block w-full min-h-[100px]" />
        <CharCounter count={count.excerpt || 0} max={500} />
        <InputError message={errors.excerpt} className="mt-4" />
      </div>
      <div>
        <InputLabel htmlFor="body" value="Body" />
        <Textarea id="body" value={data.body} onChange={handleFormInput} className="mt-1 block w-full min-h-[200px]" />
        <CharCounter count={count.body || 0} max={2500} />
        <InputError message={errors.body} className="mt-4" />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <InputLabel htmlFor="live" value="Live" />
          <SelectInput id={`live`} name={`live`} className={`w-full mt-1`} value={data.live} onChange={handleFormInput}>
            <option value="1">Live</option>
            <option value="0">Not Live</option>
          </SelectInput>
          <InputError message={errors.live} className="mt-2" />
        </div>
        <div>
          <InputLabel htmlFor="popular" value="Popular" />
          <SelectInput id={`popular`} name={`popular`} className={`w-full mt-1`} value={data.popular} onChange={handleFormInput}>
            <option value="1">Popular</option>
            <option value="0">Not Popular</option>
          </SelectInput>
          <InputError message={errors.popular} className="mt-2" />
        </div>
      </div>

      <div>
        <InputLabel htmlFor="gallery" value="Gallery" />
        <SelectInput showValue={true} id={`gallery`} name={`gallery`} className={`w-full mt-1`} value={data.gallery} onChange={handleFormInput}>
          <option value="">Select a gallery</option>
          {(galleries as unknown as any).map((gal: any) => (
            <option key={gal.id} value={gal.id}>
              {gal.title}
            </option>
          ))}
        </SelectInput>
        <InputError message={errors.gallery} className="mt-2" />
      </div>

      <div>
        <InputLabel htmlFor="video_url" value="Video Url" />
        <TextInput id="video_url" value={data.video_url} onChange={handleFormInput} type="text" className="mt-1 block w-full" />
        <InputError message={errors.video_url} className="mt-2" />
      </div>

      <div className={`flex items-center justify-between`}>
        <SaveSubmitButton processing={processing} recentlySuccessful={recentlySuccessful} />
      </div>
      {/*<pre>{JSON.stringify(category["galleries"][0]["id"], null, 4)}</pre>*/}
    </form>
  )
}

export default EditCategoryForm
