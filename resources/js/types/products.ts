import { MediaProps } from "@/types/Media"

export interface ProductsProps {
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
}
