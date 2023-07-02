export interface MediaProps {
  id: number
  model_type: string
  model_id: number
  uuid: string
  collection_name: string
  name: string
  file_name: string
  mime_type: string
  disk: string
  conversions_disk: string
  size: number
  manipulations: string[]
  custom_properties: string[]
  generated_conversions: {
    tail: boolean
    tiny: boolean
    large: boolean
    small: boolean
    thumb: boolean
    medium: boolean
    screen: boolean
  }
  responsive_images: Array<any>
  order_column: number
  created_at: string
  updated_at: string
  original_url: string
  preview_url: string
}
