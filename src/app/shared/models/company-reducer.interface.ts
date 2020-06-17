export interface Companies {
    label: string;
    value: {
        id: string;
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
        createdBy: string;
        createdAt: Date;
        updatedBy: string;
        updatedAt: Date;
        version: number;
    };
}
