"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.JobVacancyComponent = void 0;
var core_1 = require("@angular/core");
var paginator_config_1 = require("app/configs/paginator.config");
var construct_table_header_1 = require("app/shared/utils/construct-table-header");
var api_1 = require("primeng/api");
var JobVacancyComponent = /** @class */ (function () {
    function JobVacancyComponent(messageService) {
        this.messageService = messageService;
        this.rowsPerPage = paginator_config_1.Paginator.rowsPerPage;
        this.rowsPerPageOptions = paginator_config_1.Paginator.rowsPerPageOptions;
        this.display = false;
        this.jobVacancy = [
            { jobName: 'Java Programmer',
                jobCompany: 'Lawencon',
                jobLocation: 'Jakarta, Indonesia',
                jobSalary: 'IDR 5.000.000',
                jobInfo: 'Posted 1 month ago',
                jobBenefit: '',
                jobDescription: '',
                jobQualification: '',
                jobRequiredSkill: '',
                jobSummary: ''
            },
        ];
        this.selectedCity = [];
        this.selectedJobLevel = [];
        this.selectedJobType = [];
        this.selectedEmployement = [];
        this.selectedJobFunction = [];
        this.selectedEducation = [];
        this.selectedCompany = [];
        this.selectedSalary = [];
        this.selectedAlert = [];
        this.selectedNotified = [];
        this.selectedDate = "Monthly";
        this.selChip = [];
        this.salaShow = false;
        this.infoApplied = "APPLY";
        this.infoSaved = "SAVE";
        this.infoApplied2 = "APPLY";
        this.infoSaved2 = "SAVE";
        this.infoApplied3 = "APPLY";
        this.infoSaved3 = "SAVE";
        this.infoApplied4 = "APPLY";
        this.infoSaved4 = "SAVE";
        this.infoApplied5 = "APPLY";
        this.infoSaved5 = "SAVE";
        this.myAppDetailsColumn = construct_table_header_1.onConstructTableHeader([
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
        for (var i = 0; i < 10000; i++) {
            this.alertItems.push({ label: 'Item ' + i, value: 'Item ' + i });
        }
        this.getNotified = [
            { label: 'Email and Notification', value: 'Email and Notification' },
            { label: 'Email', value: 'Whats App' },
            { label: 'Notification', value: 'Facebook' },
        ];
        this.notifiedItems = [];
        for (var i = 0; i < 10000; i++) {
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
            { label: 'Work Abroad', value: 'Location| Work Abroad |' },
            { label: 'Work From Home', value: 'Location| Work From Home |' },
        ];
        this.cityItems = [];
        for (var i = 0; i < 10000; i++) {
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
        for (var i = 0; i < 10000; i++) {
            this.jobLevelItems.push({ label: 'Item ' + i, value: 'Item ' + i });
        }
        this.jobType = [
            { label: 'Full Time', value: 'Job Type| Full Time |' },
            { label: 'Part Time', value: 'Job Type| Part Time |' },
        ];
        this.jobTypesItems = [];
        for (var i = 0; i < 10000; i++) {
            this.jobTypesItems.push({ label: 'Item ' + i, value: 'Item ' + i });
        }
        this.employment = [
            { label: 'Permanent', value: 'Employment| Permanent |' },
            { label: 'Contract', value: 'Employment| Contract |' },
            { label: 'Probation', value: 'Employment| Probation |' },
        ];
        this.employmentItems = [];
        for (var i = 0; i < 10000; i++) {
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
        for (var i = 0; i < 10000; i++) {
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
        for (var i = 0; i < 10000; i++) {
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
        for (var i = 0; i < 10000; i++) {
            this.companyItems.push({ label: 'Item ' + i, value: 'Item ' + i });
        }
        this.salary = [
            { label: 'IDR', value: 'IDR' },
            { label: 'USD', value: 'USD' },
        ];
        this.salaryItems = [];
        for (var i = 0; i < 10000; i++) {
            this.salaryItems.push({ label: 'Item ' + i, value: 'Item ' + i });
        }
    }
    JobVacancyComponent.prototype.ngOnInit = function () {
    };
    JobVacancyComponent.prototype.changeCity = function (event) {
        this.selChip = [];
        console.log('employment', this.selectedEmployement);
        this.selChip = this.selChip.concat(this.selectedCity, this.selectedCompany, this.selectedEducation, this.selectedEmployement, this.selectedJobFunction, this.selectedJobLevel, this.selectedJobType, this.selectedSalary);
    };
    JobVacancyComponent.prototype["delete"] = function (i) {
        var event = this.selChip[i];
        this.selectedCity.splice(this.selectedCity.indexOf(event), 1);
        this.selectedCompany.splice(this.selectedCompany.indexOf(event), 1);
        this.selectedEducation.splice(this.selectedEducation.indexOf(event), 1);
        this.selectedEmployement.splice(this.selectedEmployement.indexOf(event), 1);
        this.selectedJobFunction.splice(this.selectedJobFunction.indexOf(event), 1);
        this.selectedJobLevel.splice(this.selectedJobLevel.indexOf(event), 1);
        this.selectedJobType.splice(this.selectedJobType.indexOf(event), 1);
        this.selectedSalary.splice(this.selectedSalary.indexOf(event), 1);
        this.selChip.splice(i, 1);
    };
    JobVacancyComponent.prototype.selChipRemove = function (event) {
        console.log("event", event);
        console.log("idx", this.selectedCity.indexOf(event.value));
        this.selectedCity.splice(this.selectedCity.indexOf(event.value), 1);
        this.selectedCompany.splice(this.selectedCompany.indexOf(event.value), 1);
        this.selectedEducation.splice(this.selectedEducation.indexOf(event.value), 1);
        this.selectedEmployement.splice(this.selectedEmployement.indexOf(event.value), 1);
        this.selectedJobFunction.splice(this.selectedJobFunction.indexOf(event.value), 1);
        this.selectedJobLevel.splice(this.selectedJobLevel.indexOf(event.value), 1);
        this.selectedJobType.splice(this.selectedJobType.indexOf(event.value), 1);
        this.selectedSalary.splice(this.selectedSalary.indexOf(event.value), 1);
    };
    JobVacancyComponent.prototype.removeChip = function () {
        this.selectedCity.splice(0, this.selChip.length);
        this.selectedCompany.splice(0, this.selChip.length);
        this.selectedEducation.splice(0, this.selChip.length);
        this.selectedEmployement.splice(0, this.selChip.length);
        this.selectedJobFunction.splice(0, this.selChip.length);
        this.selectedJobLevel.splice(0, this.selChip.length);
        this.selectedJobType.splice(0, this.selChip.length);
        this.selectedSalary.splice(0, this.selChip.length);
        this.selChip.splice(0, this.selChip.length);
    };
    JobVacancyComponent.prototype.salaryClick = function () {
        this.salaShow = !this.salaShow;
    };
    JobVacancyComponent.prototype.showDialog = function () {
        this.display = true;
    };
    JobVacancyComponent.prototype.showInfo = function () {
        this.infoApplied = 'APPLIED';
        this.messageService.add({ severity: 'info', summary: 'Info Message', detail: 'Submit is Successed' });
    };
    JobVacancyComponent.prototype.showSaved = function () {
        this.infoSaved = 'SAVED';
        this.messageService.add({ severity: 'info', summary: 'Info Message', detail: 'Job Saved' });
    };
    JobVacancyComponent.prototype.showInfo2 = function () {
        this.infoApplied2 = 'APPLIED';
        this.messageService.add({ severity: 'info', summary: 'Info Message', detail: 'Submit is Successed' });
    };
    JobVacancyComponent.prototype.showSaved2 = function () {
        this.infoSaved2 = 'SAVED';
        this.messageService.add({ severity: 'info', summary: 'Info Message', detail: 'Job Saved' });
    };
    JobVacancyComponent.prototype.showInfo3 = function () {
        this.infoApplied3 = 'APPLIED';
        this.messageService.add({ severity: 'info', summary: 'Info Message', detail: 'Submit is Successed' });
    };
    JobVacancyComponent.prototype.showSaved3 = function () {
        this.infoSaved3 = 'SAVED';
        this.messageService.add({ severity: 'info', summary: 'Info Message', detail: 'Job Saved' });
    };
    JobVacancyComponent.prototype.showInfo4 = function () {
        this.infoApplied4 = 'APPLIED';
        this.messageService.add({ severity: 'info', summary: 'Info Message', detail: 'Submit is Successed' });
    };
    JobVacancyComponent.prototype.showSaved4 = function () {
        this.infoSaved4 = 'SAVED';
        this.messageService.add({ severity: 'info', summary: 'Info Message', detail: 'Job Saved' });
    };
    JobVacancyComponent.prototype.showInfo5 = function () {
        this.infoApplied5 = 'APPLIED';
        this.messageService.add({ severity: 'info', summary: 'Info Message', detail: 'Submit is Successed' });
    };
    JobVacancyComponent.prototype.showSaved5 = function () {
        this.infoSaved5 = 'SAVED';
        this.messageService.add({ severity: 'info', summary: 'Info Message', detail: 'Job Saved' });
    };
    JobVacancyComponent = __decorate([
        core_1.Component({
            selector: 'app-job-vacancy',
            templateUrl: './job-vacancy.component.html',
            styleUrls: ['./job-vacancy.component.sass'],
            providers: [api_1.MessageService]
        })
    ], JobVacancyComponent);
    return JobVacancyComponent;
}());
exports.JobVacancyComponent = JobVacancyComponent;
