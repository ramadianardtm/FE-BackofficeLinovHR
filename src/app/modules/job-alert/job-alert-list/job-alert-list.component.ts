import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message } from 'primeng/api';

@Component({
  selector: 'app-job-alert-list',
  templateUrl: './job-alert-list.component.html',
  styleUrls: ['./job-alert-list.component.scss'],
  providers: [ConfirmationService]
})
export class JobAlertListComponent implements OnInit {

  selectedValueFreq: string;
  selectedValueNotif: string;
  msgs: Message[] = [];
  display: boolean = false;
  display2: boolean = false;

  showDialog() {
      this.display = true;
  }
  showDialog2() {
    this.display2 = true;
}

  position: string;
  constructor(private confirmationService :ConfirmationService) { }

  ngOnInit() {
  }
  confirm1() {
    this.confirmationService.confirm({
        message: 'Manage Job Alert',
        header: 'Manage Job Alert',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
        },
        reject: () => {
            this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        }
    });
}

// confirm2() {
//     this.confirmationService.confirm({
//         message: 'You are about to delete the job alert for Programmer, Jakarta, Indonesia. This cannot be undone',
//         header: 'Delete Job Alert',
//         icon: 'pi pi-info-circle',
//         accept: () => {
//             this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
//         },
//         reject: () => {
//             this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
//         }
//     });
// }

confirmPosition(position: string) {
    this.position = position;

    this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
        },
        reject: () => {
            this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        },
        key: "positionDialog"
    });
}

}
