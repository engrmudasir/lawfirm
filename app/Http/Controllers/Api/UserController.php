<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\User;
use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use Spatie\Permission\Models\Role;
use Hash;
use DB;


class UserController extends Controller
{
    function __construct()
    {
         $this->middleware('permission:list users|create users|update users|delete users', ['only' => ['index','show']]);
         $this->middleware('permission:create users', ['only' => ['create','store']]);
         $this->middleware('permission:update users', ['only' => ['edit','update']]);
         $this->middleware('permission:delete users', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $user = $request->user();
        try {
            // DB::enableQueryLog();
            $users = User::get()->except($user->id);
            // dd(DB::getQueryLog());
            return UserResource::collection($users);
        } catch(\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\UserRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        // sleep(300);

        try{
            $form = $request->validated();
            $user = User::create($form);

            $user->update(['password' => Hash::make($request->password)]);
            $user->assignRole($request->role_id);
            return new UserResource($user);
        } catch(\Exception $e){
            return response()->json([
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        try{
            return new UserResource($user);
        } catch(\Exception $e){
            return response()->json([
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\UserRequest  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UserRequest $request, User $user)
    {
        //
        try{
            $form = $request->validated();
            $user->update($form);

            if($request->password){
                $user->update(['password' => Hash::make($request->password)]);
            }
            $user->roles()->detach();
            $user->assignRole($request->role_id);
            return new UserResource($user);

        } catch(\Exception $e){
            return response()->json([
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        try{
            $user->roles()->detach();

            $user->delete();

            return response()->noContent();

        } catch(\Exception $e){
            return response()->json([
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
