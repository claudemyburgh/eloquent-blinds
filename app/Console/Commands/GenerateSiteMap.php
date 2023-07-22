<?php

    namespace App\Console\Commands;

    use App\Models\Category;
    use App\Models\Product;
    use Illuminate\Console\Command;
    use Spatie\Sitemap\SitemapGenerator;
    use Spatie\Sitemap\Tags\Url;

    class GenerateSiteMap extends Command
    {
        /**
         * The name and signature of the console command.
         *
         * @var string
         */
        protected $signature = 'sitemap:generate';

        /**
         * The console command description.
         *
         * @var string
         */
        protected $description = 'Create a SiteMap';

        /**
         * Execute the console command.
         */
        public function handle()
        {
            $sitemap = SitemapGenerator::create(config('app.url'));

            $sitemap
                ->getSitemap()
                ->add(Url::create('/')->setPriority(1))
                ->add(Url::create('/categories')->setPriority(0.8))
                ->add(Url::create('/faq')->setPriority(0.8))
                ->add(Url::create('/reviews')->setPriority(0.8))
                ->add(Url::create('/free-quote')->setPriority(0.8))
                ->add(Url::create('/privacy-policy')->setPriority(0.5));

            foreach (Category::all() as $category) {
                $sitemap->getSitemap()->add(Url::create(route('category', $category->slug)));
            }

            foreach (Product::all() as $product) {
                $sitemap->getSitemap()->add(Url::create(route('product', [$product->category, $product])));
            }

            $sitemap->writeToFile(public_path('sitemap.xml'));


        }
    }
