import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';

declare const Notification;

@Component({
    selector: 'app-push-notification',
    styles: [':host { display: none; }'],
    template: `
        <div></div>
    `,
})
export class PushNotificationComponent implements OnInit, OnChanges, OnDestroy {
    @Input() title: string;
    @Input() body: string;
    @Input() icon: string;
    @Input() sound: string;
    @Input() data: any;
    @Input() tag: string;
    @Input() dir = 'auto';
    @Input() lang = 'en-US';
    @Input() renotify = false;
    @Input() sticky = false;
    @Input() vibrate: Array<number>;
    @Input() noscreen = false;
    @Input() silent = true;
    @Input() closeDelay = 0;

    @Output() eventLoad = new EventEmitter<any>();
    @Output() eventShow = new EventEmitter<any>();
    @Output() eventClose = new EventEmitter<any>();
    @Output() eventError = new EventEmitter<any>();
    @Output() eventClick = new EventEmitter<any>();

    private instances: Notification[] = [];

    /**
     * Check browser capability
     * @returns any
     */
    checkCompatibility() {
        return 'Notification' in window;
    }

    /**
     * Is permission is granted
     * @param   permission Permission data
     * @returns boolean
     */
    isPermissionGranted(permission: any) {
        return permission === 'granted';
    }

    /**
     * Request permission for notification
     * @param   callback Callback data
     * @returns Promise<NotificationPermission>
     */
    requestPermission(callback: any) {
        return Notification.requestPermission(callback);
    }

    /**
     * Show notification
     * Check browser first
     * @returns any
     */
    show() {
        if (!this.checkCompatibility()) {
            return console.log(
                'Notification API is not available in this browser.'
            );
        }

        return this.requestPermission(permission => {
            if (this.isPermissionGranted(permission)) {
                this.create();
            }
        });
    }

    /**
     * Create notification class
     * And attach emitter
     * @returns notificaiton
     */
    create() {
        const notification = new Notification(this.title, {
            dir: this.dir,
            lang: this.lang,
            data: this.data,
            tag: this.tag,
            body: this.body,
            icon: this.icon,
            silent: this.silent,
            sound: this.sound,
            renotify: this.renotify,
            sticky: this.sticky,
            vibrate: this.vibrate,
            noscreen: this.noscreen,
        });

        this.instances.push(notification);
        this.attachEventHandlers(notification);
        this.close(notification);

        return notification;
    }

    /**
     * Close notification
     * @param notification Notification data
     * @returns void
     */
    close(notification: any): void {
        if (this.closeDelay) {
            setTimeout(() => {
                notification.close();
            }, this.closeDelay);
        } else {
            notification.close();
        }
    }

    /**
     * Close all notifications instances
     * @returns void
     */
    closeAll(): void {
        this.instances.map(notification => this.close(notification));
        this.instances = [];
    }

    /**
     * Attach emitter
     * @param   notification Notification data
     * @returns void
     */
    attachEventHandlers(notification: any): void {
        notification.onshow = () => {
            this.eventShow.emit({ notification });
        };

        notification.onclick = event => {
            this.eventClick.emit({ event, notification });
        };

        notification.onerror = () => {
            this.eventError.emit({ notification });
        };

        notification.onclose = () => {
            this.eventClose.emit({ notification });
        };
    }

    ngOnInit(): void {
        this.eventLoad.emit({});
    }

    ngOnDestroy(): void {
        this.closeAll();
    }

    ngOnChanges(): void {
        if (this.body) {
            this.show();
        }
    }
}
