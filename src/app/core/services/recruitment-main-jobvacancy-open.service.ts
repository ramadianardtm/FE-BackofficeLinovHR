import { Injectable } from '@angular/core';
import { ApiService } from 'app/core/http/api.service';
import { PageInfo } from 'app/shared/models/page-info.model';
import { Observable } from 'rxjs';
import { AppResponse } from 'app/shared/models/app-response.model';
import { HttpParams } from '@angular/common/http';
import { isNil } from 'lodash-es';
import { recMainJobVac } from 'app/shared/models/recruitment-main-jobvacancy.interface';

@Injectable({
    providedIn: 'root',
})
export class RecruitmentMainJobVacancyOpenService {

    constructor(
        private api: ApiService,
        ) {}

    getAll(
        pi: PageInfo,
        key?: string,
        value?: string,
    ):Observable<AppResponse> {
        const uri = isNil(value) ? 'vacancy/open?code=' : 'vacancy/open/search';
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
        return this.api.get('vacancy/' + uuid);
    }
}
