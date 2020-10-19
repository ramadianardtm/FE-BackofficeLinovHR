import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';

import { LoginPageComponent } from './pages/login/login.component';
import { LaddaModule } from 'angular2-ladda';
import { HomeComponent } from './home/home.component';
import { CheckboxModule } from 'primeng/primeng';
import { HeaderService } from '../home/components/header/shared/header.service';
import { LovModule } from 'app/shared/components/lov/lov.module';
import { LoggerFormModule } from 'app/shared/components/logger-form/logger-form.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { TenantCreateComponent } from './tenant-create/tenant-create.component';
import { GlobalAllModule } from 'app/global-all/global-all.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { DetailTenantComponent } from './detail-tenant/detail-tenant.component';
import { TenantDetailComponent } from './tenant-detail/tenant-detail.component';
import { TenantComponent } from './tenant/tenant.component';
import { TenantUpdateComponent } from './tenant-update/tenant-update.component';
import { PackageComponent } from './package/package.component';
import { PackageDetailComponent } from './package-detail/package-detail.component';
import { PackageUpdateComponent } from './package-update/package-update.component';
import { PackageCreateComponent } from './package-create/package-create.component';
// import { MyappDetailComponent } from './my-applications/myapp-detail/myapp-detail.component';
// import { MyappListComponent } from './my-applications/myapp-list/myapp-list.component';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ProgressBarModule} from 'primeng/progressbar';

import { Select2Module } from 'ng2-select2';
@NgModule({
    imports: [Select2Module,  ProgressBarModule, ProgressSpinnerModule,SharedModule, LaddaModule, CheckboxModule, LovModule, LoggerFormModule,GlobalAllModule,Ng2SearchPipeModule,FormsModule, TreeViewModule,],
    declarations: [
        LoginPageComponent,
        HomeComponent,
        SignInComponent,
        TenantCreateComponent,
        DetailTenantComponent,
        TenantDetailComponent,
        TenantComponent,
        TenantUpdateComponent,
        PackageComponent,
        PackageDetailComponent,
        PackageUpdateComponent,
        PackageCreateComponent,
      
        
    ],
})
export class LoginModule { }
