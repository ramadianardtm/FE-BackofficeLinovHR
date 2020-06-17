import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { SavedJobsComponent } from './saved-jobs/saved-jobs.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule, CardModule, PanelModule, CarouselModule, MessagesModule } from 'primeng/primeng';

@NgModule({
  declarations: [SavedJobsComponent, DetailComponent, ListComponent],
  imports: [
    CommonModule,
    TableModule,
    PaginatorModule,
    DialogModule,
    CardModule,
    PanelModule,
    CarouselModule,
    MessagesModule,
    ButtonModule
  ]
})
export class SavedJobsModule { }
