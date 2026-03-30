<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClubController;
use App\Http\Controllers\JugadorController;
use App\Http\Controllers\LigaController;

Route::get('/clubs', [ClubController::class, 'index']);
Route::get('/clubs/{id}', [ClubController::class, 'show']);

Route::middleware('admin')->group(function () {
    Route::post('/clubs', [ClubController::class, 'store']);
    Route::put('/clubs/{id}', [ClubController::class, 'update']);
    Route::delete('/clubs/{id}', [ClubController::class, 'destroy']);
});

Route::apiResource('jugadores', JugadorController::class);
Route::apiResource('ligas', LigaController::class);
