import { Action } from './app-store.redux';
import { Companies } from '../../../shared/models/company-reducer.interface';

export const ADD_COMPANY = 'add_company';
export const UPDATE_COMPANY = 'update_company';
export const SAVE_COMPANY = 'save_company';
export const DELETE_COMPANY = 'delete_company';
export const RESET_COMPANY = 'reset_company';

/**
 * @param state List of Companies
 * @param action Action Param
 */
export function companyReducer(state: Companies[] = [], action: Action) {
    switch (action.type) {
        case ADD_COMPANY:
            return action.payload;
        case SAVE_COMPANY:
            return [...state, action.payload];
        case UPDATE_COMPANY:
            return state.map(item => {
                return item.value.id === action.payload.value.id
                    ? Object.assign({}, item, action.payload)
                    : item;
            });
        case DELETE_COMPANY:
            return state.filter(company => {
                return (
                    company.value.id !== action.payload.value.id
                );
            });
        case RESET_COMPANY:
            return [];
        default:
            return state;
    }
}
