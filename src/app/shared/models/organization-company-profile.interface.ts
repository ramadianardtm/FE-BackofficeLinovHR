import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';
import { CoreLov } from './core-lov.interface';

export interface CompanyInformation {
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

    company: Company;
    companyLocation: CompanyLocation[];
    companyMembership: any[];
    companyBankAccount: any[];
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
    menuActions?: Province[];
}

export interface Province {
    id: string;
    updatedAt: null | string;
    version: number;
    code: string;
    name: string;
    path?: null;
    arg1?: null;
    country?: Country;
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

export interface CompanyLocation {
    id: string;
    updatedAt: null;
    version: number;
    company: Company;
    location: Location;
}

export interface Location {
    id: string;
    updatedAt: null;
    version: number;
    isActive: boolean;
    name: string;
    description: string;
    calendar: null;
    city: City;
    address: string;
    postalCode: string;
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

export class CompanyProfileRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}

export interface CompanyBankAccounts {
    id: string;
    updatedAt: string;
    version: number;
    accNumber: string;
    accName: string;
    company: Company;
    bank: Bank;
    lovCurr: LovCurr;
}

export interface Bank {
    id: string;
    updatedAt: string;
    version: number;
    code: string;
    name: string;
    description: string;
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

export interface LovType {
    id: string;
    updatedAt: null | string;
    version: number;
    code: string;
    name: string;
    path?: null;
    arg1?: null;
}

export interface LovCurr {
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

export class CompanyBankAccountsRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
