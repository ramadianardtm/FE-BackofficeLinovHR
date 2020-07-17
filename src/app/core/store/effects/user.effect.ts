import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { AppState } from '@state/app-state.interface';

import {
    EUserActions,
    GetUsersSuccess,
    GetUserSuccess,
    GetUser,
    GetUsers,
} from '@actions/user.action';
import { selectUserList } from '@selectors/user.selector';

import { UserService } from 'app/core/services/user.service';

@Injectable()
export class UserEffect {
    constructor(
        private store: Store<AppState>,
        private actions$: Actions,
        private userService: UserService
    ) {}

    @Effect()
    getUserList$ = this.actions$.pipe(
        ofType<GetUsers>(EUserActions.GetUsers),
        switchMap(() => this.userService.getUsers()),
        switchMap((userHttp: any) => of(new GetUsersSuccess(userHttp.users)))
    );

    @Effect()
    getUserItem$ = this.actions$.pipe(
        ofType<GetUser>(EUserActions.GetUser),
        map(action => action.payload),
        withLatestFrom(this.store.pipe(select(selectUserList))),
        switchMap(([id, users]) => {
            const selectedUser = users.filter(user => user.id === id)[0];

            return of(new GetUserSuccess(selectedUser));
        })
    );
}
