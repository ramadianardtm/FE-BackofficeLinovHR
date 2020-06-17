import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpPageComponent } from './help-page.component';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [HelpPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HelpPageModule { }
