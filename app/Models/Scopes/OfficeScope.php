<?php

namespace App\Models\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;
use Auth;
class OfficeScope implements Scope
{
    /**
     * Apply the scope to a given Eloquent query builder.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $builder
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @return void
     */
    public function apply(Builder $builder, Model $model)
    {
        //
        /**
         * If Authenticated User is logged in and is super Admin then show all records.
         * If the logged in user is not Super Admin then whatever the office_id is logged user, apply it for filteration
        */
        if( Auth::hasUser() ) {
            $user = Auth::user();
            if(!$user->hasRole('Super Admin')){
                $office_id = $user->office_id;
                /**
                 * ! If the logged in User is not Super Admin
                 * * Exclude all super admin users access from him
                 */
                $builder->where('office_id' , $office_id);
            }
        }

    }

}
