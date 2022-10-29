<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCustomersRequest extends FormRequest
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
            'customerName' => ['required'],
            'contactLastName' => ['required'],
            'contactFirstName' => ['required'],
            'phone' => ['required'],
            'addressLine1' => ['required'],
            'addressLine2' => ['sometimes', 'nullable'],
            'city' => ['required'],
            'state' => ['sometimes', 'nullable'],
            'country' => ['required'],
            'postalCode' => ['sometimes', 'nullable'],
            'salesRepEmployeeNumber' => ['sometimes', 'nullable'],
            'creditLimit' => ['required', 'numeric'],
        ];
    }
}
