<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('questionnaires_data', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('questionnaire_id')->nullable();
            $table->string('field');
            $table->string('value')->nullable();
            $table->timestamps();
            $table->foreign('questionnaire_id')->references('id')->on('questionnaires');


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('questionnaires_data', function (Blueprint $table) {
            $table->dropForeign(['questionnaire_id']);
        });
        Schema::dropIfExists('questionnaires_data');
    }
};
