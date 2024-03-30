<?php

namespace App\Models;

use App\Traits\Live;
use App\Traits\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Gallery extends Model implements HasMedia
{
    use HasFactory, Sluggable, InteractsWithMedia, Live, SoftDeletes;

    protected $fillable = [
        'uuid',
        'title',
        'slug',
        'description',
        'body',
        'live',
    ];


    public function registerMediaConversions(Media $media = null): void
    {
        foreach (config('image-conversion') as $key => $image) {
            $this->addMediaConversion($key)
                ->format($image['format'])
                ->blur($image['blur'])
                ->fit(Manipulations::FIT_CROP, $image['height'], $image['height']);
        }
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('default')
            ->useFallbackUrl(url(config('app.placeholder')));
    }

}
