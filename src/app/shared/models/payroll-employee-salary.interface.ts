import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface EmployeeSalary {
    id?: string;
    employeeId: string;
    employeeName: string;
    unit: string;
    job: string;
    position: string;
    amount: string;
    effBegin: Date;
    effEnd: Date;

    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
    isActive?: boolean;

    isView?: boolean;
    isEdit?: boolean;
}

export class PayrollEmployeeSalaryRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
