import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from '../../shared/models/menu.model';

import { AuthenticationService } from '../authentication/authentication.service';

export interface Module {
    moduleCode: string;
    moduleName: string;
    menus: Menu[];
}

export interface Menu {
    code: string;
    name: string;
    link: string;
    action: any;
}

@Injectable()
export class MenuService {
    public menus = [];
    private listOfAction: string[];

    constructor(
        private route: Router,
        private authService: AuthenticationService
    ) {}

    get actions(): string[] {
        return this.listOfAction;
    }

    set actions(value: string[]) {
        this.listOfAction = value;
    }

    navigateToMenu(menuCode: string): void {
        // const tempMenu = this.menus[menuCode];
        // this.sessionService.destroyActionSession(); // TODO to be deleted later!!!
        // this.sessionService.storeActionSession(tempMenu.action); // TODO to be deleted later!!!
        // this.route.navigate([tempMenu.link]);
    }

    /**
     * menu mapper
     * @param {Module[]} module
     * @returns {Module[]}
     */
    // menuMapper(module): MenuItem[] {
    // this.sessionService.privilegeMenu = [];

    // const temp: MenuItem[] = [];

    // for (let i = 0; i < module.length; i++) {
    //     const menu = module[i].tree;
    //     const sub_items: MenuItem[] = [];
    //     for (let j = 0; j < menu.length; j++) {
    //         for (let k = 0; k < APP_ROUTES.length; k++) {
    //             if (menu[j].code === APP_ROUTES[k].code) {
    //                 const path = APP_ROUTES[k].path;
    //                 menu[j].link = path;
    //                 const sub_menu: MenuItem = {
    //                     label: menu[j].name,
    //                     title: menu[j].code,
    //                     routerLink: menu[j].link,
    //                     command: event => this.navigateToMenu(menu[j].code),
    //                 };
    //                 sub_items.push(sub_menu);
    //                 this.sessionService.privilegeMenu[
    //                     menu[j].code
    //                 ] = new MenuInfo(
    //                     menu[j].code,
    //                     menu[j].name,
    //                     menu[j].action,
    //                     menu[j].link
    //                 );
    //                 this.menus[menu[j].code] = menu[j];
    //             }
    //         }
    //     }
    //
    //     let icon = '';
    //     if (module[i].groupName === 'PROFILE') {
    //         icon = 'fas fa-street-view fa-menu-size';
    //     } else if (module[i].groupName === 'TIME MANAGEMENT') {
    //         icon = 'fas fa-clock fa-menu-size';
    //     } else if (module[i].groupName === 'MY PAYROLL') {
    //         icon = 'fas fa-money-check fa-menu-size';
    //     } else if (module[i].groupName === 'SUBORDINATE REQUEST') {
    //         icon = 'fas fa-users fa-menu-size';
    //     } else if (module[i].groupName === 'TRAVEL') {
    //         icon = 'fas fa-plane-departure fa-menu-size';
    //     } else if (module[i].groupName === 'RECRUITMENT') {
    //         icon = 'fas fa-search-plus fa-menu-size';
    //     } else if (module[i].groupName === 'MY GOAL') {
    //         icon = 'fas fa-trophy fa-menu-size';
    //     } else if (module[i].groupName === 'LOAN') {
    //         icon = 'fas fa-hand-holding-usd fa-menu-size';
    //     } else if (module[i].groupName === 'BENEFIT') {
    //         icon = 'fas fa-briefcase-medical fa-menu-size';
    //     } else if (module[i].groupName === 'DASHBOARD') {
    //         icon = 'fas fa-rocket';
    //     } else if (module[i].groupName === 'LEARNING DEVELOPMENT') {
    //         icon = 'fas fa-book fa-menu-size';
    //     }

    // const menuItem: MenuItem = {
    //     label: module[i].groupName,
    //     icon,
    //     items: sub_items,
    //     modulePath: module[i].modulePath,
    // };
    // temp.push(menuItem);
    // }

    // return temp;
    // }
}
