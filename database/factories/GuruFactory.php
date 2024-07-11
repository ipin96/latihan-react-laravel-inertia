<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Guru>
 */
class GuruFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nip' => fake()->unique()->numberBetween(1, 200000),
            'gelar_depan' => fake()->title(),
            'nama_lengkap' => fake()->name(),
            'gelar_depan' => fake()->title(),
            'jk' => rand(1, 2),
            'no_hp' => fake()->phoneNumber(),
            'alamat' => fake()->address()
        ];
    }
}
