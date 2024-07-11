<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use Inertia\Inertia;
use App\Data\GuruData;
use Illuminate\Http\Request;
use App\Actions\UpsertGuruAction;
use App\Http\Requests\GuruAddRequest;
use App\Http\Requests\GuruEditRequest;
use Symfony\Component\HttpFoundation\Response;

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
            return response()->json(['message' => 'Data guru berhasil disimpan.'], Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
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
            return response()->json(['message' => 'Data guru berhasil diubah.'], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            Guru::find($id)->delete();
            return response()->json(['message' => 'Data guru berhasil dihapus.'], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }

    }
}
