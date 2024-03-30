<?php

namespace App\Http\Requests\Category;

use App\Rules\YouTubeVideoUrl;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateCategoryRequest extends FormRequest
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
            'slug' => 'required|unique:categories,id,' . $this->id,
            'parent_id' => 'nullable',
            'excerpt' => 'nullable|max:500',
            'description' => 'nullable|max:500',
            'body' => 'nullable',
            'popular' => 'required',
            'live' => 'required',
            'video_url' => ['nullable', new YouTubeVideoUrl],
            'video_thumbnail' => 'nullable',
            'gallery' => 'nullable',
        ];
    }
}
