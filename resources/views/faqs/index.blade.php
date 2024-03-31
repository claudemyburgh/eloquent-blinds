<x-app-layout title="Frequently asked questions"
              description="Questions. Frequently asked ones. Plus our answers. That's how FAQs work. If you can't find what you're looking for, you can always send us an email with your enquiry.">
    <x-slot name="seo">
        {{--  HTML Meta Tags--}}
        <meta property="og:title" content="Eloquent Blinds | Frequently asked questions" />
        <meta property="og:description"
              content="Questions. Frequently asked ones. Plus our answers. That's how FAQs work. If you can't find what you're looking for, you can always send us an email with your enquiry." />
        <meta property="og:image" content="{{ config('app.url') . "/img/hero.webp" }}" />
        {{--  Twitter Meta Tags --}}
        <meta name="twitter:title" content="Eloquent Blinds | Frequently asked questions" />
        <meta name="twitter:description"
              content="" />
        <meta name="twitter:image" content="{{ config('app.url') . "/img/hero.webp" }}" />
    </x-slot>

    <div class="wrapper pt-24 lg:pt-24 space-y-4">
        <div class="grid md:grid-cols-2 md:divide-x md:divide-dashed md:divide-gray-900/10 md:dark:divide-gray-500/10">
            <div class="relative md:pr-6">
                <header class="md:sticky top-32">
                    <h1 class="heading-1 text-shadow-long-[5] text-shadow-primary-500/10 dark:text-shadow-black">
                        Frequently asked questions
                    </h1>
                    <p class="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-300">
                        Questions. Frequently asked ones. Plus our answers. That's how FAQs work. If you can't find what
                        you're looking for, you can always
                        <a href="{{route("quote.index")}}"
                           class="font-medium text-primary-600 hover:text-primary-500 hover-underline">
                            send us an email
                        </a> with your enquiry.
                    </p>
                    {{--                    {/*<Video class={`w-full my-6`} src={`https://www.youtube.com/embed/FwIDKoVmtsY`} />*/}--}}
                </header>
            </div>
            <section class={`md:pl-6`}>
                <dl class="sm:mt-16 divide-y divide-dashed divide-gray-900/10 dark:divide-gray-500/10">
                    @foreach($faqs as $faq)
                        <div
                            class="py-8 lg:px-6 hover:bg-gray-100/50 hover:dark:bg-gray-950/50 transition-all rounded-global">
                            <dt class="text-xl font-medium text-gray-900 dark:text-gray-100">{{ $faq['question'] }}</dt>
                            <dd class="mt-3 text-lg text-gray-500 dark:text-gray-400">{{ $faq['answer'] }}</dd>
                        </div>
                    @endforeach
                </dl>
            </section>
        </div>
    </div>
</x-app-layout>
