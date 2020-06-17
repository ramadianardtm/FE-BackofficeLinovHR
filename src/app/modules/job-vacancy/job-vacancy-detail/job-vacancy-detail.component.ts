import { Component, OnInit } from '@angular/core';
import { jobModel } from '../jobVacancyModel';

@Component({
  selector: 'app-job-vacancy-detail',
  templateUrl: './job-vacancy-detail.component.html',
  styleUrls: ['./job-vacancy-detail.component.scss']
})
export class JobVacancyDetailComponent implements OnInit {

  cars: any[];

  responsiveOptions;
  jobVacancy:jobModel[] = [
    {jobName:'Java Programmer', 
    jobCompany:'Lawencon', 
    jobLocation:'Jakarta, Indonesia', 
    jobSalary:'IDR 5.000.000',
    jobInfo:'Posted 1 month ago',
    jobBenefit:'',
    jobDescription:'',
    jobQualification:'',
    jobRequiredSkill:'',
    jobSummary:'',
  },
];

  constructor() { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }

  ngOnInit() {
  }

}
