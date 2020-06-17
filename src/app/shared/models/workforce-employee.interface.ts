import { PageInfo } from './page-info.model';

import { Paginator } from 'app/configs/paginator.config';
import { CoreLov } from './core-lov.interface';
import { PayrollLov } from './payroll-lov.interface';
import { Tenant } from './workforce-person.interface';
import { PayrollGroup } from './payroll-group.interface';
import { Company } from './company.interface';

export interface EmployeeH {
    id?: string;
    nik: string;
    name: string;
    position: string;
    unit: string;
    job: string;
    location: string;
    assignmentType: string;
    hiredDate: string;
    email: string;
    company: string;
}
export interface EmployeeProject {
    id?: string;
    nik: string;
    name: string;
}

export interface EmployeeI {
    id?: string;
    nik: string;
    assignments?: Assignment[];
    termination: string;
    isActive: boolean;
    personRewards?: any[];

    person?: Person;
    personAddresses?: PersonAddress[];
    personOrganizations?: PersonOrganization[];
    personWorkExperiences?: PersonWorkExperience[];
    personEducations?: PersonEducation[];
    personReferences?: PersonReference[];
    personFamilies?: PersonFamily[];
    personLanguages?: PersonLanguage[];
    personDocuments?: PersonDocument[];
    personEmergencyContacts?: any[];
    personMemberships?: PersonMembership[];
    personAssets?: any[];
    personTax?: PersonTax;
    filePhoto?: FilePhoto;

    personAssetReceipts: any[];
    employeeTax: EmployeeTax;
    employeeWage: EmployeeWage;
    employeeProjects: EmployeeProject[];
    personBankAccounts?: PersonBankAccount[];

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface EmployeeP {
    payrollGroup?: any;
    employeeWage?: any;
    personBankAccount?: any;
    employeePaymentMethod?: any;
    personOrganizations?: any[];
    personReferences?: any[];
    personLanguages?: any[];
    personDocuments?: any[];
    personTax?: any;
    person?: any;
    personAddresses?: any[];
    personFamilies?: any[];
    personEmergencyContacts?: any[];
    personEducations?: any[];
    personWorkExperiences?: any[];
    nik?: string;
    position?: any;
    assignment?: any;
    personMemberships?: any[];
}

export interface PayrollTab {
    employeePayrollGroups?: any[];
    employeeWages?: any[];
    paymentMethodEmployee?: any;
    employeesBenefits?: any[];

