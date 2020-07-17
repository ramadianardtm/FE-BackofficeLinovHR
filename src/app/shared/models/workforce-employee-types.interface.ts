import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';
import { CoreLov } from './core-lov.interface';
import { Company } from './session.interface';

export interface EmployeeTypes {
    id?: string;
    company: Company;
    code: string;
    name: string;
    workingMonth: number;
    numberFormat: NumberFormat;
    isActive: boolean;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

interface NumberFormat {
    id: string;
    name: string;
    startingNumber: number;
    lastNumber: number;
    format: string;
    digit: number;
    company: Company;
    lovNbft: CoreLov;
}

export class EmployeeTypesRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
