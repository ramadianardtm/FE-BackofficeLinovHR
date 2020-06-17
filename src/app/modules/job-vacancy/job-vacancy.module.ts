import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobVacancyListComponent } from './job-vacancy-list/job-vacancy-list.component';
import { JobVacancyDetailComponent } from './job-vacancy-detail/job-vacancy-detail.component';
import { JobVacancyComponent } from './job-vacancy/job-vacancy.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [JobVacancyListComponent, JobVacancyDetailComponent, JobVacancyComponent],
  imports: [
    CommonModule,
    SharedModule

  ]
})
export class JobVacancyModule { }
