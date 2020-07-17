"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var register_component_1 = require("./core/layouts/login/register/register.component");
var font_awesome_component_1 = require("./components/Icon/font-awesome/font-awesome.component");
var feather_component_1 = require("./components/Icon/feather/feather.component");
var line_icon_component_1 = require("./components/Icon/line-icon/line-icon.component");
var gallery_component_1 = require("./components/gallery/gallery.component");
var card_component_1 = require("./components/Widgets/card/card.component");
var card_images_component_1 = require("./components/Widgets/card-images/card-images.component");
var data_component_1 = require("./components/Widgets/data/data.component");
var social_component_1 = require("./components/Widgets/social/social.component");
var calendar_component_1 = require("./components/Sidebar/calendar/calendar.component");
var chat_component_1 = require("./components/Sidebar/chat/chat.component");
var contact_info_component_1 = require("./components/Sidebar/contact-info/contact-info.component");
var file_manager_component_1 = require("./components/Sidebar/file-manager/file-manager.component");
var page_search_component_1 = require("./components/Sidebar/page-search/page-search.component");
var login_component_1 = require("./core/layouts/login/pages/login/login.component");
var sign_in_component_1 = require("./core/layouts/login/components/sign-in/sign-in.component");
var forgot_password_component_1 = require("./core/layouts/login/components/forgot-password/forgot-password.component");
var reset_password_component_1 = require("./core/layouts/login/components/reset-password/reset-password.component");
var home_component_1 = require("./core/layouts/login/home/home.component");
var job_vacancy_nonuser_component_1 = require("./modules/job-vacancy-nonuser/job-vacancy-nonuser.component");
var job_detail_component_1 = require("./modules/job-vacancy-nonuser/job-detail.component");
var routes = [
    // TopBar Routes
    // Authetication Routes
    { path: '', redirectTo: 'job-vacancy', pathMatch: 'full' },
    // { path: 'login', component: LoginComponent, data: { title: ':: Epic ::' } },
    {
        path: 'home',
        component: login_component_1.LoginPageComponent,
        children: [
            {
                path: '',
                component: home_component_1.HomeComponent
            },
            {
                path: 'login',
                component: sign_in_component_1.SignInComponent
            },
            {
                path: 'register',
                component: register_component_1.RegisterComponent
            },
            {
                path: 'forgot-password',
                component: forgot_password_component_1.ForgotPasswordComponent
            },
            {
                path: 'reset-password',
                component: reset_password_component_1.ResetPasswordComponent
            },
            {
                path: 'job-vacancy-nonuser',
                component: job_vacancy_nonuser_component_1.JobVacancyNonuserComponent
            },
            {
                path: 'user-detail',
                component: job_detail_component_1.JobDetailComponent
            },
        ]
    },
    // Icon Routes
    {
        path: 'font-awesome',
        component: font_awesome_component_1.FontAwesomeComponent,
        data: { title: ':: Epic :: Home ::' }
    },
    {
        path: 'feather',
        component: feather_component_1.FeatherComponent,
        data: { title: ':: Epic :: Home ::' }
    },
    {
        path: 'line-icon',
        component: line_icon_component_1.LineIconComponent,
        data: { title: ':: Epic :: Home ::' }
    },
    // Widgets Routes
    {
        path: 'card',
        component: card_component_1.CardComponent,
        data: { title: ':: Epic :: Home ::' }
    },
    {
        path: 'card-image',
        component: card_images_component_1.CardImagesComponent,
        data: { title: ':: Epic :: Home ::' }
    },
    {
        path: 'data',
        component: data_component_1.DataComponent,
        data: { title: ':: Epic :: Home ::' }
    },
    {
        path: 'social',
        component: social_component_1.SocialComponent,
        data: { title: ':: Epic :: Home ::' }
    },
    // Gallery Routes
    {
        path: 'gallery',
        component: gallery_component_1.GalleryComponent,
        data: { title: ':: Epic :: Home ::' }
    },
    // Sidebar Routes
    {
        path: 'calendar',
        component: calendar_component_1.CalendarComponent,
        data: { title: ':: Epic :: Home ::' }
    },
    {
        path: 'contact-info',
        component: chat_component_1.ChatComponent,
        data: { title: ':: Epic :: Home ::' }
    },
    {
        path: 'chat',
        component: contact_info_component_1.ContactInfoComponent,
        data: { title: ':: Epic :: Home ::' }
    },
    {
        path: 'filemanager',
        component: file_manager_component_1.FileManagerComponent,
        data: { title: ':: Epic :: Home ::' }
    },
    {
        path: 'page-search',
        component: page_search_component_1.PageSearchComponent,
        data: { title: ':: Epic :: Home ::' }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules }),
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
