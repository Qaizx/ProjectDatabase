<?php

namespace App\Http\Controllers;

use App\Models\Users;
use App\Http\Requests\StoreUsersRequest;
use App\Http\Requests\UpdateUsersRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

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
        return ["status" => "ok"];
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

    public function getCustomer($id) {
        $customer = \DB::table('customers')->where('customerNumber','=' , $id)->get();
        return $customer;
    }

    public function login(Request $request){

        $username = $request->username;
        $email = $request->email;
        $password = $request->password;

        $user = Users::where([
            ['username' , '=' ,  $username],
            ['email' , '=' ,  $email],
        ])->first();

        if(!$user || !Hash::check($password, $user->password) ) {
            return ["error" => "Email or password is not matched."];
        }

        // if(!$user || $password != $user->password) {
        //     return ["error" => "Email or password is not matched."];
        // }
        return ["status" => "ok"];
    }
}
