import {
    PageInfo
} from './page-info.model';

import {
    Paginator
} from 'app/configs/paginator.config';
import {
    CoreLov
} from './core-lov.interface';
import {
    PayrollLov
} from './payroll-lov.interface';
import {
    Tenant
} from './workforce-person.interface';

export interface CandidateH {
    id ? : string;
    nik: string;
    name: string;
    email: string;
    mandatory: string;
    mobile: string;
    experience: string;
    source: string;
    personType: string;
    appliedCount: number;
    status: number;
}
export interface EmployeeProject {
    id ? : string;
    nik: string;
    name: string;
}

export interface DropdownCandidate{
    id: string;
    name: string;

}

export interface CandidateInsert {
    id: string;
    nik: string;
    name: string;
    birthPlace: string;
    birthDate: Date;
    filePhoto: FilePhoto;
    email: string;
    appliedCount: number;
    phone: string;
    sosmed1: string;
    sosmed2: string;
    sosmed3: string;
    hobbies: string;
    strength: string;
    mediaSrc: DropdownCandidate[];
    personType: DropdownCandidate[];
    salExpect: string;
    experience: number
    weakness: string;
    country: DropdownCandidate[];
    lovPtyp: DropdownCandidate[];
    lovBlod: DropdownCandidate[];
    lovGndr: DropdownCandidate[];
    lovRlgn: DropdownCandidate[];
    lovMars: DropdownCandidate[];

    candidateSub : Address[];

    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}

export interface CandidateI {
    id: string;
    nik: string;
    candidateSub: Address;
    name: string;
    birthPlace: string;
    birthDate: Date;
    email: string;
    appliedCount: number;
    phone: string;
    sosmed1: string;
    sosmed2: string;
    sosmed3: string;
    hobbies: string;
    strength: string;
    source: string;
    personType: string;
    salExpect: number;
    experienceYear: number
    weakness: string;
    lovcNation: string;
    lovPtyp: string;
    lovBlod: string;
    lovGndr: string;
    lovRlgn: string;
    lovMars: string;
    status: string;

    subAddress ? : SubAddress[];
    subOrganizationExperience ? : SubOrganizationExperience[];
    subWorkingExperience ? : SubWorkExperience[];
    subProjectExperience ? : SubProjectExperience[];
    subEducation ? : SubEducation[];
    subReference ? : SubReference[];
    subFamilyMember ? : SubFamily[];
    subLanguage ? : SubLanguage[];
    subDocument ? : SubDocument[];
    subSkill ? : SubSkill[];
    subTraining ? : SubTraining[];

    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}

export interface SubCandidate {
    subAddresses ? : SubAddress[];
    subOrganizationsExperience ? : SubOrganizationExperience[];
    subWorkExperiences ? : SubWorkExperience[];
    subProjectExperiences ? : SubProjectExperience[];
    subEducations ? : SubEducation[];
    subReferences ? : SubReference[];
    subFamilies ? : SubFamily[];
    subLanguages ? : SubLanguage[];
    subDocuments ? : SubDocument[];
    subSkills ? : SubSkill[];
    subTrainings ? : SubTraining[];
    filePhoto ? : FilePhoto;
    isActive: boolean;

    subFamilyMember:any[];

    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}
export interface FilePhoto {
    ext: CoreLov;
    base: string;
}

export interface City {
    id: string;
    code: string;
    name: string;
    province: Province;

    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}

export interface Province {
    id: string;
    code: string;
    name: string;
    country: Country;

    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}

export interface Country {
    id: string;
    code: string;
    name: string;
    dialCode: string;
    nationality: string;

    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}


export interface CandidateVacancy {
    id: string;
    isActive: boolean

    code : string;
    vacancyName : string;
    vacancyStartDate : Date ; 
    vacancyEndDate : Date ; 
    jobName : string ;
    position : string ; 
    sourceType : string;
    level : string;
    jobType : string;
    appliedDate : Date;
    lastStage : string;
    assesment : Assessment;
    interview : Interview;
    offer : Offer;
    onboarding : Onboarding;
    data:any;     
}

