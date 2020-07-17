import { PageInfo } from 'app/shared/models/page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface ComponentSet {
    payCompSetId: string;
    payCompSetName: string;
    effBegin: string;
    effEnd: string;
    payCompSetDetail: PayCompSetDetail[];
}

export interface ComponentSetItem {
    payCompSetDetId: string;
    payCompSetName: string;
    effBegin: string;
    effEnd: string;
    payCompId: string;
    payCompName: string;
    payCompSetId: string;
}

export interface PayCompSetDetail {
    payCompSetDetId: string;
    payCompId: string;
    payCompName: string;
}

export class ComponentSetRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
