import { PageInfo } from 'app/shared/models/page-info.model';

import { Paginator } from 'app/configs/paginator.config';


export interface EmployeesSelect {
    id: string;
    personId: string;
    nik: string;
    name: string;
    unit: string;
    job: string;
    position: string;
}

export class EmployeesSelectRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
