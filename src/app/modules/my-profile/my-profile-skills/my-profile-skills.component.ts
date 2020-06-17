import { Component, OnInit } from '@angular/core';
import { onConstructTableHeader } from 'app/shared/utils';
import { TableColumn } from 'app/shared/models/table.interface';

export interface skill{
  skill,
  level
}

@Component({
  selector: 'app-my-profile-skills',
  templateUrl: './my-profile-skills.component.html',
  styleUrls: ['./my-profile-skills.component.scss']
})
export class MyProfileSkillsComponent implements OnInit {

  skillColumns: TableColumn[];
  skills: skill[] = [];
  skill: skill;
  selectedSkill: skill;
  selectedSkillLevel: any;
  displayDialog: boolean;
  newSkill;
  skillLevel: any[];

  constructor() { 
    this.skillColumns = onConstructTableHeader([
      'Skill',
      'Level',
    ]);
  }

  ngOnInit() {
  }

  cloneSkill(s: skill): skill {
    let skill : skill = {
      level: '',
      skill: '',
    };
    for(let prop in s){
      skill[prop]=s[prop]
    }
    return skill;
  }

  addSkill(){
    this.newSkill = true;
    this.skill = {
      level: '',
      skill: '',
    };
    this.displayDialog = true;
  }

  onSave() {
    let skills = [...this.skills];
    if(this.newSkill){
      skills.push(this.skill);
    } else {
      skills[this.skills.indexOf(this.selectedSkill)]=this.skill;
    }
    this.skills = skills;
    this.skill = null;
    this.displayDialog = false;
  }

  onDelete() {
    let index = this.skills.indexOf(this.selectedSkill);
    this.skills = this.skills.filter((val, i) => i != index);
    this.skill = null;
    this.displayDialog = false;
  }

  onRowSelect(event){
    this.newSkill = false;
    this.skill = this.cloneSkill(event.data);
    this.displayDialog = true;
  }
}
