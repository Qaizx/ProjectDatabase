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
        } else {
            return [
                'customerNumber' => ['sometimes','required'],
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