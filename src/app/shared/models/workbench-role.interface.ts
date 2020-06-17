import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface Role {
    id: string;
    name: string;
    type: string;
    isActive: boolean;
}

export class RoleRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
