import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';
import { CoreLov } from './core-lov.interface';

export interface JobH {
    id?: string;
    isActive: boolean;
    name: string;
    code: string;
    description: string;
    jobFamily: string;
    ordinal: number;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface JobI {
    job: Job;
    jobGrades: Grade[];
    jobWorkingConditions: WorkingCondition[];
    jobResponsibilities: Responsibility[];

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

interface Job {
    id?: string;
    isActive: boolean;
    name: string;
    code: string;
    description: string;
    jobFamily: CoreLov;
    ordinal: number;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface Grade {
    id?: string;
    job: CoreLov;
    grade: CoreLov;
    bottomRate: number;
    midRate: number;
    topRate: number;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface WorkingCondition {
    id?: string;
    job: CoreLov;
    description?: string;
    workingCondition?: any;
    isEssential?: boolean;
    isActive?:boolean;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface Responsibility {
    id?: string;
    job: CoreLov;
    responsibility: CoreLov;
    description: string;
    isAppraisal: boolean;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export class JobRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}

export interface JobFamily {
    id?: string;
    isActive: boolean;
    name: string;
    code: string;
    description: string;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export class JobFamiliesRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
