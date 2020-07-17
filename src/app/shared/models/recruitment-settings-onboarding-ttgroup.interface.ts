import { PageInfo } from './page-info.model';
import { Paginator } from 'app/configs/paginator.config';

export interface recruitmentSettingOnboardingTTGroup {
    id?: string;
    company: string;
    trxCode: string;
    trxNumber: string;
    trxDate: string;

    code: string;
    name: string;
    description: string;
    pic: string;
    transTaskGroup: string;
    startDate: Date;
    endDate: Date;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export class recruitmentSettingOnboardingTTGroupRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}

export interface trxI{
    id: string;
    description: string;
    trxName: string;
}
export interface recruitmentSettingOnboardingTTGroupDetail{
    transTaskGroup: string;

    trxNumber: string;
    trxDate: string;
    trxCodeId: string;
    transtaskGroupId: string;
    pic: string;
    name: string;
    isActive: string;
    instruction: string;
    id: string;
    files: string;
    duration: string;
    description: string;
    companyId: string;
    code: string;

    startDate: Date;
    endDate: Date;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export class TTGroupDetail{
    transTaskGroup: string;
    trxNumber: string;
    trxDate: string;
    trxCodeId: string;
    transtaskGroupId: string;
    pic: string;
    name: string;
    isActive: string;
    instruction: string;
    id: string;
    files: string;
    duration: string;
    description: string;
    companyId: string;
    code: string;

    startDate: Date;
    endDate: Date;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}


