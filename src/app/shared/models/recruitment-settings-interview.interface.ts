import { PageInfo } from './page-info.model';
import { Paginator } from 'app/configs/paginator.config';
import { CoreLov } from './core-lov.interface';

export interface settingsInterview {
    id?: string;
    company : string;
    type : string;

    val_data0: string;
    val_data1: string;
    val_data4: CoreLov;
    val_data6: string;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export class settingsInterviewRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}