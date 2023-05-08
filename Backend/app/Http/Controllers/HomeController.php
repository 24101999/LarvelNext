<?php

namespace App\Http\Controllers;

use App\Models\dado;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $dados = dado::all();

        echo $dados;
    }

    public function post()
    {
    }
}
