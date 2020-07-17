import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface ProcessResult {
    empId: string;
    nik: string;
    employeeName: string;
    unit: string;
    job: string;
    position: string;
    proId: string;
    payCompList: PayCompList[];
}

export interface PayCompList {
    prsId: string;
    payCompName: string;
    amount: number;
    originalAmount: number;
    notes: string;
    isDeleted: boolean;
    version: number;
}

export class PayrollProcessResultRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}