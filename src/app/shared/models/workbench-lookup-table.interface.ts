import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';
import { CoreLov } from './core-lov.interface';

export interface LookupTable {
    id?: string;
    isActive: boolean;
    code: string;
    description: string;
    lovLook1: string;
    lovLook2: string;
    lovLook3: string;
    lovLook4: string;
    lovLook5: string;
    lovLoty: CoreLov;
    val1: string;
    val2: string;
    val3: string;
    val4: string;
    val5: string;
    amount: number;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export class LookupTableRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
