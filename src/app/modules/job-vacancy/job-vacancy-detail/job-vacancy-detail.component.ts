import { Component, OnInit } from '@angular/core';
import { jobModel } from '../jobVacancyModel';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-job-vacancy-detail',
  templateUrl: './job-vacancy-detail.component.html',
  styleUrls: ['./job-vacancy-detail.component.scss']
})
export class JobVacancyDetailComponent implements OnInit {

  cars: any[];
  saveStatus: boolean;
  applyStatus: boolean;

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

  constructor(private messageService: MessageService) { 
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

  onSave(){
    if(this.saveStatus){
      this.saveStatus = false;
      this.messageService.add({severity:'info', summary: 'Info Message', detail:'Job Unsaved'});
    } else {
      this.saveStatus = true;
      this.messageService.add({severity:'info', summary: 'Info Message', detail:'Job Saved!'});
    }
  }

  onApply(){
    this.applyStatus = true;
    this.messageService.add({severity:'info', summary: 'Info Message', detail:'Apply Success!'});
  }

}
