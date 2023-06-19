<?php

namespace Database\Factories;

use App\Models\Post;
use App\Models\User;
use Exception;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     *
     * @throws Exception
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(random_int(5, 9)),
            'user_id' => User::factory()->create(),
            'description' => $this->faker->sentence(random_int(20, 30)),
            'body' => $this->faker->sentence(random_int(60, 90)),
            'live' => true,
        ];
    }
}
