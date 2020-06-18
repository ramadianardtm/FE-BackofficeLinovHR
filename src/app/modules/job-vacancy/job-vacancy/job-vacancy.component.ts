import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'app/shared/models/table.interface';
import { Paginator } from 'app/configs/paginator.config';
import { FormGroup } from '@angular/forms';
import { SelectItemGroup } from 'primeng/components/common/selectitemgroup';
import { onConstructTableHeader } from 'app/shared/utils/construct-table-header';
import {SelectItem} from 'primeng/api';
import { MessageService } from 'primeng/api';
import { jobModel } from '../jobVacancyModel';

@Component({
  selector: 'app-job-vacancy',
  templateUrl: './job-vacancy.component.html',
  styleUrls: ['./job-vacancy.component.sass'],
  providers: [MessageService]
})
export class JobVacancyComponent implements OnInit {
  myAppDetailsColumn: TableColumn[];
  rowsPerPage = Paginator.rowsPerPage;
  rowsPerPageOptions = Paginator.rowsPerPageOptions;
  formReady: FormGroup;
  moveTo: SelectItemGroup[];
  myAppData: any[];
  cols: any[];
  display: boolean = false;
  nominal: number;
  // jobVacancy:jobModel[] = [
  //   {jobName:'Java Programmer', 
  //   jobCompany:'Lawencon', 
  //   jobLocation:'Jakarta, Indonesia', 
  //   jobSalary:'IDR 5.000.000',
  //   jobInfo:'Posted 1 month ago',
  //   jobBenefit:'',
  //   jobDescription:'',
  //   jobQualification:'',
  //   jobRequiredSkill:'',
  //   jobSummary:'',
  // },
  // ];

  // dropdown location
  citys: SelectItem[];
  selectedCity: string[] = [];
  cityItems: SelectItem[];

  // dropdown Job Level
  jobLevel: SelectItem[];
  selectedJobLevel: string[] = [];
  jobLevelItems: SelectItem[];

  // dropdown Job Type
  jobType: SelectItem[];
  selectedJobType: string[] = [];
  jobTypesItems: SelectItem[];

  // dropdown EmploymentType
  employment: SelectItem[];
  selectedEmployement: string[] = [];
  employmentItems: SelectItem[];

  // dropdown Job Function
  jobFunction: SelectItem[];
  selectedJobFunction: string[] = [];
  jobFunctionItems: SelectItem[];

  // dropdown Education
  education: SelectItem[];
  selectedEducation: string[] = [];
  educationItems: SelectItem[];

  // dropdown Company
  company: SelectItem[];
  selectedCompany: string[] = [];
  companyItems: SelectItem[];

  // dropdown Salary
  salary: SelectItem[];
  selectedSalary:any = ["IDR"]
  salaryItems: SelectItem[];

  // drpodown Receive Alert
  alert: SelectItem[];
  selectedAlert: string[] = [];
  alertItems: SelectItem[];

  // drpodown Get Notified
  getNotified: SelectItem[];
  selectedNotified: string[] = [];
  notifiedItems: SelectItem[];

  items: any[];
  selectedDate: string = "Monthly";
  
