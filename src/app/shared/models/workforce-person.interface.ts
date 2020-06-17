import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';
import { CoreLov } from './core-lov.interface';

export interface PersonL {
    id?: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    birthPlace: string;
    email: string;
    mobileNumber: string;
    nationality: string;
    gender: string;
}

export interface PersonI {
    person?: Person;
    personAddresses?: any[];
    personFamilies?: any[];
    personEmergencyContacts?: any[];
    personMemberships?: any[];
    personEducations?: any[];
    personWorkExperiences?: any[];
    personOrganizations?: any[];
    personReferences?: any[];
    personLanguages?: any[];
    personDocuments?: any[];
    personTax?: TaxSub;
    filePhoto: Photo;
}

export interface Person {
    id: string;
    tenant: Tenant;
    idCard: string;
    firstName: string;
    lastName: string;
    birthPlace: string;
    birthDate: Date;
    email: string;
    phone: string;
    mobile: string;
    hobbies: string;
    strength: string;
    weakness: string;
    country: Country;
    lovPtyp: CoreLov;
    lovBlod: CoreLov;
    lovGndr: CoreLov;
    lovRlgn: CoreLov;
    lovMars: CoreLov;
    filePhoto: string;
    shoeSize: number;
    shirtSize: string;
    pantsSize: number;
    height: number;
    weight: number;

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

export interface Tenant {
    id: string;
    isActive: boolean;
    companies: Company[];
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

export interface Company {
    id: string;
    isActive: boolean;
    code: string;
    name: string;
    description: null | string;
    companyTaxNumber: string;
    fileLogo: string;
    taxWithHolderNumber: string;
    taxWithHolderName: string;
    sortOrder: number;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

interface Photo {
    ext: string;
    base: string;
}

export interface TaxSub {
    id: string;
    taxNumber: number;
    taxStatus?: CoreLov;
    person?: Person;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export class PersonRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
