<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorecustomersRequest extends FormRequest
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
            'customerNumber' => ['required'],
            'customerName' => ['required'],
            'contactLastName' => ['required'],
            'contactFirstName' => ['required'],
            'phone' => ['required'],
            'addressLine1'=> ['required'],
            'addressLine2'=> ['nullable'],
            'city'=> ['required'],
            'state'=> ['nullable'],
            'country'=> ['required'],
            'postalCode'=> ['nullable'],
            'salesRepEmployeeNumber'=> ['nullable'],
            'creditLimit'=> ['required' , 'integer'],
        ];
    }
}
