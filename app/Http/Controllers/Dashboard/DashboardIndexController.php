<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardIndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $users = User::role('client')->get()->count();

        $messages = Message::selectRaw('DATE(created_at) as date, COUNT(*) as count')
            ->where('created_at', '>=', now()->subDays(7))
            ->groupBy('date')
            ->orderBy('date', 'ASC')
            ->get();

        $labels = $messages->pluck('date');
        $data = $messages->pluck('count');

        return Inertia::render('Dashboard/Dashboard', [
            'users' => $users,
            'messages' => [
                'labels' => $labels,
                'data' => $data
            ]
        ]);
    }
}
