<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::redirect('/', 'prototype/home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('prototype')->name('prototype.')->group(function () {
    route::get('/home', function () {
        return Inertia::render('Prototype/Home');
    }) -> name('home');
    route::get('/informasiHealth', function () {
        return Inertia::render('Prototype/InformasiHealth');
    }) -> name('informasiHealth');
    route::get('/beritaHealth', function () {
        return Inertia::render('Prototype/BeritaHealth');
    }) -> name('beritaHealth');
    route::get('/showberita/{slug}', function () {
        return Inertia::render('Prototype/Showberita/Show');
    }) -> name('showberita.show');
});


require __DIR__.'/auth.php';
