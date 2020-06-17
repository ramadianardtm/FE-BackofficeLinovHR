import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { TableModule } from 'primeng/table';
import { ChartModule, CardModule, CheckboxModule, DropdownModule, Dropdown, DialogModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { MyProfileBasicInformationComponent } from './my-profile-basic-information/my-profile-basic-information.component';
import { MyProfileFamilyMembersComponent } from './my-profile-family-members/my-profile-family-members.component';
import { MyProfileAddressInformationComponent } from './my-profile-address-information/my-profile-address-information.component';
import { MyProfileEducationComponent } from './my-profile-education/my-profile-education.component';
import { MyProfileSkillsComponent } from './my-profile-skills/my-profile-skills.component';
import { MyProfileLanguagesComponent } from './my-profile-languages/my-profile-languages.component';
import { MyProfileWorkingExperienceComponent } from './my-profile-working-experience/my-profile-working-experience.component';
import { MyProfileProjectExperienceComponent } from './my-profile-project-experience/my-profile-project-experience.component';
import { MyProfileOrganizationExperienceComponent } from './my-profile-organization-experience/my-profile-organization-experience.component';
import { MyProfileTrainingComponent } from './my-profile-training/my-profile-training.component';
import { MyProfileDocumentsComponent } from './my-profile-documents/my-profile-documents.component';
import { MyProfileReferenceComponent } from './my-profile-reference/my-profile-reference.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [MyProfileComponent, MyProfileBasicInformationComponent, MyProfileFamilyMembersComponent, MyProfileAddressInformationComponent, MyProfileEducationComponent, MyProfileSkillsComponent, MyProfileLanguagesComponent, MyProfileWorkingExperienceComponent, MyProfileProjectExperienceComponent, MyProfileOrganizationExperienceComponent, MyProfileTrainingComponent, MyProfileDocumentsComponent, MyProfileReferenceComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MyProfileModule { }
