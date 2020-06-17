import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CardModule, ChartModule, CheckboxModule, DropdownModule, DialogModule, PasswordModule, AutoCompleteModule, ButtonModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AccountSettingsComponent],
  imports: [
    CommonModule,
    TableModule,
    ChartModule,
    CardModule,
    CheckboxModule,
    FormsModule,
    DropdownModule,
    DialogModule,
    PasswordModule,
    AutoCompleteModule,
    ButtonModule
  ]
})
export class AccountSettingModule { }
