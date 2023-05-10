<?php

namespace App\Http\Controllers;

use App\Models\dado;
use App\Models\element;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $dados = element::all();

        echo $dados;
    }


    public function post(Request $request)
    {
        $dado = new element;

        $dado->name  = $request->name;
        $dado->date  = $request->date;


        if (isset($dado->name) and isset($dado->date)) {
            print_r(json_encode(true));
            $dado->save();
        } else {
            print_r(json_encode(false));
        }
    }


    public function dados($id)
    {

        $el = element::findOrFail($id);

        echo $el;
    }

    public function destroy($id)
    {
        element::findOrFail($id)->delete();
    }
    public function edit($id)
    {
        element::findOrFail($id);
    }
    public function update(Request $request)
    {
        element::findOrFail($request->id)->update($request->all());
    }
}
