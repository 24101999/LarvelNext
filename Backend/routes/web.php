<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index']);
Route::get('/{id?}', [HomeController::class, 'dados']);
Route::post('/post', [HomeController::class, 'post']);
Route::get('/post', [HomeController::class, 'post']);
Route::delete('/delete/{id?}', [HomeController::class, 'destroy']);
Route::get('/edit{id?}', [HomeController::class, 'edit']);
Route::put('/update/{id?}', [HomeController::class, 'update']);
