<?php

    return [
        'api' => [
            'maps' => [
                "api_key" => env('MAPS_API_KEY'),
                "place_id" => env('MAPS_PLACE_ID'),
            ],
            'recaptch' => [
                'site_key' => env('RECAPTCH_SITE_KEY'),
                'secret_key' => env('RECAPTCH_SECRET_KEY'),
            ]
        ],
        'gtag' => [
            'id' => env('GOOGLE_GTAG_ID')
        ]


    ];
