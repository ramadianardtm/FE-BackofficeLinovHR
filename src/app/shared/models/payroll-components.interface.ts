import { PageInfo } from 'app/shared/models/page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface PayrollComponents {
    key: string;
    value: string;
}

export class PayrollComponentsRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
