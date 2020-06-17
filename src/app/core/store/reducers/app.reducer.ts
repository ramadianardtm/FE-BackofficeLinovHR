import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { AppState } from '@state/app-state.interface';

import { companyReducer } from './company.reducer';
import { notificationReducer } from './notification.reducer';
import { spinnerReducer } from './loading-spinner.reducer';

import { userReducer } from './user.reducer';

import { notificationsReducer } from './notifications.reducer';

export const appReducer: ActionReducerMap<AppState> = {
    // Master Reducer
    router: routerReducer,
    companies: companyReducer,
    // notifications: notificationReducer,
    loading: spinnerReducer,

    // Module Reducer
    user: userReducer,
    
    notifications: notificationsReducer,
};
