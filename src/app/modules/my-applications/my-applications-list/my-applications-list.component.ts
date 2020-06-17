import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'app/shared/models/table.interface';
import { Paginator } from 'app/configs/paginator.config';
import { FormGroup } from '@angular/forms';
import { SelectItemGroup } from 'primeng/components/common/selectitemgroup';
import { onConstructTableHeader } from 'app/shared/utils/construct-table-header';

@Component({
  selector: 'app-my-applications-list',
  templateUrl: './my-applications-list.component.html',
  styleUrls: ['./my-applications-list.component.scss']
})
export class MyApplicationsListComponent implements OnInit {
  myAppDetailsColumn: TableColumn[];
  rowsPerPage = Paginator.rowsPerPage;
  rowsPerPageOptions = Paginator.rowsPerPageOptions;
  formReady: FormGroup;
  moveTo: SelectItemGroup[];
  myAppData: any[];
  cols: any[];

  constructor() {

    this.myAppDetailsColumn = onConstructTableHeader([
      'Logo',
      'Job',
      'Progress',
      'Withdraw',
    ]),
    this.cols = [
      'LOGO',
      'JOB',
      'Progress',
      'Withdraw'
    ];

    this.moveTo = [
      {
          label: 'Move', 
          items: [
              {label: 'Application', value: 'Application'},
              {label: 'Asessment', value: 'Asessment'},
              {label: 'Interview', value: 'Interview'},
              {label: 'Offer', value: 'Offer'},
              {label: 'Onboarding', value: 'Onboarding'},
          ]
      }
    ];
   }

  ngOnInit(){ 
  }
}
