import { User } from 'app/shared/models/session.interface';

export interface UserState {
    list: User[];
    item: User;
    id: string;
    error: string;
}

export const initialState: UserState = {
    list: null,
    item: null,
    id: null,
    error: null
};