  constructor(private messageService: MessageService) { 
    this.myAppDetailsColumn = onConstructTableHeader([
      'Logo',
      'Job',
      'Progress',
      'Withdraw',
    ]),
    this.cols = [
      'LOGO',
      'JOB',
      'Progress',
      'Withdraw'
    ];

    this.moveTo = [
      {
          label: 'Move', 
          items: [
              {label: 'Application', value: 'Application'},
              {label: 'Asessment', value: 'Asessment'},
              {label: 'Interview', value: 'Interview'},
              {label: 'Offer', value: 'Offer'},
              {label: 'Onboarding', value: 'Onboarding'},
          ]
      }
    ];

    this.alert = [
      {label: 'Weekly', value: 'Weekly'},
      {label: 'Daily', value: 'Daily'},
      {label: 'Monthly', value: 'Monthly'},
    ];
    this.alertItems = [];
    for (let i = 0; i < 10000; i++) {
      this.alertItems.push({label: 'Item ' + i, value: 'Item ' + i});
    }
    
    this.getNotified = [
      {label: 'Email and Notification', value: 'Email and Notification'},
      {label: 'Email', value: 'Whats App'},
      {label: 'Notification', value: 'Facebook'},
    ];
    this.notifiedItems = [];
    for (let i = 0; i < 10000; i++) {
      this.notifiedItems.push({label: 'Item ' + i, value: 'Item ' + i});
    }

    this.citys = [
      {label: 'Jakarta', value: 'Location| Jakarta |'},
      {label: 'Tanggerang', value: 'Location| Tanggerang |'},
      {label: 'Banten', value: 'Location| Banten |'},
      {label: 'Bandung', value: 'Location| Bandung |'},
      {label: 'Yogyakarta', value: 'Location| Yogyakarta |'},
      {label: 'Surabaya', value: 'Location| Surabaya |'},
      {label: 'Medan', value: 'Location| Medan |'},
      {label: 'Work Abroad', value: 'Location| Work Abroad |'},
      {label: 'Work From Home', value: 'Location| Work From Home |'},
    ];

    this.cityItems = [];
    for (let i = 0; i < 10000; i++) {
        this.cityItems.push({label: 'Item ' + i, value: 'Item ' + i});
    }

    this.jobLevel = [
      {label: 'Internship / OJT', value: 'Internship / OJT'},
      {label: 'Entry Level / Junior Apprentice', value: 'Entry Level / Junior Apprentice'},
      {label: 'Associate / Supervisor', value: 'BanAssociate / Supervisorten'},
      {label: 'Mid-Senior Level / Manager', value: 'Mid-Senior Level / Manager'},
      {label: 'Director / Executive', value: 'Director / Executive'},
    ];

    this.jobLevelItems = [];
    for (let i = 0; i < 10000; i++) {
        this.jobLevelItems.push({label: 'Item ' + i, value: 'Item ' + i});
    }

    this.jobType = [
      {label: 'Full Time', value: 'Job Type| Full Time |'},
      {label: 'Part Time', value: 'Job Type| Part Time |'},
    ];

    this.jobTypesItems = [];
    for (let i = 0; i < 10000; i++) {
        this.jobTypesItems.push({label: 'Item ' + i, value: 'Item ' + i});
    }

    this.employment = [
      {label: 'Permanent', value: 'Employment| Permanent |'},
      {label: 'Contract', value: 'Employment| Contract |'},
      {label: 'Probation', value: 'Employment| Probation |'},
    ];

    this.employmentItems = [];
    for (let i = 0; i < 10000; i++) {
        this.employmentItems.push({label: 'Item ' + i, value: 'Item ' + i});
    }

    this.jobFunction = [
      {label: 'Accounting and Finance', value: 'Job Function| Accounting and Finance |'},
      {label: 'Administration and Coordination', value: 'Job Function| Administration and Coordination |'},
      {label: 'Architecture and Engineering', value: 'Job Function| Architecture and Engineering |'},
      {label: 'Arts and Sports', value: 'Job Function| Arts and Sports |'},
      {label: 'Customer Service', value: 'Job Function| Customer Service |'},
      {label: 'Education and Training', value: 'Job Function| Education and Training |'},
      {label: 'General Service', value: 'Job Function| General Service |'},
      {label: 'Health and Medical', value: 'Job Function| Health and Medical |'},
      {label: 'Hospitality and Tourism', value: 'Job Function| Hospitality and Tourism |'},
      {label: 'Human Resources', value: 'Job Function| Human Resources |'},
      {label: 'IT and Software', value: 'Job Function| IT and Software |'},
      {label: 'Legal', value: 'Job Function| Legal |'},
      {label: 'Management and Consultancy', value: 'Job Function| Management and Consultancy |'},
      {label: 'Manufacturing and Production', value: 'Job Function| Manufacturing and Production |'},
      {label: 'Media and Creatives', value: 'Job Function| Media and Creatives |'},
      {label: 'Mining & Energy', value: 'Job Function| Mining & Energy |'},
      {label: 'Oil & Gas', value: 'Job Function| Oil & Gas |'},
      {label: 'Public Service and NGOs', value: 'Job Function| Public Service and NGOs |'},
      {label: 'Safety and Security', value: 'Job Function| Safety and Security |'},
      {label: 'Sales and Marketing', value: 'Job Function| Sales and Marketing |'},
      {label: 'Sciences', value: 'Job Function| Sciences |'},
      {label: 'Supply Chain', value: 'Job Function| Supply Chain |'},
      {label: 'Writing and Content', value: 'Job Function| Writing and Content |'},
    ];

    this.jobFunctionItems = [];
    for (let i = 0; i < 10000; i++) {
        this.jobFunctionItems.push({label: 'Item ' + i, value: 'Item ' + i});
    }

    this.education = [
      {label: 'Diploma 4', value: 'Education| Diploma 4 |'},
      {label: 'Bachelor', value: 'Education| Bachelor |'},
      {label: 'Master', value: 'Education| Master |'},
      {label: 'Doctor', value: 'Education| Doctor |'},
      {label: 'Elementary School', value: 'Education| Elementary School |'},
      {label: 'Junior High School', value: 'Education| Junior High School |'},
      {label: 'Senior High School', value: 'Education| Senior High School |'},
      {label: 'Vocational High School', value: 'Education| Vocational High School |'},
    ];

    this.educationItems = [];
    for (let i = 0; i < 10000; i++) {
        this.educationItems.push({label: 'Item ' + i, value: 'Item ' + i});
    }

    this.company = [
      {label: 'Lawencon', value: 'Company| Lawencon |'},
      {label: 'Linov Rocket Prestasi', value: 'Company| Linov Rocket Prestasi |'},
      {label: 'Tokopedia', value: 'Company| Tokopedia |'},
      {label: 'Shopee', value: 'Company| Shopee |'},
      {label: 'Grab', value: 'Company| Grab |'},
      {label: 'Gojek', value: 'Company| Gojek |'},
    ];

    this.companyItems = [];
    for (let i = 0; i < 10000; i++) {
        this.companyItems.push({label: 'Item ' + i, value: 'Item ' + i});
    }

    this.salary = [
      {label: 'IDR', value: [
        'IDR'
      ]},
      {label: 'USD', value: [
        'USD'
      ] },
    ];

    this.salaryItems = [];
    for (let i = 0; i < 10000; i++) {
        this.salaryItems.push({value: 'Item ' + i});
    }
  }

