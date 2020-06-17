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

  addWorkExperience(){
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
    this.workExperiences.push(this.workExperience)
  }

}
