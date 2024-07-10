<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class GuruData extends Data
{
    public function __construct(
        public string|null $id,
        public string $nip,
        public string|null $gelar_depan,
        public string $nama_lengkap,
        public string|null $gelar_belakang,
        public int $jk,
        public string $no_hp,
        public string $alamat
    ) {
    }
}
