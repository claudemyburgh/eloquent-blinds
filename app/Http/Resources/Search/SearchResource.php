<?php

    namespace App\Http\Resources\Search;

    use Illuminate\Http\Request;
    use Illuminate\Http\Resources\Json\JsonResource;

    /**
     * @property mixed $id
     * @property mixed $title
     * @property mixed | string $category
     * @property mixed $slug
     */
    class SearchResource extends JsonResource
    {
        /**
         * Transform the resource into an array.
         *
         * @return array<string, mixed>
         */
        public function toArray(Request $request): array
        {
            return [
                "title" => $this->title . " " . $this->category->title,
                "url" => route('product', [$this->category->slug, $this->slug]),
                "category" => $this->category->title
            ];
        }
    }
