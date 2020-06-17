import { createSelector } from '@ngrx/store';

import { AppState } from '../state/app-state.interface';

import { UserState } from '../state/user.state';

const selectState = (state: AppState) => state.user;

export const selectUserList = createSelector(
    selectState,
    (state: UserState) => state.list
);

export const selectUserItem = createSelector(
    selectState,
    (state: UserState) => state.item
);

export const selectUserError = createSelector(
    selectState,
    (state: UserState) => state.error
);

export const selectId = (state: UserState) => state.id;
