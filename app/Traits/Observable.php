<?php

namespace App\Traits;


use App\Exceptions\ObserverException;

trait Observable
{
    public static function bootObservable()
    {
        $observer = '\\App\\Observers\\' . class_basename(static::class) . 'Observer';

        try {
            (new static)->registerObserver($observer);
        } catch (ObserverException $e) {

        }


    }
}