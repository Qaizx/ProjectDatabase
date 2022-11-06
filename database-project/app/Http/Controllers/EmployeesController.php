<?php

namespace App\Http\Controllers;

use App\Models\Employees;
use App\Http\Requests\StoreEmployeesRequest;
use App\Http\Requests\UpdateEmployeesRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EmployeesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employees = Employees::all();
        return $employees;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreEmployeesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreEmployeesRequest $request)
    {
        // Employees::create( [
        //     'employeeNumber' => $request->employeeNumber,
        //     'lastName' => $request->lastName,
        //     'firstName' => $request->firstName,
        //     'extension' => $request->extension,
        //     'email'=> $request->email,
        //     'officeCode'=> $request->officeCode,
        //     'reportsTo'=> $request->reportsTo,
        //     'jobTitle'=> $request->jobTitle,
        //  ]);
        Employees::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Employees  $employees
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $employee = Employees::find($id);
        return $employee;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateEmployeesRequest  $request
     * @param  \App\Models\Employees  $employees
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateEmployeesRequest $request, $id)
    {
        $employee = Employees::find($id);
        $employee->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Employees  $employees
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $employee = Employees::find($id);
        $employee->delete();
    }

    public function office(Request $request){

        $code = $request->employeeNumber;
 
        $targetOffice = DB::table('employees')
        ->join('offices', 'employees.officeCode', '=', 'offices.officeCode')
        ->select(        
            'offices.officeCode',
            'city',
            'phone',
            'addressLine1',
            'addressLine2',
            'state',
            'country',
            'postalCode',
            'territory',
        )
        ->where('employees.employeeNumber' , '=' , $code)->get()->first();

        if($targetOffice == NULL)
            return ["error" => "Employee code not found"];
        
        return $targetOffice;
    }
}
