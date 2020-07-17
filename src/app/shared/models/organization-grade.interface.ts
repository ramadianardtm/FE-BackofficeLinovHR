import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface OrganizationGrade {
    id: string;
    updatedAt: null;
    version: number;
    isActive: boolean;
    name: string;
    code: string;
    ordinal: number;
    workMonth: null;
    bottomRate: null;
    midRate: null;
    topRate: null;
    company: Company;
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
    taxWithHolderName: string;
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
    level: number;
    sortOrder: number;
    isFavorite: boolean;
    parent?: string;
    path?: string;
    menuActions?: MenuAction[];
}

export interface MenuAction {
    id: string;
    updatedAt: string;
    version: number;
    code: string;
    name: string;
    path: null;
}

export class OrganizationGradeRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
