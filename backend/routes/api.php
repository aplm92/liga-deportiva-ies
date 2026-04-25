<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClubController;
use App\Http\Controllers\JugadorController;
use App\Http\Controllers\LigaController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ResultadoController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PartidoController;

Route::get('/partidos', [PartidoController::class, 'index']);
Route::get('/partidos/{id}', [PartidoController::class, 'show']);
Route::post('/partidos', [PartidoController::class, 'store']);
Route::put('/partidos/{id}', [PartidoController::class, 'update']);
Route::delete('/partidos/{id}', [PartidoController::class, 'destroy']);

Route::get('/arbitros', [UserController::class, 'arbitros']);

Route::post('/usuarios/register', [AuthController::class, 'register']);
Route::post('/usuarios/login', [AuthController::class, 'login']);

Route::get('/clubs', [ClubController::class, 'index']);
Route::get('/clubs/{id}', [ClubController::class, 'show']);

Route::get('/resultados', [ResultadoController::class, 'index']);

Route::middleware('admin')->group(function () {
    Route::post('/clubs', [ClubController::class, 'store']);
    Route::put('/clubs/{id}', [ClubController::class, 'update']);
    Route::delete('/clubs/{id}', [ClubController::class, 'destroy']);
});

Route::apiResource('jugadores', JugadorController::class);
Route::apiResource('ligas', LigaController::class);
