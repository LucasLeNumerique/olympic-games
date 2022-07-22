<?php

use App\Models\Results;
use App\Models\Sports;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('/sports', function (Request  $request) {
    return Sports::create($request->all());
});

Route::post('/results', function (Request  $request) {
    return Results::create($request->all());
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