  ngOnInit() {
}
selChip:any[] = [];

changeCity(event){
  console.log('event',event);
  
  this.selChip =[]
  console.log('employment', this.selectedEmployement);
  console.log('salary ', this.selectedSalary);
  
  console.log("asas",this.selectedSalary);
  
  this.selChip = this.selChip.concat(this.selectedCity,
    this.selectedCompany,
    this.selectedEducation,
    this.selectedEmployement,
    this.selectedJobFunction,
    this.selectedJobLevel,
    this.selectedJobType)
    for(let i of this.selectedSalary){
      let b = this.selectedDate  + "|" + i + "|" + this.nominal
      this.selChip.push(b)
    }
}


delete(i){
  let event:string = this.selChip[i]
  console.log("event ", i);
  
  this.selectedCity.splice(this.selectedCity.indexOf(event),1)
  this.selectedCompany.splice(this.selectedCompany.indexOf(event),1)
  this.selectedEducation.splice(this.selectedEducation.indexOf(event),1)
  this.selectedEmployement.splice(this.selectedEmployement.indexOf(event),1)
  this.selectedJobFunction.splice(this.selectedJobFunction.indexOf(event),1)
  this.selectedJobLevel.splice(this.selectedJobLevel.indexOf(event),1)
  this.selectedJobType.splice(this.selectedJobType.indexOf(event),1)

  this.selChip.splice(i,1)
}
selChipRemove(event){
  console.log("event", event);
  console.log("idx",this.selectedCity.indexOf(event.value));
  
  this.selectedCity.splice(this.selectedCity.indexOf(event.value),1)
  this.selectedCompany.splice(this.selectedCompany.indexOf(event.value),1)
  this.selectedEducation.splice(this.selectedEducation.indexOf(event.value),1)
  this.selectedEmployement.splice(this.selectedEmployement.indexOf(event.value),1)
  this.selectedJobFunction.splice(this.selectedJobFunction.indexOf(event.value),1)
  this.selectedJobLevel.splice(this.selectedJobLevel.indexOf(event.value),1)
  this.selectedJobType.splice(this.selectedJobType.indexOf(event.value),1)
  this.selectedSalary.splice(this.selectedSalary.indexOf(event.value),1)
  
}
removeChip(){
  this.selectedCity.splice(0, this.selChip.length)
  this.selectedCompany.splice(0, this.selChip.length)
  this.selectedEducation.splice(0, this.selChip.length)
  this.selectedEmployement.splice(0, this.selChip.length)
  this.selectedJobFunction.splice(0, this.selChip.length)
  this.selectedJobLevel.splice(0, this.selChip.length)
  this.selectedJobType.splice(0, this.selChip.length)
  this.selectedSalary.splice(0, this.selChip.length)
  this.selChip.splice(0, this.selChip.length);

}
salaShow:boolean = false
salaryClick(){
this.salaShow = !this.salaShow
}

