@if(!app()->isDownForMaintenance())
        <nav class="fixed w-full z-20 top-0 lg:top-2">
        <headless-navigation class="block">
            <mouse-spotlight class="wrapper relative card text-gray-500 dark:bg-gray-900/80 bg-gray-200/90 border border-gray-300 dark:border-primary-500/50 dark:text-gray-100 px-6 py-4 rounded-b-global md:rounded-global flex flex-wrap
               justify-between items-center shadow-2xl shadow-primary-500/50 backdrop-blur-sm">
                <div aria-hidden="true" class="absolute w-1/2 top-0 h-[1px] left-0 bg-gradient-to-r from-transparent via-secondary-500 to-transparent">
                    <div class="w-1/2 h-[20px] rounded-b-full absolute top-0 translate-x-1/2 blur-md bg-secondary-500/10 "></div>
                </div>
                <a href="{{ config('app.url') }}" class="flex shrink-0 md:ml-0 origin-left md:scale-125">
                    <span class="sr-only">{{ config('app.name') }}</span>
                    <img height="35" width="180" aria-hidden="true" src="{{ Vite::asset('resources/img/logo-on-dark.svg') }}" class="h-8 md:ml-0 hidden dark:block" alt="{{ config('app.name') }}">
                    <img height="35" width="180" aria-hidden="true" src="{{ Vite::asset('resources/img/logo-on-light.svg') }}" class="h-8 md:ml-0 dark:hidden block" alt="{{ config('app.name') }}">
                </a>

                <div class="flex items-center">
                    <div class="lg:flex hidden space-x-8 font-bold items-center">
                        @foreach($links as $link)
                            @if($link['route'] !== 'categories')
                                <a @class([$link['classes'], 'text-primary-500 ' => Route::currentRouteName() === $link['route']]) href="{{
                            route($link['route']) }}">{{ $link['name'] }}
                                </a>
                            @else
                                <x-navigation-dropdown-link :$link/>
                            @endif
                        @endforeach
                    </div>
                    <button id="search-modal" type="button" class="inline-flex justify-center items-center  h-7 md:h-9 w-7 md:w-9  rounded-md border border-gray-300 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900 text-sm font-medium text-primary-500
                ml-2.5
                hover:bg-gray-100
                dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary-500">
                        <span class="sr-only">Search categories and products</span>
                        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>
                        </svg>
                    </button>
                    <x-theme-switcher/>

                    <button
                        aria-controls="mobile_close"
                        aria-expanded="false"
                        @class([
                'lg:hidden inline-flex justify-center items-center h-7 md:h-9 w-7 md:w-9 rounded-md border border-gray-300 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900 text-sm font-medium text-primary-500 ml-2 hover:bg-gray-100
                dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary-500'])
                        type="button">
                        <span class="sr-only">Open menu</span>
                        <svg class="h-5 w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path data-state class="inline-flex data-state-open:hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                            <path data-state class="hidden data-state-open:inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>

                <div id="mobile_close" class="w-full mt-4 lg:hidden space-y-4 font-bold  items-center">
                    @foreach($links as $link)
                        <a @class([$link['classes'], 'w-full flex items-center justify-start hover:bg-primary-500/10 px-4 py-2 rounded-global border border-transparent hover:border-primary-500/20', 'text-primary-500 ' =>
                    Route::currentRouteName()
                    ===  $link['route']])  href="{{ route($link['route'])}}">{{ $link['name'] }}</a>
                    @endforeach
                </div>
            </mouse-spotlight>
        </headless-navigation>
    </nav>
@endif
