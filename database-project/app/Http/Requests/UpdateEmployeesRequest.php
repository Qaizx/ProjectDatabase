<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateEmployeesRequest extends FormRequest
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
                'employeeNumber' => ['required'],
                'lastName' => ['required'],
                'firstName' => ['required'],
                'extension' => ['required'],
                'email'=> ['required'],
                'officeCode'=> ['required'],
                'reportsTo'=> ['integer','nullable'],
                'jobTitle'=> ['required'],
            ];
        } else {
            return [
                'employeeNumber' => ['sometimes','required'],
                'lastName' => ['sometimes','required'],
                'firstName' => ['sometimes','required'],
                'extension' => ['sometimes','required'],
                'email'=> ['sometimes','required'],
                'officeCode'=> ['sometimes','required'],
                'reportsTo'=> ['sometimes','integer','nullable'],
                'jobTitle'=> ['sometimes','required'],
            ];
        }
    }
}
