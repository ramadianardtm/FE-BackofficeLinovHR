import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobVacancyNonuserComponent } from './job-vacancy-nonuser.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule, CardModule, PanelModule, CarouselModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/dropdown';
import { ChipsModule } from 'primeng/chips';
import { SharedModule } from 'app/shared/shared.module';
import { JobDetailComponent } from './job-detail.component';

@NgModule({
  declarations: [JobVacancyNonuserComponent, JobDetailComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class JobVacancyNonuserModule { }
