<?php

namespace App\Notifications;

use App\Broadcasting\WechatChannel;
use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;

class WechatMessage extends Notification
{
    protected $text;

    /**
     * Create a new notification instance.
     *
     * @param string $text
     */
    public function __construct (string $text)
    {
        $this->text = $text;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed $notifiable
     * @return array
     */
    public function via ($notifiable)
    {
        return [WechatChannel::class];
    }

    /**
     * @param User $notifiable
     */
    public function toWechat ($notifiable)
    {
        $app = app('wechat.official_account');
        $message = new \EasyWeChat\Kernel\Messages\Text($this->text);
        $app->customer_service->message($message)->to($notifiable->openid)->send();
    }
}
