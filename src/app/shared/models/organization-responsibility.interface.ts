import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface Responsibility {
    id: string;
    updatedAt: null | string;
    version: number;
    isActive: boolean;
    company?: Company;
    code: string;
    name: string;
    duties?: any[];
    tenantModules?: TenantModule[];
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
    tenant: Responsibility;
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

export class OrganizationResponsibilityRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}

export interface ResponsibilityGroup {
    id: string;
    updatedAt: null | string;
    version: number;
    isActive: boolean;
    company: Company;
    code: string;
    name: string;
    description?: string;
    responsibilityGroupDetails?: ResponsibilityGroupDetail[];
    duties?: Duty[];
}

export interface ResponsibilityGroupDetail {
    id: string;
    responsibility: ResponsibilityGroup;
}

export interface Duty {
    id: string;
    updatedAt: null;
    version: number;
    isActive: boolean;
    code: string;
    description: string;
}

export class OrganizationResponsibilityGroupRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
