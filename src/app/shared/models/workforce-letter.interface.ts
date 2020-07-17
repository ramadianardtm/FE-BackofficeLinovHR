import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface EmployeeLetter {
    id?: string;
    nik: string;
    name: string;
    leaveDate?: string;
    leaveType?: string;
}

export class EmployeeLetterRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
