<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;
use Spatie\Permission\Models\Role;
use App\Http\Requests\RoleRequest;
use App\Http\Resources\RoleResource;


class RoleController extends Controller
{

    function __construct()
    {
         $this->middleware('permission:list roles|create roles|update roles|delete roles|list users|create users|update users', ['only' => ['index','show']]);
         $this->middleware('permission:create roles', ['only' => ['create','store']]);
         $this->middleware('permission:update roles', ['only' => ['edit','update']]);
         $this->middleware('permission:delete roles', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        try {
            $roles = Role::whereNotIn('name', ['Super Admin'])->get();
            return RoleResource::collection($roles);
        } catch(\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\RoleRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RoleRequest $request)
    {
        // sleep(300);

        try{
            $form = $request->validated();
            $role = Role::create($form);
            $role->syncPermissions($form["permissions"]);

            return new RoleResource($role);
        } catch(\Exception $e){
            return response()->json([
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function show(Role $role)
    {
        try{
            return new RoleResource($role);
        } catch(\Exception $e){
            return response()->json([
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\RoleRequest  $request
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function update(RoleRequest $request, Role $role)
    {
        //
        try{
            $form = $request->validated();
            $role->update($form);
            $role->syncPermissions($form["permissions"]);


            return new RoleResource($role);

        } catch(\Exception $e){
            return response()->json([
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {
        try{

            $role->delete();

            return response()->noContent();

        } catch(\Exception $e){
            return response()->json([
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
