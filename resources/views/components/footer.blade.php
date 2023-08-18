@php use Carbon\Carbon; @endphp
<footer class="w-full mt-12" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">
        Footer
    </h2>
    <mouse-spotlight
        class="wrapper text-gray-700 dark:bg-gray-900/60 bg-gray-200/60 border border-gray-300 dark:border-primary-900/40 dark:text-gray-100 px-6 py-6 rounded-global flex justify-between relative items-center shadow-2xl shadow-primary-900/30
        backdrop-blur-sm">
        <div aria-hidden="true" class="absolute w-1/2 top-0 h-[1px] left-1/3 bg-gradient-to-r from-transparent via-secondary-500 to-transparent">
            <div class="w-1/2 h-[20px] rounded-b-full absolute top-0 translate-x-1/2 blur-md bg-secondary-500/10 "></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 w-full gap-4 md:gap-6 lg:gap-8">
            <div class="mb-6">
                <h3 class="text-md font-semibold text-gray-400 tracking-wider uppercase">Product Categories</h3>
                <ul class="mt-4 space-y-3">
                    @foreach($categories as $category)
                        <li>
                            <a href="{{ route('category', $category) }}" class="hover-underline">
                                {{$category->title}}
                            </a>
                        </li>
                    @endforeach
                </ul>
            </div>
            <!-- friend of us -->
            <div class="mb-6">
                <h3 class="text-md font-semibold text-gray-400 tracking-wider uppercase">Friend's of us</h3>
                <ul class="mt-4 space-y-3">
                    <li>
                        <a target="_blank" href="https://designbycode.co.za" class="hover-underline">
                            DesignByCode
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://crystalbars.co.za" class="hover-underline">
                            Crystalbars
                        </a>
                    </li>
                </ul>
            </div>

            <!-- legal -->
            <div class="mb-6">
                <h3 class="text-md font-semibold text-gray-400 tracking-wider uppercase">Legal Stuff</h3>
                <ul class="mt-4 space-y-3">
                    <li>
                        <a href="{{ route("privacy-policy") }}" class="hover-underline">
                            Privacy Policy
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </mouse-spotlight>
</footer>

<div class="wrapper py-12 text-gray-900 dark:text-gray-200 lg:flex justify-between">
    <p>
        &copy;{{ Carbon::now()->year }} Eloquent Blinds, Inc. All rights reserved.
    </p>
    <p>
        Design <abbr class="no-underline" title="and">&amp;</abbr> Developed by <a class="hover:text-primary-500 underline decoration-gray-300/10 hover-underline decoration-1" href="https://designbycode.co.za"
                                                                                   target="_blank">DesignByCode</a>
    </p>
</div>
