<?php

namespace Database\Seeders;

use App\Models\Guru;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GuruSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Guru::create([
            'nip' => '1234567890123456',
            'gelar_depan' => 'Dr.',
            'nama_lengkap' => 'John Doe',
            'gelar_belakang' => 'Ph.D.',
            'jk' => 1,
            'no_hp' => '081234567890',
            'alamat' => 'Jalan Raya No. 1, Jakarta',
        ]);
    }
}
