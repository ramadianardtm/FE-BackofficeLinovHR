// import * as Stomp from 'stompjs';
// import * as SockJS from 'sockjs-client';
// import { Injectable } from '@angular/core';
// import { GetNotification } from '@actions/notification.action';
// import { PageInfo } from 'app/shared/models/page-info.model';
// export class WebSocketNewService {
//   stompClient: any;
//   header = { Authorization: "Bearer " + this.authService.getSession().token.accessToken, transports: ['websocket'] }

//   topic = "/topic/tenant/" + this.authService.getSession().user.tenant.id;
//   topic1: string = "/topic/company/" + this.authService.getSession().selectedCompanyId;
//   topic2: string = "/topic/personal/" + this.authService.getSession().user.id;
//   constructor(
//     public authService: any, public store: any) {

//   }
//   loadData(page) {
//     this.store.dispatch(
//       new GetNotification(new PageInfo(1, page))
//     );
//   }
//   _connect2() {
//     let ws = new SockJS(this.serverUrl);
//     this.stompClient = Stomp.over(ws);
//     // this.stompClient.debug = null;
//     const _this = this;
//     _this.stompClient.connect(this.header, function (frame) { })
//     _this._disconnect();

//   }

//   _connect() {
//     if (this.authService.isLoggedIn()) {
//       this.header = { Authorization: "Bearer " + this.authService.getSession().token.accessToken, transports: ['websocket'] }
//       this.topic = "/topic/tenant/" + this.authService.getSession().user.tenant.id;
//       this.topic1 = "/topic/company/" + this.authService.getSession().selectedCompanyId;
//       this.topic2 = "/topic/personal/" + this.authService.getSession().user.id;

//       // console.log("Initialize WebSocket Connection");
//       let ws = new SockJS(this.serverUrl);
//       this.stompClient = Stomp.over(ws);
//       // this.stompClient.debug = null;
//       const _this = this;
//       _this.stompClient.connect(this.header, function (frame) {
//         _this.stompClient.subscribe(_this.topic, function (sdkEvent) {
//           if (_this.authService.isLoggedIn()) {
//             _this.loadData(3);
//           } else {
//             if (this.stompClient !== null) {
//               this.stompClient.disconnect();
//             }
//           }
//         });
//         _this.stompClient.subscribe(_this.topic1, function (sdkEvent) {
//           if (_this.authService.isLoggedIn()) {
//             _this.loadData(3);
//           } else {
//             if (this.stompClient !== null) {
//               this.stompClient.disconnect();
//             }
//           }
//         });
//         _this.stompClient.subscribe(_this.topic2, function (sdkEvent) {
//           if (_this.authService.isLoggedIn()) {
//             _this.loadData(3);
//           } else {
//             if (this.stompClient !== null) {
//               this.stompClient.disconnect();
//             }
//           }
//         });
//       }, function (frame) {
//         if (_this.stompClient !== null) {
//           _this.stompClient.disconnect();
//           if (_this.authService.isLoggedIn()) {
//             _this._connect();
//           }
//         }
//       });

//     }
//     else {
//       if (this.stompClient !== null) {
//         this.stompClient.disconnect();
//       }

//     }
//   }

//   _disconnect() {

//     if (this.stompClient !== null) {
//       this.stompClient.disconnect();
//     }
//   }

//   // on error, schedule a reconnection attempt
//   errorCallBack(error) {
//     console.log("errorCallBack -> " + error)
//     setTimeout(() => {
//       this._connect();
//     }, 5000);
//   }

//   /**
//   * Send message to sever via web socket
//   * @param {*} message 
//   */
//   _send(message) {
//     console.log("calling logout api via web socket");
//     this.stompClient.send("/app/hello", {}, JSON.stringify(message));
//   }

//   onMessageReceived(message) {
//     console.log("Message Recieved from Server :: " + message);
//   }
// }
