import { Action } from './app-store.redux';

import { NotificationList } from '../../../shared/models/notification.interface';

export const ADD_NOTIFICATION = 'add_notification';
export const UPDATE_NOTIFICATION = 'update_notification';
export const SAVE_NOTIFICATION = 'save_notification';
export const DELETE_NOTIFICATION = 'delete_notification';
export const RESET_NOTIFICATION = 'reset_notification';
export const FILTER_NOTIFICATION = 'filter_notification';

/**
 * Reduce notification
 * @param state List of Notification
 * @param action Action data
 */
export function notificationReducer(
    state: NotificationList[] = [],
    action: Action
) {
    switch (action.type) {
        case ADD_NOTIFICATION:
            return action.payload;
        case SAVE_NOTIFICATION:
            return [...state, action.payload];
        case UPDATE_NOTIFICATION:
            return state.map(item => {
                return item.id === action.payload.id
                    ? Object.assign({}, item, action.payload)
                    : item;
            });
        case DELETE_NOTIFICATION:
            return state.filter(notification => {
                return notification.id !== action.payload.id;
            });
        case RESET_NOTIFICATION:
            return [];
        default:
            return state;
    }
}
