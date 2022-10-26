<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\Users;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'sometimes|email',
            'username' => 'sometimes',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $token_validity = 24 * 60;

        auth()->guard()->factory()->setTTL($token_validity);

        if (!$token = auth()->guard()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:users',
            'username' => 'required|unique:users',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $user = new Users();
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        $findUser = Users::where([
            ['username', '=',  $request->username],
            ['email', '=',  $request->email],
        ])->first();

        app('App\Http\Controllers\CustomersController')->createCustomer($findUser->customerNumber);

        return response()->json(['msg' => 'User created successfully', 'user' => $user]);
    }

    public function logout()
    {
        auth()->guard()->logout();

        return response()->json(['msg' => 'User logged out successfully']);
    }

    public function profile()
    {
        return response()->json(auth()->guard()->user());
    }

    public function refresh()
    {
        return $this->respondWithToken(auth()->guard()->refresh());
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'status' => 'ok',
            'token' => $token,
            'token_type' => 'bearer',
            'token_validity' => auth()->guard()->factory()->getTTL() * 60
        ]);
    }

}
