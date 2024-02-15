<?php

    namespace App\Data;

    class ContactPerson
    {


        public function all(): array
        {
            return [
                $this->xavier(),
                $this->claude(),
            ];
        }

        public function xavier(): array
        {
            return [
                'name' => 'Xavier Myburgh',
                'phone' => '072 388 3016',
                'email' => 'xavier@eloquentblinds.co.za',
                'image' => 'resources/img/profile/hendry.webp'
            ];
        }

        public function claude(): array
        {
            return [
                'name' => 'Claude Myburgh',
                'phone' => '081 719 8302',
                'email' => 'claude@eloquentblinds.co.za',
                'image' => 'resources/img/profile/claude.webp'
            ];
        }


    }
