import { Action } from '@ngrx/store';
import { ShowLoader, HideLoader } from 'app/shared/decorators';
import { PageInfo } from 'app/shared/models/page-info.model';


export enum ENotificationAction {
    GetNotificationListSuccess = '[Notification] Get Notifications Success',
    GetNotification = '[Notification] Get Notification',
    GetNotificationListFailure = '[Notification] Get Notifications Failure',
    RefreshToken = '[Token] Refresh Token',
    RefreshTokenSuccess = '[Token] Refresh Token Success',
    RefreshTokenFailure = '[Token] Refresh Token Failure',

}

export class GetNotification implements Action {
    public readonly type =
        ENotificationAction.GetNotification;

    constructor(
        public payload: PageInfo
    ) { }
}

@HideLoader(ENotificationAction.GetNotification)
export class GetNotificationListSuccess implements Action {
    public readonly type =
        ENotificationAction.GetNotificationListSuccess;

    constructor(public payload: any[], public count: number) { }
}

@HideLoader(ENotificationAction.GetNotification)
export class GetNotificationListFailure implements Action {
    public readonly type =
        ENotificationAction.GetNotificationListFailure;

    constructor(public payload: string) { }
}


export class RefreshToken implements Action {
    public readonly type =
        ENotificationAction.RefreshToken;

    constructor(
        public payload: any, public accesToken: any
    ) { }
}

@HideLoader(ENotificationAction.RefreshToken)
export class RefreshTokenSuccess implements Action {
    public readonly type =
        ENotificationAction.RefreshTokenSuccess;

    constructor(public payload: any) { }
}

@HideLoader(ENotificationAction.RefreshToken)
export class RefreshTokenFailure implements Action {
    public readonly type =
        ENotificationAction.RefreshTokenFailure;

    constructor(public payload: string) { }
}

export type NotificationAction = GetNotification | GetNotificationListSuccess | RefreshToken | RefreshTokenFailure | RefreshTokenSuccess;

