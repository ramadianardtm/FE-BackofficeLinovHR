import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { SelectItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { format } from 'date-fns';

import { Session } from 'app/shared/models/session.interface';
import { Company } from 'app/shared/models/company.interface';
import { Companies } from 'app/shared/models/company-reducer.interface';
import { Notifications } from './shared/header.model';

import { AppStore } from '@reducers/app-store.redux';
import { ADD_COMPANY } from '@reducers/company.reducer';

import { AuthenticationService, UserSession } from 'app/core/authentication/authentication.service';
import { CompanyService } from 'app/core/services/company.service';
import { ConstNameService } from 'app/services/const-name.service';
import { HeaderService } from './shared/header.service';

import { HomeComponent } from '../../pages/home/home.component';

import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import $ from 'jquery';
import { PageInfo } from 'app/shared/models/page-info.model';
import { AppState } from '@state/app-state.interface';
import { GetNotification, RefreshToken } from '@actions/notification.action';
import { selectNotifList, selectNotifCount } from '@selectors/notification.selector';
import { SocketInterceptorService } from '../../socket/socket/socket-interceptor.service';
import { ApiService } from 'app/core/http/api.service';
import { HttpRequest } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { environment } from 'app/../environments/environment';
import { MessageBoxService } from '@core-service/message-box.service';

declare var jquery: any;
declare var $: any;
@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.sass'],
})
export class HeaderComponent implements OnInit {
    companies: Companies[] = [];
    company: Company;
    selectedCompany: Company;
    header: any;
    notifList$ = this.store.pipe(select(selectNotifList));
    notifCount$ = this.store.pipe(select(selectNotifCount));
    private stompClient;

    topic: string
    topic1: string
    topic2: string



    selectedCity: string = 'En';
    userName: string;

    language: SelectItem[];
    selectedLang = 'En';
    url: string;
    requests: any[];

    private subscription: Subscription;
    filteredNotifications: Notifications[];
    selListOfNotifications: Notifications[] = [];

    display: boolean = false;
    type: any;
    formGroup: FormGroup;
    date3: Date;
    selectedDate: string[] = [];
    checked: boolean = false;
    countNotif: number;

    searchValue: string = "";
    searchResult: any[] = [];

    loginFormRefresh: FormGroup;
    errorMsg: string;
    isLoading = false;


    constructor(
        private store: Store<AppState>,
        public home: HomeComponent,
        public translate: TranslateService,
        private router: Router,
        private authService: AuthenticationService,
        private messageService: MessageService,
        private companyStore: Store<AppStore>,
        private companyService: CompanyService,
        private constName: ConstNameService,
        private headerService: HeaderService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private socket: SocketInterceptorService,
        private apiService: ApiService,
        private message: MessageBoxService
    ) {
        translate.addLangs(['en', 'id']);

        if (localStorage.getItem('locale')) {
            const browserLang = localStorage.getItem('locale');
            translate.use(browserLang.match(/en|id/) ? browserLang : 'en');
        } else {
            localStorage.setItem('locale', 'en');
            translate.setDefaultLang('en');
        }
        this.language = [
            { label: 'EN', value: 'En' },
            { label: 'ID', value: 'Id' },
        ];
        // this._connect();
        this.createForm();
        this.createFormRefresh();

        // $(document).ready(() => {
        //     $('#myDropdown').on('click', function () {
        //         localStorage.seen_badge = "true";
        //         console.log('localStorage', localStorage);
        //         if (localStorage.seen_badge === "true") {
        //             $('.nav-unread').addClass('badge-notify');
        //             console.log('localStorage.seen_badge === true 2');
        //         }
        //     });
        // });

        // console.log('localStorage', localStorage);
    }

    set notifications(notifications: Notifications[]) {
        this.headerService.notifications = notifications;
    }

    get notifications(): Notifications[] {
        return this.headerService.notifications;
    }

    set notification(notification: Notifications) {
        this.headerService.notification = notification;
    }

    get notification(): Notifications {
        return this.headerService.notification;
    }

    set selectedUuid(selectedUuid: string) {
        this.headerService.selectedUuid = selectedUuid;
    }

    get selectedUuid(): string {
        return this.headerService.selectedUuid;
    }
    resFunction() {
        this._disconnect();
    }

    ngOnInit() {
        this.loadData();
        this._connect();


        this.socket.disconnect.subscribe((res) => {
            this.resFunction()
        }
        );
        this.socket.connect.subscribe((res) => {
            this._connect()
        }
        );
        this.socket.refreshObservable.subscribe((res) => {
            this.onRefresh();
        }
        );
        // this.socket.refreshObservable.subscribe((res) => {
        //     this.onRefresh();
        // }
        // );
        // this._connect();


        this.userName = this.authService.getSession().user.person ?
            this.authService.getSession().user.person.firstName : "admin";
        this.url = this.constName.baseImage.file_img_url;
        this.dispatchCompanyInit(this.constructCompanySelectorData());
        this.companyStore
            .select(store => store.companies)
            .subscribe(obs => {
                this.companies = obs;
            });
        this.requests = [
            { request: 'Cuti', code: 'CT' },
            { request: 'Liburan', code: 'LB' },
            { request: 'Bootcamp', code: 'BC' },
        ];

        $(document).ready(() => {
            $('#myDropdown .dropdown-menu').on({
                click: function (e) {
                    e.stopPropagation();
                },
            });
        });
    }
    limit: number = 3;
    loadData(): void {
        this.store.dispatch(
            new GetNotification(new PageInfo(1, 3))
        );
        let c = new PageInfo(1, this.limit);
        this.display = false;
    }

