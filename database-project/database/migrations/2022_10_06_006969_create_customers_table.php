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
        Schema::dropIfExists('customers');
        Schema::create('customers', function (Blueprint $table) {
            $table->unsignedInteger('customerNumber');
            $table->foreign('customerNumber')->references('customerNumber')->on('users')->onUpdate('cascade')->onDelete('cascade');

            $table->string('customerName',50);
            $table->string('contactLastName',50);
            $table->string('contactFirstName',50);
            $table->string('phone',50);
            $table->string('addressLine1',50);
            $table->string('addressLine2',50)->nullable();
            $table->string('city',50);
            $table->string('state',50)->nullable();
            $table->string('postalCode',15)->nullable();
            $table->string('country',50);
            $table->unsignedInteger('salesRepEmployeeNumber')->nullable();
            $table->foreign('SalesRepEmployeeNumber')->references('employeeNumber')->on('employees');
            $table->decimal('creditLimit', 10 , 2);
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
