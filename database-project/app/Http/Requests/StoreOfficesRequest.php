<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOfficesRequest extends FormRequest
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
            'officeCode' => ['required'],
            'city' => ['required'] ,
            'phone' => ['required'] ,
            'addressLine1' => ['required'] ,
            'addressLine2' => ['sometimes','nullable'] ,
            'state' => ['sometimes','nullable'],
            'country' => ['required'] ,
            'postalCode' => ['required'],
            'territory' => ['required']



        ];
    }
}
