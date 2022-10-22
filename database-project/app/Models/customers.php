<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Customers extends Model
{
    use HasFactory;

    protected $primaryKey = 'customerNumber';

    protected $attributes = [
        'customerName' => '-',
        'contactLastName' => '-',
        'contactFirstName' => '-',
        'phone' => '-',
        'addressLine1' => '-',
        'addressLine2' => '-',
        'city' => '-',
        'state' => '-',
        'postalCode' => '-',
        'country' => '-',
        'salesRepEmployeeNumber' => NULL,
        'creditLimit' => 0,
    ];

    protected $fillable = [
        'customerNumber',
        'customerName',
        'contactLastName',
        'contactFirstName',
        'phone',
        'addressLine1',
        'addressLine2',
        'city',
        'state',
        'postalCode',
        'country',
        'salesRepEmployeeNumber',
        'creditLimit',
    ];

    // public function __construct()
    // {
    //     $this->contactLastName = "default value";
    //     $this->contactFirstName = "default value";
    //     $this->phone = "default value";
    //     $this->addressLine1 = "default value";
    //     $this->addressLine2 = "default value";
    //     $this->city = "default value";
    //     $this->state = "default value";
    //     $this->postalCode = "default value";
    //     $this->country = "default value";
    //     $this->salesRepEmployeeNumber = 0;
    //     $this->creditLimit = 0;
    // }
}
