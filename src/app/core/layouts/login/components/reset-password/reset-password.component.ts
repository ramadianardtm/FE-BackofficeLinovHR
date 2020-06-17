import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from 'app/core/http/api.service';

import { AppConstant } from 'app/configs/app.config';

@Component({
    selector: 'app-login-reset-password',
    templateUrl: 'reset-password.component.html',
    styleUrls: ['reset-password.component.sass'],
})
export class ResetPasswordComponent {
    resetForm: FormGroup;

    successMsg: string;
    errorMsg: string;
    isLoading = false;
    passwordInputType = 'password';
    passwordConfirmationInputType = 'password';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private apiService: ApiService
    ) {
        this.createForm();
    }

    get password() {
        return this.resetForm.get('password');
    }

    get passwordConfirmation() {
        return this.resetForm.get('passwordConfirmation');
    }

    /**
     *  Construct new Form Structure
     */
    private createForm() {
        this.resetForm = this.formBuilder.group({
            password: ['', Validators.required],
            passwordConfirmation: ['', Validators.required],
            // 'g-recaptcha-response': [''],
        });
    }

    /**
     *  Send Reset Password data
     */
    onSubmit() {
        const resetForm = this.resetForm.getRawValue();
        this.isLoading = true;

        resetForm.isEss = false;
        resetForm.applicationId = AppConstant.applicationId;

        this.apiService.post('reset-password', resetForm).subscribe(
            (resp: string) => {
                this.successMsg = 'Password has Been Reset Successfully';
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
        this.resetForm.reset({ password: '', passwordConfirmation: '' });
        this.isLoading = false;
        // this.recaptcha.reset();
    }

    /**
     *  Toggle show password
     */
    onShowPassword(): void {
        this.passwordInputType === 'text'
            ? (this.passwordInputType = 'password')
            : (this.passwordInputType = 'text');
    }

    /**
     *  Toggle show confirm password
     */
    onShowPasswordConfirmation(): void {
        this.passwordConfirmationInputType === 'text'
            ? (this.passwordConfirmationInputType = 'password')
            : (this.passwordConfirmationInputType = 'text');
    }

    /**
     *  Generate random password and display to UI
     */
    onGeneratePassword(): void {
        let resultAlpaUpp = '';
        const alpaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const alpaUpperLen = alpaUpper.length;
        for (let i = 0; i < 2; i++) {
            resultAlpaUpp += alpaUpper.charAt(
                Math.floor(Math.random() * alpaUpperLen)
            );
        }

        let resultAlpaLow = '';
        const alpaLow = 'abcdefghijklmnopqrstuvwxyz';
        const alpaLowLen = alpaLow.length;
        for (let i = 0; i < 2; i++) {
            resultAlpaLow += alpaLow.charAt(
                Math.floor(Math.random() * alpaLowLen)
            );
        }

        let resultNumb = '';
        const randNumber = '1234567890';
        const NumberLen = randNumber.length;
        for (let i = 0; i < 2; i++) {
            resultNumb += randNumber.charAt(
                Math.floor(Math.random() * NumberLen)
            );
        }

        let specialChart = '';
        const special = '!@#$%^&*';
        const specialChartLen = special.length;
        for (let i = 0; i < 2; i++) {
            specialChart += special.charAt(
                Math.floor(Math.random() * specialChartLen)
            );
        }

        const concatChart = resultAlpaLow.concat(
            resultAlpaUpp,
            resultNumb,
            specialChart
        );
        this.resetForm.patchValue({
            password: concatChart,
            passwordConfirmation: concatChart,
        });
    }

    /**
     *  Go to Sign In page
     */
    onForgotPassword() {
        this.router.navigate(['login'], { relativeTo: this.route });
    }
}
