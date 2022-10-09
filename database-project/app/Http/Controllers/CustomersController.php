<?php

namespace App\Http\Controllers;

use App\Models\customers;
use App\Http\Requests\StorecustomersRequest;
use App\Http\Requests\UpdatecustomersRequest;
use Illuminate\Http\Request;

class CustomersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $customers = customers::all();
        return $customers;
    }

    public function show($id)
    {
        $customer = customers::find($id);
        return $customer;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorecustomersRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorecustomersRequest $request)
    {
        //
        customers::create( [
            'customerName' => $request->customerName,
            'contactLastName' => $request->contactLastName,
            'contactFirstName' => $request->contactFirstName,
            'phone' => $request->phone,
            'addressLine1'=> $request->addressLine1,
            'addressLine2'=> $request->addressLine2,
            'city'=> $request->city,
            'state'=> $request->state,
            'country' => $request->country,
            'postalCode'=> $request->postalCode,
            'salesRepEmployeeNumber'=> $request->salesRepEmployeeNumber,
            'creditLimit'=> $request->creditLimit
         ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatecustomersRequest  $request
     * @param  \App\Models\customers  $customers
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatecustomersRequest $request, $id)
    {
        //
        $customer = customers::find($id);
        $customer->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\customers  $customers
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $customer = customers::find($id);
        $customer->delete();
    }
}
