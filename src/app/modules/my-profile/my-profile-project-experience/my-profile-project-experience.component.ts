import { Component, OnInit } from '@angular/core';

export interface projectExperience{
  name;
  start;
  end;
  url;
  description;
}

@Component({
  selector: 'app-my-profile-project-experience',
  templateUrl: './my-profile-project-experience.component.html',
  styleUrls: ['./my-profile-project-experience.component.scss']
})
export class MyProfileProjectExperienceComponent implements OnInit {

  projectExperiences: projectExperience[] = [];
  projectExperience: projectExperience;
  newProjectExperience: boolean;
  displayDialog: boolean;
  selectedProjectExperience: projectExperience;

  constructor() { 
    this.projectExperiences = [
      {
        name: 'Linov HR',
        start: '21-Mar-2010',
        end: '15-Jan-2013',
        url: 'demo4.linovhr.com',
        description: ['Building an app for human resource department uses']
      }
    ]
  }

  ngOnInit() {
  }

  cloneProjectExp(p: projectExperience): projectExperience {
    let project : projectExperience = {
      name: '',
      start: '',
      end: '',
      url: '',
      description: null,
    };
    for(let prop in p){
      project[prop]=p[prop]
    }
    return project;
  }

  addProject(){
    this.newProjectExperience = true;
    this.projectExperience =
      {
        name: '',
        start: '',
        end: '',
        url: '',
        description: null,
      }
    
    this.displayDialog = true;
  }

  onSave(){
    let projectExperiences = [...this.projectExperiences];
    if(this.newProjectExperience){
      projectExperiences.push(this.projectExperience);
    } else {
      // console.log("index : ", this.projectExperiences.indexOf(this.selectedProjectExperience));
      projectExperiences[this.projectExperiences.indexOf(this.selectedProjectExperience)+1]=this.projectExperience;
    }
    this.projectExperiences = projectExperiences;
    this.projectExperience = null;
    this.displayDialog = false;
  }

  edit(project){
    this.newProjectExperience = false;
    this.projectExperience = this.cloneProjectExp(project);
    this.selectedProjectExperience = this.projectExperience;
    this.displayDialog = true;
  }

}
