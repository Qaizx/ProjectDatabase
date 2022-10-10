<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEmployeesRequest extends FormRequest
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
            'lastName' => ['required'],
            'firstName' => ['required'],
            'extension' => ['required'],
            'email'=> ['required'],
            'officeCode'=> ['required'],
            'reportsTo'=> ['integer','nullable'],
            'jobTitle'=> ['required'],
        ];
    }
}
