import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface Bank {
    id?: string;
    company?: Company;
    code: string;
    name: string;
    description: string;
    swiftCode: string;
    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;

    isView?: boolean;
    isEdit?: boolean;
}

export interface Company {
    id: string;
    isActive: boolean;
    code: string;
    name: string;
    description: string;
    companyTaxNumber: string;
    fileLogo: string;
    taxWithHolderNumber: string;
    taxWithHolderName: string;
    sortOrder: number;
    tenant: Tenant;
    createdBy: string;
    createdAt: Date;
    updatedBy: string;
    updatedAt: Date;
    version: number;
}

export interface Tenant {
    id: string;
    isActive: boolean;
    tenantModules: null;
    name: string;
    code: string;
    effBegin: Date;
    effEnd: Date;
    createdBy: string;
    createdAt: Date;
    updatedBy: string;
    updatedAt: Date;
    version: number;
}

export class PayrollBankRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
