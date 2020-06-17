import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

import { AuthenticationService } from 'app/core/authentication/authentication.service';

@Pipe({
    name: 'formatDate',
})
export class FormatDatePipe extends DatePipe implements PipeTransform {
    constructor(private authService: AuthenticationService) {
        // super(authService.getSession().locale);
        super('en-US');
    }

    transform(value: any, args?: any): any {
        const getSetting = this.authService.getSetting();
        if (value == null) return "-"
        if (getSetting) {
            const { dateFormat } = this.authService.getSetting();
            if (value) {
                let b = new Date(value)
                if (b.getFullYear() === 9999) {
                    return '-';
                } else {
                    return super.transform(b, dateFormat.value);
                }
            }
            else {
                return "-"
            }
        }
    }
}