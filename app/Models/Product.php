<?php

namespace App\Models;

use App\Traits\Live;
use App\Traits\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Product extends Model implements HasMedia
{
    use HasFactory, Live, InteractsWithMedia, Sluggable, SoftDeletes;

    protected $fillable = [
        'category_id',
        'title',
        'slug',
        'description',
        'excerpt',
        'body',
        'live',
        'popular',
        "product_range"
    ];

    /**
     * @return BelongsTo
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }


    public function registerMediaConversions(Media $media = null): void
    {
        foreach (config('image-conversion') as $key => $image) {
            $this->addMediaConversion($key)
                ->format($image['format'])
                ->blur($image['blur'])
                ->fit(Manipulations::FIT_CROP, $image['height'], $image['height']);
        }
    }

    /**
     * @return void
     */
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('default')
            ->useFallbackUrl(url(config('app.placeholder')));
    }
}
