<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employees extends Model
{
    use HasFactory;

    protected $primaryKey = 'employeeNumber';

    protected $fillable = [
        'employeeNumber' ,
        'lastName' ,
        'firstName' ,
        'extension' ,
        'email' ,
        'officeCode' ,
        'reportsTo' ,
        'jobTitle'
    ];
}
