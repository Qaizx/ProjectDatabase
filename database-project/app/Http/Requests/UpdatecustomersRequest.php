<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatecustomersRequest extends FormRequest
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

        $method = $this->method();

        if($method == 'PUT') {
            return [
                'username' => ['required'],
                'customerNumber' => ['sometimes'],
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
                'creditLimit' => ['required', 'integer'],
            ];
        } else {
            return [
                'username' => ['required'],
                'customerNumber' => ['sometimes'],
                'customerName' => ['sometimes','required'],
                'contactLastName' => ['sometimes','required'],
                'contactFirstName' => ['sometimes','required'],
                'phone' => ['sometimes','required'],
                'addressLine1'=> ['sometimes','required'],
                'addressLine2'=> ['sometimes','nullable'],
                'city'=> ['sometimes','required'],
                'state'=> ['sometimes','nullable'],
                'country'=> ['sometimes','required'],
                'postalCode'=> ['sometimes','nullable'],
                'salesRepEmployeeNumber'=> ['sometimes','nullable'],
                'creditLimit'=> ['sometimes', 'required' , 'integer'],
            ];
        }


    }
}
