<?php

namespace App\Http\Controllers;

use App\Models\Productlines;
use App\Http\Requests\StoreProductlinesRequest;
use App\Http\Requests\UpdateProductlinesRequest;

class ProductlinesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $productlines = Productlines::all();
        return $productlines;
    }
    
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Productlines  $productlines
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $productlines = Productlines::find($id);
        return $productlines;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreProductlinesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductlinesRequest $request)
    {
        //
        Productlines::create([
            'productLine' => $request->productLine,
            'textDescription' => $request->textDescription,
            'htmlDescription' => $request->htmlDescription,
            'image' => $request->image
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProductlinesRequest  $request
     * @param  \App\Models\Productlines  $productlines
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductlinesRequest $request, $id)
    {
        //
        $productlines = Productlines::find($id);
        $productlines->update($request->all());
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Productlines  $productlines
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $productlines = Productlines::find($id);
        $productlines->delete();
    }
}
