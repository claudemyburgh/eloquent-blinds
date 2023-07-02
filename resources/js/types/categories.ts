import { MediaProps } from "@/types/Media"
import { ProductsProps } from "@/types/products"

export interface CategoriesAllProp {
  categories_all: CategoryProps[]
}

export interface CategoriesProp {
  categories: CategoryProps[]
}

export interface CategoryProps {
  id: number
  title: string
  slug: string
  description: string
  parent_id: number | null
  excerpt: string
  body: string
  popular: boolean
  live: boolean
  created_at: string
  updated_at: string
  deleted_at: string
  media: MediaProps[]
  products: ProductsProps[]
}
