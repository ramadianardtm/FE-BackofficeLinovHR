import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface SourcePullLogs {
    splId: string;
    createdAt: string;
    type: string;
    payGroup: string;
    defStart: string;
    defEnd: string;
    empSet: null;
    dateStart: null;
    dateEnd: null;
    empCount: number;
}

export class PayrollSourcePullLogs {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
