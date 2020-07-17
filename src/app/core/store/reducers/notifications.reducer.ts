import { NotificationAction, ENotificationAction } from '@actions/notification.action';
import { initialState, NotificationState } from '@state/notification.state';


export function notificationsReducer(
    state = initialState,
    action: NotificationAction
): NotificationState {
    switch (action.type) {
        case ENotificationAction.GetNotificationListSuccess: {
            return {
                ...state,
                notifList: action.payload,
                countNotif: action.count,
            };
        }
        case ENotificationAction.RefreshTokenSuccess: {
            return {
                ...state,
                refreshToken: action.payload,
            };
        }
        case ENotificationAction.RefreshTokenFailure: {
            return {
                ...state,
                msgRefresh: action.payload,
            };
        }

        default:
            return state;
    }
}
