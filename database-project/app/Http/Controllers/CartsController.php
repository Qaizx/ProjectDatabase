<?php

namespace App\Http\Controllers;

use App\Models\Carts;
use App\Http\Requests\StoreCartsRequest;
use App\Http\Requests\UpdateCartsRequest;

class CartsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $carts = Carts::all();
        return $carts;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Carts  $carts
     * @return \Illuminate\Http\Response
     */
    public function show(Carts $id)
    {
        //
        $carts = Carts::find($id);
        return $carts;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCartsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCartsRequest $request)
    {
        //

        $v1 = $request->customerNumber;
        $v2 = $request->productCode;
        $target = Carts::where([
            ['customerNumber', '=', $v1],
            ['productCode', '=', $v2],
        ])->get()->first();

        if (!$target) {
            Carts::create($request->all());
        } else {
            $carts = $target;
            $carts->update(['quantityInCart' => $carts->quantityInCart+1]); 
            // $target->update(['quantityInCart', $target->quantityInCart + 1]);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCartsRequest  $request
     * @param  \App\Models\Carts  $carts
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCartsRequest $request, $id)
    {
        //
        $carts = Carts::find($id);
        $carts->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Carts  $carts
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $carts = Carts::find($id);
        $carts->delete();
    }
}
