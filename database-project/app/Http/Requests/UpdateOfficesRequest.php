<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateOfficesRequest extends FormRequest
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
        if($method == 'PUT'){
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
        }else{
            return [
                'officeCode' => ['required'],
                'city' => ['sometimes','required'] ,
                'phone' => ['sometimes','required'] ,
                'addressLine1' => ['sometimes','required'] ,
                'addressLine2' => ['sometimes','nullable'] ,
                'state' => ['sometimes','nullable'],
                'country' => ['sometimes','required'] ,
                'postalCode' => ['sometimes','required'],
                'territory' => ['sometimes','required']
            ];
        }
    }
}
