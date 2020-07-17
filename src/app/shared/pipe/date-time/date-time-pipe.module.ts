import { NgModule } from '@angular/core';

import { FormatDatePipe } from './format-date.pipe';
import { FormatTimePipe } from './format-time.pipe';
import { FormatAgePipe } from './format-age.pipe';
import { FormatDateTimePipe } from './format-date-time.pipe';

@NgModule({
    declarations: [FormatDatePipe, FormatTimePipe, FormatAgePipe, FormatDateTimePipe],
    exports: [FormatDatePipe, FormatTimePipe, FormatAgePipe, FormatDateTimePipe],
})
export class DateTimePipeModule { }
