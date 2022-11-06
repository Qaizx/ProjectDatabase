<?php

namespace App\Http\Controllers;

use App\Models\Users;
use App\Http\Requests\StoreUsersRequest;
use App\Http\Requests\UpdatecustomersRequest;
use App\Http\Requests\UpdateUsersRequest;
use App\Models\Orderdetails;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\StoreOrdersRequest;
use App\Http\Requests\StorePaymentsRequest;

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

            if ($duplicateUsername != NULL)
                return ["error" => "This Username is already taken."];
            if ($duplicateEmail != NULL)
                return ["error" => "This Email is already taken."];


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
            return ["status" => "ok"];
        });

        return $result;
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

        // $username = $request->username;
        // $email = $request->email;
        // $password = $request->password;

        // $user = NULL;

        // if ($email) {
        //     $user = Users::where([
        //         ['email', '=',  $email],
        //     ])->first();
        // } else if ($username) {
        // $user = Users::where([
        //     ['username', '=',  $username],
        // ])->first();
        // } else {
        //     return ["error" => "Email or Username is not matched."];
        // }

        // if ($password != $user->password && !Hash::check($password, $user->password)) {
        //     return ["error" => "Password is not matched."];
        // }
        // return ["status" => "ok"];

        $username = $request->username;
        $password = $request->password;

        $user = DB::table('users')
            ->where('email', $username)
            ->orWhere('username',  $username)
            ->get()->first();

        if (!$user)
            return ["error" => "Email or Username is not matched."];

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
            ->where('username', '=', $username)->first();

        return $targetCustomer;
    }

    public function employee(Request $request)
    {
        $username = $request->username;

        $targetCustomer = DB::table('users')
            ->join('customers', 'users.customerNumber', '=', 'customers.customerNumber')
            ->join('employees', 'customers.salesRepEmployeeNumber', '=', 'employees.employeeNumber')
            ->join('offices', 'employees.officeCode', '=', 'offices.officeCode')
            ->select(
                'employees.employeeNumber',
                'lastName',
                'firstName',
                'extension',
                'offices.phone',
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
            ->join('orderdetails', 'orderdetails.orderNumber', '=', 'orders.orderNumber')
            ->join('products', 'orderdetails.productCode', '=', 'products.productCode')
            ->select(
                'username',
                'url',
                'productName',
                'quantityOrdered',
                'priceEach',
                'orderDate'
            )
            ->where('username', '=', $username)->get();
        if ($target == NULL)
            return ["error" => "user doesn't have any order"];
        return $target;
    }

    public function updateProfile(UpdatecustomersRequest $request)
    {
        $result = DB::transaction(function () use ($request) {
            $username = $request->username;

            $targetCustomer = DB::table('users')
                ->join('customers', 'users.customerNumber', '=', 'customers.customerNumber')
                ->select(
                    'customers.customerNumber'
                )
                ->where('username', '=', $username)->get()->first();

            app('App\Http\Controllers\CustomersController')->update($request, $targetCustomer->customerNumber);
            return ["status" => "update profile successfully"];
        });

        return $result;
    }

    public function storeOrders(Request $request)
    {
        $result = DB::transaction(function () use ($request) {
            $username = $request->username;
            $order = $request->order;

            $targetCustomer = DB::table('users')->select('customerNumber')->where('username', '=', $username)->get()->first()->customerNumber;
            app('App\Http\Controllers\OrdersController')->store(new StoreOrdersRequest($order + ['customerNumber' => $targetCustomer]));
           
            $targetOrderNumber = DB::table('orders')->select('orderNumber')->where('customerNumber', '=', $targetCustomer)->orderByDesc('orderNumber')->get()->first()->orderNumber;
            $orderdetails = DB::table('carts')->where('customerNumber' , $targetCustomer)->get();
            DB::table('carts')->where('customerNumber' , $targetCustomer)->delete();
            app('App\Http\Controllers\OrderdetailsController')->storeOrderdetails($orderdetails, $targetCustomer, $targetOrderNumber);

            return ['status' => 'store orders ok'];
        });

        return $result;
    }

    public function storePayments(Request $request)
    {
        $result = DB::transaction(function () use ($request) {
            $username = $request->username;
            $payment = $request->payment;

            $targetCustomer = DB::table('users')->select('customerNumber')->where('username', '=', $username)->get()->first()->customerNumber;
            $checkNumber = $this->generateCheckNumber();

            app('App\Http\Controllers\PaymentsController')->store(new StorePaymentsRequest($payment + ['customerNumber' => $targetCustomer, 'checkNumber' => $checkNumber]));
            return ['status' => 'store payments ok'];
        });

        return $result;
    }

    public function quickRandomCharacter($length = 2)
    {
        $pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return substr(str_shuffle(str_repeat($pool, 5)), 0, $length);
    }

    public function quickRandomNumber($length = 6)
    {
        $pool = '0123456789';
        return substr(str_shuffle(str_repeat($pool, 5)), 0, $length);
    }

    public function generateCheckNumber()
    {
        $checkNumber = $this->quickRandomCharacter() . $this->quickRandomNumber();
        $dupCheckNumber = DB::table('payments')->select('checkNumber')->where('checkNumber', '=', $checkNumber)->get()->first();

        while ($dupCheckNumber != NULL) {
            $checkNumber = $this->quickRandomCharacter() . $this->quickRandomNumber();
            $dupCheckNumber = DB::table('payments')->select('checkNumber')->where('checkNumber', '=', $checkNumber)->get()->first();
        }

        return $checkNumber;
    }
}
