<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Translation\PotentiallyTranslatedString;

class YouTubeVideoUrl implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param Closure(string): PotentiallyTranslatedString $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        // YouTube URL regex pattern
        $pattern = "/^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/";

        if (!preg_match($pattern, $value)) {
            $fail('The :attribute must be a valid YouTube video URL.');
        }
    }


}
