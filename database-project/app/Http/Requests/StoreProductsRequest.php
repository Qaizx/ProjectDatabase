<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductsRequest extends FormRequest
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
    }
}
