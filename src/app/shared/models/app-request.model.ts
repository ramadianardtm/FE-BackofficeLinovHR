import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export class AppRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
