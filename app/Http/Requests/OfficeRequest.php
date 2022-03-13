<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OfficeRequest extends FormRequest
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
        // sleep(300);
        return [
            'name' => ['required', 'string'],
            'address' => ['nullable', 'string']
        ];
    }
}
