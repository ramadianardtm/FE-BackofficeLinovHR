import { Component, OnInit } from '@angular/core';
import { onConstructTableHeader } from 'app/shared/utils';
import { TableColumn } from 'app/shared/models/table.interface';

@Component({
  selector: 'app-my-profile-education',
  templateUrl: './my-profile-education.component.html',
  styleUrls: ['./my-profile-education.component.scss']
})
export class MyProfileEducationComponent implements OnInit {

  educationColumns: TableColumn[]

  constructor() { 
    this.educationColumns = onConstructTableHeader([
      'Degree',
      'Institution',
      'Grade Type',
      'Grade',
      'Begin Year',
      'End Year',
    ]);
  }

  ngOnInit() {
  }

}
