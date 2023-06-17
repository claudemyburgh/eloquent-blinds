<?php

namespace App\Models;

use App\Traits\Live;
use App\Traits\Observable;
use App\Traits\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;


class Post extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia, Sluggable, Live, Observable;

    protected $fillable = [
        "uuid",
        "user_id",
        "title",
        "slug",
        "description",
        "body",
        "live",
    ];


    protected $appends = [
    ];


    public function getRouteKey(): array
    {
        return ['uuid'];
    }


    public function registerMediaConversions(Media $media = null): void
    {
        foreach (config('image-conversion') as $key => $image) {
            $this->addMediaConversion($key)
                ->format($image['format'])
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

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }


}
