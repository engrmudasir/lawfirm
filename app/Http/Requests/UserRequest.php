<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Hash;

class UserRequest extends FormRequest
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
        if ($this->isMethod('post')) {
            $rules = [
                'email' => 'required|email|unique:users',
                'password' => 'required|min:6|max:255|confirmed'
            ];
        } else {
            $rules = [
                'email' => 'required|email|unique:users,email,'.$this->user->id,
                'password' => 'nullable|min:6|max:255|confirmed'
            ];
        }
        $rules['name'] = ['required', 'string'];
        $rules['role_id'] = 'required';
        $rules['office_id'] = 'required';
        return $rules;
    }
    public function messages()
    {
        return [
            'role_id.required' =>  'The Role field is required',
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
