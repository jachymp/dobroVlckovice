<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->truncate();

        $user_data = json_decode(file_get_contents(storage_path('user_basic_data.json')));

        foreach ($user_data as $userData) {
            $user = new User();
            $user->name = $userData->name;
            $user->surname = $userData->surname;
            $user->password = $userData->password;
            $user->email = $userData->email;
            $user->email_verified_at = $userData->email_verified_at;
            $user->street = $userData->street;
            $user->street_number = $userData->street_number;
            $user->city = $userData->city;
            $user->zip_code = $userData->zip_code;
            $user->phone = $userData->phone;
            $user->birthday = $userData->birthday;
            $user->registration_date = $userData->registration_date;
            $user->last_login = $userData->last_login;
            $user->diet = $userData->diet;
            $user->save();
        }
    }
}
