<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class DeleteImageController extends Controller
{

    public function __invoke($uuid): void
    {
        Media::findByUuid($uuid)->delete();
    }

}
