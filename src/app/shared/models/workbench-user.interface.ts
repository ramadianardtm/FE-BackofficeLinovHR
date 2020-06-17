import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface User {
    id: string;
    name: string;
    username: string;
    email: string;
    type: string;
    isActive: boolean;
}

export class UserRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