    onSelect(event: any): void {
        this.selectedUuid = event.id;
        // this.type = event.lovMsty.keyData;
        // const detailId = event.detailId;
        console.log('this.type', this.type);
        if (this.type === 'PTP') {
            this.updateDetail(this.selectedUuid);
            const cmd = '/workforce/person/';
            this.router.navigate([cmd], { relativeTo: this.route });
            this.loadData();
        } else {
            this.loadDetail(this.selectedUuid);
        }
    }
    showMore() {
        this.loadData();
    }

    updateDetail(id: string): void {
        let update = { ...this.notification };

        this.headerService.update(id).subscribe(one => {
            update = one;

            console.log('fn notification update() response: ', update);

            this.notification = update;
        });
    }

    loadDetail(id: string): void {
        this.display = true;
        this.updateDetail(this.selectedUuid);
        let notification = { ...this.notification };

        this.headerService.getOne(id).subscribe(one => {
            notification = one;

            console.log('fn notification detail() response: ', notification);

            this.notification = notification;
        });
    }

    createForm() {
        this.formGroup = this.formBuilder.group({
            receivedDate: new Date(),
        });
    }

    /**
     *  Filter for All Column
     */
    onMenuSearch() {
        this.searchResult = [];
        var module = false;
        var subModule = false;
        if (this.searchValue) {
            this.authService.getSession().user.tenant.tenantModules
                .forEach(tenantModule => {
                    if (tenantModule.module.name.toLowerCase().includes(this.searchValue.trim().toLowerCase())) {
                        module = true;
                    }
                    tenantModule.module.parentMenu.forEach(parent => {
                        if (parent.name.toLowerCase().includes(this.searchValue.trim().toLowerCase())) {
                            subModule = true;
                        }
                        parent.menus.forEach(menu => {
                            if (module === true) {
                                this.searchResult.push({ result: "<strong>" + tenantModule.module.name + "</strong>/" + parent.name + "/" + menu.name, path: menu.path });
                            }
                            if (subModule === true) {
                                this.searchResult.push({ result: tenantModule.module.name + "/<strong>" + parent.name + "</strong>/" + menu.name, path: menu.path });
                            }
                            if (menu.name.toLowerCase().includes(this.searchValue.trim().toLowerCase())) {
                                this.searchResult.push({ result: tenantModule.module.name + "/" + parent.name + "/<strong>" + menu.name + "</strong>", path: menu.path });
                            }
                        });
                        subModule = false;
                    });
                    module = false;
                });
        }
    }

    onMenuEnter(searchResult: any) {
        this.router.navigate([searchResult.path], {
            relativeTo: this.route
        });
    }

    onSubmit() {
        let notifications = [];
        const form = this.formGroup.getRawValue();

        form.receivedDate = format(new Date(form.receivedDate), 'yyyy-MM-dd');

        console.log(
            'submit',
            format(new Date(form.receivedDate), 'yyyy-MM-dd')
        );

        console.log('form', form);
        const submitAction = this.headerService.save(form);
        submitAction.subscribe(({ data, count }) => {
            notifications = data;
            this.notifications = notifications;
            this.filteredNotifications = notifications;
            this.createForm();
            console.log('fn loadData(): filter-notification ', data);
            console.log('fn loadData(): total Notification ', count);
        });
    }

    openFilter() {
        document.getElementById('myFilter2').style.display = 'none';
        document.getElementById('myFilter').style.display = 'block';
    }

    closeFilter() {
        if (this.checked === true) {
            this.onSubmit();
            console.log('submit');
        } else {
            this.loadData();
        }
        document.getElementById('myFilter2').style.display = 'block';
        document.getElementById('myFilter').style.display = 'none';
    }

    dispatchCompanyInit(companies: any): void {
        const company = this.authService.getCompany();

        this.companyStore.dispatch({ type: ADD_COMPANY, payload: companies });

        this.companyService
            .getOne(company ? company.id : companies[0].value.id)
            .subscribe(resp => {
                // const data = this.selectedCompany;
                this.company = resp;
                // this.language = data.setting.LANG.toLowerCase();
                // this.translateService.use(this.language);
            });
    }

    public constructCompanySelectorData(): any[] {
        const mappedCompanies = [];
        const sessionCompanies = this.authService.getSession().user.tenant
            .companies;

        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < sessionCompanies.length; i++) {
            const data = {
                label: sessionCompanies[i].name,
                value: sessionCompanies[i],
            };
            mappedCompanies.push(data);
        }

