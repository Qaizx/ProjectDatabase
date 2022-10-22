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
        Schema::dropIfExists('employees');
        Schema::create('employees', function (Blueprint $table) {
            $table->increments('employeeNumber');
            $table->string('lastName',50);
            $table->string('firstName',50);
            $table->string('extension');
            $table->string('email');
            $table->string('officeCode');
            $table->foreign('officeCode')->references('officeCode')->on('offices');
            $table->integer('reportsTo')->nullable();
            $table->string('jobTitle');
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
        Schema::dropIfExists('employees');
    }
};
