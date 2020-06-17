import { Component, OnInit } from '@angular/core';

export interface orgExperience{
  name;
  role;
  start;
  end;
  description;
}

@Component({
  selector: 'app-my-profile-organization-experience',
  templateUrl: './my-profile-organization-experience.component.html',
  styleUrls: ['./my-profile-organization-experience.component.scss']
})
export class MyProfileOrganizationExperienceComponent implements OnInit {

  orgExperiences: orgExperience[] = [];
  orgExperience: orgExperience;
  displayDialog: boolean;
  newOrgExp: boolean;
  selectedOrgExp: orgExperience;

  constructor() { 
    this.orgExperiences = [
    {
      name: 'Karang Taruna',
      role: 'Leader',
      start: '21-Mar-2010',
      end: '20-Mar-2010',
      description: ['Lead the team and ensure the harmony between members']
    }
    ]
  }

  ngOnInit() {
  }

  cloneOrgExp(o: orgExperience): orgExperience {
    let org : orgExperience = {
      name: '',
      start: '',
      end: '',
      role: '',
      description: null,
    };
    for(let prop in o){
      org[prop]=o[prop]
    }
    return org;
  }

  addOrg(){
    this.newOrgExp = true;
    this.orgExperience =
      {
        name: '',
        start: '',
        end: '',
        role: '',
        description: null,
      }
    
    this.displayDialog = true;
  }

  onSave(){
    let orgExperiences = [...this.orgExperiences];
    if(this.newOrgExp){
      orgExperiences.push(this.orgExperience);
    } else {
      // console.log("index : ", this.orgExperiences.indexOf(this.selectedOrgExp));
      orgExperiences[this.orgExperiences.indexOf(this.selectedOrgExp)+1]=this.orgExperience;
    }
    this.orgExperiences = orgExperiences;
    this.orgExperience = null;
    this.displayDialog = false;
  }

  edit(org){
    this.newOrgExp = false;
    this.orgExperience = this.cloneOrgExp(org);
    this.selectedOrgExp = this.orgExperience;
    this.displayDialog = true;
  }

}
