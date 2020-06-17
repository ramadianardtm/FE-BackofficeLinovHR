import { Component, OnInit } from '@angular/core';
import { onConstructTableHeader } from 'app/shared/utils';
import { TableColumn } from 'app/shared/models/table.interface';

@Component({
  selector: 'app-my-profile-skills',
  templateUrl: './my-profile-skills.component.html',
  styleUrls: ['./my-profile-skills.component.scss']
})
export class MyProfileSkillsComponent implements OnInit {

  skillColumns: TableColumn[]

  constructor() { 
    this.skillColumns = onConstructTableHeader([
      '',
      'Skill',
      'Level',
    ]);
  }

  ngOnInit() {
  }

}
