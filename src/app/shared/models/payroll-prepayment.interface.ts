import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface Prepayment {
    proId: string;
    pgId: string;
    pgName: string;
    ppdId: string;
    defaultStart: string;
    defaultEnd: string;
    paidDate: string;
    empSetId: null;
    empSetName: null;
    payCompSetId: null;
    payCompSetName: null;
    type: string;
    retroStart: null;
    retroEnd: null;
    status: string;
    desc: null;
    createdAt: string;
}

export interface PrepaymentI {
    preId: string;
    pgId: string;
    pgName: string;
    ppdId: string;
    defaultStart: string;
    defaultEnd: string;
    paidDate: string;
    empSetId: null;
    empSetName: null;
    payCompSetId: null;
    payCompSetName: null;
    createdAt: string;
    prepayDet: PrepayDet[];
}

export interface PrepayDet {
    id: string;
    empId: string;
    empName: string;
    bank: string;
    accNumber: string;
    accName: string;
    paytype: string;
    curr: string;
    income: number;
    deduction: number;
    neutral: number;
    thp: number;
}

export class PayrollPrepaymentRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
