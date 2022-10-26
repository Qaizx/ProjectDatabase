<?php

namespace App\Http\Controllers;

use App\Models\Products;
use App\Http\Requests\StoreProductsRequest;
use App\Http\Requests\UpdateProductsRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $products = Products::all();
        return $products;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Products  $products
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $products = Products::find($id);
        return $products;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreProductsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductsRequest $request)
    {
        Products::create($request->all());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProductsRequest  $request
     * @param  \App\Models\Products  $products
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductsRequest $request, $id)
    {
        //
        $products = Products::find($id);
        $products->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Products  $products
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $products = Products::find($id);
        $products->delete();
    }

    public function getRandomProduct()
    {
        $randomProducts = Products::inRandomOrder()->limit(5)->get();
        return $randomProducts;
    }

    public function getProductInfo(Request $request)
    {
        $productCode = $request->productCode;

        $productLine = DB::table('products')
            ->join('productlines', 'products.productLine', '=', 'productlines.productLine')
            ->where('products.productCode', '=', $productCode)->get()->first();

        if ($productLine == NULL)
            return ["error" => "Product not found"];
        return $productLine;
    }

}
