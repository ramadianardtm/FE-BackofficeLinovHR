import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';
import { CoreLov } from './core-lov.interface';
import { Company } from './session.interface';

export interface NumberFormat {
    id?: string;
    company: Company;
    lovNbft: CoreLov;
    name: string;
    digit: number;
    startingNumber: number;
    lastNumber: number;
    format: string;
    isActive: boolean;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export class NumberFormatRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
