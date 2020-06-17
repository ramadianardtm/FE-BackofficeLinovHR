import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// import { DashboardComponent } from './components/Hrms/dashboard/dashboard.component';
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
import { RegisterComponent } from './core/layouts/login/register/register.component';
// import { ForgotPasswordComponent } from './components/Authentication/forgot-password/forgot-password.component';
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

import { LoginPageComponent } from './core/layouts/login/pages/login/login.component';
import { SignInComponent } from './core/layouts/login/components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './core/layouts/login/components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './core/layouts/login/components/reset-password/reset-password.component';

import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './core/layouts/login/home/home.component';
import { JobVacancyComponent } from './modules/job-vacancy/job-vacancy/job-vacancy.component';
import { JobVacancyListComponent } from './modules/job-vacancy/job-vacancy-list/job-vacancy-list.component';
import { JobVacancyDetailComponent } from './modules/job-vacancy/job-vacancy-detail/job-vacancy-detail.component';
import { MyProfileComponent } from './modules/my-profile/my-profile/my-profile.component';
import { MyApplicationsModule } from './modules/my-applications/my-applications.module';
import { MyApplicationsListComponent } from './modules/my-applications/my-applications-list/my-applications-list.component';
import { MyApplicationsDetailComponent } from './modules/my-applications/my-applications-detail/my-applications-detail.component';
import { MyApplicationsComponent } from './modules/my-applications/my-applications/my-applications.component';
import { JobVacancyNonuserComponent } from './modules/job-vacancy-nonuser/job-vacancy-nonuser.component';
import { JobDetailComponent } from './modules/job-vacancy-nonuser/job-detail.component';


const routes: Routes = [
    // TopBar Routes

    // Authetication Routes

    { path: '', redirectTo: 'job-vacancy', pathMatch: 'full' },
    // { path: 'login', component: LoginComponent, data: { title: ':: Epic ::' } },
    {
        path: 'home',
        component: LoginPageComponent,
        children: [
            {
                path:'',
                component:HomeComponent

            },
            {
                path: 'login',
                component: SignInComponent,

            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent,
            },
            {
                path: 'reset-password',
                component: ResetPasswordComponent,
            },
            {
                path: 'job-vacancy-nonuser',
                component: JobVacancyNonuserComponent,
            },
            {
                path: 'user-detail',
                component: JobDetailComponent
            },
        ],
    },
    // Icon Routes
    {
        path: 'font-awesome',
        component: FontAwesomeComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'feather',
        component: FeatherComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'line-icon',
        component: LineIconComponent,
        data: { title: ':: Epic :: Home ::' },
    },
     // Widgets Routes
     {
        path: 'card',
        component: CardComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'card-image',
        component: CardImagesComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'data',
        component: DataComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'social',
        component: SocialComponent,
        data: { title: ':: Epic :: Home ::' },
    },
     // Gallery Routes
     {
        path: 'gallery',
        component: GalleryComponent,
        data: { title: ':: Epic :: Home ::' },
    },

    // Sidebar Routes
    {
        path: 'calendar',
        component: CalendarComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'contact-info',
        component: ChatComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'chat',
        component: ContactInfoComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'filemanager',
        component: FileManagerComponent,
        data: { title: ':: Epic :: Home ::' },
    },
    {
        path: 'page-search',
        component: PageSearchComponent,
        data: { title: ':: Epic :: Home ::' },
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
