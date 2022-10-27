<?php

use App\Http\Controllers\CartsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\ProductsController;
use App\Models\Carts;
use App\Http\Controllers\EmployeesController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers',
    'prefix' => 'auth'
], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
    Route::post('profile', 'AuthController@profile');
    Route::post('refresh', 'AuthController@refresh');
});

Route::group(
    [
        'middleware' => 'api',
        'namespace' => 'App\Http\Controllers',
    ],
    function ($router) {
        Route::resource('products', 'ProductsController');
        Route::resource('customers', 'CustomersController');
        Route::resource('employees', 'EmployeesController');
        Route::resource('offices', 'OfficesController');
        Route::resource('orderdetails', 'OrderdetailsController');
        Route::resource('orders', 'OrdersController');
        Route::resource('payments', 'PaymentsController');
        Route::resource('productlines', 'ProductlinesController');
        Route::resource('users', 'UsersController');
        Route::resource('carts', 'CartsController');
    }
);

Route::group(
    [
        'middleware' => 'api',
        'namespace' => 'App\Http\Controllers',
    ],
    function ($router) {
        Route::post('/users/login' , [UsersController::class,'login']);
        Route::post('/users/register' , [UsersController::class,'store']);
        Route::post('/products/random' , [ProductsController::class,'getRandomProduct']);
        Route::post('/addToCart', [CartsController::class, 'store']);
        Route::post('/decreaseFromCart', [CartsController::class, 'decrease']);
        Route::delete('/deleteFromCart', [CartsController::class, 'destroy']);
        Route::post('/getProfile', [UsersController::class, 'profile']);                // get customer info by username
        Route::post('/getEmployee', [UsersController::class, 'employee']);              // get employee by username
        Route::post('/getOffice', [EmployeesController::class, 'office']);              // get office by employeeNumber
        Route::get('/randomproduct', [ProductsController::class, 'getRandomProduct']);
        Route::post('/getOrders', [UsersController::class, 'orderFetch']);              // get orders by username
        Route::post('/getProductInfo', [ProductsController::class, 'getProductInfo']);  // get product info by productCode
        Route::put('/updateProfile' , [UsersController::class , 'updateProfile']);
        Route::patch('/updateProfile' , [UsersController::class , 'updateProfile']);
    }
);
