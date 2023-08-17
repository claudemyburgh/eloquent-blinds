<nav class="fixed w-full z-20 top-0 lg:top-2">

    <headless-navigation class="block">
        <mouse-spotlight class="wrapper relative card text-gray-500 dark:bg-gray-900/80 bg-gray-200/90 border border-gray-300 dark:border-primary-500/50 dark:text-gray-100 px-6 py-4 rounded-b-global md:rounded-global flex flex-wrap
               justify-between items-center shadow-2xl shadow-primary-500/50 backdrop-blur-sm">
            <div aria-hidden="true" class="absolute w-1/2 top-0 h-[1px] left-0 bg-gradient-to-r from-transparent via-secondary-500 to-transparent">
                <div class="w-1/2 h-[20px] rounded-b-full absolute top-0 translate-x-1/2 blur-md bg-secondary-500/10 "></div>
            </div>
            <a href="{{ config('app.url') }}" class="flex shrink-0 md:ml-0">
                <img src="{{ Vite::asset('resources/img/logo-on-dark.svg') }}" class="h-7 md:h-10 md:ml-0 hidden dark:block" alt="{{ config('app.name') }}">
                <img src="{{ Vite::asset('resources/img/logo-on-light.svg') }}" class="h-7 md:h-10 md:ml-0 dark:hidden block" alt="{{ config('app.name') }}">
            </a>

            <div class="flex items-center">
                <div class="lg:flex hidden space-x-8 font-bold items-center">
                    @foreach($links as $link)
                        @if($link['route'] !== 'categories')
                            <a @class([$link['classes'], 'text-primary-500 ' => Route::currentRouteName() === $link['route']]) href="{{
                            route($link['route']) }}">{{ $link['name'] }}
                            </a>
                        @else
                            <headless-popover>
                                <button
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    @class([$link['classes'],'flex items-center group -mr-4' , 'text-primary-500 ' => Route::currentRouteName() === $link['route']])>
                                    <span>{{ $link['name'] }}</span>
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
                                    aria-labelledby="nav_link_1"
                                    class="absolute w-full inset-x-0 top-full mt-2"
                                    role="menu"
                                    tabindex="-1"
                                    hidden
                                >
                                    <div class="rounded-global shadow-2xl shadow-primary-500/50 ring-1 ring-black ring-opacity-5 overflow-hidden ">
                                        <div class="relative bg-gray-200 dark:bg-gray-900 p-6 grid grid-cols-4 gap-6 border border-primary-500 rounded-global">
                                            <a href="{{ route('category', 'motion-blinds') }}" class="border border-gray-300 dark:border-gray-800 rounded-global overflow-hidden relative isolate group  shadow-lg shadow-primary-500/20">
                                                <div aria-hidden="true" class="pulse-loader absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"></div>
                                                <div aria-hidden="true" class="pulse-loader scale-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"></div>
                                                <x-svg.motion class="absolute inset-1 z-10 -translate-y-1 drop-shadow-hard"/>
                                                <img class="rounded-global mask-image-b mask-image-start-60 transition-all object-center scale-110 group-hover:scale-100" loading="lazy" width="300" height="300"
                                                     src="{{ Vite::asset('resources/img/EVE_MOTIONBLINDS.webp') }}"
                                                     alt="Motion Blinds">
                                            </a>

                                            <x-ribbon {{ $attributes->merge([
                                                    'class' => 'relative  flex rounded-global shadow-lg shadow-primary-500/20 ']) }}
                                                      show="true" text="BEST SELLER" url="{{ route('product', ['roller-blinds', 'nairobi-blinds']) }}">
                                                <a href="{{ route('product', ['roller-blinds', 'nairobi-blinds']) }}" class="overflow-hidden rounded-global">
                                                    <img class="rounded-global mask-image-b mask-image-start-60 transition-all object-center scale-110 group-hover:scale-100" loading="lazy" width="300" height="300"
                                                         src="{{ Vite::asset('resources/img/nairobi-card.webp') }}"
                                                         alt="Motion Blinds">
                                                </a>
                                            </x-ribbon>


                                            @foreach($categories as $category)
                                                <div>
                                                    <a class="font-black text-gray-900 dark:text-gray-100 hover:text-primary-500 text-lg hover:dark:text-primary-500"
                                                       href="{{ route('category', $category) }}" role="menuitem">
                                                        {{$category->title}}
                                                    </a>
                                                    <div class="mt-2 space-y-2 pl-4 border-l border-gray-300 dark:border-gray-800">
                                                        @foreach($category->children as $child)
                                                            <a tabindex="0" href="{{ route('category', $child) }}" class="block group relative text-gray-700 dark:text-gray-300 hover:text-primary-500  hover:dark:text-primary-500
                                                            focus:text-primary-500   focus:dark:text-primary-500">{{
                                                            $child->title }}
                                                                <span class="absolute top-1.5 bg-gray-200 dark:bg-gray-900 -left-[22px] border-2 group-hover:border-amber-500 border-gray-300 dark:border-gray-800 w-3 h-3 rounded-full
                                                                group-focus:ring-0
                                                                block"></span>
                                                            </a>
                                                        @endforeach
                                                    </div>
                                                </div>

                                            @endforeach
                                        </div>
                                    </div>
                                </div>

                            </headless-popover>
                        @endif
                    @endforeach
                </div>


                <x-theme-switcher/>

                <button
                    aria-controls="mobile_close"
                    aria-expanded="false"
                    @class([
            'lg:hidden inline-flex justify-center items-center h-9 w-9 rounded-md border border-gray-300 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900 text-sm font-medium text-primary-500 ml-4 hover:bg-gray-100
            dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary-500'])
                    type="button">
                    <span class="sr-only">Open menu</span>
                    <!-- Heroicon name: outline/menu -->
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path data-state class="inline-flex data-state-open:hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                        <path data-state class="hidden data-state-open:inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>

            <div id="mobile_close" class="w-full mt-4 lg:hidden space-y-4 font-bold  items-center">
                @foreach($links as $link)
                    <a @class([$link['classes'], 'w-full flex items-center justify-start hover:bg-primary-500/10 px-4 py-2 rounded-global border border-transparent hover:border-primary-500/20', 'text-primary-500 ' =>
                    Route::currentRouteName()
                    ===
                    $link['route']])
                       href="{{
                route
                ($link['route'])
                }}">{{
                $link['name'] }}</a>
                @endforeach
            </div>
        </mouse-spotlight>
    </headless-navigation>

</nav>
