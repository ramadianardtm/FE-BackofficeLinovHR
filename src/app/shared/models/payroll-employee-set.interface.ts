import { PageInfo } from 'app/shared/models/page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface EmployeeSetH {
    id: string;
    updatedAt: null;
    version: number;
    company: Company;
    name: string;
    effBegin: string;
    effEnd: string;
    empSetDetail: any[];
}

export interface Company {
    id: string;
    updatedAt: string;
    version: number;
    isActive: boolean;
    code: string;
    name: string;
    description: string;
    companyTaxNumber: string;
    fileLogo: string;
    taxWithHolderNumber: string;
    sortOrder: number;
    tenant: Tenant;
}

export interface Tenant {
    id: string;
    updatedAt: string;
    version: number;
    isActive: boolean;
    tenantModules: TenantModule[];
    name: string;
    code: string;
}

export interface TenantModule {
    id: string;
    updatedAt: string;
    version: number;
    isActive: boolean;
    module: Module;
    effBegin: string;
    effEnd: string;
}

export interface Module {
    id: string;
    updatedAt: string;
    version: number;
    code: string;
    name: string;
    icon: string;
    path: string;
    sortOrder: number;
    menus?: Menu[];
}

export interface Menu {
    id: string;
    updatedAt: string;
    version: number;
    code: string;
    name: string;
    parent?: string;
    level: number;
    path?: string;
    sortOrder: number;
    menuActions?: MenuAction[];
    isFavorite: boolean;
}

export interface MenuAction {
    id: string;
    updatedAt: string;
    version: number;
    code: string;
    name: string;
    path: null;
}

export interface EmployeeSetItem {
    esId: string;
    esName: string;
    empId: string;
    nik: string;
    empName: string;
    effBegin: string;
    effEnd: string;
    unit: string;
    job: string;
    position: string;
}

export class EmployeeSetRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
