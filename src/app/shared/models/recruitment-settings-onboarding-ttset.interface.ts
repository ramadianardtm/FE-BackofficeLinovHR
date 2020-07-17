import { PageInfo } from './page-info.model';
import { Paginator } from 'app/configs/paginator.config';
import { CoreLov } from './core-lov.interface';

export interface recruitmentSettingOnboardingTTSet {
    id?: string;
    companyId?: string;
    trxCode?: trxI;
    trxNumber: string;
    trxDate: string;
    taskName: string;

    code: string;
    name: string;
    description: string;
    pic: CoreLov;

    startDate: Date;
    endDate: Date;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export class recruitmentSettingOnboardingTTSetRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}

export interface trxI{
    id: string;
    description: string;
    trxName: string;
}

export interface ITTSetDetail{
    version: string;
    isActive: string;
    id: string;
    //abisganti disini
    transTask : TT; 
    transTaskSet :CoreLov;
    transTaskGroup : TTG;
}

export class TTS{
        id?: string;
    
        code?: string;
        name?: string;
    
        key?: string;
        value?: string;
    
        keyData?: string;
        valData?: string;
}

export class TTSetDetail{
    version: string;
    isActive: string;
    id: string;
    transTask : TT; 
    transTaskSet :recruitmentSettingOnboardingTTSet;
    transTaskGroup : TTG;
    lovTTS: CoreLov;
    lovTT: CoreLov;
    lovTTG: CoreLov;
}

export interface TT{
    id: string;
    name: string;
    code: string;
    description: string;
    duration: string;
    instruction: string;
    files: string;
    pic: string;
    
    startDate: Date;
    endDate: Date;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface TTG{
    id: string;
    name: string;
    code: string;
}



