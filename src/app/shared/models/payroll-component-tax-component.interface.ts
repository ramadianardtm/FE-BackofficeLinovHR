import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface PayrollComponentsTaxComponent {
    id: string;
    updatedAt: null;
    version: number;
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
    taxType: string;
    taxLine: null;
    sortOrder: number;
    ledgerType: string;
    effBegin: string;
    effEnd: string;
    isMembershipComponent: boolean;
    membershipComponent: null;
    company: string;
}

export interface LovCurr {
    id: string;
    updatedAt: null;
    version: number;
    isActive: boolean;
    lovType: LovType;
    keyData: string;
    valData: string;
    isDisableable: boolean;
    arg1: null;
}

export interface LovType {
    id: string;
    updatedAt: null;
    version: number;
    code: string;
    name: string;
    arg1: null;
}

export class PayrollComponentsTaxComponentRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
