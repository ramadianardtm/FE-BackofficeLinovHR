import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';

export interface RewardPunishment {
    id: string;
    code: string;
    name: string;
    description: string;
    rewardType: string;
    isActive: boolean;
}

export class RewardPunishmentRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
