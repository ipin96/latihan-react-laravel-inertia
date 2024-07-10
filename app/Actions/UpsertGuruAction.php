<?php

namespace App\Actions;

use App\Models\Guru;
use App\Data\GuruData;
use Lorisleiva\Actions\Concerns\AsAction;

class UpsertGuruAction
{
    use AsAction;

    public function handle(GuruData $data)
    {
        if ($data->id != null) {
            $data->except('nip');
        }
        $guru = Guru::updateOrCreate(
            ['id' => $data->id ?? null],
            [
                'nip' => $data->nip,
                'gelar_depan' => $data->gelar_depan,
                'nama_lengkap' => $data->nama_lengkap,
                'gelar_belakang' => $data->gelar_belakang,
                'jk' => $data->jk,
                'no_hp' => $data->no_hp,
                'alamat' => $data->alamat,
            ]
        );

        return $guru;
    }
}
