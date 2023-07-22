<?php

    namespace App\Http\Controllers\Api;

    use App\Events\ContactSubmitted;
    use App\Http\Controllers\Controller;
    use App\Http\Requests\ContactFormRequest;
    use Illuminate\Contracts\Queue\ShouldQueue;

    class SendQuoteController extends Controller implements ShouldQueue
    {
        /**
         * Handle the incoming request.
         */
        public function __invoke(ContactFormRequest $request): void
        {
            event(new ContactSubmitted($request->validated()));
        }
    }
