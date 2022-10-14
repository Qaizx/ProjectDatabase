<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateOrderdetailsRequest extends FormRequest
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
                'orderNumber'=> ['required','integer'],
                'productCode'=> ['required'],
                'quantityOrdered'=> ['required','integer'] ,
                'priceEach'=> ['required','decimal'] ,
                'orderLineNumber'=> ['required','smallInteger']
            ];
        }else{
            return [
                'orderNumber'=> ['required','integer'],
                'productCode'=> ['required'],
                'quantityOrdered'=> ['sometime','required','integer'] ,
                'priceEach'=> ['sometime','required','decimal'] ,
                'orderLineNumber'=> ['sometime','required','smallInteger']
            ];
        }
    }
}
