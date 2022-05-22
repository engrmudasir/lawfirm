<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Questionnaire;
use App\Http\Requests\QuestionnaireRequest;
use App\Http\Resources\QuestionnaireResource;
use Illuminate\Support\Facades\Notification;
use App\Notifications\SendQuestionnaireNotification;
use DB;


class QuestionnairesController extends Controller
{
    function __construct()
    {
         $this->middleware('permission:list questionnaires|create questionnaires|update questionnaires|delete questionnaires', ['only' => ['index','show']]);
         $this->middleware('permission:create questionnaires', ['only' => ['create','store']]);
         $this->middleware('permission:update questionnaires', ['only' => ['edit','update']]);
         $this->middleware('permission:delete questionnaires', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        try {
            // DB::enableQueryLog();
            $questionnaires = Questionnaire::orderBy('id','desc')->get();
            // dd(DB::getQueryLog());
            return QuestionnaireResource::collection($questionnaires);
        } catch(\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\QuestionnaireRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(QuestionnaireRequest $request)
    {
        // sleep(300);

        try{
            $form = $request->validated();
            $questionnaire = Questionnaire::create($form);

            Notification::route('mail', [$questionnaire->email => $questionnaire->name])
            ->notify(new SendQuestionnaireNotification($questionnaire));

            return new QuestionnaireResource($questionnaire);
        } catch(\Exception $e){
            return response()->json([
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Questionnaire  $questionnaire
     * @return \Illuminate\Http\Response
     */
    public function show(Questionnaire $questionnaire)
    {
        try{
            return new QuestionnaireResource($questionnaire);
        } catch(\Exception $e){
            return response()->json([
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\QuestionnaireRequest  $request
     * @param  \App\Models\Questionnaire  $questionnaire
     * @return \Illuminate\Http\Response
     */
    public function update(QuestionnaireRequest $request, Questionnaire $questionnaire)
    {
        //
        try{
            $form = $request->validated();
            $questionnaire->update($form);
            return new QuestionnaireResource($questionnaire);

        } catch(\Exception $e){
            return response()->json([
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Questionnaire  $questionnaire
     * @return \Illuminate\Http\Response
     */
    public function destroy(Questionnaire $questionnaire)
    {
        try{
            $questionnaire->delete();

            return response()->noContent();

        } catch(\Exception $e){
            return response()->json([
                'message' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
