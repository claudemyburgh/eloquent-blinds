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
        Schema::create('gallerieables', function (Blueprint $table) {
            $table->unsignedInteger('gallery_id');
            $table->unsignedInteger('gallerieable_id');
            $table->string('gallerieable_type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gallerieables');
    }
};
