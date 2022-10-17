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
        Schema::create('offices', function (Blueprint $table) {
            $table->increments('officeCode');
            $table->string('city');
            $table->string('phone');
            $table->string('addressLine1');
            $table->string('addressLine2')->nullable();
            $table->string('state')->nullable();
            $table->string('country');
            $table->string('postalCode');
            $table->string('territory');
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
        Schema::dropIfExists('offices');
    }
};
