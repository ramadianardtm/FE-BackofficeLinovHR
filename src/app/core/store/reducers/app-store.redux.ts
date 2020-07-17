import { Companies } from 'app/shared/models/company-reducer.interface';
import { NotificationList } from 'app/shared/models/notification.interface';

export interface AppStore {
    companies: Companies[];
    notifications: NotificationList[];
}

export interface Action {
    type: string;
    payload: any;
}
