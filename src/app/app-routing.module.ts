import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// import { ForgotPasswordComponent } from './components/Authentication/forgot-password/forgot-password.component';


import { LoginPageComponent } from './core/layouts/login/pages/login/login.component';


import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './core/layouts/login/home/home.component';
import { SignInComponent } from './core/layouts/login/sign-in/sign-in.component';

import { TenantComponent } from './core/layouts/login/tenant/tenant.component';
import { TenantCreateComponent } from './core/layouts/login/tenant-create/tenant-create.component';
import { TenantUpdateComponent } from './core/layouts/login/tenant-update/tenant-update.component';
import { TenantDetailComponent } from './core/layouts/login/tenant-detail/tenant-detail.component';

import { PackageComponent } from './core/layouts/login/package/package.component';
import { PackageCreateComponent } from './core/layouts/login/package-create/package-create.component';
import { PackageUpdateComponent } from './core/layouts/login/package-update/package-update.component';
import { PackageDetailComponent } from './core/layouts/login/package-detail/package-detail.component';

const routes: Routes = [
    // TopBar Routes

    // Authetication Routes

    {
        path: 'home',
        component: LoginPageComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'tenant',
                component: TenantComponent
            },
            {
                path: 'tenant/detail/:uuid',
                component: TenantDetailComponent
            },
            {
                path: 'tenant/update/:uuid',
                component: TenantUpdateComponent
            },
            {
                path: 'tenant/add',
                component: TenantCreateComponent
            },
            {
                path: 'package',
                component: PackageComponent
            },
            {
                path: 'package/detail/:uuid',
                component: PackageDetailComponent
            },
            {
                path: 'package/update/:uuid',
                component: PackageUpdateComponent
            },
            {
                path: 'package/add',
                component: PackageCreateComponent
            },
        ]
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
