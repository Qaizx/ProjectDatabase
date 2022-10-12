<?php

namespace App\Http\Controllers;

use App\Models\Users;
use App\Http\Requests\StoreUsersRequest;
use App\Http\Requests\UpdateUsersRequest;
use Illuminate\Support\Facades\Hash;
use Request;

class UserController extends Controller
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
     * @param  \App\Http\Requests\StoreUserRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUsersRequest $request)
    {
        //
        $username = $request->username;
        $email = $request->email;
        $password = $request->password;

        $duplicateUsername = Users::where('username' , $username)->first();
        $duplicateEmail = Users::where('email' , $email)->first();

        if($duplicateEmail) {
            return ["error" => "This Email is already taken."];
        }
        if($duplicateUsername) {
            return ["error" => "This Username is already taken."];
        }

        $user = new Users();
        $user->username = $username;
        $user->email = $email;
        $user->password = Hash::make($password);
        $user->save();
        return $user;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(Users $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(Users $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUserRequest  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUsersRequest $request, Users $user)
    {
        //
        $data = $request;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(Users $user)
    {
        //
    }

    public function getCustomer($id) {
        
        $customer = \DB::table('customers')->where('customerNumber','=' , $id)->get();
        return $customer;
    }

    public function login(Request $request){
        $user = Users::where('email' , $request->email)->first();
        if($user || !Hash::check($request->password , $user->password)) {
            return ["error" => "Email or password is not matched."];
        }
        return $user;
    }
}
