<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Http\Resources\UserResource;

class AuthUserController extends Controller
{
    //

    public function __invoke(Request $request)
    {
        $user = $request->user();
        $user->update([
            'last_login_at' => Carbon::now()->toDateTimeString(),
            'last_login_ip' => $request->getClientIp()
        ]);
        return response()->json(new UserResource($user));
    }
}