export interface Assessment {
        id: string,

        venue: string,
        name: string,
        time: Date,
        mobile: string,
        email: string,
        note: string,
        map: string,
        interviewScheduleSameWithTheAssesment: Boolean,
        lastSendEmailTo: Date,
        version: number,
        isActive: true,

        detailAssessment : any;
}

export interface Interview {
    id: string,

    venue: string,
    name: string,
    time: Date,
    mobile: string,
    email: string,
    note: string,
    map: string,
    interviewScheduleSameWithTheAssesment: Boolean,
    lastSendEmailTo: Date,
    version: number,
    isActive: true,

    detailInterview : any;
}

export interface Offer {
    id: string,

    itemName: string,
    defaultPIC: string,
    actualPIC: string,
    date: string,
    note: string,
    check: Boolean,
    version: number,
    isActive: true,
}

export interface Onboarding {
    id: string,

    code : string;
    name : string;
    desc : string;
    ttGroup : string;
    ttSets : string,
    startDate : Date;
    endDate : Date ; 
    instruction : string;
    file : string;
    check: Boolean,
    version: number,
    isActive: true,
}




export interface SubAddress {
    id: string;
    isActive: boolean;
    type : string;

    valData0  : string;
    valData1  : string;
    valData2  : string;
    valData3  : string;
    valData4  : string;
    valData5  : string;
    valData6  : string;
    valData11  : string;

    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}
export interface SubDocument {
    id: string;
    isActive: boolean;
    type : string;

    valData0  : string;
    valData1  : string;
    valData2  : string;
    valData3  : string;
    valData4  : string;
    valData8  : string;
    valData10  : string;
   

    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}

export interface SubSkill {
    id: string;
    isActive: boolean;
    type : string;

    valData0  : string;
    valData1  : string;
    valData2  : string;
    valData3  : string;
    valData4  : string;
    valData5  : string;
    valData6  : string;
    valData11  : string;

    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}

export interface SubEducation {
    id: string;
    isActive: boolean;
    type : string;

    valData0  : string;
    valData1  : string;
    valData2  : string;
    valData3  : string;
    valData4  : string;
    valData5  : string;
    valData6  : string;
    valData11  : string;

    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}

export interface SubFamily {
    id: string;

        valData0: string;
        valData1: string;
        valData2: string;
        valData3: string;
        valData4: string;
        valData5: string;
        valData6: string;
        valData7: string;
        valData8: Date;
        valData9: string;
        valData10: string;
        valData11: string;
        active: true

    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}

export interface SubLanguage {
    id: string;
    isActive: boolean;
    type : string;

    valData0  : string;
    valData1  : string;
    valData2  : string;
    valData3  : string;
    valData4  : string;
    valData5  : string;
    valData6  : string;
    valData11  : string;

    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}

export interface SubTraining {
    id: string;
    isActive: boolean;
    type : string;

    valData0  : string;
    valData1  : string;
    valData2  : string;
    valData3  : string;
    valData4  : string;
    valData5  : string;
    valData6  : string;
    valData8  : string;
    valData9  : string;
    valData11  : string;

    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}



export interface SubOrganizationExperience {
    id: string;
    isActive: boolean;
    type : string;

    valData0  : string;
    valData1  : string;
    valData2  : string;
    valData3  : string;
    valData4  : string;
    valData5  : string;
    valData6  : string;
    valData8  : string;
    valData9  : string;
    valData11  : string;


    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}

export interface SubProjectExperience {
    id: string;
    isActive: boolean;
    type : string;

    valData0  : string;
    valData1  : string;
    valData2  : string;
    valData3  : string;
    valData4  : string;
    valData5  : string;
    valData6  : string;
    valData8  : string;
    valData9  : string;
    valData11  : string;
    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}

export interface SubReference {
    id: string;
    isActive: boolean;
    type : string;

