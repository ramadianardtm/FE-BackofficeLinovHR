import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';
import { CoreLov } from './core-lov.interface';
import { Company } from './session.interface';

export class General {
    id: string;
    company: Company;
    lov: CoreLov;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export class GeneralRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
