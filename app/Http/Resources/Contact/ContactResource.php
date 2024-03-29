<?php

    namespace App\Http\Resources\Contact;

    use Illuminate\Http\Request;
    use Illuminate\Http\Resources\Json\JsonResource;


    /**
     * @property string $name
     * @property string $email
     */
    class ContactResource extends JsonResource
    {
        /**
         * Transform the resource into an array.
         *
         * @return array<string, mixed>
         */
        public function toArray(Request $request): array
        {
            return [
                'label' => $this->name,
                'value' => $this->email,
            ];
        }
    }
