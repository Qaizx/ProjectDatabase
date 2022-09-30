<?php

use App\Http\Controllers\CustomersController;
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

Route::apiResource('customers' , CustomersController::class);


// Route::apiResources([
//     'customers' => CustomersController::class,
//     'employees' => EmployeesController::class,
//     'offices' => OfficesController::class,
//     'orderdetails' => OrderDetailsController::class,
//     'orders' => OrdersController::class,
//     'payments' => PaymentsController::class,
//     'productlines' => ProductLinesController::class,
//     'products' => ProductsController::class,
// ]);

// get -> /
// getById -> /{id}
// post -> /
// put,patch -> /{id}
// delete -> /{id}
