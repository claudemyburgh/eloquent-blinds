<x-mail::message>
# Hi, {{$name}}

Thank you for contacting us.

<x-mail::button url="https://www.facebook.com/eloquentblinds">
Like Us On Facebook
</x-mail::button>
<x-mail::button color="sky"  url="https://g.page/r/CXWNSZcI_nGmEB0/review">
Leave a Google Review
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
