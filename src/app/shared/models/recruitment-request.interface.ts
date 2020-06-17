import { PageInfo } from './page-info.model';
import { Paginator } from 'app/configs/paginator.config';

export interface PreRecruitmentRequest {
    company?: string;
    mpp?:  string;
    reqDate : Date;
    targetDate: Date;
    period: string;
    year: string;
    desc: string;
    unitCode: string;
    unitName: string;
    jobCode: string;
    jobName: string;
    note: string;
    isActive: string;
    recruitmentRequestPosition: recReqPost;
    recruitmentRequestApproval: recReqApprv;
}

export interface recReqPost {
    posCode: string;
    posName: string;
    month1: string;
    actual1: string;
    mpp1: string;
    recPlan1: string;
    isActive1: string;
    month2: string;
    actual2: string;
    mpp2: string;
    recPlan2: string;
    isActive2: string;
    month3: string;
    actual3: string;
    mpp3: string;
    recPlan3: string;
    isActive3: string;
    month4: string;
    actual4: string;
    mpp4: string;
    recPlan4: string;
    isActive4: string;
    month5: string;
    actual5: string;
    mpp5: string;
    recPlan5: string;
    isActive5: string;
    month6: string;
    actual6: string;
    mpp6: string;
    recPlan6: string;
    isActive6: string;
    month7: string;
    actual7: string;
    mpp7: string;
    recPlan7: string;
    isActive7: string;
    month8: string;
    actual8: string;
    mpp8: string;
    recPlan8: string;
    isActive: string;
    month9: string;
    actual9: string;
    mpp9: string;
    recPlan9: string;
    isActive9: string;
    month10: string;
    actual10: string;
    mpp10: string;
    recPlan10: string;
    isActive10: string;
    month11: string;
    actual11: string;
    mpp11: string;
    recPlan11: string;
    isActive11: string;
    month12: string;
    actual12: string;
    mpp12: string;
    recPlan12: string;
    isActive12: string;
}

export interface recReqApprv {
    empId?: string;
    name: string;
    pos: string;
    email: string;
    mobile: string;
    apprTime: string;
    isActive: string;
}

export interface PreRecruitmentRequestApproved {
    id?: string;

    no: string;
    requestDate: Date;
    targetDate: Date;
    mppCode: string;
    description: string;
    reason: string;
    status: string;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface PreRecruitmentRequestRejected {
    id?: string;

    no: string;
    requestDate: Date;
    targetDate: Date;
    mppCode: string;
    description: string;
    reason: string;
    status: string;

    rejected: Rejected[];

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface PreRecruitmentRequestPending {
    id?: string;

    no: string;
    requestDate: Date;
    targetDate: Date;
    mppCode: string;
    description: string;
    reason: string;
    status: string;
    rejected: Rejected[];

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}
export class PreRecruitmentRequestRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}

export interface Rejected {
    requestDate :Date;
    createdBy : string;
    createdTime : Date;
    rejectedBy : string;
    rejectedTime : Date;
    rejectedReason :string;
}

