import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom, catchError, tap } from 'rxjs/operators';

import { AppState } from '@state/app-state.interface';

import {
    ENotificationAction,
    GetNotification,
    GetNotificationListSuccess,
    GetNotificationListFailure,
    RefreshToken,
    RefreshTokenFailure,
    RefreshTokenSuccess
} from '@actions/notification.action';
import { HeaderService } from 'app/core/layouts/home/components/header/shared/header.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/core/authentication/authentication.service';
import { Refresh } from '@ngrx/store-devtools/src/actions';
import { SocketInterceptorService } from 'app/core/layouts/home/socket/socket/socket-interceptor.service';
import { MessageBoxService } from '@core-service/message-box.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class NotificationEffect {
    constructor(
        private http: HttpClient,
        private store: Store<AppState>,
        private actions$: Actions,
        private notificationService: HeaderService,
        private router: Router,
        private aut: AuthenticationService,
        private socket: SocketInterceptorService,
        private message: MessageBoxService,
    ) { }

    @Effect()
    getNotification$ = this.actions$.pipe(
        ofType<GetNotification>(ENotificationAction.GetNotification),
        switchMap(({ payload }) =>
            this.notificationService.getAll(payload).pipe(
                map(({ data, count }) => new GetNotificationListSuccess(data, count)),
                catchError((err: any) => of(new GetNotificationListFailure(err)))
            )
        )
    );

    @Effect()
    refreshToken$ = this.actions$.pipe(
        ofType<RefreshToken>(ENotificationAction.RefreshToken),
        switchMap(({ payload, accesToken }) =>
            this.notificationService.refreshToken(payload, accesToken).pipe(
                map((data) => new RefreshTokenSuccess(data)),
                catchError((err: any) => of(new RefreshTokenFailure(err)))
            )
        )
    );

    @Effect({ dispatch: false })
    refreshSucces$ = this.actions$.pipe(
        ofType<RefreshTokenSuccess>(
            ENotificationAction.RefreshTokenSuccess
        ),
        tap(act => {

            this.http.get

            let b: any = this.aut.getSession();
            console.log('b', b);
            let c = JSON.parse(act.payload)
            b.token = c.token
            console.log('act', c.token);
            this.aut.createSession(b);
            let uri: string = localStorage.getItem('activeUri')
            this.router.navigate([uri]);
            this.socket.callConnectMethod('')
            setTimeout(() => {
                this.message.showSuccess('Refresh Token Succes')
            }, 3000);

        })
    );
}
