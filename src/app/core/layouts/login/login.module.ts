import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';

import { LoginPageComponent } from './pages/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { LaddaModule } from 'angular2-ladda';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { CheckboxModule } from 'primeng/primeng';
import { HeaderService } from '../home/components/header/shared/header.service';
// import { MyappDetailComponent } from './my-applications/myapp-detail/myapp-detail.component';
// import { MyappListComponent } from './my-applications/myapp-list/myapp-list.component';
import { JobVacancyNonuserModule } from '../../../modules/job-vacancy-nonuser/job-vacancy-nonuser.module';
@NgModule({
    imports: [SharedModule, LaddaModule, CheckboxModule, JobVacancyNonuserModule],
    declarations: [
        LoginPageComponent,
        SignInComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        HomeComponent,
        RegisterComponent,
    ],
    providers: [],
})
export class LoginModule { }
