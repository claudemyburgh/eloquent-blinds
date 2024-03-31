@if(!app()->isDownForMaintenance())
    <nav class="fixed w-full z-20 top-0 lg:top-2">
        <headless-navigation class="block">
            <mouse-spotlight class="wrapper relative card text-gray-500 dark:bg-gray-900/80 bg-gray-200/90 border border-gray-300 dark:border-primary-500/50 dark:text-gray-100 px-6 py-4 rounded-b-global md:rounded-global flex flex-wrap
               justify-between items-center shadow-2xl shadow-primary-500/50 backdrop-blur-sm">
                <div aria-hidden="true"
                     class="absolute w-1/2 top-0 h-[1px] left-0 bg-gradient-to-r from-transparent via-secondary-500 to-transparent">
                    <div
                        class="w-1/2 h-[20px] rounded-b-full absolute top-0 translate-x-1/2 blur-md bg-secondary-500/10 "></div>
                </div>
                <x-navigation.logo />
                <div class="flex items-center">
                    <div class="lg:flex hidden space-x-8 font-bold items-center">
                        @foreach($links as $link)
                            @if($link->route !== 'categories.index')
                                <a @class([$link->classes, 'text-primary-500 ' => Route::currentRouteName() === $link->route])
                                   href="{{ route($link->route) }}">{{ $link->name }}
                                </a>
                            @else
                                <x-navigation.dropdown-links :$link />
                            @endif
                        @endforeach
                    </div>
                    <button id="search-modal" type="button" class="inline-flex justify-center items-center  h-7 md:h-9 w-7 md:w-9  rounded-md border border-gray-300 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900 text-sm font-medium text-primary-500
                ml-2.5
                hover:bg-gray-100
                dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary-500">
                        <span class="sr-only">Search categories and products</span>
                        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                             fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd"
                                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                  clip-rule="evenodd" />
                        </svg>
                    </button>
                    <x-theme-switcher />
                    <x-navigation.mobile.toggle />
                </div>

                <div id="mobile_close" class="w-full mt-4 lg:hidden space-y-4 font-bold items-center">
                    @foreach($links as $link)
                        @if($link->route !== 'categories.index')
                            <a
                                @class([$link->classes, 'flex',
//                                'text-primary-500' => Route::currentRouteName() === $link->route
                                ]) href="{{
                            route($link->route) }}">{{ $link->name }}
                            </a>
                        @else
                            <x-navigation-mobile-dropdown-links :$link />
                        @endif
                    @endforeach
                </div>
            </mouse-spotlight>
        </headless-navigation>
    </nav>
@endif
