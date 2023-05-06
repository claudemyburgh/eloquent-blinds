<?php

namespace App\Http\Controllers\Dashboard\Datatables;

use App\Helpers\GeneratePassword;
use App\Http\Requests\User\UserDatatableRequest;
use App\Models\User;
use Designbycode\Datatables\DatatablesController;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;

class UsersController extends DatatablesController
{

    public function __construct()
    {
        parent::__construct();
        $this->middleware(['permission:edit user|delete user|update user']);
    }

    public function builder(): Builder
    {
        return User::query();
    }

    /**
     * @param Request $request
     * @return Response
     */
    public function index(Request $request): Response
    {
        return Inertia::render('Dashboard/Table/Index', $this->getResponse($request));
    }

    public function store(UserDatatableRequest $request)
    {
        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => Hash::make(GeneratePassword::password(20)),
        ]);


        return to_route('dashboard.users.edit', $user->id);
    }


    public function update(UserDatatableRequest $request, int $id)
    {
        User::findOrFail($id)->update($request->validated());
    }

    public function edit(User $user)
    {
        $user->load('media');

        return Inertia::render('Dashboard/Users/Edit', compact('user'));
    }


    public function destroy(string $ids)
    {
        $this->itemsDelete($ids);
    }

    public function upload(Request $request)
    {
        $request->validate([
            'image.*' => 'image|mimes:jpeg,jpg,png,gif,webp|max:10000',
        ]);

        if ($request->has('image')) {
            $user = User::find($request->id);
            $user->addMedia($request->image)
                ->toMediaCollection('default');
        }
    }

    protected function getDisplayableColumnNames(): array
    {
        return ['id', 'name', 'email', 'phone'];
    }


    protected function getUpdatableColumns(): array
    {
        return ['id', 'first_name', 'last_name', 'email', 'phone'];
    }


    protected function getCreatableColumns(): array
    {
        return ['first_name', 'last_name', 'email', 'phone'];
    }

}
