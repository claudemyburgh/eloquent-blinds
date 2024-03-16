<?php

namespace App\Http\Requests\User;

use App\Models\User;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;
use LVR\Phone\Phone;

/**
 * @property mixed $first_name
 * @property mixed $last_name
 * @property mixed $email
 */
class UserDatatableRequest extends FormRequest
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
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,id,' . User::class,
            'phone' => ['required', new Phone()],
            //            'password' => ['required', Password::defaults()],
        ];
    }
}
