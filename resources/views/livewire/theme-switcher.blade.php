<div wire:poll>
    <label for="theme" class="block">Theme:</label>
    <select wire:model="theme" id="theme" class="border-gray-300 rounded-md">
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
    </select>

    <div wire:loading.delay>
        Loading...
    </div>
</div>
