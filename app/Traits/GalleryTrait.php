<?php

namespace App\Traits;


use App\Models\Gallery;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Relations\MorphToMany;


trait GalleryTrait
{

    public function gallerieable(): MorphTo
    {
        return $this->morphTo();
    }


    public function galleries(): MorphToMany
    {
        return $this->morphToMany(Gallery::class, 'gallerieable');
    }

    public function gallery(): MorphOne
    {
        return $this->morphOne(Gallery::class, 'gallerieable');
    }


}
