<?php

namespace App\Http\Controllers\Api\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Questionnaire;
use App\Models\QuestionnaireData;
use App\Http\Requests\QuestionnaireRequest;
use App\Http\Resources\QuestionnaireResource;
use Illuminate\Support\Facades\Notification;
use App\Notifications\SendQuestionnaireNotification;
use DB;


class FrontQuestionnairesController extends Controller
{




    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\QuestionnaireRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // sleep(300);

        try{
            dd($request->input());
            $form = $request->validated();
            $questionnaire = Questionnaire::create($form);

            // Notification::route('mail', [$questionnaire->email => $questionnaire->name])
            // ->notify(new SendQuestionnaireNotification($questionnaire));

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
    public function update(Request $request, Questionnaire $questionnaire)
    {
        //
        try{
            $form = $request->input();


            if($questionnaire->status !== 'pending'){
                return response()->json([
                    'message' => 'You have already submitted the questionaire. You can not submit Questionnaire multiple times.'
                ], Response::HTTP_INTERNAL_SERVER_ERROR);
            }



            foreach($form as $key => $value){
                if(is_array($value)){
                    foreach($value as $key2 => $value2){
                        $qd =  new QuestionnaireData;
                        $qd->field = $key.'_'.$key2;
                        $qd->value = $value2;
                        $qd->questionnaire_id = $questionnaire->id;
                        $qd->save();
                    }
                } else {
                   $qd =  new QuestionnaireData;
                   $qd->field = $key;
                   $qd->value = $value;
                   $qd->questionnaire_id = $questionnaire->id;
                   $qd->save();
                }
            }
            $questionnaire->update(['status' => 'filled']);
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
