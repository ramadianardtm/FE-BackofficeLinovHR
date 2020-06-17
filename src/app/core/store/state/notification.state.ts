

export interface NotificationState {
    notifList: any[];
    countNotif: number;
    msg: string;
    refreshToken: any;
    msgRefresh: any;
}

export const initialState: NotificationState = {
    notifList: null,
    countNotif: null,
    msg: null,
    refreshToken: null,
    msgRefresh: null

};
