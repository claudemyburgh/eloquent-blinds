<x-app-layout>
    <div class="wrapper pt-24 lg:pt-32 space-y-4 flex min-h-[600px] items-center justify-center">
        <div class="relative ">
            <h1 class="heading-1 text-shadow-lg flex space-x-4 items-center"> <span><svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-16 h-16 text-amber-500">
  <path stroke-linecap="round" stroke-linejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
</svg>
</span>
                <span>404</span>

            </h1>
            <p class="heading-3">Page not found</p>
            <a href="{{ route('categories.index') }}"
               class="hover:text-primary-500 inline-block mt-4 text-xl text-gray-700 dark:text-gray-100 underline decoration-gray-300/10 hover-underline decoration-1">View
                products</a>
        </div>
    </div>
</x-app-layout>
