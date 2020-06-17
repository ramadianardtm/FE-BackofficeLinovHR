import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'app/shared/models/table.interface';
import { Paginator } from 'app/configs/paginator.config';
import { FormGroup } from '@angular/forms';
import { SelectItemGroup } from 'primeng/components/common/selectitemgroup';
import { onConstructTableHeader } from 'app/shared/utils/construct-table-header';

@Component({
  selector: 'app-saved-jobs',
  templateUrl: './saved-jobs.component.html',
  styleUrls: ['./saved-jobs.component.scss']
})
export class SavedJobsComponent implements OnInit {

  myAppDetailsColumn: TableColumn[];
  rowsPerPage = Paginator.rowsPerPage;
  rowsPerPageOptions = Paginator.rowsPerPageOptions;
  formReady: FormGroup;
  moveTo: SelectItemGroup[];
  myAppData: any[];
  cols: any[];
  display: boolean = false;

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

  ngOnInit() {
  }
  
  showDialog() {
    this.display = true;
  }

  myFunction(x) {
    x.classList.toggle("fas fa-check-circle");
  }

  change( el )
{
    if ( el.value === "APPLY" )
        el.value = "APPLIED";
    else
        el.value = "APPLIED";
}

}
