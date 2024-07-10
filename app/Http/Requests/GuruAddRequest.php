<?php

namespace App\Http\Requests;

use App\Data\GuruData;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class GuruAddRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nip' => ['required', 'string', Rule::unique('guru', 'nip')->ignore($this->id)],
            'gelar_depan' => 'nullable|string',
            'nama_lengkap' => 'required|string',
            'gelar_belakang' => 'nullable|string',
            'jk' => 'required|integer',
            'no_hp' => 'required|string',
            'alamat' => 'required|string',
        ];
    }

    /**
     * Transform the request into a data transfer object.
     *
     * @return \App\Data\GuruData
     */
    public function toDTO(): GuruData
    {
        return new GuruData(
            id: $this->id ?? null,
            nip: $this->nip,
            gelar_depan: $this->gelar_depan,
            nama_lengkap: $this->nama_lengkap,
            gelar_belakang: $this->gelar_belakang,
            jk: $this->jk,
            no_hp: $this->no_hp,
            alamat: $this->alamat
        );
    }
}
