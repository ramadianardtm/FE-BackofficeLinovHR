import { Component, OnInit } from '@angular/core';
import { onConstructTableHeader } from 'app/shared/utils';
import { TableColumn } from 'app/shared/models/table.interface';
import { Family } from 'app/shared/models/recruitment-candidate.interface';
import { ViewEncapsulation } from '@angular/compiler/src/core';

export interface familyMembers{
  name;
  relationship;
  gender;
  phone;
  birthdate;
  education;
  occupation;
  // note;
}

@Component({
  selector: 'app-my-profile-family-members',
  templateUrl: './my-profile-family-members.component.html',
  styleUrls: ['./my-profile-family-members.component.scss']
})
export class MyProfileFamilyMembersComponent implements OnInit {

  familyColumns: TableColumn[]
  displayDialog: boolean
  family: familyMembers;
  selectedFamily: familyMembers;
  familyMembers: familyMembers[];
  newFamily: boolean;

  constructor() { 
    this.familyColumns = onConstructTableHeader([
      'Name',
      'Relationship',
      'Gender',
      // 'Phone',
      'Date Of Birth',
      'Education',
      'Occupation',
      // 'Note',
    ]);

    this.familyMembers = [
      {name: 'Rizky',
      birthdate: '30-03-1997',
      education: 'Bachelor',
      gender: 'Male',
      // note: 'Currently at Jakarta',
      occupation: 'Programmer',
      phone: '08987126883',
      relationship: 'Brother'
      }
    ]
  }

  ngOnInit() {
  }

  cloneFamily(f: familyMembers): familyMembers {
    let fam : familyMembers = {
      birthdate: '',
      education: '',
      gender: '',
      name: '',
      // note: '',
      occupation: '',
      phone: '',
      relationship: ''
    };
    for(let prop in f){
      fam[prop]=f[prop]
    }
    return fam;
  }

  addFamilyDialog(){
    this.newFamily = true;
    this.family = {
      birthdate: '',
      education: '',
      gender: '',
      name: '',
      // note: '',
      occupation: '',
      phone: '',
      relationship: ''
    };
    this.displayDialog = true;
  }

  onSave() {
    let familyMembers = [...this.familyMembers];
    if(this.newFamily){
      familyMembers.push(this.family);
    } else {
      familyMembers[this.familyMembers.indexOf(this.selectedFamily)]=this.family;
    }

    this.familyMembers = familyMembers;
    this.family = null;
    this.displayDialog = false;
  }

  onDelete() {
    let index = this.familyMembers.indexOf(this.selectedFamily);
    this.familyMembers = this.familyMembers.filter((val, i) => i != index);
    this.family = null;
    this.displayDialog = false;
  }

  onRowSelect(event){
    this.newFamily = false;
    this.family = this.cloneFamily(event.data);
    this.displayDialog = true;
  }

}
