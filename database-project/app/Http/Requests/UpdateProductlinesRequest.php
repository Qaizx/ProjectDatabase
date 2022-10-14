<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductlinesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'productLine' => ['required'],
            'textDescription' => ['sometimes','nullable'],
            'htmlDescription' => ['sometimes','nullable'],
            'image' => ['sometimes','nullable']
        ];
    }
}
