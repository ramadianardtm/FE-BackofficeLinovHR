import { Injectable } from '@angular/core';

import { General } from 'app/shared/models/workbench-general.interface';

import { ApiService } from 'app/core/http/api.service';
import { PageInfo } from 'app/shared/models/page-info.model';
import { Observable } from 'rxjs';
import { AppResponse } from 'app/shared/models/app-response.model';
import { isNil } from 'lodash-es';
import { HttpParams } from '@angular/common/http';
import { MppI } from 'app/shared/models/recruitment-mpp.interface';

@Injectable({
    providedIn: 'root',
})
export class RecruitmentMppService {

    constructor(
        private api: ApiService,
        ) {}

    /**
     *  Api get all General
     */
    // getAll(id) {
    //     return this.api.get('lovopen/assessment/' + id);
    // }

    getAll(
        pi: PageInfo,
        key?: string,
        value?: string
    ): Observable<AppResponse> {
        const uri = isNil(value) ? 'mpp' : 'mpp/search';
        const param = isNil(value)
            ? new HttpParams()
                  .set('page', pi.pageInfo)
                  .set('limit', pi.pageLimit)
            : new HttpParams()
                  .set('page', pi.pageInfo)
                  .set('limit', pi.pageLimit)
                  .set('key', key)
                  .set('value', value);

        return this.api.get(uri, param);
    }

    getOne(uuid: string) {
        return this.api.get('mpp/' + uuid);
    }

    save(mpp: MppI) {
        return this.api.post('mpp', mpp);
    }

    
    
}
