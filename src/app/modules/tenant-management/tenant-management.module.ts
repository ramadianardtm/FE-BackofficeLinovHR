import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantManagementRoutingModule } from './tenant-management-routing.module';
import { TenantModule } from '../tenant/tenant.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TenantModule,
    TenantManagementRoutingModule
  ]
})
export class TenantManagementModule { }
