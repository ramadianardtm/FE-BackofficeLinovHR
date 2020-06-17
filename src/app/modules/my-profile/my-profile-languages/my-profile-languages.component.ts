import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'app/shared/models/table.interface';
import { onConstructTableHeader } from 'app/shared/utils';

@Component({
  selector: 'app-my-profile-languages',
  templateUrl: './my-profile-languages.component.html',
  styleUrls: ['./my-profile-languages.component.scss']
})
export class MyProfileLanguagesComponent implements OnInit {

  languageColumns: TableColumn[]

  constructor() { 
    this.languageColumns = onConstructTableHeader([
      'Language',
      'Speaking',
      'Writing',
      'Listening',
    ]);
  }

  ngOnInit() {
  }

}
