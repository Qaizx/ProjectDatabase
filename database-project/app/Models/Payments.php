<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payments extends Model
{
    use HasFactory;

    protected $primaryKey = 'customerNumber';

    protected $fillable = [
        'customerNumber',
        'checkNumber',
        'paymentDate',
        'amount'
    ];
}
