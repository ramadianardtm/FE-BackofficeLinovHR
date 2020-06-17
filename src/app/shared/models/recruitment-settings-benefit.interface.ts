import { PageInfo } from './page-info.model';
import { Paginator } from 'app/configs/paginator.config';

export interface settingsBenefit {
    id?: string;
    valData0 : string;
    valData1 : string;
    valData4 : string;
    valData6 : string;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export class settingsBenefitRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}