    valData0  : string;
    valData1  : string;
    valData2  : string;
    valData3  : string;
    valData4  : string;
    valData5  : string;
    valData6  : string;
    valData8  : string;
    valData9  : string;
    valData11  : string;

    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}

export interface SubWorkExperience {
    id: string;
    isActive: boolean;
    type : string;

    valData0  : string;
    valData1  : string;
    valData2  : string;
    valData3  : string;
    valData4  : string;
    valData5  : string;
    valData6  : string;
    valData8  : string;
    valData9  : string;
    valData11  : string;

    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}

export interface Address {
    id: string;
    candidateId: string;
    isActive: boolean;
    type : string;

    valData0  : string;
    valData1  : string;
    valData2  : string;
    valData3  : string;
    valData4  : string;
    valData5  : string;
    valData6  : string;
    valData11  : boolean;

    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}
export interface Document {
    id: string;
    isActive: boolean;
    type : string;

    valData0  : string;
    valData1  : string;
    valData2  : string;
    valData3  : string;
    valData4  : string;
    valData8  : string;
    valData10  : string;
   

    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}

export interface Skill {
    id: string;
    isActive: boolean;
    type : string;

    valData0  : string;
    valData1  : string;
    valData2  : string;
    valData3  : string;
    valData4  : string;
    valData5  : string;
    valData6  : string;
    valData11  : string;

    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}

export interface Education {
    id: string;
    isActive: boolean;
    type : string;

    valData0  : string;
    valData1  : string;
    valData2  : string;
    valData3  : string;
    valData4  : string;
    valData5  : string;
    valData6  : string;

    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}

export interface Family {
    id: string;
type:string;
        valData0: string;
        valData1: string;
        valData2: string;
        valData3: string;
        valData4: string;
        valData5: string;
        valData6: string;
        valData7: string;
        valData8: Date;
        valData9: string;
        valData10: string;
        valData11: string;
        active: true

    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}

export interface Language {
    id: string;
    isActive: boolean;
    type : string;

    valData0  : string;
    valData1  : string;
    valData2  : string;
    valData3  : string;
    valData4  : string;
    valData5  : string;
    valData6  : string;
    valData11  : string;

    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}

export interface Training {
    id: string;
    isActive: boolean;
    type : string;

    valData0  : string;
    valData1  : string;
    valData2  : string;
    valData3  : string;
    valData4  : string;
    valData5  : string;
    valData6  : string;
    valData8  : string;
    valData9  : string;
    valData11  : string;

    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}



export interface OrganizationExperience {
    id: string;
    isActive: boolean;
    type : string;

    valData0  : string;
    valData1  : string;
    valData2  : string;
    valData3  : string;
    valData4  : string;
    valData5  : string;
    valData6  : string;
    valData8  : string;
    valData9  : string;
    valData11  : string;


    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}

export interface ProjectExperience {
    id: string;
    isActive: boolean;
    type : string;

    valData0  : string;
    valData1  : string;
    valData2  : string;
    valData3  : string;
    valData4  : string;
    valData5  : string;
    valData6  : string;
    valData8  : string;
    valData9  : string;
    valData11  : string;
    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}

export interface Reference {
    id: string;
    isActive: boolean;
    type : string;

    valData0  : string;
    valData1  : string;
    valData2  : string;
    valData3  : string;
    valData4  : string;
    valData5  : string;
    valData6  : string;
    valData8  : string;
    valData9  : string;
    valData11  : string;

    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}

export interface WorkExperience {
    id: string;
    isActive: boolean;
    type : string;

    valData0  : string;
    valData1  : string;
    valData2  : string;
    valData3  : string;
    valData4  : string;
    valData5  : string;
    valData6  : string;
    valData8  : string;
    valData9  : string;
    valData11  : string;

    createdBy ? : string;
    createdAt ? : Date;
    updatedBy ? : string;
    updatedAt ? : Date;
    version ? : number;
}




export class RecruitmentCandidateRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
export class RecruitmentCandidateRequestSearch {
    constructor(inquiry: string,
        isActive: boolean) {

    }
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
