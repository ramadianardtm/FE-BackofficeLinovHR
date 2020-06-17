import { Component, OnInit } from '@angular/core';
import { onConstructTableHeader } from 'app/shared/utils';
import { TableColumn } from 'app/shared/models/table.interface';

export interface education{
  degree;
  institution;
  gradeType;
  grade;
  beginYear;
  endYear;
}

@Component({
  selector: 'app-my-profile-education',
  templateUrl: './my-profile-education.component.html',
  styleUrls: ['./my-profile-education.component.scss']
})
export class MyProfileEducationComponent implements OnInit {

  educationColumns: TableColumn[];
  educations: education[] = [];
  education: education;
  selectedEducation: education;
  newEducation: boolean;
  displayDialog: boolean;

  constructor() { 
    this.educationColumns = onConstructTableHeader([
      'Degree',
      'Institution',
      'Grade Type',
      'Grade',
      'Begin Year',
      'End Year',
    ]);
    
    this.educations = [
      {
        degree:'Bachelor ',
        institution:'University Of Indonesia ',
        gradeType:'CGPA 4.0',
        grade:'3.5',
        beginYear:'2015',
        endYear:'2019'
      }
    ]
  }


  ngOnInit() {
  }

  cloneEducation(e: education): education {
    let edu : education = {
      beginYear: '',
      degree: '',
      endYear: '',
      grade: '',
      gradeType: '',
      institution: '',
    };
    for(let prop in e){
      edu[prop]=e[prop]
    }
    return edu;
  }

  addEducation(){
    this.newEducation = true;
    this.education = {
      beginYear: '',
      degree: '',
      endYear: '',
      grade: '',
      gradeType: '',
      institution: '',
    };
    this.displayDialog = true;
  }

  onSave() {
    let educations = [...this.educations];
    if(this.newEducation){
      educations.push(this.education);
    } else {
      educations[this.educations.indexOf(this.selectedEducation)]=this.education;
    }
    this.educations = educations;
    this.education = null;
    this.displayDialog = false;
  }

  onDelete() {
    let index = this.educations.indexOf(this.selectedEducation);
    this.educations = this.educations.filter((val, i) => i != index);
    this.education = null;
    this.displayDialog = false;
  }

  onRowSelect(event){
    this.newEducation = false;
    this.education = this.cloneEducation(event.data);
    this.displayDialog = true;
  }

}
