import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportTableComponent } from './export-table/export-table.component';
import { SearchComponent } from './search/search.component';
import { SharedModule } from 'app/shared/shared.module';
import { LovModule } from 'app/shared/components/lov/lov.module';
import { LoggerFormModule } from 'app/shared/components/logger-form/logger-form.module';
import { AppearanceModule } from 'app/shared/components/appearance/appearance.module';
import { NoDataSelectedComponent } from './no-data-selected/no-data-selected.component';
import { SearchWithDateComponent } from './search-with-date/search-with-date.component';


@NgModule({
  declarations: [ExportTableComponent, SearchComponent, NoDataSelectedComponent, SearchWithDateComponent],
  imports: [
    CommonModule,
    AppearanceModule,
    LoggerFormModule,
    SharedModule,
    LovModule

  ],
  exports: [
    ExportTableComponent,
    SearchComponent,
    NoDataSelectedComponent,
    SearchWithDateComponent
  ],
})
export class GlobalAllModule { }
