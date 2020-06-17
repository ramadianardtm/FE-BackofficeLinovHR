import { PageInfo } from './page-info.model';
import { Paginator } from 'app/configs/paginator.config';

export interface PayrollReportHistory {
    id?: string;
    details: Details;
}

export interface Details {
    processDate?: Date;
    periodBegin?: Date;
    periodEnd?: Date;
    description?: string;
    fileName?: string;
    periodFrom?: string;
    periodTo?: string;
    companyName?: string;
}


export class PayrollReportHistoryRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
