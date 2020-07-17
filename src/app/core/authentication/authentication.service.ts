import { Injectable } from '@angular/core';

import {
    Session,
    Token,
    User,
    Company,
} from 'app/shared/models/session.interface';
import { MenuInfo } from 'app/shared/models/menu-info';

import { AppConstant } from 'app/configs/app.config';

/**
 *  Authentication & Authorization
 */
@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    privilegeMenu: any;

    constructor() { }

    /**
     *  Store anything to local storage.
     *  @param   key Local Storage Key
     *  @param   value Local Storage Value
     */
    private setLocalStorage(key: string, value: any) {
        // Store user session in local storage HTML 5
        localStorage.setItem(key, btoa(JSON.stringify(value)));
    }

    /**
     *  Retrieve anything from local storage.
     *  @param   key Local Storage Key
     */
    private getLocalStorage(key: string) {
        const item = localStorage.getItem(key);

        if (item) {
            return JSON.parse(atob(item));
        } else {
            return item;
        }
    }



    /**
     *  Check whether user is login or not
     *  @return  boolean
     */
    isLoggedIn(): boolean {
        return this.getLocalStorage(AppConstant.userSessionKey) !== null;
    }

    /**
     *  Clear current user session
     */
    destroySession() {
        localStorage.clear();
    }

    /**
     *  Clear current user action
     */
    destroyActionSession() {
        sessionStorage.removeItem(AppConstant.actionKey);
    }

    /**
     *  Get current user session
     *  @return   UserSession
     */
    getSession(): UserSession {
        return this.getLocalStorage(AppConstant.userSessionKey);
    }

    setWidgetModule(res: any, moduleName) {
        let b = this.getSession()
        for (let a of b.user.tenant.tenantModules) {
            console.log("tenant module", a);
            if (a.module.name.split(' ')[0].toLowerCase() === moduleName.toLowerCase()) {
                console.log("aku masuk sini");
                a.module.userWidgets = JSON.parse(res);
                break;
            }
        }
        this.createSession(b)
    }

    /**
     *  Get current user company
     *  @return   Company
     */
    getCompany(): Company {
        return this.getLocalStorage(AppConstant.companyKey);
    }

    /**
     *  Get general setting
     *  @return   setting
     */
    getSetting(): any {
        return this.getLocalStorage(AppConstant.generalSettingKey);
    }

    /**
     *  Create user session. Invoke when login.
     *  @param session   User Data from API Response
     */
    createSession(session: Session) {
        this.setLocalStorage(AppConstant.userSessionKey, session);
        localStorage.setItem("seen_badge", "false");
        // localStorage.setItem("seen_badge", "false");
        // if (localStorage.seen_badge === "false") {
        //     alert('localStorage.seen_badge === false');
        // }
    }
    setSession(token: string) {
        let b: any = this.getSession();
        b.token.accessToken = token;
        this.setLocalStorage(AppConstant.userSessionKey, b);
        console.log('user sssss', b);

    }

    createGeneralSetting(setting: any) {
        if (setting.generalCompanies) {
            const foundCurrency = setting.generalCompanies.filter((item) => item.lovGnty.lovType.name === "Currency");
            const foundLanguage = setting.generalCompanies.filter((item) => item.lovGnty.lovType.name === "Language");
            const foundDF = setting.generalCompanies.filter((item) => item.lovGnty.lovType.name === "Date Format");

            if (foundCurrency && foundLanguage && foundDF) {
                const formated = {
                    currency: {
                        key: foundCurrency[0].lovGnty.keyData,
                        value: foundCurrency[0].lovGnty.valData
                    },
                    language: {
                        key: foundLanguage[0].lovGnty.keyData,
                        value: foundLanguage[0].lovGnty.valData
                    },
                    dateFormat: {
                        key: foundDF[0].lovGnty.keyData,
                        value: foundDF[0].lovGnty.valData
                    },

                }

                console.log("setting", formated);
                this.setLocalStorage(AppConstant.generalSettingKey, formated);
            }

        }
    }



    /**
     *  Change User Company.
     *  @param company   User Company Data
     */
    changeCompany(company: Company) {
        this.setLocalStorage(AppConstant.companyKey, company);
    }

    /**
     *  Get user privileged menu information
     *  @param   menuCode Menu to be Looked Up
     *  @returns MenuInfo Menu info Object
     */
    getMenuInfo(menuCode: string): MenuInfo {
        if (this.privilegeMenu[menuCode] == null) {
            return new MenuInfo('', '', [], '');
        }

        return this.privilegeMenu[menuCode];
    }
}

export class UserSession implements Session {
    token?: Token;
    user?: User;
    selectedCompanyId?: string;

    constructor(session: Session) {
        const { token, user, selectedCompanyId } = session;

        this.token = token;
        this.user = user;
        this.selectedCompanyId = selectedCompanyId;

        // TODO: next notif Id name tidak ada
        // this.notifId = sessionObject.notifId;
        // this.user.id = session.user.id;

        // TODO: implement localication(regional, date, time and language)
        // this.lang =
        //     AppConstant.langKey in session.companies[0].setting
        //         ? session.companies[0].setting['LANG'].toLowerCase()
        //         : AppConstant.supportedLang[0];
        // check if language is supported by system / not

        // if (AppConstant.supportedLang.indexOf(this.lang) < 0) {
        //     this.lang = AppConstant.supportedLang[0];
        // }

        // after apply lang, apply locale based on lang
        // this.locale = AppConstant.supportedLocale[this.lang];

        // set default date format for user.
        // this.dateFormat = session.companies[0].setting
        //     ? session.companies[0].setting['DATE']
        //     : AppConstant.supportedDateFormat[0];
        // check if date format is supported by system / not
        // if (AppConstant.supportedDateFormat.indexOf(this.dateFormat) < 0) {
        //     this.dateFormat = AppConstant.supportedDateFormat[0];
        // }
    }
}
