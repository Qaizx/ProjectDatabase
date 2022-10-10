<?php

namespace App\Http\Controllers;

use App\Models\Offices;
use App\Http\Requests\StoreOfficesRequest;
use App\Http\Requests\UpdateOfficesRequest;

class OfficesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $offices = Offices::all();
        return $offices;
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
     * @param  \App\Http\Requests\StoreOfficesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOfficesRequest $request)
    {
        //
        // 'officeCode' ,
        // 'city' ,
        // 'phone' ,
        // 'addressLine1' ,
        // 'addressLine2' ,
        // 'state' ,
        // 'country' ,
        // 'postalCode',
        // 'territory'
        Offices::create( [
            
            'officeCode' => $request->officeCode,
            'city' => $request->city,
            'phone' => $request->phone,
            'addressLine1' => $request->addressLine1,
            'addressLine2'=> $request->addressLine2,
            'state'=> $request->state,
            'country'=> $request->country,
            'postalCode'=> $request->postalCode,
            'territory' => $request ->territory
         ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Offices  $offices
     * @return \Illuminate\Http\Response
     */
    public function show(Offices $offices)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Offices  $offices
     * @return \Illuminate\Http\Response
     */
    public function edit(Offices $offices)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateOfficesRequest  $request
     * @param  \App\Models\Offices  $offices
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateOfficesRequest $request, Offices $offices)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Offices  $offices
     * @return \Illuminate\Http\Response
     */
    public function destroy(Offices $offices)
    {
        //
    }
}
