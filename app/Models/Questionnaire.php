<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Scopes\OfficeScope;
class Questionnaire extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected static function boot()
    {
        parent::boot();
        static::addGlobalScope(new OfficeScope);
    }
    public function office()
    {
        return $this->belongsTo(Office::class);
    }
}