    payrollGroup?: any;
    employeePayrollGroup?: any;
    payrollGroupComponent?: any[];
    payrollGroupComponents?: any[];
}

export interface PersonTax {
    id?: string;
    taxStatus: CoreLov;
    taxNumber: string;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface FilePhoto {
    ext: CoreLov;
    base: string;
}

export interface Assignment {
    id: string;
    nik: string;
    isPrimary: boolean;
    action: CoreLov;
    assignmentType: AssignmentType;
    actionReason: ActionReason;
    position: Position;
    unit: Unit;
    job: Job;
    location: Location;
    effBegin: string;
    effEnd: string;
    costcenter: Costcenter;
    grade: Grade;
    contractDocument: string;
    contractNumber: string;
    note: string;
    isActive: boolean;
    mutationCompany: null;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface ActionReason {
    id: string;
    isActive: boolean;
    company: ActionReasonCompany;
    lovActy: CoreLov;
    code: string;
    description: string;
    effBegin: string;
    effEnd: string;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface ActionReasonCompany {
    id: string;
    isActive: boolean;
    code: string;
    name: string;
    description: string;
    companyTaxNumber: string;
    fileLogo: string;
    taxWithHolderNumber: string;
    taxWithHolderName: string;
    sortOrder: number;
    tenant: Tenant;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface AssignmentType {
    id: string;
    isActive: boolean;
    company: ActionReasonCompany;
    code: string;
    name: string;
    workingMonth: number;
    numberFormat: null;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface Costcenter {
    id: string;
    isActive: boolean;
    code: string;
    name: string;
    company: ActionReasonCompany;
    deleted: boolean;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface Grade {
    id: string;
    isActive: boolean;
    name: string;
    code: string;
    ordinal: number;
    workMonth: null;
    bottomRate: null;
    midRate: null;
    topRate: null;
    company: ActionReasonCompany;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface Job {
    id: string;
    isActive: boolean;
    name: string;
    code: string;
    description: string;
    ordinal: number;
    company: ActionReasonCompany;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface Location {
    id: string;
    isActive: boolean;
    name: string;
    description: string;
    calendar: null;
    city: City;
    address: string;
    postalCode: string;
    phone: string;
    fax: string;
    code: string;
    latitude: null;
    longitude: null;
    company: ActionReasonCompany;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface City {
    id: string;
    code: string;
    name: string;
    province: Province;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface Province {
    id: string;
    code: string;
    name: string;
    country: Country;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface Country {
    id: string;
    code: string;
    name: string;
    dialCode: string;
    nationality: string;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface Position {
    id: string;
    isActive: boolean;
    company: ActionReasonCompany;
    unit: Unit;
    job: Job;
    code: string;
    name: string;
    description: string;
    isHead: boolean;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface Unit {
    id: string;
    isActive: boolean;
    code: string;
    name: string;
    company: ActionReasonCompany;
    unitType: UnitType;
    costCenter: null;
    location: Location;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface UnitType {
    id: string;
    isActive: boolean;
    code: string;
    name: string;
    unitLevel: number;
    company: ActionReasonCompany;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface Person {
    id: string;
    tenant: Tenant;
    idCard: string;
    firstName: string;
    lastName: string;
    birthPlace: string;
    birthDate: Date;
    email: string;
    phone: string;
    mobile: string;
    hobbies: string;
    strength: string;
    weakness: string;
    country: Country;
    lovPtyp: CoreLov;
    lovBlod: CoreLov;
    lovGndr: CoreLov;
    lovRlgn: CoreLov;
    lovMars: CoreLov;
    filePhoto: string;
    shoeSize: number;
    shirtSize: string;
    pantsSize: number;
    height: number;
    weight: number;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface PersonAddress {
    id: string;
    isActive: boolean;
    person: Person;
    lovRsty: CoreLov;
    lovRsow: CoreLov;
    city: City;
    address: string;
    postalCode: string;
    phone: null;
    fax: null;
    mapLocation: null;
    default: null;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface PersonDocument {
    id: string;
    person: Person;
    lovDcty: CoreLov;
    name: string;
    expireDate: string;
    fileDocument: string;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface PersonEducation {
    id: string;
    person: Person;
    lovEdul: CoreLov;
    institution: string;
    subject: string;
    grade: number;
    maxGrade: number;
    yearBegin: null;
    yearEnd: null;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface PersonFamily {
    id: string;
    person: Person;
    name: string;
    lovFamr: CoreLov;
    lovGndr: CoreLov;
    lovEdul: CoreLov;
    birthDate: Date;
    occupation: string;
    description: null;
    isEmergency: null;
    address: null;
    phone: null;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface PersonLanguage {
    id: string;
    person: Person;
    lovLang: CoreLov;
    writing: number;
    speaking: number;
    listening: number;
    isNative: boolean;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface PersonMembership {
    id: string;
    isActive: boolean;
    accNumber: string;
    person: Person;
    lovMemberType: CoreLov;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface PersonOrganization {
    id: string;
    person: Person;
    yearBegin: number;
    yearEnd: number;
    institution: string;
    description: string;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface PersonReference {
    id: string;
    person: Person;
    name: string;
    relationship: string;
    description: string;
    phone: string;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface PersonWorkExperience {
    id: string;
    person: Person;
    dateBegin: string;
    dateEnd: string;
    company: string;
    jobPos: string;
    jobDesc: string;
    location: string;
    benefit: string;
    lastSalary: string;
    reason: string;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export interface EmployeeTax {
    taxNumber: string;
    taxStatusId: CoreLov;
    taxOfficeId: CoreLov;
}

export interface EmployeeWage {
    amount: string;
    effBegin: Date;
    effEnd: Date;
}

export interface EmployeeProject {
    id?: string;
    project: CoreLov;
    employee: EmployeeH;
    effBegin: Date;
    effEnd: Date;
    weight: string;
    isDefault: boolean;
}

export interface PersonBankAccount {
    id?: string;
    isDefault: boolean;
    accName: string;
    accNumber: string;
    bank: CoreLov;
    lovCurrency: CoreLov;
}

/**
 *  Employee Subtable
 */
export interface AssignmentSub {
    nik: string;
    isPrimary: boolean;
    isActive: boolean;
    actionReason: CoreLov;
    effBegin: Date;
    effEnd: Date;
    action: CoreLov;
    assignmentType: CoreLov;
    position: CoreLov;
    costcenter: CoreLov;
    grade: CoreLov;
    contractNumber: string;
    contractDocument: string;
    note: string;
    mutationCompany: string;
}

export class MembershipSub {
    id?: string;
    lovMemberType: CoreLov;
    accNumber: string;
    person?: PersonSub;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export class AddressSub {
    id?: string;
    default: boolean;
    lovRsty: CoreLov;
    lovRsow: CoreLov;
    address: string;
    city: CoreLov;
    postalCode: string;
}

export class FamilySub {
    id?: string;
    person?: PersonSub;
    name: string;
    lovFamr: CoreLov;
    lovGndr: CoreLov;
    birthDate: Date;
    lovEdul: CoreLov;
    occupation: string;
    description: string;
    address: string;
    phone: string;
    isEmergency: boolean;
}

export class EmerContactSub {
    id?: string;
    person?: PersonSub;
    name: string;
    lovRety: CoreLov;
    phone: string;
    address: string;
    // city: CoreLov;
}

export class ProjectSub {
    id?: string;
    isDefault: boolean;
    project: CoreLov;
    weight: number;
    employee: CoreLov;
    effBegin: Date;
    effEnd: Date;
}

export class EducationSub {
    id?: string;
    lovEdul: CoreLov;
    institution: string;
    subject: string;
    grade: number;
    maxGrade: number;
    degree: string;
    yearBegin: any;
    yearEnd: any;
    person?: PersonSub;
    // fieldOfStudy: string;
}

export class WorkExperiencesSub {
    id?: string;
    company: string;
    location: string;
    dateBegin: Date;
    dateEnd: Date;
    lastSalary: number;
    benefit: string;
    jobPos: string;
    jobDesc: string;
    reason: string;
    person?: PersonSub;
}

class PersonSub {
    id?: string;
}

export class OrganizationSub {
    institution: string;
    description: string;
    yearBegin: number;
    yearEnd: number;
}

export class ReferencesSub {
    name: string;
    relationship: string;
    phone: string;
    description: string;
}

export class LanguagesSub {
    lovLang: CoreLov;
    speaking: number;
    writing: number;
    listening: number;
    isNative: boolean;
}

export class DocumentsSub {
    id?: string;
    person?: PersonSub;
    lovDcty: CoreLov;
    name: string;
    expireDate: Date;
    fileDocument: string;
}

export class ComponentListSub {
    payrollComponent: string;
    effBegin: Date;
    effEnd: Date;
}

export class TaxSub {
    taxNumber: string;
    taxStatusId: PayrollLov;
}

export class TaxStatusSub {
    id?: string;
    person: PersonSub;
    taxNumber: string;
    taxStatus: PayrollLov;

    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
    version?: number;
}

export class WageSub {
    id?: string;
    amount: string;
    effBegin: any;
    effEnd: any;
    company?: CoreLov;
    employee?: CoreLov;
}

export class PaymentMethodSub {
    id?: string;
    company?: CoreLov;
    paymentMethod: CoreLov;
    personBankAccount: CoreLov;
}

export class BankSub {
    id?: string;
    accName: string;
    accNumber: string;
    bank: CoreLov;
    isDefault: boolean;
    lovCurrency: CoreLov;
    company?: CoreLov;
    person?: CoreLov;
}

export class BenefitSub {
    benefitGroupsBenefitsId: string;
    canClaim: boolean;
    interval: number;
    isGroupActive: boolean;
    remainingQuota: number;
    startDate: Date;
}

export class PayrollGroupSub {
    id?: string;
    version?: number;
    effBegin: Date;
    effEnd: Date;
    companyId: string;
    employeeId: string;
    payrollGroup: string;
}

export class PayrollCompListSub {
    name: string;
    effBegin: Date;
    effEnd: Date;
}

export class EmployeeRequest {
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
export class EmployeeRequestSearch {
    constructor(inquiry: string,
        isActive: boolean) {

    }
    pageInfo = new PageInfo(1, Paginator.rowsPerPage);
}
