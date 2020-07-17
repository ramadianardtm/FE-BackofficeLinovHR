import {
    PageInfo
} from './page-info.model';

import {
    Paginator
} from 'app/configs/paginator.config';

export interface OrganizationPosition {
    id: string;
    updatedAt: null;
    version: number;
    isActive: boolean;
    company: Company;
    unit: Unit;
    job: Job;
    code: string;
    name: string;
    description: string;
    isHead: boolean;
}

export interface Tenant {
    id: string;
    updatedAt: null | string;
    version: number;
    isActive: boolean;
    tenantModules ? : TenantModule[];
    name: string;
    code: string;
    unitLevel ? : number;
    company ? : Company;
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
    menus ? : Menu[];
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
    parent ? : string;
    path ? : string;
    menuActions ? : Province[];
}

export interface Province {
    id: string;
    updatedAt: null | string;
    version: number;
    code: string;
    name: string;
    path ? : null;
    arg1 ? : null;
    country ? : Country;
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

export interface Job {
    id: string;
    updatedAt: string;
    version: number;
    isActive: boolean;
    company: Company;
    jobFamily ? : Job;
    code: string;
    name: string;
    description: string;
    ordinal ? : number;
}

export interface Unit {
    id: string;
    updatedAt: null;
    version: number;
    isActive: boolean;
    code: string;
    name: string;
    company: Company;
    unitType: Tenant;
    costCenter: null;
    location: Location;
    head: null;
}

export interface Location {
    id: string;
    updatedAt: string;
    version: number;
    isActive: boolean;
    name: string;
    description: string;
    calendar: null;
    city: City;
    address: string;
    postalCode: null;
    phone: string;
    fax: string;
    code: string;
    latitude: null;
    longitude: null;
    company: Company;
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

export class OrganizationPositionRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
