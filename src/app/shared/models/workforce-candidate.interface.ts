import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';
import { CoreLov } from './core-lov.interface';

export interface Candidate {
    id?: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    birthPlace: string;
    email: string;
    mobileNumber: string;
    nationality: string;
    gender: string;
}

export class EmployeeCandidateRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
