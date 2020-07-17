import { createSelector } from '@ngrx/store';

import { AppState } from '@state/app-state.interface';
import { NotificationState } from '@state/notification.state';

const selectState = (state: AppState) => state.notifications;



export const selectNotifList = createSelector(
    selectState,
    (state: NotificationState) => state.notifList
);

export const selectNotifCount = createSelector(
    selectState,
    (state: NotificationState) => state.countNotif
);

export const selectRefreshToken = createSelector(
    selectState,
    (state: NotificationState) => state.refreshToken
);

export const refreshMessage = createSelector(
    selectState,
    (state: NotificationState) => state.msgRefresh
);