        return mappedCompanies;
    }

    changeLang(language: string) {
        localStorage.setItem('locale', language);
        this.translate.use(language);
    }

    /**
     *  Change company
     *  @param      event   Company change event
     */
    onChange(event: any) {
        const company = event.value;
        let userSession: Session;
        // this.menuComponent.show = false;

        // TODO: remove later
        this.companyService.getOne(company.id).subscribe(resp => {
            this.company = resp;

            // this.language = data.setting.LANG.toLowerCase();
            // this.translateService.use(this.language);
        });

        if (this.authService.getSession().selectedCompanyId !== company.id) {
            this.authService.changeCompany(company);

            this.companyService
                .changeCompany(this.selectedCompany)
                .subscribe(({ token }) => {
                    // TODO: later, move to interceptor
                    this.onShowLoading();

                    userSession = this.authService.getSession();
                    userSession.token = token;
                    userSession.selectedCompanyId = company.id;
                    this.authService.createSession(userSession);
                    this.loadData();
                    this._disconnect();
                    this._connect()
                    // this._connect()
                });

            //   this.menuComponent.clearMenu();
            //   this.menuComponent.renderMenu();
        }

    }

    /**
     *  Show loading after loggedin
     */
    onShowLoading() {
        this.messageService.add({
            key: 'loggedin',
            severity: 'success',
            detail: 'L O A D I N G...',
        });

        setTimeout(() => {
            this.redirectTo(this.router.url);
            this.messageService.clear('loggedin');
        }, 3500);
    }

    /**
     *  Navigate to another page
     *  @param  uri URI location
     */
    redirectTo(uri) {
        this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => this.router.navigate([uri]));
    }

    /**
     *  Destroy session and go to Login page
     */
    doLogout(): void {
        this._disconnect();
        this.apiService.delete('logout').subscribe();
        this.authService.destroySession();
        this.authService.destroyActionSession();
        this.router.navigate(['home']);
    }
    trySocket: number = 0;
    _connect() {
        if (this.authService.isLoggedIn()) {
            if (jwt_decode(this.authService.getSession().token.accessToken).exp > Date.now() / 1000) {
                this.header = { Authorization: "Bearer " + this.authService.getSession().token.accessToken, transports: ['websocket'] }
                this.topic = "/topic/tenant/" + this.authService.getSession().user.tenant.id;
                this.topic1 = "/topic/company/" + this.authService.getSession().selectedCompanyId;
                this.topic2 = "/topic/personal/" + this.authService.getSession().user.id;

                // console.log("Initialize WebSocket Connection");
                let ws = new SockJS(this.apiService.getSocket());
                this.stompClient = Stomp.over(ws);
                this.stompClient.debug = null;
                const _this = this;
                _this.stompClient.connect(this.header, function (frame) {
                    _this.trySocket = 0;
                    _this.stompClient.subscribe(_this.topic, function (sdkEvent) {
                        if (_this.authService.isLoggedIn()) {
                            _this.loadData();
                        } else {
                            if (this.stompClient !== null) {
                                this.stompClient.disconnect();
                            }
                        }
                    });
                    _this.stompClient.subscribe(_this.topic1, function (sdkEvent) {
                        if (_this.authService.isLoggedIn()) {
                            _this.loadData();
                        } else {
                            if (this.stompClient !== null) {
                                this.stompClient.disconnect();
                            }
                        }
                    });
                    _this.stompClient.subscribe(_this.topic2, function (sdkEvent) {
                        if (_this.authService.isLoggedIn()) {
                            _this.loadData();
                        } else {
                            if (this.stompClient !== null) {
                                this.stompClient.disconnect();
                            }
                        }
                    });
                }, function (frame) {
                    _this.trySocket++;
                    _this._disconnect();
                    if (_this.trySocket <= 3) {
                        setTimeout(() => {
                            _this._connect();
                        }, 3000);

                    }
                }
                );
            }
            else {
                this._disconnect();
            }
        }
        else {
            if (this.stompClient !== null) {
                this.stompClient.disconnect();
            }

        }
    }

    _disconnect() {
        if (this.stompClient) {
            this.stompClient.disconnect();
            this.stompClient = null;
        }


    }

    createFormRefresh() {
        this.loginFormRefresh = this.formBuilder.group({
            accessToken: [this.authService.getSession().token.accessToken]
        });
    }
    onRefresh() {
        if (this.authService.getSession()) {
            if (jwt_decode(this.authService.getSession().token.refreshToken).exp > Date.now() / 1000) {
                if (jwt_decode(this.authService.getSession().token.accessToken).exp < Date.now() / 1000) {
                    localStorage.setItem('activeUri', this.router.url)
                    console.log('hahiahaish');
                    const loginForm = { accessToken: this.authService.getSession().token.accessToken };
                    this.isLoading = true;
                    this._disconnect();


                    console.log('this.userSession.token.refreshToken', this.authService.getSession().token.refreshToken);
                    // this.authService.setSession(this.authService.getSession().token.refreshToken);
                    this.store.dispatch(new RefreshToken(loginForm, this.authService.getSession().token.refreshToken));
                }

            }
            else {
                this._disconnect();
                this.authService.destroySession();
                this.authService.destroyActionSession();
                this.message.showInfo('Token Expired')
                this.router.navigate(['login']);


            }
        }


    }


}