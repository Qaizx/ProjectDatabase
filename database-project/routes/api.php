<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\ProductsController;
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
        Route::post('/users/login', [UsersController::class, 'login']);
        Route::post('/users/register', [UsersController::class, 'store']);
        Route::post('/getProfile', [UsersController::class, 'profile']);
        Route::post('/getEmployee', [UsersController::class, 'employee']);
        Route::post('/getOffice', [EmployeesController::class, 'office']);
        Route::get('/randomproduct', [ProductsController::class, 'getRandomProduct']);
        Route::post('/getOrders', [UsersController::class, 'orderFetch']);
        Route::post('/getProductLine', [ProductsController::class, 'getProductLine']);
    }
);
