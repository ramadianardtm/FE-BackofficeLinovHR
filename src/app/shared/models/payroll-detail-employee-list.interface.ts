import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface PayrollDetailEmployeeList {
    epgId: string;
    empId: string;
    nik: string;
    empName: string;
    unit: string;
    job: string;
    position: string;
    location: null;
    effBegin: string;
    effEnd: string;
    pgId: string;
}

export class PayrollDetailEmployeeListRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
