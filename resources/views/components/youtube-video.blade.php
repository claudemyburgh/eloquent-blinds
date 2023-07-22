@if($src)
    <div
        {{ $attributes->merge(['class' => 'relative p-[2px] flex rounded-global shadow-2xl shadow-primary-500/50 bg-gradient-to-br from-primary-500 to-secondary-400']) }}
    >

        <iframe
            width="560"
            height="375"
            src="{{ $src }}"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
            class="aspect-video bg-gray-100 dark:bg-gray-950 rounded-global shadow-lg shadow-primary-500/40 col-start-1 w-full"

        ></iframe>
    </div>

@endif
