<?php

namespace App\Http\Requests\Product;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
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
            'title' => 'required|string',
            'slug' => 'required|unique:products,id,' . $this->id,
            'category_id' => 'nullable',
            'excerpt' => 'required|max:500',
            'description' => 'required|max:500',
            'body' => 'required',
            'popular' => 'required',
            'live' => 'required',
        ];
    }
}
