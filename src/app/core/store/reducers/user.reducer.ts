import { EUserActions, UserAction } from '../actions/user.action';
import { initialState, UserState } from '../state/user.state';

export function userReducer(
    state = initialState,
    action: UserAction
): UserState {
    switch (action.type) {
        case EUserActions.GetUserListSuccess: {
            return {
                ...state,
                list: action.payload,
                error: null
            };
        }
        case EUserActions.GetUserItemSuccess: {
            return {
                ...state,
                item: action.payload,
                error: null
            };
        }

        default:
            return state;
    }
}
