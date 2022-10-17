<?php

namespace App\Http\Controllers;

use App\Models\Orderdetails;
use App\Http\Requests\StoreOrderdetailsRequest;
use App\Http\Requests\UpdateOrderdetailsRequest;

class OrderdetailsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orderdetails = Orderdetails::all();
        return $orderdetails;
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
     * @param  \App\Http\Requests\StoreOrderdetailsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOrderdetailsRequest $request)
    {
        Orderdetails::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Orderdetails  $orderdetails
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $orderD = Orderdetails::find($id);
        return $$orderD;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Orderdetails  $orderdetails
     * @return \Illuminate\Http\Response
     */
    public function edit(Orderdetails $orderdetails)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateOrderdetailsRequest  $request
     * @param  \App\Models\Orderdetails  $orderdetails
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateOrderdetailsRequest $request,$id)
    {
        //
        $orderD = Orderdetails::find($id);
        $orderD->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Orderdetails  $orderdetails
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $orderD = Orderdetails::find($id);
        $orderD->delete();
    }
}
