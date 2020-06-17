import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface PayrollComponentList {
    pcId: string;
    payCompCode: string;
    payCompName: string;
    prcOrder: number;
    effBegin: string;
    effEnd: string;
    pgId: string;
}

export class PayrollComponentListRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
