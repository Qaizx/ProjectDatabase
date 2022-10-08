<?php

use App\Http\Controllers\CustomersController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\EmployeesController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::apiResources([
    'customers' => CustomersController::class,
    'employees' => EmployeesController::class,
    'users' => UserController::class,

    // 'offices' => OfficesController::class,
    // 'orderdetails' => OrderDetailsController::class,
    // 'orders' => OrdersController::class,
    // 'payments' => PaymentsController::class,
    // 'productlines' => ProductLinesController::class,
    // 'products' => ProductsController::class,
]);

Route::get('users/getCustomer/{id}' , [UserController::class,'getCustomer']);

// Verb          Path                        Action  Route Name
// GET           /users                      index   users.index
// POST          /users                      store   users.store
// GET           /users/{user}               show    users.show
// PUT|PATCH     /users/{user}               update  users.update
// DELETE        /users/{user}               destroy users.destroy
