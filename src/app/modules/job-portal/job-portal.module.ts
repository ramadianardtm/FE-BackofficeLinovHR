import { NgModule } from '@angular/core';

import { JobPortalRoutingModule } from './job-portal-routing.module';
import { JobVacancyModule } from '../job-vacancy/job-vacancy.module';
import { MyProfileModule } from '../my-profile/my-profile.module';
import { MyApplicationsModule } from '../my-applications/my-applications.module';
import { JobAlertModule } from '../job-alert/job-alert.module';
import { SavedJobsModule } from '../saved-jobs/saved-jobs.module';
import { SharedModule } from 'app/shared/shared.module';
import { AccountSettingModule } from '../account-setting/account-setting.module';
import { HelpPageModule } from '../help-page/help-page.module';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    JobPortalRoutingModule,
    JobVacancyModule,
    MyProfileModule,
    MyApplicationsModule,
    JobAlertModule,
    SavedJobsModule,
    AccountSettingModule,
    HelpPageModule
  ]
})
export class JobPortalModule { }
