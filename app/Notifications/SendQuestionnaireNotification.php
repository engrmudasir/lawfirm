<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Carbon\Carbon;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\URL;

class SendQuestionnaireNotification extends Notification
{
    use Queueable;
    private $questionnaire;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($questionnaire)
    {
        //
        $this->questionnaire = $questionnaire;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $url = url('/questionnaire/'.$this->questionnaire->id);
        // $url = URL::signedRoute('questionnaire',['id' => $this->questionnaire->id]);

        return (new MailMessage)
                    ->subject('Questionnaire')
                    ->line('We are sending you the following questionaire to fill.')
                    ->action('Click to fill', $url)
                    ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