  showDialog() {
    this.display = true;
  }
  
  showInfo() {
    this.infoApplied='APPLIED';
    this.messageService.add({severity:'info', summary: 'Info Message', detail:'Submit is Successed'});
  }
  showSaved() {
    this.infoSaved='SAVED';
    this.messageService.add({severity:'info', summary: 'Info Message', detail:'Job Saved'});
  }

  showInfo2() {
    this.infoApplied2='APPLIED';
    this.messageService.add({severity:'info', summary: 'Info Message', detail:'Submit is Successed'});
  }
  showSaved2() {
    this.infoSaved2='SAVED';
    this.messageService.add({severity:'info', summary: 'Info Message', detail:'Job Saved'});
  }
  showInfo3() {
    this.infoApplied3='APPLIED';
    this.messageService.add({severity:'info', summary: 'Info Message', detail:'Submit is Successed'});
  }
  showSaved3() {
    this.infoSaved3='SAVED';
    this.messageService.add({severity:'info', summary: 'Info Message', detail:'Job Saved'});
  }
  showInfo4() {
    this.infoApplied4='APPLIED';
    this.messageService.add({severity:'info', summary: 'Info Message', detail:'Submit is Successed'});
  }
  showSaved4() {
    this.infoSaved4='SAVED';
    this.messageService.add({severity:'info', summary: 'Info Message', detail:'Job Saved'});
  }
  showInfo5() {
    this.infoApplied5='APPLIED';
    this.messageService.add({severity:'info', summary: 'Info Message', detail:'Submit is Successed'});
  }
  showSaved5() {
    this.infoSaved5='SAVED';
    this.messageService.add({severity:'info', summary: 'Info Message', detail:'Job Saved'});
  }
  infoApplied: string = "APPLY";
  infoSaved: string = "SAVE";
  infoApplied2: string = "APPLY";
  infoSaved2: string = "SAVE";
  infoApplied3: string = "APPLY";
  infoSaved3: string = "SAVE";
  infoApplied4: string = "APPLY";
  infoSaved4: string = "SAVE";
  infoApplied5: string = "APPLY";
  infoSaved5: string = "SAVE";

}

