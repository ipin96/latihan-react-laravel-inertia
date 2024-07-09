<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('guru', function (Blueprint $table) {
            $table->ulid('id')->primary();
            $table->string('nip')->unique();
            $table->string('gelar_depan')->nullable();
            $table->string('nama_lengkap');
            $table->string('gelar_belakang')->nullable();
            $table->integer('jk')->comment('1 = Laki-laki, 2 = Perempuan');
            $table->string('no_hp');
            $table->text('alamat');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('guru');
    }
};
