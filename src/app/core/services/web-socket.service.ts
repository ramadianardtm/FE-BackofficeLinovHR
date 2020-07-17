import { Injectable } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Injectable()
export class WebSocketService {
    private webSocket: WebSocket;
    private reconnectInterval = 60 * 1000;
    private timeOutConnection;

    constructor() {}

    /**
     * create connection
     * @param {string} url
     */
    createConnection(url: string) {
        this.webSocket = new WebSocket(url);

        this.webSocket.onerror = oe => {};

        this.webSocket.onclose = oc => {};

        this.webSocket.onopen = resp => {};
    }

    /**
     * get message on web socket
     * @returns {Observable<any>}
     */
    getMessage(): Observable<any> {
        return fromEvent(this.webSocket, 'message');
    }

    /**
     * send message to web socket
     * @param data
     */
    sendMessage(data: any): void {
        this.webSocket.send(data);
    }

    /**
     * close socket to web socket
     * @param {number} code
     * @param {string} reason
     * @return {void}
     */
    closeSocket(code: number, reason: string): void {
        this.webSocket.close(code, reason);
    }

    /**
     * reconnect socket
     * @param {string} url
     */
    private reconnectSocket(url: string) {
        this.timeOutConnection = setTimeout(() => {
            this.createConnection(url);
        }, this.reconnectInterval);
    }

    /**
     * clear reconnect
     */
    private clearReconnect(): void {
        clearTimeout(this.timeOutConnection);
    }
}
