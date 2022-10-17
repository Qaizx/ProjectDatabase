<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductsRequest extends FormRequest
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
                'productCode' => ['required'],
                'productName' => ['required'],
                'productLine' => ['required'],
                'productScale' => ['required'],
                'productVendor' => ['required'],
                'productDescription' => ['required'],
                'quantityInStock' => ['required'],
                'buyPrice' => ['required'],
                'MSRP' => ['required'],
                'url' => ['required']
            ];
        } else {
            return [
                'productCode' => ['required'],
                'productName' => ['sometimes','required'],
                'productLine' => ['sometimes','required'],
                'productScale' => ['sometimes','required'],
                'productVendor' => ['sometimes','required'],
                'productDescription' => ['sometimes','required'],
                'quantityInStock' => ['sometimes','required'],
                'buyPrice' => ['sometimes','required'],
                'MSRP' => ['sometimes','required'],
                'url' => ['sometimes','required']
            ];
        }
    }
}
