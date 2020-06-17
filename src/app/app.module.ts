import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AgmCoreModule } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { LaddaModule } from 'angular2-ladda';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { PrimeAppModule } from './shared/prime-app.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/Authentication/login/login.component';
import { HeaderTopComponent } from './components/Navbar/header-top/header-top.component';
import { LeftSidebarComponent } from './components/Navbar/left-sidebar/left-sidebar.component';
import { PageTopbarComponent } from './components/Navbar/page-topbar/page-topbar.component';
import { DashboardComponent } from './components/Hrms/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { UserComponent } from './components/Hrms/user/user.component';
import { DepartmentsComponent } from './components/Hrms/departments/departments.component';
import { EmployeeComponent } from './components/Hrms/employee/employee.component';
import { ActivitiesComponent } from './components/Hrms/activities/activities.component';
import { HolidayComponent } from './components/Hrms/holiday/holiday.component';
import { EventsComponent } from './components/Hrms/events/events.component';
import { PayrollComponent } from './components/Hrms/payroll/payroll.component';
import { AccountsComponent } from './components/Hrms/accounts/accounts.component';
import { ReportComponent } from './components/Hrms/report/report.component';
import { ProjectDashboardComponent } from './components/Project/project-dashboard/project-dashboard.component';
import { ProjectListComponent } from './components/Project/project-list/project-list.component';
import { ProjectTaskboardComponent } from './components/Project/project-taskboard/project-taskboard.component';
import { ProjectTicketListComponent } from './components/Project/project-ticket-list/project-ticket-list.component';
import { ProjectTicketDetailComponent } from './components/Project/project-ticket-detail/project-ticket-detail.component';
import { ProjectClientsComponent } from './components/Project/project-clients/project-clients.component';
import { ProjectTodoListComponent } from './components/Project/project-todo-list/project-todo-list.component';
import { JobDashboardComponent } from './components/Jobs/job-dashboard/job-dashboard.component';
import { JobPosotionsComponent } from './components/Jobs/job-posotions/job-posotions.component';
import { JobApplicationComponent } from './components/Jobs/job-application/job-application.component';
import { JobResumesComponent } from './components/Jobs/job-resumes/job-resumes.component';
import { JobSettingsComponent } from './components/Jobs/job-settings/job-settings.component';
import { RegisterComponent } from './components/Authentication/register/register.component';
import { ForgotPasswordComponent } from './components/Authentication/forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './components/Authentication/page-not-found/page-not-found.component';
import { PageNotWorkingComponent } from './components/Authentication/page-not-working/page-not-working.component';
import { FontAwesomeComponent } from './components/Icon/font-awesome/font-awesome.component';
import { FeatherComponent } from './components/Icon/feather/feather.component';
import { LineIconComponent } from './components/Icon/line-icon/line-icon.component';
import { FlagIconComponent } from './components/Icon/flag-icon/flag-icon.component';
import { PaymentIconComponent } from './components/Icon/payment-icon/payment-icon.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CardComponent } from './components/Widgets/card/card.component';
import { CardImagesComponent } from './components/Widgets/card-images/card-images.component';
import { DataComponent } from './components/Widgets/data/data.component';
import { SocialComponent } from './components/Widgets/social/social.component';
import { CalendarComponent } from './components/Sidebar/calendar/calendar.component';
import { ChatComponent } from './components/Sidebar/chat/chat.component';
import { ContactInfoComponent } from './components/Sidebar/contact-info/contact-info.component';
import { FileManagerComponent } from './components/Sidebar/file-manager/file-manager.component';
import { PageSearchComponent } from './components/Sidebar/page-search/page-search.component';
import { AppSettingComponent } from './components/Topbar/app-setting/app-setting.component';
import { PageProfileComponent } from './components/Topbar/page-profile/page-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { LoaderModule } from './core/layouts/loader/loader.module';
import {TableModule} from 'primeng/table';
import { AccountSettingsComponent } from './modules/account-setting/account-settings/account-settings.component';

export const createTranslateLoader = (http: HttpClient) => {
    return new TranslateHttpLoader(http, '../translations/', '.json');
};

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HeaderTopComponent,
        LeftSidebarComponent,
        PageTopbarComponent,
        DashboardComponent,
        FooterComponent,
        UserComponent,
        DepartmentsComponent,
        EmployeeComponent,
        ActivitiesComponent,
        HolidayComponent,
        EventsComponent,
        PayrollComponent,
        AccountsComponent,
        ReportComponent,
        ProjectDashboardComponent,
        ProjectListComponent,
        ProjectTaskboardComponent,
        ProjectTicketListComponent,
        ProjectTicketDetailComponent,
        ProjectClientsComponent,
        ProjectTodoListComponent,
        JobDashboardComponent,
        JobPosotionsComponent,
        JobApplicationComponent,
        JobResumesComponent,
        JobSettingsComponent,
        RegisterComponent,
        ForgotPasswordComponent,
        PageNotFoundComponent,
        PageNotWorkingComponent,
        FontAwesomeComponent,
        FeatherComponent,
        LineIconComponent,
        FlagIconComponent,
        PaymentIconComponent,
        GalleryComponent,
        CardComponent,
        CardImagesComponent,
        DataComponent,
        SocialComponent,
        CalendarComponent,
        ChatComponent,
        ContactInfoComponent,
        FileManagerComponent,
        PageSearchComponent,
        AppSettingComponent,
        PageProfileComponent,
        
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule.forRoot(),
        PrimeAppModule.forRoot(),
        CoreModule,
        LoaderModule,
        RichTextEditorAllModule,
        FullCalendarModule,
        NgApexchartsModule,
        TableModule,
        AgmCoreModule.forRoot({
            apiKey: '',
        }),
        NgMultiSelectDropDownModule.forRoot(),
        LaddaModule.forRoot({
            style: 'slide-left',
            spinnerSize: 25,
            spinnerLines: 12,
        }),
        DeviceDetectorModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient],
            },
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
