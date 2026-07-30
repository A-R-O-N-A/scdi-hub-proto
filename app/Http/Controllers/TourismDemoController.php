<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


// rename next time as sector page controller
class TourismDemoController extends Controller
{
    public function index()
    {
        return inertia('demo/Tourism');
    }

    public function health_index()  
    {
        return inertia('demo/Health');
    }

    public function agriculture_index()
    {
        return inertia('demo/Agriculture');
    }

    public function employment_index()
    {
        return inertia('demo/Employment');
    }

    public function residential_index()
    {
        return inertia('demo/Residential');
    }

    public function business_index()
    {
        return inertia('demo/Business');
    }

    public function education_index()
    {
        return inertia('demo/Education');
    }

    public function environment_resources_index()
    {
        return inertia('demo/EnvironmentResources');
    }

    public function transportation_index()
    {
        return inertia('demo/Transportation');
    }

}
