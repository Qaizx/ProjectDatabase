<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrdersRequest extends FormRequest
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
            'orderNumber' => ['required','integer'],
            'orderDate'=> ['required','date'] ,                 //might bug
            'requiredDate'=> ['required','date'] ,              //might bug
            'shippedDate'=> ['sometimes','nullable','date'],    //might bug
            'status'=> ['required'] ,
            'comments'=> ['sometimes','nullable'],
            'customerNumber'=> ['required','integer'],
        ];
    }
}
