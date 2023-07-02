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
      ->add(Url::create('/quote')->setPriority(0.8))
      ->writeToFile(public_path('sitemap.xml'));


  }
}
