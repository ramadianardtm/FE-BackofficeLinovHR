import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from 'app/core/http/api.service';

import { AppConstant } from 'app/configs/app.config';

@Component({
    selector: 'app-login-forgot-password',
    templateUrl: 'forgot-password.component.html',
    styleUrls: ['forgot-password.component.sass'],
})
export class ForgotPasswordComponent {
    forgotForm: FormGroup;

    successMsg: string;
    errorMsg: string;
    isLoading = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private apiService: ApiService
    ) {
        this.createForm();
    }

    get username() {
        return this.forgotForm.get('username');
    }

    get email() {
        return this.forgotForm.get('email');
    }

    /**
     *  Construct new Form Structure
     */
    private createForm() {
        this.forgotForm = this.formBuilder.group({
            username: [
                '',
                [
                    Validators.required,
                    Validators.pattern(new RegExp(/^[a-zA-Z0-9]*$/)),
                ],
            ],
            email: ['', Validators.required],
            // 'g-recaptcha-response': [''],
        });
    }

    /**
     *  Send Forgot Password data
     */
    onSubmit() {
        const forgotForm = this.forgotForm.getRawValue();
        this.isLoading = true;

        forgotForm.isEss = false;
        forgotForm.applicationId = AppConstant.applicationId;

        this.apiService.post('forgot-password', forgotForm).subscribe(
            (resp: string) => {
                this.successMsg = 'Password Confirmation Link Sent';
            },
            (err: string) => {
                this.errorMsg = err;
                this.onRevert();
            }
        );
    }

    /**
     *  Reset form
     */
    onRevert() {
        this.forgotForm.reset({ username: '', email: '' });
        this.isLoading = false;
        // this.recaptcha.reset();
    }

    /**
     *  Go to Sign In page
     */
    onSignIn() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }
}
