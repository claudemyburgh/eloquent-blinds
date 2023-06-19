<?php

namespace App\Traits;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;


trait Sluggable
{

    public Model $model;

    protected static function bootSluggable(): void
    {

        self::creating(function (Model $model): void {

            /** @var TYPE_NAME $model */
            $model->uuid = Str::uuid();

            if (!$model->slug) {
                $model->slug = $model->uuid;
            }
        });

        self::updating(function (Model $model): void {
            $model->slug = Str::slug($model->slug);
        });
    }
}
