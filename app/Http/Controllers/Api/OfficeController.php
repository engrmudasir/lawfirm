<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Office;
use App\Http\Requests\OfficeRequest;
use App\Http\Resources\OfficeResource;


class OfficeController extends Controller
{
    function __construct()
    {
         $this->middleware('permission:list offices|create offices|update offices|delete offices|list users|create users|update users', ['only' => ['index','show']]);
         $this->middleware('permission:create offices', ['only' => ['create','store']]);
         $this->middleware('permission:update offices', ['only' => ['edit','update']]);
         $this->middleware('permission:delete offices', ['only' => ['destroy']]);
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
            return OfficeResource::collection(Office::all());
        } catch(\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\OfficeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(OfficeRequest $request)
    {
        // sleep(300);

        try{
            $office = Office::create($request->validated());

            return new OfficeResource($office);
        } catch(\Exception $e){
            return response()->json([
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Office  $office
     * @return \Illuminate\Http\Response
     */
    public function show(Office $office)
    {
        try{
            return new OfficeResource($office);
        } catch(\Exception $e){
            return response()->json([
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\OfficeRequest  $request
     * @param  \App\Models\Office  $office
     * @return \Illuminate\Http\Response
     */
    public function update(OfficeRequest $request, Office $office)
    {
        //
        try{

            $office->update($request->validated());

            return new OfficeResource($office);

        } catch(\Exception $e){
            return response()->json([
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Office  $office
     * @return \Illuminate\Http\Response
     */
    public function destroy(Office $office)
    {
        try{

            $office->delete();

            return response()->noContent();

        } catch(\Exception $e){
            return response()->json([
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
