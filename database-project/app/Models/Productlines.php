<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Productlines extends Model
{
    use HasFactory;

    protected $primaryKey = 'productLine';

    protected $fillable = [
        'productLine',
        'textDescription',
        'htmlDescription',
        'image'
    ];
}
