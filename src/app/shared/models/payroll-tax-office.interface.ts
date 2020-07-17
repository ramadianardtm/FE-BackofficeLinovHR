import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface TaxOffice {
    id?: string;
    isActive: boolean;
    code: string;
    name: string;
    description: string;
    company?: Company;
    location?: Location;
    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
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
    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface Tenant {
    id: string;
    isActive: boolean;
    tenantModules: null;
    name: string;
    code: string;
    effBegin: Date;
    effEnd: Date;
    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface Location {
    id: string;
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
    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface City {
    id: string;
    code: string;
    name: string;
    province: Province;
    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface Province {
    id: string;
    code: string;
    name: string;
    country: Country;
    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface Country {
    id: string;
    code: string;
    name: string;
    dialCode: string;
    nationality: string;
    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export class TaxOfficeRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
