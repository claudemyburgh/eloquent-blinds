<?php

    namespace App\Models;

    use App\Traits\Live;
    use App\Traits\Sluggable;
    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\Relations\HasMany;
    use Illuminate\Database\Eloquent\SoftDeletes;
    use Spatie\Image\Manipulations;
    use Spatie\MediaLibrary\HasMedia;
    use Spatie\MediaLibrary\InteractsWithMedia;
    use Spatie\MediaLibrary\MediaCollections\Models\Media;
    use Staudenmeir\LaravelAdjacencyList\Eloquent\HasRecursiveRelationships;

    /**
     * @method static live()
     * @method static withAnyTags(string[] $array, string $type)
     * @property mixed $id
     */
    class Category extends Model implements HasMedia
    {
        use HasFactory, Sluggable, HasRecursiveRelationships, InteractsWithMedia, Live, SoftDeletes;

        protected $fillable = [
            'title',
            'slug',
            'link_description',
            'parent_id',
            'popular',
            'description',
            'excerpt',
            'live',
            'body',
            'video_url',
            'video_thumbnail',
        ];

        public function products(): HasMany
        {
            return $this->hasMany(Product::class);
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

        public function registerMediaCollections(): void
        {
            $this->addMediaCollection('default')
                ->useFallbackUrl(url(config('app.placeholder')));
        }


    }
