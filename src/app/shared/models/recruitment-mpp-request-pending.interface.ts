import {
    PageInfo
} from './page-info.model';

import {
    Paginator
} from 'app/configs/paginator.config';


export interface MppRequestPendingH {
    id ? : string;
    requestNo: string;
    requestDate: Date;
    period: string;
    year: string;
    unit: string;
    jobName: string;
    positionCount: number;
}
export interface MppRequestPendingI {
    id ? : string;

    company: string;
    code : string; 
    reqDate : Date;
    period : string;
    year : string;
    unitCode: string;
    unitName: string;
    jobCode : string;
    jobName: string;
    files : string;
    note: string;
    currSeq : number;
    currStg : string;
    updateBy : string;
    updateDate : Date; 
    mppRequestPosition : MppRequestPendingPosition,
    mppRequestRejected : MppRequestPendingRejected,

    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}

export interface MppRequestPendingPosition {
    id ? : string; 
    mppRequest : string;
    posCode : string;
    posName : string;
    month : string;
    actual : number;
    mpp : number;
    recPlan : number;
}

export interface MppRequestPendingRejected {
    id ? : string; 
    mppRequest : string;
    posCode : string;
    posName : string;
    month : string;
    actual : number;
    mpp : number;
    recPlan : number;
}

export class MppRequestPendingRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
export class MppRequestPendingRequestSearch {
    constructor(inquiry: string,
        isActive: boolean) {

    }
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}