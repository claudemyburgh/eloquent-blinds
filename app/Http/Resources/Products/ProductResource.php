<?php

    namespace App\Http\Resources\Products;

    use Illuminate\Http\Request;
    use Illuminate\Http\Resources\Json\JsonResource;

    /**
     * @property mixed $slug
     * @property mixed $title
     * @property mixed $id
     */
    class ProductResource extends JsonResource
    {
        /**
         * Transform the resource into an array.
         *
         * @return array<string, mixed>
         */
        public function toArray(Request $request): array
        {
            return [
                'id' => $this->id,
                'title' => $this->title,
                'slug' => $this->slug,
                'category' => 'category'
            ];
        }
    }
