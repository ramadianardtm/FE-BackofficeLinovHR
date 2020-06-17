import { Component, OnInit } from '@angular/core';
import { onConstructTableHeader } from 'app/shared/utils';
import { TableColumn } from 'app/shared/models/table.interface';
import { SelectItem } from 'primeng/api';
import { TableHeaderCheckbox } from 'primeng/table';

export interface skills{
  skill;
  level;
}

@Component({
  selector: 'app-my-profile-skills',
  templateUrl: './my-profile-skills.component.html',
  styleUrls: ['./my-profile-skills.component.scss']
})
export class MyProfileSkillsComponent implements OnInit {

  skillColumns: TableColumn[];
  displayDialog: boolean;
  newSkill;
  skillLevel: SelectItem[] = [];
  skillList: SelectItem[] = [];
  selectedSkillList: string;
  selectedSkillLevel: string;
  skills : skills[] = [];
  skill: skills;

  constructor() { 
    this.skillColumns = onConstructTableHeader([
      'Option',
      'Skill',
      'Level',
    ]);

    this.skillList = [
      {label: 'Java', value: 'Java'},
      {label: 'Angular', value: 'Angular'},
      {label: 'Javascript', value: 'Javascript'},
      {label: 'Business Analyst', value: 'Business Analyst'},
      {label: 'Data Science', value: 'Data Science'},
    ];

    this.skillLevel = [
      {label: 'Beginner', value: 'Beginner'},
      {label: 'Intermediate', value: 'Intermediate'},
      {label: 'Advanced', value: 'Advanced'},
    ];
  }

  ngOnInit() {
  }

  // cloneSkill(s: skill): skill {
  //   let skill : skill = {
  //     level: '',
  //     skill: '',
  //   };
  //   for(let prop in s){
  //     skill[prop]=s[prop]
  //   }
  //   return skill;
  // }

  addSkill(){
    // this.newSkill = true;
    // this.skill = {
    //   level: '',
    //   skill: '',
    // };
    // this.skills.push(null);
    // this.displayDialog = true;
    this.skill = {
      skill : '',
      level : '',
    };
    this.skills.push(this.skill);
  }

  onSave() {
    // let skills = [...this.skills];
    // if(this.newSkill){
    //   skills.push(this.skill);
    // } else {
    //   skills[this.skills.indexOf(this.selectedSkill)]=this.skill;
    // }
    // this.skills = skills;
    // this.skill = null;
    // this.displayDialog = false;
  }

  onDelete() {
    // let index = this.skills.indexOf(this.selectedSkill);
    // this.skills = this.skills.filter((val, i) => i != index);
    // this.skill = null;
    // this.displayDialog = false;
  }

  // onRowSelect(event){
  //   this.newSkill = false;
  //   this.skill = this.cloneSkill(event.data);
  //   this.displayDialog = true;
  // }
}
