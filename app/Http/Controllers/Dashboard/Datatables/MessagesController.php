<?php

    namespace App\Http\Controllers\Dashboard\Datatables;

    use App\Http\Resources\Messages\MessageCollection;
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

        protected bool $allowCreation = false;

        public function __construct()
        {
            parent::__construct();
            $this->middleware(['permission:edit category|delete category|update category']);
        }

        public function builder(): Builder
        {
            return Message::query();
        }

        public function index(Request $request)
        {
            $messages = Message::isRoot()->orderBy('id', 'desc')->with('user')->paginate(20);
            $data = $this->getResponse($request);
            $data['data']['records'] = (new MessageCollection($messages))->resource;
            return Inertia::render('Dashboard/Table/Index', array_replace($this->getResponse($request), $data));
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
        public function show(Message $message)
        {
            $message->load('user', 'children')->orderBy('created_at', 'asc');
            $message->update(['read_at' => Carbon::now()]);
            return Inertia::render('Dashboard/Messages/Show', [
                'message' => $message,
            ]);
        }

        /**
         * Update the specified resource in storage.
         */
        public function update(Request $request, Message $message): void
        {
            $message->update([
                'read_at' => Carbon::now(),
            ]);
        }

        /**
         * Show the form for editing the specified resource.
         */
        public function edit(Message $message): Response
        {
            return Inertia::render('Dashboard/Messages/Show', compact('message'));
        }

        /**
         * Remove the specified resource from storage.
         */
        public function destroy(string $ids): void
        {
            Cache::forget('categories-menu');
            $this->itemsDelete($ids);
        }


        protected function getDisplayableColumnNames(): array
        {
            return ['id', 'read_at', 'name', 'email', 'phone', 'subject', 'created_at'];
        }


    }
