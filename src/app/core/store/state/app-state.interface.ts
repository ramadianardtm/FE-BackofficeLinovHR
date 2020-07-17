import { RouterReducerState } from '@ngrx/router-store';

import { SpinnerState } from './loading-spinner.state';


import { UserState } from './user.state';
import { NotificationState } from './notification.state';
import { from } from 'rxjs';
export interface AppState {

    router: RouterReducerState;
    companies: any; // TODO: fix later
    loading: SpinnerState;

    user: UserState;
    notifications: NotificationState;
}
