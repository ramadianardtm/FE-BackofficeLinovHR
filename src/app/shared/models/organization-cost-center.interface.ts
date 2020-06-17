import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';
import { CoreLov } from './core-lov.interface';

export interface CostCenterH {
    id?: string;
    code: string;
    name: string;
    company: Company;
    deleted: boolean;
    isActive: boolean;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface CostCenterI {
    id?: string;
    isActive: boolean;
    code: string;
    name: string;
    company: Company;
    deleted: boolean;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface Company {
    id: string;
    createdBy: string;
    createdAt: Date | string;
    updatedBy: string;
    updatedAt: Date | string;
    version: number;
    code: string;
    name: string;
    description: string;
    companyTaxNumber: string;
    isDeleted: boolean;
    fileLogo: string;
    taxWithHolderNumber: string;
    taxWithHolderName: string;
    sortOrder: number;
    isActive: boolean;
    tenant: Tenant;
}

export interface Tenant {
    id: string;
    createdBy: string;
    createdAt: Date | string;
    updatedBy: null;
    updatedAt: Date | string;
    version: number;
    name: string;
    code: string;
    tenantModules: null;
    effBegin: Date;
    effEnd: Date;
    isActive: boolean;
}

export class CostCenterRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
