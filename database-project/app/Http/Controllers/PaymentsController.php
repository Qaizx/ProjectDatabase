<?php

namespace App\Http\Controllers;

use App\Models\Payments;
use App\Http\Requests\StorePaymentsRequest;
use App\Http\Requests\UpdatePaymentsRequest;
use Faker\Provider\ar_EG\Payment;
use Illuminate\Support\Facades\DB;

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
    public function show(UpdatePaymentsRequest $request)
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

        $payments = \DB::table('payments')
            ->where('payments.customerNumber', '=', $targetCustomers->customerNumber)->get();
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
        ])->get()->first();
        
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
    public function update(UpdatePaymentsRequest $request)
    {
        //
        Payments::create($request->all());
        $v1 = $request -> customerNumber;
        $v2 = $request -> checkNumber;
        $target = Payments::where([
            ['customerNumber', '=', $v1],
            ['checkNumber', '=', $v2],
        ])->get()->first();
        $target->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Payments  $payments
     * @return \Illuminate\Http\Response
     */
    public function destroy(UpdatePaymentsRequest $request)
    {
        //
        Payments::create($request->all());
        $v1 = $request -> customerNumber;
        $v2 = $request -> checkNumber;
        $target = Payments::where([
            ['customerNumber', '=', $v1],
            ['checkNumber', '=', $v2],
        ])->get()->first();
        $target->delete();
    }
}
