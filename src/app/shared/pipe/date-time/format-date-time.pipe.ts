import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

import { AuthenticationService } from 'app/core/authentication/authentication.service';

@Pipe({
    name: 'formatDateTime',
})
export class FormatDateTimePipe extends DatePipe implements PipeTransform {
    constructor(private authService: AuthenticationService) {
        // super(authService.getSession().locale);
        super('en-US');
    }

    transform(value: any, args?: any): any {
        const { dateFormat } = this.authService.getSetting();
        if (value) {
            return super.transform(value, dateFormat.value + " HH:mm:ss");

        } else {
            return "-"
        }
    }
}
