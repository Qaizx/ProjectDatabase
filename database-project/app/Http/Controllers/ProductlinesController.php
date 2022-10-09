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
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Productlines  $productlines
     * @return \Illuminate\Http\Response
     */
    public function show(Productlines $productlines)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Productlines  $productlines
     * @return \Illuminate\Http\Response
     */
    public function edit(Productlines $productlines)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProductlinesRequest  $request
     * @param  \App\Models\Productlines  $productlines
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductlinesRequest $request, Productlines $productlines)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Productlines  $productlines
     * @return \Illuminate\Http\Response
     */
    public function destroy(Productlines $productlines)
    {
        //
    }
}
