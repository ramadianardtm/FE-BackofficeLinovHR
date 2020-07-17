import {
    PageInfo
} from './page-info.model';

import {
    Paginator
} from 'app/configs/paginator.config';


export interface MppPeriodH {
    id ? : string;
   
       valData0: string;
        valData1: string;
        valData2: string;
        valData3: string;
        valData4: string;
        valData5: string;
        valData6: string;
        valData7: string;
        valData8: Date;
        valData9: string;
        valData10: string;
        valData11: string;
        active: true
}

export interface MppPeriodD {
    id ? : string;
   
       valData0: string;
        valData1: string;
        valData2: string;
        valData3: string;
        valData4: string;
        valData5: string;
        valData6: string;
        valData7: string;
        valData8: Date;
        valData9: string;
        valData10: string;
        valData11: string;
        active: true
}

export class MppPeriodRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
export class MppPeriodRequestSearch {
    constructor(inquiry: string,
        isActive: boolean) {

    }
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}