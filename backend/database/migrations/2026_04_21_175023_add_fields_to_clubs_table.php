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
    Schema::table('clubs', function (Blueprint $table) {
        $table->string('competicion')->nullable();
        $table->string('capitan')->nullable();
        $table->integer('totalJugadores')->default(0);
        $table->integer('partidosJugados')->default(0);
        $table->integer('partidosGanados')->default(0);
        $table->integer('partidosEmpatados')->default(0);
        $table->integer('partidosPerdidos')->default(0);
    });
}

public function down(): void
{
    Schema::table('clubs', function (Blueprint $table) {
        $table->dropColumn([
            'competicion',
            'capitan',
            'totalJugadores',
            'partidosJugados',
            'partidosGanados',
            'partidosEmpatados',
            'partidosPerdidos'
        ]);
    });
}
};
