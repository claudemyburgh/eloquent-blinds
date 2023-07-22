<?php

    namespace App\Data;

    class ContactPerson
    {

        public static function all(): array
        {
            return [
                [
                    'name' => 'Hendry Ollewagen',
                    'phone' => '079 491 2812',
                    'email' => 'henry@eloquentblinds.co.za'
                ],
                [
                    'name' => 'Claude Myburgh',
                    'phone' => '081 719 8302',
                    'email' => 'claude@eloquentblinds.co.za'
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
