// export interface Company {
//     id: number;
//     code: string;
//     bankAccount: any[];
//     companyTaxNumber: string;
//     description: string;
//     effBegin: string;
//     effEnd: string;
//     locationId: number;
//     lovCur: number;
//     lovLang: number;
//     name: string;
//     fileLogo: string;
//     tenantId: number;
// }

export interface Company {
    id?: string;
    code: string;
    name: string;
    description: string;
    companyTaxNumber: string;
    isDeleted: boolean;
    fileLogo: string;
    taxWithHolderNumber: string;
    taxWithHolderName: string;
    sortOrder: number;
    isActive: boolean;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface Tenant {
    id?: string;
    name: string;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
    version: number;
}
