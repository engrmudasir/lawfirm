<?php

namespace App\Models\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;
use Auth;
class ExcludeSuperAdminUsersScope implements Scope
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
        if( Auth::hasUser() ) {
            $user = Auth::user();
            if(!$user->hasRole('Super Admin')){
                /**
                 * ! If the logged in User is not Super Admin
                 * * Exclude all super admin users access from him
                 */
                $builder->whereDoesntHave('roles', function($builder){

                    $builder->where('name' ,'Super Admin');

                });
            }
        }
    }

}
