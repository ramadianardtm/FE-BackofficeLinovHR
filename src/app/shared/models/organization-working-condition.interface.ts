import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';
import { CoreLov } from './core-lov.interface';

export interface WorkingCondition {
    id?: string;
    isActive: boolean;
    workingConditionType: CoreLov;
    code: string;
    name: string;
    description: string;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export class WorkingConditionRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}

export interface WorkingConditionType {
    id?: string;
    isActive: boolean;
    code: string;
    name: string;
    description: string;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export class WorkingConditionTypeRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
