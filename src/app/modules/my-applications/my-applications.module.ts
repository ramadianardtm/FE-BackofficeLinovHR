import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyApplicationsListComponent } from './my-applications-list/my-applications-list.component';
import { MyApplicationsDetailComponent } from './my-applications-detail/my-applications-detail.component';
import { MyApplicationsComponent } from './my-applications/my-applications.component';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule, CardModule, PanelModule, CarouselModule, StepsModule } from 'primeng/primeng';

@NgModule({
  declarations: [MyApplicationsListComponent, MyApplicationsDetailComponent, MyApplicationsComponent],
  imports: [
    CommonModule, 
    PaginatorModule,
    DialogModule,
    CardModule,
    PanelModule,
    CarouselModule,
    StepsModule,
    ButtonModule
  ]
})
export class MyApplicationsModule { }
