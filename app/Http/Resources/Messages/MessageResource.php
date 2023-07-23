<?php

    namespace App\Http\Resources\Messages;

    use Illuminate\Http\Request;
    use Illuminate\Http\Resources\Json\JsonResource;

    /**
     * @property mixed $user
     * @property mixed $read_at
     * @property mixed $subject
     * @property mixed $id
     * @property mixed $children
     * @property mixed $created_at
     * @property mixed $updated_at
     */
    class MessageResource extends JsonResource
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
                'read_at' => $this->read_at?->diffForHumans(),
                'name' => $this->user?->name,
                'email' => $this->user?->email,
                'phone' => $this->user?->phone,
                'subject' => $this->subject,
                'children' => new MessageCollection($this->children),
                'created_at' => $this->created_at,
                'updated_at' => $this->updated_at,
            ];
        }
    }
