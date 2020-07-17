import {
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    Output,
} from '@angular/core';

import { NotificationList } from 'app/shared/models/notification.interface';

@Component({
    selector: 'app-notification',
    template: `
        <div class="notification-list">
            <div *ngIf="notifications.length === 0">
                <!--<b>{{'noNotification' | translate}}</b>-->
            </div>
            <ul class="list-group" *ngIf="notifications.length > 0">
                <li
                    class="list-group-item"
                    *ngFor="let notification of notifications"
                    style="cursor: pointer"
                    (click)="clickNotification(notification)"
                >
                    <b>{{ notification.message }}</b>
                </li>
            </ul>
        </div>
    `,
    styles: [``],
})
export class NotificationComponent {
    @Input() notifications: NotificationList[] = [];

    @Output() eventClickOutside = new EventEmitter<boolean>();
    @Output() eventClickNotification = new EventEmitter<NotificationList>();

    @HostListener('document:click', ['$event'])
    clickout(event) {
        if (
            this.eRef.nativeElement.contains(event.target) ||
            event.target.innerText === 'notifications'
        ) {
            this.eventClickOutside.emit(false);
        } else {
            this.eventClickOutside.emit(true);
        }
    }

    constructor(private eRef: ElementRef) {}

    /**
     * On click notification
     * @param notification Notification data
     */
    clickNotification(notification: NotificationList) {
        this.eventClickNotification.emit(notification);
    }
}
