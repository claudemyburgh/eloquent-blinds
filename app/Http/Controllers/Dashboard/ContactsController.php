<?php

    namespace App\Http\Controllers\Dashboard;

    use App\Http\Controllers\Controller;
    use App\Http\Resources\Contact\ContactCollection;
    use App\Models\User;

    class ContactsController extends Controller
    {
        /**
         * Handle the incoming request.
         */
        public function __invoke()
        {
            return new ContactCollection(User::all());
        }
    }
