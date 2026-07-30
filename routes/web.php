<?php

use App\Http\Controllers\TourismDemoController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    Route::get('demo/tourism', [TourismDemoController::class, 'index'])->name('demo.tourism');
    Route::get('demo/health', [TourismDemoController::class, 'health_index'])->name('demo.health');
    Route::get('demo/agriculture', [TourismDemoController::class, 'agriculture_index'])->name('demo.agriculture');
    Route::get('demo/employment', [TourismDemoController::class, 'employment_index'])->name('demo.employment');
    Route::get('demo/residential', [TourismDemoController::class, 'residential_index'])->name('demo .residential');
    Route::get('demo/business', [TourismDemoController::class, 'business_index'])->name('demo.business');
    Route::get('demo/education', [TourismDemoController::class, 'education_index'])->name('demo.education');
    Route::get('demo/environment-resources', [TourismDemoController::class, 'environment_resources_index'])
        ->name('demo.envionment-resources');

    Route::get('demo/transportation', [TourismDemoController::class, 'transportation_index'])->name('demo.transportation');
});

require __DIR__.'/settings.php';
