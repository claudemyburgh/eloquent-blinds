<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class Contact extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public string $name;

    /**
     * Create a new message instance.
     */
    public function __construct(public array $data)
    {
        $this->name = $this->data['first_name'] . ' ' . $this->data['last_name'];
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        dd($this->data['email']);
        return new Envelope(
            from: new Address($this->data['email'], $this->name),
            replyTo: [
                new Address($this->data['email'], $this->name),
            ],
            subject: $this->data['subject'],
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            markdown: 'emails.contact.index',
            with: [
                'name' => $this->name,
                'email' => $this->data['email'],
                'phone' => $this->data['phone'],
                'subject' => $this->data['subject'],
                'message' => $this->data['message'],
            ]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
