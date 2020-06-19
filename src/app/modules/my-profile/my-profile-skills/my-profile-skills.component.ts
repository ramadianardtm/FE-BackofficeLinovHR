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

  skillLevel: SelectItem[] = [];
  skillList: SelectItem[] = [];
  selectedSkillList: string;
  selectedSkillLevel: string;
  skills : any[] = [];
  // skill: skills;
  editMode: boolean;
  editModeHeader: boolean;
  editModeFooter: boolean;
  skillCount: number;
  filteredSkillList: any[];

  constructor() { 

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
    // for(let i of this.skills){
    //   let b = this.selectedSkillList  + "|" + i + "|" + this.selectedSkillLevel
    //   this.selChip.push(b)
    // }
    // this.skills = this.skills.concat(this.skillList, this.skillLevel);
    this.skillCount = this.skills.length
  }

  ngOnInit() {
  }

  filterSkillList(event){
    this.filteredSkillList = [];
    for(let i=0; i < this.skillList.length; i++){
      let skill = this.skillList[i].value;
      if(skill.toLowerCase().indexOf(event.query.toLowerCase())==0){
        this.filteredSkillList.push(skill);
      }
    }
  }

  edit(){
    this.editMode = true;
    this.editModeHeader = true;
    this.editModeFooter = true;
  }

  delete(index){
    let event:string = this.skills[index]
    console.log("event ", index);

    this.skills.splice(index,1);
    
    this.skillCount = this.skills.length
  }

  addSkill(){
    this.skills.push([this.selectedSkillList + " | " + this.selectedSkillLevel]);
    this.selectedSkillLevel = '';
    this.selectedSkillList = '';
    this.skillCount = this.skills.length;
  }

  onSave() {
    this.skillCount = this.skills.length
      this.editMode = false;
      this.editModeHeader = false;
      this.editModeFooter = false;
      this.selectedSkillLevel = '';
      this.selectedSkillList = '';
  }
}
