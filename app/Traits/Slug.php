<?php

namespace App\Traits;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

trait Slug
{
    protected static function bootSlug(): void
    {

        self::creating(callback: function (Model $model) {
            $model->uuid = Str::uuid();
            if (!$model->slug) {
                $model->slug = $model->uuid;
            }
        });

        self::updating(function (Model $model) {
            $model->slug = Str::slug($model->slug);
        });
    }
}
