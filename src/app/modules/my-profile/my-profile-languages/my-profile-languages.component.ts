import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'app/shared/models/table.interface';
import { onConstructTableHeader } from 'app/shared/utils';

interface language{
  language;
  speaking;
  writing;
  listening;
}

@Component({
  selector: 'app-my-profile-languages',
  templateUrl: './my-profile-languages.component.html',
  styleUrls: ['./my-profile-languages.component.scss']
})
export class MyProfileLanguagesComponent implements OnInit {

  languageColumns: TableColumn[];
  languages: language[] = [];
  language: language;
  selectedLanguage: language;
  displayDialog: boolean;
  newLanguage: boolean;

  constructor() { 
    this.languageColumns = onConstructTableHeader([
      'Language',
      'Speaking',
      'Writing',
      'Listening',
    ]);

    this.languages = [
      {
        language: 'English',
        speaking: '90',
        writing: '80',
        listening: '85',
      },
    ]
  }

  ngOnInit() {
  }

  clonelanguage(l: language): language {
    let lang : language = {
      language: '',
      speaking: '',
      writing: '',
      listening: '',
    };
    for(let prop in l){
      lang[prop]=l[prop]
    }
    return lang;
  }

  addLanguage(){
    this.newLanguage = true;
    this.language = {
      language: '',
      speaking: '',
      writing: '',
      listening: '',
    };
    this.displayDialog = true;
  }

  onSave() {
    let languages = [...this.languages];
    if(this.newLanguage){
      languages.push(this.language);
    } else {
      languages[this.languages.indexOf(this.selectedLanguage)]=this.language;
    }

    this.languages = languages;
    this.language = null;
    this.displayDialog = false;
  }

  onDelete() {
    let index = this.languages.indexOf(this.selectedLanguage);
    this.languages = this.languages.filter((val, i) => i != index);
    this.language = null;
    this.displayDialog = false;
  }

  onRowSelect(event){
    this.newLanguage = false;
    this.language = this.clonelanguage(event.data);
    this.displayDialog = true;
  }

}
