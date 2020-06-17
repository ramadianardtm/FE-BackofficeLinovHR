import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface ReportPaklaring {
    id?: string;
    parameters: Parameters;
    details: Details;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

interface Details {
    name: string;
    nik: string;
    position: string;
    processDate: Date;
    filename: string;
}

interface Parameters {
    employeeId: string;
}

export class ReportPaklaringRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
