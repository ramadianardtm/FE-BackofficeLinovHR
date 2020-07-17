import { Component } from '@angular/core';
import { Subject } from 'rxjs';

import { LoaderService } from 'app/core/layouts/loader/shared/loader.service';

@Component({
    selector: 'app-loader-progressbar',
    templateUrl: './progressbar.component.html',
    styleUrls: ['./progressbar.component.scss'],
})
export class ProgressbarComponent {
    mode = 'indeterminate';
    isLoading: Subject<boolean> = this.loaderService.isLoading;

    constructor(private loaderService: LoaderService) {}
}
