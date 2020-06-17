import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';
import { CoreLov } from './core-lov.interface';

export interface Project {
    id:             string;
    updatedAt:      null;
    version:        number;
    isActive:       boolean;
    code:           string;
    name:           string;
    description:    null;
    quota:          null;
    company:        Company;
    supervisor:     null;
    projectManager: null;
    location:       Location;
    effBegin:       string;
    effEnd:         string;
}

export interface Company {
    id:                  string;
    version:             number;
    isActive:            boolean;
    code:                string;
    name:                string;
    description:         string;
    companyTaxNumber:    string;
    taxWithHolderNumber: string;
    taxWithHolderName:   string;
    sortOrder:           number;
    tenant:              Tenant;
}

export interface Tenant {
    id:            string;
    updatedAt:     string;
    version:       number;
    isActive:      boolean;
    tenantModules: TenantModule[];
    name:          string;
    code:          string;
}

export interface TenantModule {
    id:        string;
    updatedAt: string;
    version:   number;
    isActive:  boolean;
    module:    Module;
    effBegin:  Date;
    effEnd:    Date;
}

export interface Module {
    id:        string;
    updatedAt: string;
    version:   number;
    code:      string;
    name:      string;
    icon:      string;
    path:      string;
    sortOrder: number;
    menus?:    Menu[];
}

export interface Menu {
    id:           string;
    updatedAt:    string;
    version:      number;
    code:         string;
    name:         string;
    level:        number;
    sortOrder:    number;
    isFavorite:   boolean;
    parent?:      string;
    path?:        string;
    menuActions?: MenuAction[];
}

export interface MenuAction {
    id:        string;
    updatedAt: string;
    version:   number;
    code:      string;
    name:      string;
    path:      null;
}

export interface Location {
    id:          string;
    updatedAt:   null;
    version:     number;
    isActive:    boolean;
    name:        string;
    description: null;
    calendar:    null;
    city:        City;
    address:     string;
    postalCode:  null;
    phone:       null;
    fax:         null;
    code:        string;
    latitude:    null;
    longitude:   null;
    company:     Company;
}

export interface City {
    id:        string;
    updatedAt: string;
    version:   number;
    code:      string;
    name:      string;
    province:  Province;
    lovCtyp:   LovCtyp;
}

export interface LovCtyp {
    id:            string;
    updatedAt:     null;
    version:       number;
    isActive:      boolean;
    lovType:       LovType;
    keyData:       string;
    valData:       string;
    isDisableable: boolean;
    arg1:          null;
}

export interface LovType {
    id:        string;
    updatedAt: null;
    version:   number;
    code:      string;
    name:      string;
    arg1:      null;
}

export interface Province {
    id:        string;
    updatedAt: null;
    version:   number;
    code:      string;
    name:      string;
    country:   Country;
}

export interface Country {
    id:          string;
    updatedAt:   null;
    version:     number;
    code:        string;
    name:        string;
    dialCode:    string;
    nationality: string;
}

export class ProjectRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}