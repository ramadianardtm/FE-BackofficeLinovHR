import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Session } from 'app/shared/models/session.interface';

import { ApiService } from 'app/core/http/api.service';
import { AuthenticationService } from 'app/core/authentication/authentication.service';

import { AppConstant } from 'app/configs/app.config';
import { SocketInterceptorService } from 'app/core/layouts/home/socket/socket/socket-interceptor.service';
import * as jwt_decode from 'jwt-decode';
import { RefreshToken, GetNotification } from '@actions/notification.action';
import { Store } from '@ngrx/store';
import { AppState } from '@state/app-state.interface';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { PageInfo } from 'app/shared/models/page-info.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  loginForm: FormGroup;

    errorMsg: string;
    isLoading = false;
    private stompClient;

    loginFormRefresh: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private apiService: ApiService,
        private authService: AuthenticationService,
        private socket: SocketInterceptorService,
        private store: Store<AppState>
    ) {
        this.createForm();
        // console.log('decode constructor', jwt_decode(this.authService.getSession().token.accessToken).exp);


    }
    loadData(): void {
        this.store.dispatch(
            new GetNotification(new PageInfo(1, 3))
        );
    }
    ngOnInit(): void {

        // this.onRefresh();
        // this.onRefresh()
        // this._disconnect()

    }

    // get username() {
    //     return this.loginForm.get('username');
    // }

    get name() {
        return this.loginForm.get('name');
    }

    get email() {
        return this.loginForm.get('email');
    }

    get password() {
        return this.loginForm.get('password');
    }

    /**
     *  Construct new Form Structure
     */
    private createForm() {
        this.loginForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            // username: [
            //     '',
            //     [
            //         Validators.required,
            //         Validators.pattern(new RegExp(/^[a-zA-Z0-9]*$/)),
            //     ],
            // ],
            password: ['', Validators.required],
            // 'g-recaptcha-response': [''],
        });
    }

    createFormRefresh() {
        this.loginFormRefresh = this.formBuilder.group({
            accessToken: [this.authService.getSession().token.accessToken]
        });
    }

    /**
     *  Do Login Action
     */
    onSubmit() {
        const loginForm = this.loginForm.getRawValue();
        this.isLoading = true;

        loginForm.isEss = false;
        loginForm.applicationId = AppConstant.applicationId;
        this.router.navigate(['/job-vacancy']);

        // this.apiService.postLogin('login', loginForm).subscribe(
        //     (resp: Session) => {
        //         this.authService.createSession(resp);
        //         console.log('resp login', resp);
                // this._connect();
                // this.socket.connect.subscribe((res) => {
                //     this._connect()
                // }
                // );
                // this.socket.disconnect.subscribe((res) => {
                //     this._disconnect();
                // })

                //get general setting
            //     const currCompanyId = this.authService.getSession().selectedCompanyId;
            //     this.apiService.get('company/' + currCompanyId).subscribe((resp) => {
            //         console.log("company", resp);
            //         this.authService.createGeneralSetting(resp);
            //     })

                
            // },
            // (err) => {
            //     this.errorMsg = err;
            //     this.onRevert();
            // },
            // () => {
            //     this.onRevert();
            // },
        // );
    }

    /**
     *  Reset form
     */
    onRevert() {
        this.loginForm.reset({ name: '', email: '', password: '' });
        this.isLoading = false;
        // this.recaptcha.reset();
    }

    /**
     *  Go to Forgot Password page
     */
    onForgotPassword() {
        this.router.navigate(['forgot-password'], { relativeTo: this.route });
    }

    onRefresh() {
        if (this.authService.getSession()) {
            if (jwt_decode(this.authService.getSession().token.accessToken).exp < Date.now() / 1000) {
                this.createFormRefresh();
                const loginForm = this.loginFormRefresh.getRawValue();
                this.isLoading = true;
                console.log('this.userSession.token.refreshToken', this.authService.getSession().token.refreshToken);
                this.authService.setSession(this.authService.getSession().token.refreshToken);
                this.store.dispatch(new RefreshToken(loginForm, this.authService.getSession().token.accessToken));
            }
        }
    }
    header: any;
    topic1: string;
    topic2: string;
    topic: string;

    _connect() {
        if (this.authService.getSession()) {
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
                if (_this.stompClient !== null) {
                    _this.stompClient.disconnect();
                    if (_this.authService.isLoggedIn()) {
                        _this._connect();
                    }
                }
            });

        }
        else {
            if (this.stompClient !== null) {
                this.stompClient.disconnect();
            }

        }
    }
    _disconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
    }

}
