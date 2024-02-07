<?php

    namespace App\Data;

    class ContactPerson
    {

        public static function all(): array
        {
            return [
                [
                    'name' => 'Xavier Myburgh',
                    'phone' => '072 388 3016',
                    'email' => 'xavier@eloquentblinds.co.za',
                    'image' => 'resources/img/profile/hendry.webp'
                ],
                [
                    'name' => 'Claude Myburgh',
                    'phone' => '081 719 8302',
                    'email' => 'claude@eloquentblinds.co.za',
                    'image' => 'resources/img/profile/claude.webp'
                ]
            ];
        }


        public static function claude(): array
        {
            return [
                'name' => 'Claude Myburgh',
                'phone' => '081 719 8302',
                'email' => 'claude@eloquentblinds.co.za'
            ];
        }

        public static function hendry(): array
        {
            return [
                'name' => 'Hendry Ollewagen',
                'phone' => '079 491 2812',
                'email' => 'claude@eloquentblinds.co.za'
            ];
        }


    }
