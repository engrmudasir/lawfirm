<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Hash;

class QuestionnaireRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        // sleep(300);
        // dd($this->user()->can());
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'name' => 'required|string',
            'email' => 'required|email'
        ];
        $rules['office_id'] = 'required';
        return $rules;
    }
    public function messages()
    {
        return [
            'office_id.required' =>  'The Office field is required',
        ];
    }
    public function prepareForValidation()
    {
        if(!$this->user()->hasRole('Super Admin')){
            $office_id = $this->user()->office_id;
            $this->merge([
                'office_id' => $office_id,
            ]);
        }
    }

}
