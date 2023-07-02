<?php

return [
  'api' => [
    'maps' => env('MAPS_API'),
    'recaptch' => [
      'site_key' => env('RECAPTCH_SITE_KEY'),
      'secret_key' => env('RECAPTCH_SECRET_KEY'),
    ]

  ],


];
