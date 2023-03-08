<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CategoryCreateRequest extends FormRequest
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
   * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
   */
  public function rules(): array
  {
    return [
      'title' => [
        'required',
        'string',
        'max:255',
        'min:3',
        Rule::unique('categories', 'title')->ignore(request()->category?->id)
      ],
      'excerpt' => 'nullable|string',
      'description' => 'nullable|string',
      'body' => 'nullable|string',
      'popular' => 'nullable',
      'parent_id' => 'nullable|exists:categories,id'
    ];
  }
}
