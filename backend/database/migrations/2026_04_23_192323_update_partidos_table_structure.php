<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('partidos', function (Blueprint $table) {

            // ❌ eliminar columna antigua
            $table->dropColumn('resultado');

            // ✅ nuevos campos
            $table->integer('resultado_local')->nullable();
            $table->integer('resultado_visitante')->nullable();

            // (opcional pero recomendable)
            $table->string('estado')->default('pendiente');
        });
    }

    public function down(): void
    {
        Schema::table('partidos', function (Blueprint $table) {

            $table->string('resultado')->nullable();

            $table->dropColumn('resultado_local');
            $table->dropColumn('resultado_visitante');
            $table->dropColumn('estado');
        });
    }
};