import { PageInfo } from './page-info.model';
import { Paginator } from 'app/configs/paginator.config';

export interface EmployeeLetterHistory {
    id?: string;
    parameters: Parameters;
    details: Details;
}

export interface Details {
    name?: string;
    nik?: string;
    position?: string;
    processDate?: Date;
    processBegin?: Date;
    processEnd?: Date;
    rewardType?: string;
    description?: string;
    fileName?: string;
}

export interface Parameters {
    employeeId: string;
}


export class EmployeeLetterHistoryRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
