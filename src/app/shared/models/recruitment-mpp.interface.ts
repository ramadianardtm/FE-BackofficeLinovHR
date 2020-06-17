import {
    PageInfo
} from './page-info.model';

import {
    Paginator
} from 'app/configs/paginator.config';


export interface MppH {
    id ? : string;
    company : string; 
    mppRequest : string;
    code : string ; 
    description : string ; 
    requestNo: string;
    requestDate: Date;
    period: string;
    year: string;
    unitCode: string;
    unitName : string ; 
    jobCode : string ; 
    jobName: string;
    positionCount: number;
}

export interface MppI {
    id ? : string;
    company : string; 
    mppRequest : string;
    code : string ; 
    description : string ; 
    requestNo: string;
    requestDate: Date;
    period: string;
    year: string;
    unitCode: string;
    unitName : string ; 
    jobCode : string ; 
    jobName: string;
    files : string
    positionCount: number;
    mppPos : string;
}

export class MppRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
export class MppRequestSearch {
    constructor(inquiry: string,
        isActive: boolean) {

    }
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}