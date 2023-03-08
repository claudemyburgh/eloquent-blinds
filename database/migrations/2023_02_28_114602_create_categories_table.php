<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('categories', function (Blueprint $table) {
      $table->id();
      $table->string('title')->nullable();
      $table->string('slug')->unique()->index();
      $table->unsignedBigInteger('parent_id')->nullable();
      $table->string('link_description')->nullable();
      $table->text('description')->nullable();
      $table->text('body')->nullable();
      $table->text('excerpt')->nullable();
      $table->boolean('live')->default(true);
      $table->boolean('popular')->default(false);
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('categories');
  }
};
