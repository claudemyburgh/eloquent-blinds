<?php

    namespace App\Http\Resources\Contact;

    use Illuminate\Http\Request;
    use Illuminate\Http\Resources\Json\ResourceCollection;

    class ContactCollection extends ResourceCollection
    {
        //    public $collects = User::class;

        /**
         * Transform the resource collection into an array.
         *
         * @return array<int|string, mixed>
         */
        public function toArray(Request $request): array
        {
            return [
                'data' => $this->collection,
            ];
        }
    }
