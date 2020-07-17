import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// import { ForgotPasswordComponent } from './components/Authentication/forgot-password/forgot-password.component';


import { LoginPageComponent } from './core/layouts/login/pages/login/login.component';


import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './core/layouts/login/home/home.component';
import { SignInComponent } from './core/layouts/login/sign-in/sign-in.component';



const routes: Routes = [
    // TopBar Routes

    // Authetication Routes

    {
        path: 'home',
        component: LoginPageComponent,
        children: [{
            path: '',
            component: HomeComponent
        }]

    },
    {
        path: 'login',
        component: SignInComponent

    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }
