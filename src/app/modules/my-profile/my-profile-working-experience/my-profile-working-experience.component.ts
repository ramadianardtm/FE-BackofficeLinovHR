import { Component, OnInit } from '@angular/core';

export interface workExperience{
  occupation;
  company;
  location;
  start;
  end;
  responsibility;
  benefit;
  reason;
}

@Component({
  selector: 'app-my-profile-working-experience',
  templateUrl: './my-profile-working-experience.component.html',
  styleUrls: ['./my-profile-working-experience.component.scss']
})
export class MyProfileWorkingExperienceComponent implements OnInit {

  workExperiences: workExperience[] = [];
  workExperience: workExperience;
  displayDialog: boolean;
  newWorkExp: boolean;
  selectedWorkExp: workExperience;

  constructor() { 
    this.workExperiences = [
      {
        occupation: 'Programmer',
        company: 'PT. Lawencon Internasional',
        location: 'Jakarta - Indonesia',
        start: 'Mar 2010',
        end: 'Jan 2013',
        responsibility: ['Making programs on client', 'Debugging programs'],
        benefit: ['BPJS'],
        reason: 'Want to find a whole new experience',
      }
    ]
  }

  ngOnInit() {
  }

  cloneWorkExp(w: workExperience): workExperience {
    let work : workExperience = {
      occupation: '',
        company: '',
        location: '',
        start: '',
        end: '',
        responsibility: null,
        benefit: null,
        reason: '',
    };
    for(let prop in w){
      work[prop]=w[prop]
    }
    return work;
  }

  addWorkExperience(){
    this.newWorkExp = true;
    this.workExperience =
      {
        occupation: '',
        company: '',
        location: '',
        start: '',
        end: '',
        responsibility: null,
        benefit: null,
        reason: '',
      }
    
    this.displayDialog = true;
  }

  onSave(){
    let workExperiences = [...this.workExperiences];
    if(this.newWorkExp){
      workExperiences.push(this.workExperience);
    } else {
      // console.log("index : ", this.workExperiences.indexOf(this.selectedWorkExp));
      workExperiences[this.workExperiences.indexOf(this.selectedWorkExp)+1]=this.workExperience;
    }
    this.workExperiences = workExperiences;
    this.workExperience = null;
    this.displayDialog = false;
  }

  edit(work){
    this.newWorkExp = false;
    this.workExperience = this.cloneWorkExp(work);
    this.selectedWorkExp = this.workExperience;
    this.displayDialog = true;    
  }

  delete(work){
    let index = this.workExperiences.indexOf(work);
    this.workExperiences = this.workExperiences.filter((val, i)=> i != index);
    this.workExperience = null;
  }

}
