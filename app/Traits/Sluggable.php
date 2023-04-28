<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

trait Sluggable
{
    protected static function bootSluggable(): void
    {

        self::creating(function (Model $builder): void {

            $builder->uuid = Str::uuid();

            if (!$builder->slug) {
                $builder->slug = $builder->uuid;
            }
        });

        self::updating(function (Model $builder): void {
            $builder->slug = Str::slug($builder->slug);
        });
    }
}
