import { Action } from '@ngrx/store';

import { User } from 'app/shared/models/session.interface';

export enum EUserActions {
    GetUsers = '[User] Get Users',
    GetUserListSuccess = '[User] Get Users Success',
    GetUser = '[User] Get User',
    GetUserItemSuccess = '[User] Get User Success',
}

export class GetUsers implements Action {
    public readonly type = EUserActions.GetUsers;
}

export class GetUsersSuccess implements Action {
    public readonly type = EUserActions.GetUserListSuccess;

    constructor(public payload: User[]) {}
}

export class GetUser implements Action {
    public readonly type = EUserActions.GetUser;

    constructor(public payload: string) {}
}

export class GetUserSuccess implements Action {
    public readonly type = EUserActions.GetUserItemSuccess;

    constructor(public payload: User) {}
}

export type UserAction = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess;
