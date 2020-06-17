import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as io from 'socket.io-client';

import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root'
})
export class NotificationSocketService {
    // Our socket connection
    private socket;

    constructor() {}

    connect(): Subject<MessageEvent> {
        // If you aren't familiar with environment variables then
        // you can hard code `environment.ws_url` as `http://localhost:5000`
        this.socket = io(environment.socketUrl);
        const notifId = localStorage.getItem('notifId');
        console.log('notifId=' + notifId);

        // We define our observable which will observe any incoming messages
        // from our socket.io server.
        const observable = new Observable(obs => {
            this.socket.on('linov-' + notifId, data => {
                console.log('Received message from Websocket Server');
                obs.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });

        // We define our Observer which will listen to messages
        // from our other components and send messages back to our
        // socket server whenever the `next()` method is called.
        const observer = {
            next: (data: object) => {
                console.log('observer next');
                this.socket.emit('linov-' + notifId, JSON.stringify(data));
            },
        };

        // we return our Rx.Subject which is a combination
        // of both an observer and observable.
        return Subject.create(observer, observable);
    }
}
