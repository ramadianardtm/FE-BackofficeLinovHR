import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Module } from 'app/shared/models/session.interface';

import { AuthenticationService } from 'app/core/authentication/authentication.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
    modules: Module[] = [];

    sidebarActive: boolean;

    constructor(
        public router: Router,
        public authenticationService: AuthenticationService
    ) {
        this.onConstructMenu();
    }

    ngOnInit(): void {}

    /**
     *  Construct Menu from Session
     */
    onConstructMenu() {
        const {
            tenantModules,
        } = this.authenticationService.getSession().user.tenant;

        tenantModules.forEach(item => {
            this.modules.push(item.module);
        });
    }

    onMenuButtonClick(event: Event) {
        this.sidebarActive = !this.sidebarActive;

        event.preventDefault();
    }
}
