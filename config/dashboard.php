<?php

    return [
        'admin' => [
            'claude' => [
                'name' => "Claude Myburgh",
                'email' => env('ADMIN_CLAUDE_EMAIL', 'claude@eloquentblinds.co.za'),
                'password' => env('ADMIN_CLAUDE_PASSWORD', 'password'),
                'phone' => env('ADMIN_CLAUDE_PHONE'),
            ],
            'hendry' => [
                'name' => "Hendry Ollewagen",
                'email' => env('ADMIN_HENDRY_EMAIL', 'hendry@eloquentblinds.co.za'),
                'password' => env('ADMIN_HENDRY_PASSWORD', 'password'),
                'phone' => env('ADMIN_HENDRY_PHONE'),
            ],
            'xavier' => [
                'name' => "Xavier Myburgh",
                'email' => env('ADMIN_XAVIER_EMAIL', 'xavier@eloquentblinds.co.za'),
                'password' => env('ADMIN_XAVIER_PASSWORD', 'password'),
                'phone' => env('ADMIN_XAVIER_PHONE'),
            ],
        ],

    ];
