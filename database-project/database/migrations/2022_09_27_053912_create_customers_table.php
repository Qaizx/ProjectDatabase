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
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id('customerNumber');
            $table->string('customerName');
            $table->string('contactLastName');
            $table->string('contactFirstName');
            $table->string('phone');
            $table->string('addressLine1');
            $table->string('addressLine2')->nullable();
            $table->string('city');
            $table->string('state')->nullable();
            $table->string('postalCode')->nullable();
            $table->string('country');
            $table->integer('salesRepEmployeeNumber')->nullable();
            $table->integer('creditLimit');
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
        Schema::dropIfExists('customers');
    }
};
