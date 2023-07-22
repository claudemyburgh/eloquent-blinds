<?php

    namespace App\Http\Controllers;

    use Exception;
    use GuzzleHttp\Client;

    class GoogleReviewController extends Controller
    {
        public function __invoke()
        {
            $apiKey = config('google.api.maps.api_key');
            $placeId = config('google.api.maps.place_id');

            $client = new Client();
            $url = "https://maps.googleapis.com/maps/api/place/details/json?placeid={$placeId}&key={$apiKey}";

            try {
                $response = $client->get($url);

                $data = json_decode($response->getBody(), true);
                // Handle the data and extract the reviews
                $reviews = $data['result']['reviews'];

                return response()->json($reviews);
            } catch (Exception $e) {
                return response()->json(['error' => $e->getMessage()], 500);
            }
        }
    }
