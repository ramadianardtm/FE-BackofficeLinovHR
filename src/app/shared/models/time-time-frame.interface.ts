import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';
import { CoreLov } from './core-lov.interface';
import { Company } from './session.interface';

export interface TimeFrame {
    id: string;
    updatedAt: Date;
    version: number;
    isActive: boolean;
    overtimeSetting?: any;
    code: string;
    name: string;
    description: string;
    isIgnoreHoliday: boolean;
    isFlexyHour: boolean;
    isAllowOvertime: boolean;
    isDefault: boolean;
    isAbsenceAsAnnualLeave: boolean;
}

export class TimeFrameRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
