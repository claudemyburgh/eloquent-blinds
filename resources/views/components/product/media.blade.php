<div data-lightbox-gallery {{ $attributes->merge(['class' => 'carousel main-carouse']) }}>
    @if($product->getMedia()->count() > 1)
        <div class="carousel main-carousel overflow-clip">
            @foreach($product->getMedia() as $media)
                <img height="480" width="600"
                     class="carousel-cell bg-gray-200 rounded-global w-full aspect-4/3 object-cover"
                     src="{{ $media->getFullUrl('card') }}" alt="{{ $product->title }} main image">
            @endforeach
        </div>
        <div class="carousel nav-carousel carousel-nav mt-12">
            @foreach($product->getMedia() as $media)
                <img height="120" width="120"
                     class="carousel-cell mr-4 bg-gray-200 rounded-global w-1/4 aspect-4/3 object-cover"
                     src="{{ $media->getFullUrl('thumb') }}" alt="{{ $product->title }} thumbnail image">
            @endforeach
        </div>
    @else
        <img height="480" width="600" class="bg-gray-200 rounded-global w-full aspect-4/3 object-cover"
             src="{{ $product->getFirstMediaUrl('default', 'card') }}" alt="{{ $product->title }} main
        image">
    @endif
</div>
