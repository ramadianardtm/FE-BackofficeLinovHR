import { Component, OnInit } from '@angular/core';
import { onConstructTableHeader } from 'app/shared/utils';
import { TableColumn } from 'app/shared/models/table.interface';
import { isThisMinute } from 'date-fns';

export interface documents {
  type;
  name;
  exp;
  document;
  size;
  uploadTime;
}

@Component({
  selector: 'app-my-profile-documents',
  templateUrl: './my-profile-documents.component.html',
  styleUrls: ['./my-profile-documents.component.scss']
})
export class MyProfileDocumentsComponent implements OnInit {

  documentColumns: TableColumn[];
  newDocument: boolean;
  documents: documents[] = [];
  document: documents;
  displayDialog: boolean;
  selectedDocument: documents;
  
  constructor() { 
    this.documentColumns = onConstructTableHeader([
      'No.',
      'Type',
      'Name',
      'EXP',
      'Document',
      'Size',
      'Upload Time',
    ]);
  }

  ngOnInit() {
  }

  cloneDocument(d: documents): documents {
    let doc = {
      document: '',
      exp: '',
      name: '',
      size: '',
      type: '',
      uploadTime: '',
    };
    for(let prop in d){
      doc[prop]=d[prop]
    }
    return doc;
  }

  addDocument(){
    this.newDocument = true;
    this.document = {
      document: '',
      exp: '',
      name: '',
      size: '',
      type: '',
      uploadTime: '',
    };
    this.displayDialog = true;
  }

  onSave() {
    let documents = [...this.documents];
    if(this.newDocument){
      documents.push(this.document);
    } else {
      documents[this.documents.indexOf(this.selectedDocument)]=this.document;
    }

    this.documents = documents;
    this.document = null;
    this.displayDialog = false;
  }

  onDelete() {
    let index = this.documents.indexOf(this.selectedDocument);
    this.documents = this.documents.filter((val, i) => i != index);
    this.document = null;
    this.displayDialog = false;
  }

  onRowSelect(event){
    this.newDocument = false;
    this.document = this.cloneDocument(event.data);
    this.displayDialog = true;
  }

}
