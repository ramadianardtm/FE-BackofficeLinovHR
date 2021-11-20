import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';

import { LoginPageComponent } from './pages/login/login.component';
import { LaddaModule } from 'angular2-ladda';
import { HomeComponent } from './home/home.component';
import { CheckboxModule } from 'primeng/primeng';
import { LovModule } from 'app/shared/components/lov/lov.module';
import { LoggerFormModule } from 'app/shared/components/logger-form/logger-form.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { TenantCreateComponent } from './tenant-create/tenant-create.component';
import { GlobalAllModule } from 'app/global-all/global-all.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { TenantDetailComponent } from './tenant-detail/tenant-detail.component';
import { TenantComponent } from './tenant/tenant.component';
import { TenantUpdateComponent } from './tenant-update/tenant-update.component';
import { PackageComponent } from './package/package.component';
import { PackageDetailComponent } from './package-detail/package-detail.component';
import { PackageUpdateComponent } from './package-update/package-update.component';
import { PackageCreateComponent } from './package-create/package-create.component';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ProgressBarModule} from 'primeng/progressbar';
import { OrderModule } from 'ngx-order-pipe';
import { Select2Module } from 'ng2-select2';
import { FormPackageComponent } from './form-package/form-package.component';

@NgModule({
    imports: [Select2Module, ProgressBarModule, ProgressSpinnerModule,SharedModule, LaddaModule, CheckboxModule, LovModule, LoggerFormModule,GlobalAllModule,Ng2SearchPipeModule,FormsModule, TreeViewModule, 
        OrderModule],
    declarations: [
        LoginPageComponent,
        HomeComponent,
        SignInComponent,
        TenantCreateComponent,
        TenantDetailComponent,
        TenantComponent,
        TenantUpdateComponent,
        PackageComponent,
        PackageDetailComponent,
        PackageUpdateComponent,
        PackageCreateComponent,
        FormPackageComponent,
      
        
    ],
})
export class LoginModule { }
