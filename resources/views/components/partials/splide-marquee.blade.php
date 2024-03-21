<div {{ $attributes->merge(['class' => 'splide bg-gray-100 dark:bg-gray-950 text-gray-700 overflow-hidden whitespace-nowrap dark:text-white h-16 border-y-2 md:border-y-[5px] border-primary-500 ']) }}>
    <div class="splide__track w-full">
        <div class="splide__list">
            {{ $slot }}
        </div>
    </div>
</div>
