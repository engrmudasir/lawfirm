<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Scopes\OfficeScope;
class QuestionnaireData extends Model
{
    use HasFactory;

    protected $table = 'questionnaires_data';
    protected $guarded = ['id'];


    protected static function boot()
    {
        parent::boot();
        static::addGlobalScope(new OfficeScope);
    }
    public function questionnaire()
    {
        return $this->belongsTo(Questionnaire::class);
    }
}
