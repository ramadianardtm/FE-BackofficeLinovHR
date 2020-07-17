import { Injectable } from '@angular/core';
import { ApiService } from 'app/core/http/api.service';
import { PageInfo } from 'app/shared/models/page-info.model';
import { Observable } from 'rxjs';
import { AppResponse } from 'app/shared/models/app-response.model';
import { HttpParams } from '@angular/common/http';
import { isNil } from 'lodash-es';
import { PreRecruitmentRequest } from 'app/shared/models/recruitment-request.interface';

@Injectable({
    providedIn: 'root',
})
export class RecruitmentMainJobVacancyAllService {

    constructor(
        private api: ApiService,
        ) {}
        //gue ganti vacancy ke job-list - vacancy/?code=

        allJob(
            pi: PageInfo,
            key?: string,
            value?: string,
        ):Observable<AppResponse> {
            const uri = isNil(value) ? 'vacancy/job-list' : 'vacancy/job-list/search';
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

    getAll(
        pi: PageInfo,
        key?: string,
        value?: string,
    ):Observable<AppResponse> {
        const uri = isNil(value) ? 'vacancy/?code=' : 'vacancy/?code=/search';
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

    addNewVacancy(vacancy: any){
        return this.api.get('vacancy',vacancy)
    }

    getOne(uuid: string) {
        return this.api.get('vacancy/applied/' + uuid);
    }

    getReqNumber(uuid: string){
        return this.api.get('recruitment-request/' + uuid);
    }

    //masi tes yang ini
    getItemApplied(uuid: string){
        return this.api.get('vacancy/applied/' + uuid)
    }

    getCandidate(
        pi: PageInfo,
        key?: string,
        value?: string,
    ):Observable<AppResponse> {
        const uri = isNil(value) ? 'candidate/dialog/all' : 'candidate/dialog/all/search';
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

    getApplied(
        uuid: string,
        pi: PageInfo,
        key?: string,
        value?: string,
    ):Observable<AppResponse> {
        const uri = isNil(value) ? 'vacancy/applied/' + uuid : 'vacancy/applied/' +uuid+ '/search';
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

    save(recReq: PreRecruitmentRequest) {
        return this.api.post('vacancy', recReq);
    }

    benefit(){
        return this.api.get('lovopen/benefit');
    }

    assessment(){
        return this.api.get('lovopen/assessment');
    }

    offer(){
        return this.api.get('lovopen/offer');
    }

    interview(){
        return this.api.get('lovopen/interview');
    }

    onboardingset(){
        return this.api.get('tts');
    }
}
