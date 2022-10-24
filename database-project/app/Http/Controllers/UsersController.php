<?php

namespace App\Http\Controllers;

use App\Models\Users;
use App\Http\Requests\StoreUsersRequest;
use App\Http\Requests\UpdatecustomersRequest;
use App\Http\Requests\UpdateUsersRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $users = Users::all();
        return $users;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreUserRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUsersRequest $request)
    {
        //
        $result = DB::transaction(function () use ($request) {
            $username = $request->username;
            $email = $request->email;
            $password = $request->password;

            $duplicateUsername = Users::where('username', $username)->first();
            $duplicateEmail = Users::where('email', $email)->first();

            if ($duplicateEmail != NULL)
                return 1;
            if ($duplicateUsername != NULL)
                return 2;

            $user = new Users();
            $user->username = $username;
            $user->email = $email;
            $user->password = Hash::make($password);
            $user->save();

            $findUser = Users::where([
                ['username', '=',  $username],
                ['email', '=',  $email],
            ])->first();

            app('App\Http\Controllers\CustomersController')->createCustomer($findUser->customerNumber);
            return 3;
        });

        if ($result == 1) {
            return ["error" => "This Email is already taken."];
        } else if ($result == 2) {
            return ["error" => "This Username is already taken."];
        } else {
            return ["status" => "ok"];
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $user = Users::find($id);
        return $user;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUserRequest  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUsersRequest $request, $id)
    {
        //
        // $user = Users::find($id);
        // $user->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $user = Users::find($id);
        $user->delete();
    }

    public function getCustomer($id)
    {
        $customer = \DB::table('customers')->where('customerNumber', '=', $id)->get();
        return $customer;
    }

    public function login(Request $request)
    {

        $username = $request->username;
        $email = $request->email;
        $password = $request->password;

        $user = NULL;

        if ($email) {
            $user = Users::where([
                ['email', '=',  $email],
            ])->first();
        } else if ($username) {
            $user = Users::where([
                ['username', '=',  $username],
            ])->first();
        } else {
            return ["error" => "Email or Username is not matched."];
        }

        // if(!$user || !Hash::check($password, $user->password) ) {
        //     return ["error" => "Email or password is not matched."];
        // }

        if ($password != $user->password && !Hash::check($password, $user->password)) {
            return ["error" => "Password is not matched."];
        }
        return ["status" => "ok"];
    }

    public function profile(Request $request)
    {
        $username = $request->username;

        $targetCustomer = DB::table('users')
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
            ->where('username', '=', $username)->get()->first();

        return $targetCustomer;
    }

    public function employee(Request $request)
    {
        $username = $request->username;

        $targetCustomer = DB::table('users')
            ->join('customers', 'users.customerNumber', '=', 'customers.customerNumber')
            ->join('employees', 'customers.salesRepEmployeeNumber', '=', 'employees.employeeNumber')
            ->select(
                'employees.employeeNumber',
                'lastName',
                'firstName',
                'extension',
                'phone',
                'employees.email',
                'officeCode',
                'reportsTo',
                'jobTitle',
            )
            ->where('username', '=', $username)->get()->first();

        if ($targetCustomer == NULL)
            return ["error" => "Username not found"];
        return $targetCustomer;
    }

    public function orderFetch(Request $request)
    {
        $username = $request->username;
        $target = DB::table('users')
            ->join('orders', 'orders.customerNumber', '=', 'users.customerNumber')
            ->select(
                'orderNumber',
                'orderDate',
                'requiredDate',
                'shippedDate',
                'status',
                'comments',
                'orders.customerNumber'
            )
            ->where('username', '=', $username)->get()->first();
        if ($target == NULL)
            return ["error" => "Username not found"];
        return $target;
    }

    public function updateProfile(UpdatecustomersRequest $request) {

        $result = DB::transaction(function () use ($request) {
            $username = $request->username;

            $targetCustomer = DB::table('users')
                ->join('customers', 'users.customerNumber', '=', 'customers.customerNumber')
                ->select(
                    'customers.customerNumber'
                )
                ->where('username', '=', $username)->get()->first();
    
            app('App\Http\Controllers\CustomersController')->update($request , $targetCustomer->customerNumber);

        });

        return ["status" => "update successfully"];
    
    }
}
