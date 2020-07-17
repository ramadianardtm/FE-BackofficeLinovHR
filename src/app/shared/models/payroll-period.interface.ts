import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface Period {
    ppId: string;
    name: string;
    desc: string;
    periodType: string;
    year: number;
}

export interface PeriodI {
    ppdId: string;
    name: string;
    desc: string;
    periodType: string;
    year: number;
    sequence: number;
    month: number;
    defaultStart: string;
    defaultEnd: string;
    paidDate: string;
    ppId: string;
    status: boolean;
}

export class PayrollPeriodRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
