import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface Recurring {
    empId: string;
    nik: string;
    empName: string;
}

export interface RecurringI {
    nik?: string;
    empName?: string;
    position?: string;
    pcId?: string;
    pcCode?: string;
    pcName?: string;
    empId?: string;
    recCompList?: RecCompList[];
}

export interface RecCompList {
    recId: string;
    amount: string;
    effBegin: string;
    effEnd: string;
    isFormula: boolean;
}

export class PayrollRecurringRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
