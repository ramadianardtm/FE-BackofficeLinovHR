import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface OrganizationAsset {
    id?: string;
    isActive: boolean;
    code: string;
    name: string;
    type: string;
    description: string;
    price: number;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export class OrganizationAssetRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
