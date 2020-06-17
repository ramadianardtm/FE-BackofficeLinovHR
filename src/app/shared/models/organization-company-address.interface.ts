import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';
import { CoreLov } from './core-lov.interface';

export interface CompanyAddress {
    id: string;
    updatedAt: null | string;
    version: number;
    isActive: boolean;
    company: Company;
    code: string;
    name: string;
    description: null | string;
    address: string;
    postalCode: null | string;
    city: City;
    latitude: null;
    longitude: null;
}

export interface City {
    id: string;
    updatedAt: string;
    version: number;
    code: string;
    name: string;
    province: Province;
    lovCtyp: LovCtyp;
}

export interface LovCtyp {
    id: string;
    updatedAt: null;
    version: number;
    isActive: boolean;
    lovType: Province;
    keyData: string;
    valData: string;
    isDisableable: boolean;
    arg1: null;
}

export interface Province {
    id: string;
    updatedAt: null | string;
    version: number;
    code: string;
    name: string;
    arg1?: null;
    country?: Country;
    path?: null;
}

export interface Country {
    id: string;
    updatedAt: null;
    version: number;
    code: string;
    name: string;
    dialCode: string;
    nationality: string;
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
    parent?: string;
    level: number;
    path?: string;
    sortOrder: number;
    menuActions?: Province[];
    isFavorite: boolean;
}

export class CompanyAddressRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
