<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    protected $primaryKey = 'productCode';

    protected $fillable = [
        'productCode',
        'productScale',
        'productVendor',
        'productDescription',
        'quantityInStock',
        'productName',
        'buyPrice',
        'MSRP'
    ];
}
