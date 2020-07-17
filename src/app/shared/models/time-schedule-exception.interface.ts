import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';
import { CoreLov } from './core-lov.interface';
import { Company } from './session.interface';

export interface ScheduleException {
    id: string;
    employeeName: string;
    date: string;
    timeFrameId: string;
    timeFrameName: string;
    leaveId: string;
    leaveName: string;
    workStart: string;
    workDuration: string;
    breakStart: string;
    breakDuration: string;
    reason: string;
    flexyHour: boolean;
    version?: number
}

export class ScheduleExceptionRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
