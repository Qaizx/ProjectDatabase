<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreOrderdetailsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOrderdetailsRequest $request)
    {
        $v1 = $request->orderNumber;
        $v2 = $request->productCode;
        $target = Orderdetails::where([
            ['orderNumber', '=', $v1],
            ['productCode', '=', $v2],
        ])->get();

        if (!$target) {
            Orderdetails::create($request->all());
        } else {
            return ["error" => "This request already existed in db."];
        }
    }

    public function storeOrderdetails($orders , $customerNumber , $orderNumber) {
        foreach($orders as $order) {
            $formatOrder = [
                'customerNumber' => $customerNumber , 
                'orderNumber'=> $orderNumber ,                 
                'productCode'=> $order['productCode'] ,              
                'quantityOrdered'=> $order['quantityOrdered'],    
                'priceEach'=> $order['priceEach'] ,
                'orderLineNumber'=> $order['orderLineNumber'],
            ];
            $newRequest = new Request($formatOrder);
            Orderdetails::create($newRequest->all());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Orderdetails  $orderdetails
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $orderD = Orderdetails::where('orderNumber', '=', $id)->get();
        return $orderD;
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
    public function update(UpdateOrderdetailsRequest $request, $id)
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
