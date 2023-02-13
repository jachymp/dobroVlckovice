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
        Schema::create('activity_event', function (Blueprint $table) {
            $table->primary(['event_id', 'activity_id']);
            $table->bigInteger('event_id')->unsigned();
            $table->bigInteger('activity_id')->unsigned();
            $table->foreign('event_id')->references('id')->on('events');
            $table->foreign('activity_id')->references('id')->on('activities');
            $table->timestamp('updated_at');
            $table->timestamp('created_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('activity_event');
    }
};
