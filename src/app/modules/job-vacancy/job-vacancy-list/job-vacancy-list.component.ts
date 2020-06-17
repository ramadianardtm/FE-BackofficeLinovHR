import { Component, OnInit } from '@angular/core';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-job-vacancy-list',
  templateUrl: './job-vacancy-list.component.html',
  styleUrls: ['./job-vacancy-list.component.scss']
})
export class JobVacancyListComponent implements OnInit {

  // cities1: SelectItem[];

  cities2: City[];

  selectedCities1: City[];

  selectedCities2: City[];

  constructor() {
      //SelectItem API with label-value pairs
      // this.cities1 = [
      //     {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
      //     {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
      //     {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
      //     {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
      //     {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
      // ];

      //An array of cities
      this.cities2 = [
          {name: 'New York', code: 'NY'},
          {name: 'Rome', code: 'RM'},
          {name: 'London', code: 'LDN'},
          {name: 'Istanbul', code: 'IST'},
          {name: 'Paris', code: 'PRS'}
      ];
  }

  ngOnInit(){}

}
