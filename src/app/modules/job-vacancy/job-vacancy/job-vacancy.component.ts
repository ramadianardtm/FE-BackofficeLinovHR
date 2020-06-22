import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'app/shared/models/table.interface';
import { Paginator } from 'app/configs/paginator.config';
import { FormGroup } from '@angular/forms';
import { SelectItemGroup } from 'primeng/components/common/selectitemgroup';
import { onConstructTableHeader } from 'app/shared/utils/construct-table-header';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { jobModel } from '../jobVacancyModel';

interface jobVacancy {
  jobVacancy;
  company;
  location;
  salary;
  postingDate;
  expDate;
}

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
  saveStatus: boolean[] = [];
  infoSaved: string[] = []
  applyStatus: boolean[] = [];
  infoApplied: string[] = [];
  tableView: boolean;
  jobList: jobVacancy[] = [];

  //Search with inquiry
  inquiry: string[] = [];

  // dropdown location
  citys: SelectItem[];
  selectedCity: string[] = [];
  cityItems: SelectItem[];

  selectedLocation: string[] = [];
  filteredCity: any[] = [];
  style: SelectItem[];

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
  selectedSalary: any = ["IDR"]
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
    this.saveStatus = [false, false, false, false, false];
    this.infoSaved = ["SAVE", "SAVE", "SAVE", "SAVE", "SAVE"];
    this.applyStatus = [false, false, false, false, false];
    this.infoApplied = ["APPLY", "APPLY", "APPLY", "APPLY", "APPLY"];

    this.jobList = [
      {
        jobVacancy: 'Java Programmer',
        company: 'PT. Lawencon Internasional',
        location: 'Jakarta-Indonesia',
        salary: 'IDR 5000000 - 10000000',
        postingDate: '24-JAN-2020',
        expDate: '25-FEB-2020'
      },
      {
        jobVacancy: 'Business Analyst',
        company: 'PT. Lawencon Internasional',
        location: 'Jakarta-Indonesia',
        salary: 'IDR 5000000 - 10000000',
        postingDate: '24-JAN-2020',
        expDate: '25-FEB-2020'
      },
      {
        jobVacancy: 'Full-Stack Developer',
        company: 'PT. Lawencon Internasional',
        location: 'Jakarta-Indonesia',
        salary: 'IDR 5000000 - 10000000',
        postingDate: '24-JAN-2020',
        expDate: '25-FEB-2020'
      },
      {
        jobVacancy: 'Angular Developer',
        company: 'PT. Lawencon Internasional',
        location: 'Jakarta-Indonesia',
        salary: 'IDR 5000000 - 10000000',
        postingDate: '24-JAN-2020',
        expDate: '25-FEB-2020'
      },
      {
        jobVacancy: 'Back End Developer',
        company: 'PT. Lawencon Internasional',
        location: 'Jakarta-Indonesia',
        salary: 'IDR 5000000 - 10000000',
        postingDate: '24-JAN-2020',
        expDate: '25-FEB-2020'
      },
    ]

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
          { label: 'Application', value: 'Application' },
          { label: 'Asessment', value: 'Asessment' },
          { label: 'Interview', value: 'Interview' },
          { label: 'Offer', value: 'Offer' },
          { label: 'Onboarding', value: 'Onboarding' },
        ]
      }
    ];

    this.alert = [
      { label: 'Weekly', value: 'Weekly' },
      { label: 'Daily', value: 'Daily' },
      { label: 'Monthly', value: 'Monthly' },
    ];
    this.alertItems = [];
    for (let i = 0; i < 10000; i++) {
      this.alertItems.push({ label: 'Item ' + i, value: 'Item ' + i });
    }

    this.getNotified = [
      { label: 'Email and Notification', value: 'Email and Notification' },
      { label: 'Email', value: 'Whats App' },
      { label: 'Notification', value: 'Facebook' },
    ];
    this.notifiedItems = [];
    for (let i = 0; i < 10000; i++) {
      this.notifiedItems.push({ label: 'Item ' + i, value: 'Item ' + i });
    }

    this.citys = [
      { label: 'Jakarta', value: 'Location| Jakarta |' },
      { label: 'Tanggerang', value: 'Location| Tanggerang |' },
      { label: 'Banten', value: 'Location| Banten |' },
      { label: 'Bandung', value: 'Location| Bandung |' },
      { label: 'Yogyakarta', value: 'Location| Yogyakarta |' },
      { label: 'Surabaya', value: 'Location| Surabaya |' },
      { label: 'Medan', value: 'Location| Medan |' },
    ];

    this.style = [
      { label: 'Work Abroad', value: 'Location| Work Abroad |' },
      { label: 'Work From Home', value: 'Location| Work From Home |' },
    ];

    this.cityItems = [];
    for (let i = 0; i < 10000; i++) {
      this.cityItems.push({ label: 'Item ' + i, value: 'Item ' + i });
    }

    this.jobLevel = [
      { label: 'Internship / OJT', value: 'Internship / OJT' },
      { label: 'Entry Level / Junior Apprentice', value: 'Entry Level / Junior Apprentice' },
      { label: 'Associate / Supervisor', value: 'BanAssociate / Supervisorten' },
      { label: 'Mid-Senior Level / Manager', value: 'Mid-Senior Level / Manager' },
      { label: 'Director / Executive', value: 'Director / Executive' },
    ];

    this.jobLevelItems = [];
    for (let i = 0; i < 10000; i++) {
      this.jobLevelItems.push({ label: 'Item ' + i, value: 'Item ' + i });
    }

    this.jobType = [
      { label: 'Full Time', value: 'Job Type| Full Time |' },
      { label: 'Part Time', value: 'Job Type| Part Time |' },
    ];

    this.jobTypesItems = [];
    for (let i = 0; i < 10000; i++) {
      this.jobTypesItems.push({ label: 'Item ' + i, value: 'Item ' + i });
    }

    this.employment = [
      { label: 'Permanent', value: 'Employment| Permanent |' },
      { label: 'Contract', value: 'Employment| Contract |' },
      { label: 'Probation', value: 'Employment| Probation |' },
    ];

    this.employmentItems = [];
    for (let i = 0; i < 10000; i++) {
      this.employmentItems.push({ label: 'Item ' + i, value: 'Item ' + i });
    }

    this.jobFunction = [
      { label: 'Accounting and Finance', value: 'Job Function| Accounting and Finance |' },
      { label: 'Administration and Coordination', value: 'Job Function| Administration and Coordination |' },
      { label: 'Architecture and Engineering', value: 'Job Function| Architecture and Engineering |' },
      { label: 'Arts and Sports', value: 'Job Function| Arts and Sports |' },
      { label: 'Customer Service', value: 'Job Function| Customer Service |' },
      { label: 'Education and Training', value: 'Job Function| Education and Training |' },
      { label: 'General Service', value: 'Job Function| General Service |' },
      { label: 'Health and Medical', value: 'Job Function| Health and Medical |' },
      { label: 'Hospitality and Tourism', value: 'Job Function| Hospitality and Tourism |' },
      { label: 'Human Resources', value: 'Job Function| Human Resources |' },
      { label: 'IT and Software', value: 'Job Function| IT and Software |' },
      { label: 'Legal', value: 'Job Function| Legal |' },
      { label: 'Management and Consultancy', value: 'Job Function| Management and Consultancy |' },
      { label: 'Manufacturing and Production', value: 'Job Function| Manufacturing and Production |' },
      { label: 'Media and Creatives', value: 'Job Function| Media and Creatives |' },
      { label: 'Mining & Energy', value: 'Job Function| Mining & Energy |' },
      { label: 'Oil & Gas', value: 'Job Function| Oil & Gas |' },
      { label: 'Public Service and NGOs', value: 'Job Function| Public Service and NGOs |' },
      { label: 'Safety and Security', value: 'Job Function| Safety and Security |' },
      { label: 'Sales and Marketing', value: 'Job Function| Sales and Marketing |' },
      { label: 'Sciences', value: 'Job Function| Sciences |' },
      { label: 'Supply Chain', value: 'Job Function| Supply Chain |' },
      { label: 'Writing and Content', value: 'Job Function| Writing and Content |' },
    ];

    this.jobFunctionItems = [];
    for (let i = 0; i < 10000; i++) {
      this.jobFunctionItems.push({ label: 'Item ' + i, value: 'Item ' + i });
    }

    this.education = [
      { label: 'Diploma 4', value: 'Education| Diploma 4 |' },
      { label: 'Bachelor', value: 'Education| Bachelor |' },
      { label: 'Master', value: 'Education| Master |' },
      { label: 'Doctor', value: 'Education| Doctor |' },
      { label: 'Elementary School', value: 'Education| Elementary School |' },
      { label: 'Junior High School', value: 'Education| Junior High School |' },
      { label: 'Senior High School', value: 'Education| Senior High School |' },
      { label: 'Vocational High School', value: 'Education| Vocational High School |' },
    ];

    this.educationItems = [];
    for (let i = 0; i < 10000; i++) {
      this.educationItems.push({ label: 'Item ' + i, value: 'Item ' + i });
    }

    this.company = [
      { label: 'Lawencon', value: 'Company| Lawencon |' },
      { label: 'Linov Rocket Prestasi', value: 'Company| Linov Rocket Prestasi |' },
      { label: 'Tokopedia', value: 'Company| Tokopedia |' },
      { label: 'Shopee', value: 'Company| Shopee |' },
      { label: 'Grab', value: 'Company| Grab |' },
      { label: 'Gojek', value: 'Company| Gojek |' },
    ];

    this.companyItems = [];
    for (let i = 0; i < 10000; i++) {
      this.companyItems.push({ label: 'Item ' + i, value: 'Item ' + i });
    }

    this.salary = [
      {
        label: 'IDR', value: [
          'IDR'
        ]
      },
      {
        label: 'USD', value: [
          'USD'
        ]
      },
    ];

    this.salaryItems = [];
    for (let i = 0; i < 10000; i++) {
      this.salaryItems.push({ value: 'Item ' + i });
    }
  }

  ngOnInit() {
  }

  selChip: any[] = [];

  changeCity(event) {
    console.log('event', event);

    this.selChip = []

    this.selChip = this.selChip.concat(
      this.inquiry,
      this.selectedLocation,
      this.selectedCity,
      this.selectedCompany,
      this.selectedEducation,
      this.selectedEmployement,
      this.selectedJobFunction,
      this.selectedJobLevel,
      this.selectedJobType)
  }

  changeSalary() {
    this.selChip.push("Salary | " + this.selectedDate + " " + this.selectedSalary + " " + this.nominal);
  }


  delete(i) {
    let event: string = this.selChip[i]
    console.log("event ", i);

    this.selectedCity.splice(this.selectedCity.indexOf(event), 1)
    this.selectedCompany.splice(this.selectedCompany.indexOf(event), 1)
    this.selectedEducation.splice(this.selectedEducation.indexOf(event), 1)
    this.selectedEmployement.splice(this.selectedEmployement.indexOf(event), 1)
    this.selectedJobFunction.splice(this.selectedJobFunction.indexOf(event), 1)
    this.selectedJobLevel.splice(this.selectedJobLevel.indexOf(event), 1)
    this.selectedJobType.splice(this.selectedJobType.indexOf(event), 1)

    this.selChip.splice(i, 1)
  }
  selChipRemove(event) {
    console.log("event", event);
    console.log("idx", this.selectedCity.indexOf(event.value));

    this.selectedCity.splice(this.selectedCity.indexOf(event.value), 1)
    this.selectedCompany.splice(this.selectedCompany.indexOf(event.value), 1)
    this.selectedEducation.splice(this.selectedEducation.indexOf(event.value), 1)
    this.selectedEmployement.splice(this.selectedEmployement.indexOf(event.value), 1)
    this.selectedJobFunction.splice(this.selectedJobFunction.indexOf(event.value), 1)
    this.selectedJobLevel.splice(this.selectedJobLevel.indexOf(event.value), 1)
    this.selectedJobType.splice(this.selectedJobType.indexOf(event.value), 1)
    this.selectedSalary.splice(this.selectedSalary.indexOf(event.value), 1)

  }
  removeChip() {
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
  salaShow: boolean = false
  salaryClick() {
    this.salaShow = !this.salaShow
  }

  showDialog() {
    this.display = true;
  }

  onSave(index) {
    console.log("saveStatusTotal : " + this.saveStatus.length);

    if (this.saveStatus[index]) {
      this.saveStatus[index] = false;
      this.infoSaved[index] = "SAVE";
      this.messageService.add({ severity: 'info', summary: 'Info Message', detail: 'Job Unsaved' });
    } else {
      this.infoSaved[index] = "SAVED"
      this.saveStatus[index] = true;
      this.messageService.add({ severity: 'info', summary: 'Info Message', detail: 'Job Saved' });
    }
  }

  onApply(index) {
    console.log("applyStatusTotal : " + this.applyStatus.length);
    console.log("index : " + index);

    this.infoApplied[index] = "APPLIED"
    this.applyStatus[index] = true;
    this.messageService.add({ severity: 'info', summary: 'Info Message', detail: 'Submit Successed' });
  }

  filterCity(event) {
    console.log("event : " + event);

    this.filteredCity = [];
    for (let i = 0; i < this.citys.length; i++) {
      let city = this.citys[i].label;
      console.log("for masuk");
      if (city.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        console.log("if masuk");
        this.filteredCity.push(city);
      }
    }
  }

  listView() {
    this.tableView = false;
    console.log("listView() : " + this.tableView);
  }

  viewTable() {
    this.tableView = true;
    console.log("viewTable() : " + this.tableView);

  }

}

