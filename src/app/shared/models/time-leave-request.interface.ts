import { PageInfo } from './page-info.model';
import { Paginator } from 'app/configs/paginator.config';

export interface LeaveRequest {
    id: string;
    nik: string;
    name: string;
    remainingQuota: number;
    totalQuota: number;
    leaveName: string;
    startDate: string;
    endDate: string;
    fileReference?: null;
    description: string;
    trxDate: string;
    leaveStatus: string;
    leaveWeight: number;
    positionName: string;
}


export class LeaveRequestRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}


export interface AttendanceRequest {
    id: string;
    nik: string;
    name: string;
    remainingQuota: number;
    totalQuota: number;
    leaveName: string;
    startDate: string;
    endDate: string;
    fileReference?: null;
    description: string;
    trxDate: string;
    leaveStatus: string;
    leaveWeight: number;
    positionName: string;
}


export class AttendanceRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}


export interface OvertimeRequest {
    id: string;
    nik: string;
    name: string;
    remainingQuota: number;
    totalQuota: number;
    leaveName: string;
    startDate: string;
    endDate: string;
    fileReference?: null;
    description: string;
    trxDate: string;
    leaveStatus: string;
    leaveWeight: number;
    positionName: string;
}


export class OvertimeRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}

//permit

export interface PermitRequest {
    id: string;
    nik: string;
    name: string;
    remainingQuota: number;
    totalQuota: number;
    leaveName: string;
    startDate: string;
    endDate: string;
    fileReference?: null;
    description: string;
    trxDate: string;
    leaveStatus: string;
    leaveWeight: number;
    positionName: string;
}


export class PermitRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}



export interface EmployeeLeaveRequest {
    id: string;
    nik: string;
    name: string;
    position: string;
}

export class EmployeeLeaveRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
