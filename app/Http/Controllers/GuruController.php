<?php

namespace App\Http\Controllers;

use App\Actions\UpsertGuruAction;
use App\Data\GuruData;
use App\Http\Requests\GuruAddRequest;
use App\Http\Requests\GuruEditRequest;
use App\Models\Guru;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Guru/Index', [
            'gurus' => Guru::orderBy('created_at', 'DESC')->paginate(10)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Guru/Add', [
            'guru' => GuruData::optional(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(GuruAddRequest $request, UpsertGuruAction $action)
    {
        try {
            $data = $request->toDTO();
            $action->handle($data);
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('Guru/Edit', [
            'guru' => GuruData::from(Guru::find($id))
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(GuruAddRequest $request, UpsertGuruAction $action, string $id)
    {
        try {
            $data = $request->toDTO();
            $action->handle($data);
            return redirect()->route('guru.index');
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            Guru::find($id)->delete();
            return redirect()->route('guru.index');
        } catch (\Exception $e) {
            dd($e->getMessage());
        }

    }
}
