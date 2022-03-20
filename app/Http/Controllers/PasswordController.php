<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class PasswordController extends Controller
{
    //
    public function __invoke(Request $request)
    {
        $user = $request->user();
        $request->validate([
            'password_current' => [
                'required',
                function ($attribute, $value, $fail) use ($user) {
                    if (!Hash::check($value, $user->password)) {
                        $fail('Current password does not match.');
                    }
                }
            ],
            'password' => 'required|min:6|max:255|confirmed',
        ]);
        $user->update(['password' => Hash::make($request->password)]);
        return response()->json([
            'message' => 'password updated successfully .'
        ], 200);
    }
}
