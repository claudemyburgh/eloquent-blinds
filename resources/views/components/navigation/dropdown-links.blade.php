<headless-popover>
    <button
        aria-expanded="false"
        aria-haspopup="true"
        id="navigation_link_{{ Str::lower($link->name) }}"
        @class([
          $link->classes,
          'flex items-center group -mr-4',
          ])>
        <span>{{ $link->name }}</span>
        <svg aria-hidden="true" class="text-gray-400 ml-[2px] h-5 w-5 group-hover:text-primary-500" fill="currentColor"
             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
                clip-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                fill-rule="evenodd"
            />
        </svg>
    </button>
    <div
        aria-labelledby="navigation_link_{{ Str::lower($link->name) }}"
        class="absolute w-full inset-x-0 top-full mt-2"
        role="menu"
        tabindex="-1"
        hidden
    >
        <div class="rounded-global shadow-2xl shadow-primary-500/50 ring-1 ring-black ring-opacity-5 overflow-hidden ">
            <div
                class="relative bg-gray-200 dark:bg-gray-900 p-6 grid grid-cols-4 gap-6 border border-primary-500 rounded-global">
                @if($link->slug === 'blinds')
{{--                    <a href="{{ route('categories.show', 'motion-blinds') }}"--}}
{{--                       class="border border-gray-300 dark:border-gray-800 rounded-global overflow-hidden relative isolate group shadow-lg shadow-primary-500/20">--}}
{{--                        <div aria-hidden="true"--}}
{{--                             class="pulse-loader absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"></div>--}}
{{--                        <div aria-hidden="true"--}}
{{--                             class="pulse-loader scale-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"></div>--}}
{{--                        <x-svg.motion class="absolute inset-3 z-10 drop-shadow-hard" />--}}
{{--                        <img--}}
{{--                            class="rounded-global mask-image-b mask-image-start-60 transition-all object-center scale-110 group-hover:scale-100"--}}
{{--                            loading="lazy" width="290" height="290"--}}
{{--                            src="{{ Vite::asset('resources/img/motion.webp') }}"--}}
{{--                            alt="Motion Blinds">--}}
{{--                    </a>--}}
                    @foreach($categories->where('slug', '!==', 'shutters') as $category)
                        <div>
                            <a class="font-black text-gray-900 dark:text-gray-100 hover:text-primary-500 text-lg hover:dark:text-primary-500"
                               href="{{ route('categories.show', $category) }}" role="menuitem"> {{$category->title}}
                            </a>
                            <div class="mt-2 space-y-3 pl-4 border-l border-gray-300 dark:border-gray-800">
                                @foreach($category->children as $child)
                                    <a tabindex="0" href="{{ route('categories.show', $child) }}"
                                       class="flex items-center justify-between group relative text-gray-700 dark:text-gray-300  hover:text-primary-500 hover:dark:text-primary-500 focus:text-primary-500 focus:dark:text-primary-500">{{ $child->title }}
                                        <span
                                            class="absolute top-1.5 bg-gray-200 dark:bg-gray-900 -left-[22px] border-2 group-hover:border-amber-500 border-gray-300 dark:border-gray-800 w-3  h-3 rounded-full group-focus:ring-0 block"></span>
                                    </a>
                                @endforeach
                            </div>
                        </div>
                    @endforeach

                @elseif($link->slug === 'shutters')
                    <a href="{{ route('categories.show', 'shutters') }}"
                       class="border border-gray-300 dark:border-gray-800 rounded-global overflow-hidden relative isolate group shadow-lg shadow-primary-500/20">
                        <x-svg.shutter class="absolute inset-3 z-10 drop-shadow-hard" />
                        <img
                            class="rounded-global mask-image-b mask-image-start-60 transition-all object-center scale-110 group-hover:scale-100"
                            loading="lazy" width="290" height="290"
                            src="{{ Vite::asset('resources/img/shutterguard.webp') }}"
                            alt="Motion Blinds">
                    </a>
                    @foreach($categories->where('slug', '===', 'shutters') as $category)
                        <div class="col-span-2">
                            <a class="font-black text-gray-900 dark:text-gray-100 hover:text-primary-500 text-lg hover:dark:text-primary-500"
                               href="{{ route('categories.show', $category) }}" role="menuitem">
                                {{$category->title}}
                            </a>
                            <div class="mt-2 space-y-3 pl-4 border-l border-gray-300 dark:border-gray-800 col-span-2">
                                @foreach($category->products as $product)
                                    <a tabindex="0" href="{{ route('products.show', [$category,  $product]) }}"
                                       class="flex items-center justify-between group relative text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:dark:text-primary-500 focus:text-primary-500 focus:dark:text-primary-500">
                                        {{ $product->title }}
                                        <span
                                            class="absolute top-1.5 bg-gray-200 dark:bg-gray-900 -left-[22px] border-2 group-hover:border-amber-500 border-gray-300 dark:border-gray-800 w-3 h-3 rounded-full group-focus:ring-0 block"></span>
                                    </a>
                                @endforeach
                            </div>
                        </div>
                    @endforeach
                @endif
            </div>
        </div>
    </div>
</headless-popover>
