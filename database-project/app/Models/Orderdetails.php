<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
class Orderdetails extends Model
{
    use HasFactory;
    // protected $primaryKey = ['orderNumber','productCode'];
    protected $primaryKey = 'orderNumber';



    protected $fillable = [
        'orderNumber' ,
        'productCode' ,
        'quantityOrdered' ,
        'priceEach' ,
        'orderLineNumber'
    ];



}
