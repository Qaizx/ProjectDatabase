<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    // 'orderNumber' ,
    // 'productCode' ,
    // 'quantityOrdered' ,
    // 'priceEach' ,
    // 'orderLineNumber'
    public function up()
    {
        Schema::create('orderdetails', function (Blueprint $table) {
            $table->integer('orderNumber');
            $table->string('productCode',15);
            $table->integer('quantityOrdered');
            $table->decimal('priceEach',10,2);
            $table->smallInteger('orderLineNumber');
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
        Schema::dropIfExists('orderdetails');
    }
};
