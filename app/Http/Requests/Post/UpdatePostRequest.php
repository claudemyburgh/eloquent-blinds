<?php

namespace App\Http\Requests\Post;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdatePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required',
            'user_id' => 'required',
            'slug' => 'required|unique:posts,id,' . $this->id,
            'description' => 'required|max:500',
            'body' => 'required',
            'live' => 'required'
        ];
    }
}
