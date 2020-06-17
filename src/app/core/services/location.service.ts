import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ApiService } from '../http/api.service';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class LocationService {
    // private dateFormat: string = this.session.getSession().dateFormat;

    constructor(
        private apiService: ApiService,
        private datePipe: DatePipe,
        private authService: AuthenticationService
    ) {}
}
