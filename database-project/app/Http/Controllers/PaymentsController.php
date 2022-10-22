<?php

namespace App\Http\Controllers;

use App\Models\Payments;
use App\Http\Requests\StorePaymentsRequest;
use App\Http\Requests\UpdatePaymentsRequest;
use Faker\Provider\ar_EG\Payment;

class PaymentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $payments = Payments::all();
        return $payments;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Payments  $payments
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $payments = Payments::find($id);
        return $payments;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorePaymentsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePaymentsRequest $request)
    {
        //
        // Payments::create([
        //     'customerNumber' => $request->customerNumber,
        //     'checkNumber' => $request->checkNumber,
        //     'paymentDate' => $request->paymentDate,
        //     'amount' => $request->amount
        // ]);  
        Payments::create($request->all());
        $v1 = $request -> customerNumber;
        $v2 = $request -> checkNumber;
        $target = Payments::where([
            ['customerNumber', '=', $v1],
            ['checkNumber', '=', $v2],
        ])->get();
        
        if(!$target ){Payments::create($request->all());}
        else{ return ["error" => "This request already existed in db."];}
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePaymentsRequest  $request
     * @param  \App\Models\Payments  $payments
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePaymentsRequest $request, $id)
    {
        //
        $payments = Payments::find($id);
        $payments->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Payments  $payments
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $payments = Payments::find($id);
        $payments->delete();
    }
}
