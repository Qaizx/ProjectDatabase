<?php

namespace App\Http\Controllers;

use App\Models\Customers;
use App\Http\Requests\StoreCustomersRequest;
use App\Http\Requests\UpdateCustomersRequest;
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
        $customers = Customers::all();
        return $customers;
    }

    public function show($id)
    {
        $customer = Customers::find($id);
        return $customer;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCustomersRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCustomersRequest $request)
    {
        //
        // Customers::create( [
        //     'customerName' => $request->customerName,
        //     'contactLastName' => $request->contactLastName,
        //     'contactFirstName' => $request->contactFirstName,
        //     'phone' => $request->phone,
        //     'addressLine1'=> $request->addressLine1,
        //     'addressLine2'=> $request->addressLine2,
        //     'city'=> $request->city,
        //     'state'=> $request->state,
        //     'country' => $request->country,
        //     'postalCode'=> $request->postalCode,
        //     'salesRepEmployeeNumber'=> $request->salesRepEmployeeNumber,
        //     'creditLimit'=> $request->creditLimit
        //  ]);
        Customers::create($request->all());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatecustomersRequest  $request
     * @param  \App\Models\customers  $customers
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCustomersRequest $request, $id)
    {
        //
        $customer = Customers::find($id);
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
        $customer = Customers::find($id);
        $customer->delete();
    }

    public function createCustomer($customerNumber) {
        // Customers::create( [
        //     'customerName' => $request->customerName,
        //     'contactLastName' => $request->contactLastName,
        //     'contactFirstName' => $request->contactFirstName,
        //     'phone' => $request->phone,
        //     'addressLine1'=> $request->addressLine1,
        //     'addressLine2'=> $request->addressLine2,
        //     'city'=> $request->city,
        //     'state'=> $request->state,
        //     'country' => $request->country,
        //     'postalCode'=> $request->postalCode,
        //     'salesRepEmployeeNumber'=> $request->salesRepEmployeeNumber,
        //     'creditLimit'=> $request->creditLimit
        //  ]);
        Customers::create([
            'customerNumber' => $customerNumber ,
        ]);
    }
}
