<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Message;
use Carbon\Carbon;
use Designbycode\Datatables\DatatablesController;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class MessagesController extends DatatablesController
{

    public function index(Request $request)
    {
        $messages = Message::isRoot()->orderBy('id', 'desc')->with('user')->paginate(20);

        return Inertia::render("Dashboard/Messages/Index", compact('messages'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id): Response
    {

        $message = Message::with('user', 'children.user')->orderBy('created_at', 'asc')->find($id);

        $message->update([
            'read_at' => Carbon::now()
        ]);
        Cache::forget('messages');
        return Inertia::render("Dashboard/Messages/Show", compact('message'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Message $message)
    {
        Cache::forget('messages');

        $message->update([
            'read_at' => null
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Message $message)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Message $message)
    {
        //
    }

    public function builder(): Builder
    {
        return Message::query();
    }


}
