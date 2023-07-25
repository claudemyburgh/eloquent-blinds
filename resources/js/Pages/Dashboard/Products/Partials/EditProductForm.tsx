import React, { useState } from "react"
import { useForm, usePage } from "@inertiajs/react"
import { InputError, InputLabel, SaveSubmitButton, SelectCategory, SelectInput, Textarea, TextInput } from "@/Components/Form"
import { PageProps } from "@/types"
import { slugIt } from "@/lib/helpers"
import CharCounter from "@/Components/Form/CharCounter"
import toast from "react-hot-toast"
import { ToastItem } from "@/Components/Notifications"

interface ProductProps {
  product: {
    title: string
    slug: string
    category_id: string
    excerpt: string
    description: string
    body: string
    live: string
    popular: string
  }
  tags: any
}

interface Prod {
  title: string
  slug: string
  category_id: string
  excerpt: string
  description: string
  body: string
  live: string
  popular: string
  tag: string[]
}

interface CountProps {
  slug: number
  description: number
  body: number
  excerpt: number
}

const EditProductForm = () => {
  const { product, categories_all, tags } = usePage<ProductProps & PageProps>().props

  const [count, setCount] = useState<CountProps>({
    description: product.description?.length,
    body: product.body?.length,
    slug: product.slug?.length,
    excerpt: product.excerpt?.length,
  })

  const { data, setData, put, errors, processing, recentlySuccessful } = useForm({
    title: product.title || "",
    slug: product.slug || "",
    category_id: product.category_id || "",
    description: product.description || "",
    body: product.body || "",
    excerpt: product.excerpt || "",
    live: product.live,
    popular: product.popular,
    tag: tags || "",
  })

  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    put(route("dashboard.products.update", product), {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        toast.custom((t) => <ToastItem t={t} type={`success`} title={`Success`} message={`Product successfully updated`} icon={`check`} />)
      },
      onError: () => {
        toast.custom((t) => <ToastItem t={t} type={`error`} title={`Error`} message={`Something went wrong`} icon={`cross`} />)
      },
    })
  }

  function handleProductFormInput(e: any) {
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
        <TextInput id="title" value={data.title} onChange={handleProductFormInput} type="text" className="mt-1 block w-full" />
        <InputError message={errors.title} className="mt-2" />
      </div>
      <div>
        <InputLabel htmlFor="slug" value="Slug" />
        <TextInput id="slug" value={slugIt(data.slug)} onChange={handleProductFormInput} type="text" className="mt-1 block w-full" />
        <CharCounter count={count.slug} max={100} />
        <InputError message={errors.slug} className="mt-4" />
      </div>

      {/*Keywords tags*/}
      {/*<div>*/}
      {/*  <InputLabel htmlFor="tag" value="Keywords" />*/}
      {/*  <TextInput id="tag" value={data.tag} onChange={handleProductFormInput} type="text" className="mt-1 block w-full" />*/}
      {/*  <InputError message={errors.tag} className="mt-4" />*/}
      {/*</div>*/}

      <div>
        <InputLabel htmlFor="category_id" value="Category" />
        <SelectCategory id="category_id" categories={categories_all} defaultValue={data.category_id} onChange={handleProductFormInput} />
        <InputError message={errors.category_id} className="mt-2" />
      </div>

      <div>
        <InputLabel htmlFor="description" value="Description" />
        <Textarea id="description" value={data.description} onChange={handleProductFormInput} className="mt-1 block w-full min-h-[100px]" />
        <CharCounter count={count.description || 0} max={500} />
        <InputError message={errors.description} className="mt-4" />
      </div>
      <div>
        <InputLabel htmlFor="excerpt" value="Excerpt" />
        <Textarea id="excerpt" value={data.excerpt} onChange={handleProductFormInput} className="mt-1 block w-full min-h-[100px]" />
        <CharCounter count={count.excerpt || 0} max={500} />
        <InputError message={errors.excerpt} className="mt-4" />
      </div>
      <div>
        <InputLabel htmlFor="body" value="Body" />
        <Textarea id="body" value={data.body} onChange={handleProductFormInput} className="mt-1 block w-full min-h-[200px]" />
        <CharCounter count={count.body || 0} max={2500} />
        <InputError message={errors.body} className="mt-4" />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <InputLabel htmlFor="live" value="Live" />
          <SelectInput id={`live`} name={`live`} className={`w-full mt-1`} value={data.live} onChange={handleProductFormInput}>
            <option value="1">Live</option>
            <option value="0">Not Live</option>
          </SelectInput>
          <InputError message={errors.live} className="mt-2" />
        </div>
        <div>
          <InputLabel htmlFor="popular" value="Popular" />
          <SelectInput id={`popular`} name={`popular`} className={`w-full mt-1`} value={data.popular} onChange={handleProductFormInput}>
            <option value="1">Popular</option>
            <option value="0">Not Popular</option>
          </SelectInput>
          <InputError message={errors.popular} className="mt-2" />
        </div>
      </div>

      <div className={`flex items-center justify-between`}>
        <SaveSubmitButton processing={processing} recentlySuccessful={recentlySuccessful} />
      </div>
    </form>
  )
}

export default EditProductForm
