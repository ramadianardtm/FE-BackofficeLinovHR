import { Injectable } from '@angular/core';

import { ApiService } from 'app/core/http/api.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class CoreLovService {
    constructor(private api: ApiService) {}

    /**
     *  Api get Lov Core
     *  @param  uri Uri for Core Lov
     */
    getAll(uri: string) {
        return this.api.get('lov/' + uri);
    }
    // getSearch(uri: string, job: string, inquiry: string) {
    //     const param = new HttpParams().set('job', job).set('inquiry', inquiry);
    //     return this.api.get('employees/search/job' + uri, param);
    // }
}
