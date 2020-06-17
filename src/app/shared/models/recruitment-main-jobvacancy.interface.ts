import { PageInfo } from './page-info.model';
import { Paginator } from 'app/configs/paginator.config';

export interface recMainJobVac {
    isActive: string;
    id: string;
    code: string;
    title: string;
    requestNumber: string;
    jobCode: string;
    jobName: string;
    positionCode: string;
    position: string;
    sourceType: string;
    jobLevel: string;
    salFrom: string;
    salTo: string;
    salPublish: string;
    publishTime: Date;
    isPublish: string;
    startDate?: Date;
    endDate?: Date;
    location: string;
    jobType: string;
    employeeType: string;
    jobFunction: string;
    vacancyStat: string;
    headCount: string;
    appliedCount: string;
    responsibilites : string;
    gender: string;
    ageFrom: string;
    ageTo: string;
    expyrFrom: string;
    expyrTo: string;
    vacancySub: string;

    hrPic: hrPIC;
    userPic: userPIC;
    transTaskSet: TTS;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}
export class settingsRecMainJobVacRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}

export interface hrPIC{
    id: string;
    firstName: string;
    lastName: string;
}
export interface userPIC{
    id: string;
    firstName: string;
    lastName: string;
}
export interface TTS{
    id: string;
    code: string;
    name: string;
    description: string;
}

export interface Candidate{
    id: string;
    nik: string;
    name: string;
    email: string;
    phone: string;
    experience: string;
    person: string;
    // person: Candidate,;
    media: string;
}

export interface AppliedCandidate{
    id: string;
    candidateId: Candidate
    vacancyId: string;

    trxCodeId: string;
    trxNumber: number;
    trxDate: string;

    stgCurr: string,
    stgApp: string;
    stgAppTime: Date;
    stgAppUpdatedBy: string;
    stgAssessment: string;
    stgAssessmentTime: string;
    stgAssessmentUpdatedBy: string;
    stgInterview: string;
    stgInterviewTime: string;
    stgInterviewUpdatedBy: string;
    stgOffer: string;
    stgOfferTime: string;
    stgOfferUpdatedBy: string;
    stgOnboarding: string;
    stgOnboardingTime: string;
    stgOnboardingUpdatedBy: string;
    stgHired: string;
    stgHiredTime: string;
    stgHiredUpdatedBy: string;

    assessmentVenue: string;
    assessmentMap: string;
    assessmentTime: string;
    assessmentPic: string;
    assessmentPicMobile: string;
    assessmentPicEmail: string;
    assessmentNote: string;
    assessmentLastEmailSend: string;
    assessmentSameInterview: string;

    interviewVenue: string;
    interviewMap: string;
    interviewTime: string;
    interviewPic: string;
    interviewPicMobile: string;
    interviewPicEmail: string;
    interviewNote: string;
    interviewLastEmailSend: string;

    transTaskSetName: string;
    code: string;
    company: string;
    version: number;
    isActive: string;
}

export class setting {
    id?: string;
    valData0 : string;
    name: string;
}