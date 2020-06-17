import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
    name: 'formatAge',
})
export class FormatAgePipe implements PipeTransform {
    constructor(private translateService: TranslateService) {}

    age(input: Date) {
        // Convert to UTC format
        const now = new Date();
        // @ts-ignore
        const date = new Date(Date.parse(input));

        const timeDiff = Math.abs(now.getTime() - date.getTime());
        const diffDays = timeDiff / (1000 * 3600 * 24);
        const years = Math.floor(diffDays / 365);
        const months = Math.floor((diffDays % 365) / 30);
        const days = Math.floor((diffDays % 365) % 30);

        return {
            years,
            months,
            days,
        };
    }

    transform(input: Date, isFull = false) {
        const personAge = this.age(input);
        const pri =
            personAge.years + ' ' + this.translateService.instant('years');
        const sub = isFull
            ? personAge.months + ' ' + this.translateService.instant('months')
            : this.translateService.instant('old');

        return pri + ' ' + sub;
    }
}
