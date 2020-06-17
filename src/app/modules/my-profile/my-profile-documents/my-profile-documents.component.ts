import { Component, OnInit } from '@angular/core';
import { onConstructTableHeader } from 'app/shared/utils';
import { TableColumn } from 'app/shared/models/table.interface';

@Component({
  selector: 'app-my-profile-documents',
  templateUrl: './my-profile-documents.component.html',
  styleUrls: ['./my-profile-documents.component.scss']
})
export class MyProfileDocumentsComponent implements OnInit {

  documentColumns: TableColumn[]
  
  constructor() { 
    this.documentColumns = onConstructTableHeader([
      'No.',
      'Type',
      'Name',
      'EXP',
      'Document',
      'Size',
      'Upload Time',
    ])
  }

  ngOnInit() {
  }

}
