"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.JobPortalRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var job_vacancy_component_1 = require("../job-vacancy/job-vacancy/job-vacancy.component");
var job_vacancy_list_component_1 = require("../job-vacancy/job-vacancy-list/job-vacancy-list.component");
var job_vacancy_detail_component_1 = require("../job-vacancy/job-vacancy-detail/job-vacancy-detail.component");
var my_profile_component_1 = require("../my-profile/my-profile/my-profile.component");
var my_applications_list_component_1 = require("../my-applications/my-applications-list/my-applications-list.component");
var my_applications_detail_component_1 = require("../my-applications/my-applications-detail/my-applications-detail.component");
var my_applications_component_1 = require("../my-applications/my-applications/my-applications.component");
var job_alert_list_component_1 = require("../job-alert/job-alert-list/job-alert-list.component");
var saved_jobs_component_1 = require("../saved-jobs/saved-jobs/saved-jobs.component");
var detail_component_1 = require("../saved-jobs/detail/detail.component");
var account_settings_component_1 = require("../account-setting/account-settings/account-settings.component");
var help_page_component_1 = require("../help-page/help-page.component");
var routes = [
    {
        path: 'job-vacancy',
        component: job_vacancy_component_1.JobVacancyComponent,
        children: [
            {
                path: '',
                component: job_vacancy_list_component_1.JobVacancyListComponent
            },
            {
                path: ':detail',
                component: job_vacancy_detail_component_1.JobVacancyDetailComponent
            }
        ]
    },
    {
        path: 'job-detail',
        component: job_vacancy_detail_component_1.JobVacancyDetailComponent
    },
    {
        path: 'my-applications',
        component: my_applications_component_1.MyApplicationsComponent,
        children: [
            {
                path: '',
                component: my_applications_list_component_1.MyApplicationsListComponent
            },
            {
                path: 'detail',
                component: my_applications_detail_component_1.MyApplicationsDetailComponent
            }
        ]
    },
    {
        path: 'detail',
        component: my_applications_detail_component_1.MyApplicationsDetailComponent
    },
    {
        path: 'my-profile',
        component: my_profile_component_1.MyProfileComponent
    },
    {
        path: 'saved-jobs',
        component: saved_jobs_component_1.SavedJobsComponent,
        children: [
            {
                path: 'detail',
                component: detail_component_1.DetailComponent
            },
        ]
    },
    {
        path: 'job-alert',
        component: job_alert_list_component_1.JobAlertListComponent
    },
    {
        path: 'account-settings',
        component: account_settings_component_1.AccountSettingsComponent
    },
    {
        path: 'help',
        component: help_page_component_1.HelpPageComponent
    }
];
var JobPortalRoutingModule = /** @class */ (function () {
    function JobPortalRoutingModule() {
    }
    JobPortalRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], JobPortalRoutingModule);
    return JobPortalRoutingModule;
}());
exports.JobPortalRoutingModule = JobPortalRoutingModule;
