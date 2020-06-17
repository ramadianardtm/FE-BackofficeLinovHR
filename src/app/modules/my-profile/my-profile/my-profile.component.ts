import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { onConstructTableHeader } from 'app/shared/utils';
import { TableColumn } from 'app/shared/models/table.interface';
import { round } from 'lodash-es';

export interface completed {
  done: boolean
  segment: string
}

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.sass'],
  encapsulation:ViewEncapsulation.None
})
export class MyProfileComponent implements OnInit {

  completion: any
  completed : completed[]
  percentage: number
  isDone: string

  options: any;

  constructor() {
    this.percentage = 0;
    this.completed = [
      {done: true, segment: 'Basic Information'},
      {done: true, segment: 'Family Members'},
      {done: false, segment: 'Address Information'},
      {done: false, segment: 'Education'},
      {done: false, segment: 'Skills'},
      {done: false, segment: 'Languages'},
      {done: true, segment: 'Working Experience'},
      {done: true, segment: 'Project Experience'},
      {done: true, segment: 'Organization Experience'},
      {done: true, segment: 'Training'},
      {done: false, segment: 'Documents'},
      {done: true, segment: 'Reference'},
    ];

    for (let index = 0; index < this.completed.length; index++) {
      if (this.completed[index].done) {
        this.percentage += 1;
      }
    }

    this.isDone = ((this.percentage/12)*100).toFixed();
   
    this.completion = {
      labels:['Completed', 'Uncomplete'],
      datasets: [
        {
          data: [(this.percentage/12).toFixed(2), (1 - this.percentage/12).toFixed(2)],
          backgroundColor: [
            "#36A2EB",
            "#C0C0C0"
          ]
        }
      ]
    }
    this.options = {
      legend: {
        display: false,
      }
    }
  }

  ngOnInit() {
  }
}
