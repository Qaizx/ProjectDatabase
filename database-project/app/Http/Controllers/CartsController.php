<?php

namespace App\Http\Controllers;

use App\Models\Carts;
use App\Http\Requests\StoreCartsRequest;
use App\Http\Requests\UpdateCartsRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
    public function show(Request $request)
    {
        //
        $username = $request->username;
        $targetCustomers = DB::table('users')
            ->join('customers', 'users.customerNumber', '=', 'customers.customerNumber')
            ->select(
                'customers.customerNumber',
                'customerName',
                'contactLastName',
                'contactFirstName',
                'phone',
                'addressLine1',
                'addressLine2',
                'city',
                'state',
                'postalCode',
                'country',
                'salesRepEmployeeNumber',
                'creditLimit'
            )
            ->where('username', '=', $username)->first();

        $carts = DB::table('carts')
            ->join('products', 'carts.productCode', '=', 'products.productCode')
            ->where('carts.customerNumber', '=', $targetCustomers->customerNumber)->get();

        return $carts;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCartsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCartsRequest $request) // request = username and productCode
    {
        //
        $username = $request->username;
        $targetCustomers =  DB::table('users')
            ->join('customers', 'users.customerNumber', '=', 'customers.customerNumber')
            ->select(
                'customers.customerNumber',
                'customerName',
                'contactLastName',
                'contactFirstName',
                'phone',
                'addressLine1',
                'addressLine2',
                'city',
                'state',
                'postalCode',
                'country',
                'salesRepEmployeeNumber',
                'creditLimit'
            )
            ->where('username', '=', $username)->first();
        $v1 = $targetCustomers->customerNumber;
        $v2 = $request->productCode;
        $target = DB::table('carts')
            ->where([
                ['customerNumber', '=', $v1],
                ['productCode', '=', $v2],])->get()->first();
        if(!$target)
            Carts::create(['customerNumber' => $v1, 'productCode' => $v2]);
        else    
            DB::table('carts')
                ->where([['customerNumber', '=', $v1],['productCode', '=', $v2]])
                ->increment('quantityInCart');

        return ["message" => "success"];
    }

     /**
     * Decrease product in cart 
     *
     * @param  \App\Http\Requests\StoreCartsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function decrease(StoreCartsRequest $request)
    {
        //
        $username = $request->username;
        $targetCustomers = DB::table('users')
            ->join('customers', 'users.customerNumber', '=', 'customers.customerNumber')
            ->select(
                'customers.customerNumber',
                'customerName',
                'contactLastName',
                'contactFirstName',
                'phone',
                'addressLine1',
                'addressLine2',
                'city',
                'state',
                'postalCode',
                'country',
                'salesRepEmployeeNumber',
                'creditLimit'
            )
            ->where('username', '=', $username)->first();
        $v1 = $targetCustomers->customerNumber;
        $v2 = $request->productCode;
        $target = DB::table('carts')
            ->where([
                ['customerNumber', '=', $v1],
                ['productCode', '=', $v2],])->get()->first();
        if($target->quantityInCart > 1)
            DB::table('carts')
                ->where([['customerNumber', '=', $v1],['productCode', '=', $v2]])
                ->decrement('quantityInCart');
        else    
            DB::table('carts')->where([['customerNumber', '=', $v1],['productCode', '=', $v2]])->delete();

        return ["message" => "success"];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCartsRequest  $request
     * @param  \App\Models\Carts  $carts
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCartsRequest $request)
    {
        //
        $username = $request->username;
        $targetCustomers = \DB::table('users')
            ->join('customers', 'users.customerNumber', '=', 'customers.customerNumber')
            ->select(
                'customers.customerNumber',
                'customerName',
                'contactLastName',
                'contactFirstName',
                'phone',
                'addressLine1',
                'addressLine2',
                'city',
                'state',
                'postalCode',
                'country',
                'salesRepEmployeeNumber',
                'creditLimit'
            )
            ->where('username', '=', $username)->first();
        $v1 = $targetCustomers->customerNumber;
        $v2 = $request->productCode;
        $target = DB::table('carts')
            ->where([
                ['customerNumber', '=', $v1],
                ['productCode', '=', $v2],])->get()->first();
        if(!$target)
            Carts::create(['customerNumber' => $v1, 'productCode' => $v2]);
        else    
            DB::table('carts')
                ->where([['customerNumber', '=', $v1],['productCode', '=', $v2]])
                ->update(['quantityInCart' => $request->quantityInCart + $target->quantityInCart]);

        return ["message" => "success"];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Http\Requests\StoreCartsRequest  $carts
     * @return \Illuminate\Http\Response
     */
    public function destroy(StoreCartsRequest $request)
    {
        //
        $username = $request->username;
        $targetCustomers = DB::table('users')
            ->join('customers', 'users.customerNumber', '=', 'customers.customerNumber')
            ->select(
                'customers.customerNumber',
                'customerName',
                'contactLastName',
                'contactFirstName',
                'phone',
                'addressLine1',
                'addressLine2',
                'city',
                'state',
                'postalCode',
                'country',
                'salesRepEmployeeNumber',
                'creditLimit'
            )
            ->where('username', '=', $username)->first();
        $v1 = $targetCustomers->customerNumber;
        $v2 = $request->productCode;      
        DB::table('carts')->where([['customerNumber', '=', $v1],['productCode', '=', $v2]])->delete();
       
        return ["message" => "success"];
    }
}
