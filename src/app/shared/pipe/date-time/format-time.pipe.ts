import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatTime',
})
export class FormatTimePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        return '';
    }
}
