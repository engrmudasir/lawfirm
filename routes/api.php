<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\PasswordController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\AuthUserController;
use App\Http\Controllers\VerificationController;
use App\Http\Controllers\Api\OfficeController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\RoleController;
use App\Http\Controllers\Api\PermissionController;
use App\Http\Controllers\Api\QuestionnairesController;
use App\Http\Controllers\Api\Front\FrontQuestionnairesController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('guest')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', RegisterController::class);
    Route::post('/forgot-password', ForgotPasswordController::class);
    Route::post('/reset-password', ResetPasswordController::class);

    // guest verification (temporary auth)
    // Route::post('/verify-email/{id}/{hash}', [VerificationController::class, 'verify'])->name('verify');
    // Route::post('/verify-resend', [VerificationController::class, 'resend']);

    //Questionnaires routes
    Route::put('/front/questionnaires/{questionnaire}', [FrontQuestionnairesController::class,'update'])->name('update');
});
Route::post('/verify-email/{id}/{hash}', [VerificationController::class, 'verify'])->name('verify');
Route::post('/verify-resend', [VerificationController::class, 'resend']);

Route::middleware('auth:sanctum')->group(function () {
    Route::patch('/profile', ProfileController::class);
    Route::patch('/password', PasswordController::class);
    Route::get('/user', AuthUserController::class);
    Route::post('/logout', [AuthController::class, 'logout']);

    // in app verification
    // Route::post('/verify-email/{id}/{hash}', [VerificationController::class, 'verify'])->name('verify');
    // Route::post('/verify-resend', [VerificationController::class, 'resend']);



    //Offices routes
    Route::apiResource('offices', OfficeController::class);
    //Users routes
    Route::apiResource('users', UserController::class);
    //Questionnaires routes
    Route::apiResource('questionnaires', QuestionnairesController::class);
    //Roles routes
    Route::apiResource('roles', RoleController::class);
    //Permissions routes
    Route::apiResource('permissions', PermissionController::class);



});
