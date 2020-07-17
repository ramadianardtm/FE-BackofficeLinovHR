import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface TaxHistory {
    id?: string;
    taxYear: number;
    incomeReceiptPeriodBegin: number;
    incomeReceiptPeriodEnd: number;
    employeeId: string;
    employeeName: string;
    unit: string;
    job: string;
    position: string;
    salary: number;
    taxAllowance: number;
    otherAllowance: number;
    otherSimiliarIncome: number;
    insurancePremiumPaid: number;
    incomeInTheFormOfBenefitInKind: number;
    bonus: number;
    pensionContribution: number;
    incomeRegularNett: number;
    incomeIrregularNett: number;
    taxRegularNett: number;
    taxIrregularNett: number;
    incomeRegularGross: number;
    incomeIrregularGross: number;
    taxRegularGross: number;
    taxIrregularGross: number;
    mtBatchId: number;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export class PayrollTaxHistoryRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
