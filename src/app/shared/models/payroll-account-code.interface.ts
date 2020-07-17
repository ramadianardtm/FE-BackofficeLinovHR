import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface AccountCode {
    id: string;
    createdBy: string;
    createdAt: Date;
    updatedBy: string;
    updatedAt: Date;
    version: number;
    isActive: boolean;
    name: string;
    code: string;
    description: null;
    company: Company;
}

export interface Company {
    id: string;
    createdBy: string;
    createdAt: Date;
    updatedBy: string;
    updatedAt: Date;
    version: number;
    isActive: boolean;
    code: string;
    name: string;
    description: string;
    companyTaxNumber: string;
    isDeleted: boolean;
    fileLogo: string;
    taxWithHolderNumber: string;
    taxWithHolderName: string;
    sortOrder: number;
    tenant: Tenant;
}

export interface Tenant {
    id: string;
    createdBy: string;
    createdAt: Date;
    updatedBy: string;
    updatedAt: Date;
    version: number;
    tenantModules: null;
    name: string;
    code: string;
    effBegin: Date;
    effEnd: Date;
    isActive: boolean;
}

export class PayrollAccountCodeRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
