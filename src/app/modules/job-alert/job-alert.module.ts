import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobAlertListComponent } from './job-alert-list/job-alert-list.component';
import { JobAlertDetailComponent } from './job-alert-detail/job-alert-detail.component';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from "primeng/messages";
import { DialogModule, RadioButtonModule} from 'primeng/primeng';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [JobAlertListComponent, JobAlertDetailComponent],
  imports: [
    CommonModule,
    ButtonModule,
    MessagesModule,
    DialogModule,
    RadioButtonModule,
    FormsModule ,
    ConfirmDialogModule
  ]
})
export class JobAlertModule { }
