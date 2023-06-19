<?php

namespace App\Models;

use App\Traits\Observable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Staudenmeir\LaravelAdjacencyList\Eloquent\HasRecursiveRelationships;

/**
 * @method static unread()
 * @method static selectRaw(string $string)
 */
class Message extends Model
{
    use HasFactory, HasRecursiveRelationships, Observable;

    protected $fillable = ['subject', 'message', 'read_at', 'parent_id', 'user_id'];

    protected $casts = [
        'read_at' => 'datetime:Y-m-d',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function scopeUnread(Builder $builder): void
    {
        $builder->whereNull('read_at');
    }

    public function scopeRead(Builder $builder): void
    {
        $builder->whereNotNull('read_at');
    }
}
