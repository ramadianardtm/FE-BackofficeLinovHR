import { PageInfo } from 'app/shared/models/page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface PayrollGroup {
    pgId: string;
    code: string;
    pgName: string;
    ppId: string;
    periodName: string;
    isActive: boolean;
}

export class PayrollGroupRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}

export class PayrollGroupSubRequest {
    pageInfo = new PageInfo(1, 999);
}
