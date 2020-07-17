import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface PayrollComponentsRegular {
    companyId: string;
    code: string;
    name: string;
    clazz: string;
    lovCurr: LovCurr;
    terminationType: string;
    isRetroEnabled: boolean;
    retroComponent: null;
    isOncePerPeriod: boolean;
    isDisplayInReport: boolean;
    isDisplayInPayslip: boolean;
    formula: string;
    taxType: null;
    taxLine: null;
    sortOrder: number;
    ledgerType: string;
    effBegin: string;
    effEnd: string;
    isMembershipComponent: boolean;
    membershipComponent: MembershipComponent;
    version: number;
    id: string;
}

export interface LovCurr {
    id: string;
    updatedAt: null;
    version: null;
    isActive: boolean;
    lovType: null;
    keyData: null;
    valData: string;
    isDisableable: null;
    arg1: null;
}

export interface MembershipComponent {
    name: string;
    id: string;
}

export class PayrollComponentsRegularRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
