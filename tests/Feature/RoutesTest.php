<?php


use Illuminate\Support\Facades\Route;

dataset('routes', function () {
    return array_values(collect(Route::getRoutes())
        ->filter(fn($route) => in_array('GET', $route->methods()))
        ->map(function ($route) {
            return $route->uri();
        })->toArray());
});


test('access routes', function ($url) {
    $this->get($url)->assertStatus(200);
})->with('routes');
