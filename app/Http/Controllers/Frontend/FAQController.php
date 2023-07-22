<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Inertia\Inertia;
use Inertia\Response;

class FAQController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): View
    {
        $faqs = [
            [
                'id' => 1,
                'question' => 'Where are your company based?',
                'answer' => 'We are base in the beautifully area of the Western Cape in Bellville, Cape Town',
            ],
            [
                'id' => 2,
                'question' => 'What kind of blinds do you have?',
                'answer' => 'We do indoor and outdoor blind. We also do aluminium, bamboo, basswood, honeycomb, roller, double roller, venetian, and zebra blinds.',
            ],
            [
                'id' => 3,
                'question' => 'Do you charge for installation?',
                'answer' => 'No, Installation price is free if you are in Cape Town',
            ],
            [
                'id' => 4,
                'question' => 'Do you do blind repair?',
                'answer' => 'Yes, we do repairs on variety of blind types.',
            ],
            [
                'id' => 5,
                'question' => 'Do you do blind blind automation?',
                'answer' => 'Yes, do blind automation on most types of blinds.',
            ],
        ];



        return view('faq', [
            'faqs' => $faqs,
        ]);
    }
}
