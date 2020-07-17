import {
    PageInfo
} from './page-info.model';

import {
    Paginator
} from 'app/configs/paginator.config';


export interface MppRequestRejectedH {
    id ? : string;
    requestNo: string;
    requestDate: Date;
    period: string;
    year: string;
    unit: string;
    jobName: string;
    positionCount: number;
}

export class MppRequestRejectedRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
export class MppRequestRejectedRequestSearch {
    constructor(inquiry: string,
        isActive: boolean) {

    }
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}