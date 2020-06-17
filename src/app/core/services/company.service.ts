import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Company } from 'app/shared/models/company.interface';
import { Session, Token } from 'app/shared/models/session.interface';

import { ApiService } from 'app/core/http/api.service';

@Injectable({
    providedIn: 'root',
})
export class CompanyService {
    private createCond: boolean;
    // public companies: Company[] = [];
    public company: Company;

    /**
     * Behavior source
     */
    private companiesSource = new BehaviorSubject<any>({});

    /**
     * Companies observable
     */
    companies = this.companiesSource.asObservable();

    constructor(
        // private datePipe: DatePipe,
        private api: ApiService
    ) {}

    /**
     * Getter flag
     * @returns boolean
     */
    get isCreate(): boolean {
        return this.createCond;
    }

    /**
     * Setter flag
     * @param value isCreate Value
     */
    set isCreate(value: boolean) {
        this.createCond = value;
    }

    getOne(id: string) {
        return this.api.get('company/' + id);
    }

    changeCompany(company: Company): Observable<Session> {
        return this.api.postLogin('change-company', company);
    }

    /**
     * Company request payload mapper
     * @param value Company
     * @param bank Selected Banks
     * @param companyLogo Company logo file
     * @returns formData
     */
    requestPayloadMapper(value: Company, bank: any, companyLogo: File) {
        // value.effBegin = this.datePipe.transform(
        //     value.effBegin,
        //     AppConstant.dateFormatApi
        // );
        // value.effEnd = this.datePipe.transform(
        //     value.effEnd,
        //     AppConstant.dateFormatApi
        // );
        // value.bankAccount = bank;

        const formData = new FormData();
        formData.append('data', JSON.stringify(value));
        formData.append('docTypes[0]', companyLogo ? 'PP' : '');
        formData.append(
            'fileContents[0]',
            companyLogo ? companyLogo : null,
            companyLogo ? companyLogo.name : ''
        );

        return formData;
    }
}
