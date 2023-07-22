<footer class="w-full mt-12" aria-labelledby="footer-heading">
  <h2 id="footer-heading" class="sr-only">
    Footer
  </h2>
  <div class="wrapper text-gray-700 dark:bg-gray-900/60 bg-gray-200/60 border border-gray-300 dark:border-primary-900/40 dark:text-gray-100 px-6 py-6 rounded-lg flex justify-between relative items-center shadow-2xl shadow-primary-900/30 backdrop-blur-sm">
    <div aria-hidden="true" class="absolute w-1/2 top-0 h-[1px] left-1/3 bg-gradient-to-r from-transparent via-secondary-500 to-transparent">
      <div class="w-1/2 h-[20px] rounded-b-full absolute top-0 translate-x-1/2 blur-md bg-secondary-500/10 "></div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 w-full gap-4 md:gap-6 lg:gap-8">
      <div class="mb-6">
          <ul class="space-y-2">
              @foreach($categories as $category)
                  <li>
                      <a href="{{ route('category', $category) }}">
                          {{$category->title}}
                      </a>
                  </li>
              @endforeach
          </ul>

      </div>
    </div>
  </div>
</footer>
