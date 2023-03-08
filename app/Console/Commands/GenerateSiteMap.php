<?php

namespace App\Console\Commands;

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
  protected $signature = 'sitemap:make';

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'Generate a sitemap';

  /**
   * Execute the console command.
   */
  public function handle(): void
  {
    $sitemap = SitemapGenerator::create(config('app.url'));

    $sitemap
      ->getSitemap()
      ->add(Url::create('/how-to-order')->setPriority(0.9))
      ->add(Url::create('/contact-us')->setPriority(0.9));

    $sitemap
      ->writeToFile(public_path('sitemap.xml'));
  }
}
