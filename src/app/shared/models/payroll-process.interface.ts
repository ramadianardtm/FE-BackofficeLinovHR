import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface Process {
    proId: string;
    pgId: string;
    pgName: string;
    ppdId: string;
    defaultStart: string;
    defaultEnd: string;
    paidDate: string;
    empSetId: null;
    empSetName: null;
    payCompSetId: null;
    payCompSetName: null;
    type: string;
    retroStart: null;
    retroEnd: null;
    status: string;
    desc: null;
}

export interface ProcessLama {
    id: string;
    updatedAt: string;
    version: number;
    type: string;
    status: string;
    retroPeriodStart: null;
    retroPeriodEnd: null;
    description: null;
    company: string;
    payrollPeriodDetail: PayrollPer;
    payrollComponentSet: null;
    employeeSet: null;
    payrollGroup: PayrollGroup;
    processResult: ProcessResult[];
    processTax: ProcessTax[];
}

export interface PayrollGroup {
    id: string;
    updatedAt: null;
    version: number;
    isActive: boolean;
    company: string;
    name: string;
    code: string;
    payrollPeriod: PayrollPeriod;
    payGroupComp: PayGroupComp[];
    empPayGroup: EmpPayGroup[];
}

export interface EmpPayGroup {
    id: string;
    updatedAt: null;
    version: number;
    effBegin: string;
    effEnd: string;
    companyId: string;
    employeeId: string;
    payrollGroupId: string;
}

export interface PayGroupComp {
    id: string;
    updatedAt: null;
    version: number;
    payrollComponent: PayrollComponent;
    order: number;
    effBegin: string;
    effEnd: string;
}

export interface PayrollComponent {
    id: string;
    updatedAt: null;
    version: number;
    company: Company;
    code: string;
    name: string;
    clazz: string;
    lovCurr: LovCurr;
    terminationType: string;
    isRetroEnabled: boolean;
    retroComponent: null;
    isOncePerPeriod: boolean;
    isDisplayInReport: boolean;
    isDisplayInPayslip: boolean;
    formula: string;
    taxType: null | string;
    taxLine: null;
    sortOrder: number;
    ledgerType: string;
    effBegin: string;
    effEnd: string;
    isMembershipComponent: boolean;
    membershipComponent: null | string;
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
    updatedAt: null;
    version: number;
    isActive: boolean;
    tenantModules: null;
    name: string;
    code: string;
    effBegin: string;
    effEnd: string;
}

export interface LovCurr {
    id: string;
    updatedAt: null;
    version: null;
    isActive: boolean;
    lovType: LovType;
    keyData: string;
    valData: string;
    isDisableable: boolean;
    arg1: null;
}

export interface LovType {
    id: string;
    updatedAt: null;
    version: number;
    code: string;
    name: string;
    arg1: null;
}

export interface PayrollPer {
    id: string;
    updatedAt: null;
    version: number;
    year: number;
    month: number;
    sequence: number;
    defaultStart: string;
    defaultEnd: string;
    paidDate: string;
    status: boolean;
    payrollPeriod?: PayrollPeriod;
}

export interface PayrollPeriod {
    id: string;
    updatedAt: null;
    version: number;
    name: string;
    description: string;
    company: Company;
    payrollPerDet?: PayrollPer[];
}

export interface ProcessResult {
    id: string;
    updatedAt: null;
    version: number;
    amount: string;
    originalAmount: null;
    description: null;
    correctionType: string;
    correctionNotes: null;
    retroPeriod: null;
    taxLine: null;
    isRecurring: boolean;
    isAlreadyProcessed: boolean;
    isCorrectionProcessed: boolean;
    isDeleted: boolean;
    company: string;
    payrollComponent: PayrollComponent;
    employee: string;
}

export interface ProcessTax {
    id: string;
    updatedAt: null;
    version: number;
    company: string;
    employee: string;
    year: number;
    month: number;
    sequence: number;
    hasTaxNumber: boolean;
    workingMonth: number;
    maxMonth: number;
    incomeRegNett: number;
    incomeRegGross: number;
    incomeIrregNett: number;
    incomeIrregGross: number;
    taxRegNettMtd: number;
    taxRegGrossMtd: number;
    taxIrregNettMtd: number;
    taxIrregGrossMtd: number;
    taxEmployeeMtd: number;
    taxAllowanceMtd: number;
    taxTotalMtd: number;
    professionalFee: number;
    pretaxDeduction: number;
    nonTaxableIncome: number;
    taxRegNettYtd: number;
    taxRegGrossYtd: number;
    taxIrregNettYtd: number;
    taxIrregGrossYtd: number;
    taxEmployeeYtd: number;
    taxAllowanceYtd: number;
    taxTotalYtd: number;
    isDeleted: boolean;
}

export class PayrollProcessRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}


export interface Components {
    id: string;
    updatedAt: null;
    version: number;
    amount: string;
    originalAmount: null;
    description: null;
    correctionType: string;
    correctionNotes: null;
    retroPeriod: null;
    taxLine: number | null;
    isRecurring: boolean;
    isAlreadyProcessed: boolean;
    isCorrectionProcessed: boolean;
    isDeleted: boolean;
    company: string;
    payrollComponent: PayrollComponent;
    employee: string;
    process: string;
}

// export interface PayrollComponent {
//     id: string;
//     updatedAt: null;
//     version: number;
//     company: Company;
//     code: string;
//     name: string;
//     clazz: string;
//     lovCurr: LovCurr;
//     terminationType: string;
//     isRetroEnabled: boolean;
//     retroComponent: null;
//     isOncePerPeriod: boolean;
//     isDisplayInReport: boolean;
//     isDisplayInPayslip: boolean;
//     formula: string;
//     taxType: null | string;
//     taxLine: number | null;
//     sortOrder: number;
//     ledgerType: string;
//     effBegin: string;
//     effEnd: string;
//     isMembershipComponent: boolean;
//     membershipComponent: null | string;
// }

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

// export interface Tenant {
//     id: string;
//     updatedAt: string;
//     version: number;
//     isActive: boolean;
//     tenantModules: TenantModule[];
//     name: string;
//     code: string;
// }

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
    menuActions?: LovType[];
}

// export interface LovType {
//     id: string;
//     updatedAt: null | string;
//     version: number;
//     code: string;
//     name: string;
//     path?: null;
//     arg1?: null;
// }

// export interface LovCurr {
//     id: string;
//     updatedAt: null;
//     version: number;
//     isActive: boolean;
//     lovType: LovType;
//     keyData: string;
//     valData: string;
//     isDisableable: boolean;
//     arg1: null;
// }