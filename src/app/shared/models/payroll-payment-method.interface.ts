import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface PayrollPaymentMethod {
    id: string;
    updatedAt: null;
    version: number;
    company: Company;
    lovPaytype: Lov;
    name: string;
    lovCurr: Lov;
    bank: Bank | null;
    accNumber: string;
    accName: null;
}

export interface Bank {
    id: string;
    updatedAt: string;
    version: number;
    code: string;
    name: string;
    description: null;
    swiftCode: string;
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
    menuActions?: LovType[];
    isFavorite: boolean;
}

export interface LovType {
    id: string;
    updatedAt: null | string;
    version: number;
    code: string;
    name: string;
    path?: null;
    arg1?: null;
}

export interface Lov {
    id: string;
    updatedAt: null;
    version: number;
    isActive: boolean;
    lovType: LovType;
    keyData: string;
    valData: string;
    isDisableable: boolean;
    arg1: null;
}

export class PayrollPaymentMethodRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
