import { PageInfo } from 'app/shared/models/page-info.model';

import { Paginator } from 'app/configs/paginator.config';


export interface ComponentSelect {
    key: string;
    value: string;
}

export class ComponentSelectRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
