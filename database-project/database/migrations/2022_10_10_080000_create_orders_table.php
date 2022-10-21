<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    // 'orderNumber' ,
    // 'orderDate' ,
    // 'requiredDate' ,
    // 'shippedDate',
    // 'status' ,
    // 'comments',
    // 'customerNumber',
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('orderNumber');
            $table->date('orderDate');
            $table->date('requiredDate');
            $table->date('shippedDate')->nullable();
            $table->string('status');
            $table->string('comments')->nullable();
            $table->unsignedInteger('customerNumber');
            $table->foreign('customerNumber')->references('customerNumber')->on('customers');
            $table->nullableTimestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
};
