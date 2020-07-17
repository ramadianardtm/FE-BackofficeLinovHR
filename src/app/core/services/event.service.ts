import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppStore } from 'app/core/store/reducers/app-store.redux';
import {
    DELETE_COMPANY,
    SAVE_COMPANY,
    UPDATE_COMPANY,
} from 'app/core/store/reducers/company.reducer';

import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class EventService {
    constructor(
        private authService: AuthenticationService,
        private store: Store<AppStore>
    ) {}

    /**
     * service command for dispatch redux
     * @param company Company data
     * @param action Action data
     */
    changeCompanies(company: any, action: string) {
        // this.mapCompaniesAction(company, action);
    }

    /**
     * @param company
     * @param action
     */
    // private mapCompaniesAction(company: any, action: string) {
    //     let companyData;

    // if (action === 'save') {
    //     companyData = {
    //         action: 'save',
    //         label: company.name,
    //         value: {
    //             companyId: company.id,
    //             companyName: company.name,
    //             default: false,
    //             settings: [],
    //         },
    //     };
    //     this.sessionCompaniesHandler(companyData, companyData.action);
    // } else if (action === 'update') {
    //     companyData = {
    //         action: 'update',
    //         label: company.name,
    //         value: {
    //             companyId: company.id,
    //             companyName: company.name,
    //             default: true,
    //             settings: [],
    //         },
    //     };
    //     this.sessionCompaniesHandler(companyData, companyData.action);
    // }

    // return companyData;
    // }

    /**
     * session handler for company
     * @param company
     * @param action
     */
    // private sessionCompaniesHandler(company: any, action: string): void {
    //     const storageData = this.session.getSession();
    //     const companiesStorage = this.session.getSession().companies;
    //     if (action === 'save') {
    //         delete company.action;
    //         companiesStorage.push(company);
    //         storageData.companies = companiesStorage;
    //         this.store.dispatch({ type: SAVE_COMPANY, payload: company });
    //         this.session.createSession(
    //             new UserSession(JSON.stringify(storageData))
    //         );
    //     } else {
    //         delete company.action;
    //         for (const i in companiesStorage) {
    //             if (company.companyId === companiesStorage[i].companyId) {
    //                 if (action === 'update') {
    //                     this.store.dispatch({
    //                         type: UPDATE_COMPANY,
    //                         payload: company,
    //                     });
    //                     companiesStorage[i] = company;
    //                     break;
    //                 } else if (action === 'delete') {
    //                     this.store.dispatch({
    //                         type: DELETE_COMPANY,
    //                         payload: company,
    //                     });
    //                     delete companiesStorage[i];
    //                     break;
    //                 }
    //             }
    //         }
    // storageData.companies = companiesStorage;
    // this.session.createSession(
    //     new UserSession(JSON.stringify(storageData))
    // );
    // }
    // }
}
