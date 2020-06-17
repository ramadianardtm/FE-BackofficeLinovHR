/**
 *  Temporary Constants for Sub Menu
 */
export const Workbench = [
    {
        label: 'setup',
        childs: [
            {
                label: 'general',
                link: '/workbench/general',
            },
            {
                label: 'lookupTable',
                link: '/workbench/lookup-table',
            },
            {
                label: 'customTable',
                link: '/workbench/custom-table',
            },
            {
                label: 'numberFormat',
                link: '/workbench/number-format',
            },
            {
                label: 'userAndRole',
                link: '',
                childsSub: [
                    /*                   {
                                          label: 'user',
                                          link: '/workbench/user',
                                      },
                                      {
                                          label: 'role',
                                          link: '/workbench/role',
                                      }, */
                ],
            },
            {
                label: 'workflowSettings',
                link: '/workbench/workflow-settings',
            },
        ],
    },
];

export const Workforce = [
    {
        label: 'person',
        childs: [
            {
                label: 'personList',
                link: '/workforce/person',
            },
        ],
    },
    {
        label: 'employment',
        childs: [
            {
                label: 'employeeList',
                link: '/workforce/employee',
            },
            // {
            //     label: 'hire',
            //     link: '/workforce/employee/hire',
            // },
            // {
            //     label: 'mutation',
            //     link: '/workforce/employee/mutation',
            // },
            // {
            //     label: 'demotion',
            //     link: '/workforce/employee/demotion',
            // },
            // {
            //     label: 'promotion',
            //     link: '/workforce/employee/promotion',
            // },
            // {
            //     label: 'termination',
            //     link: '/workforce/employee/termination',
            // },
        ],
    },
    {
        label: 'settings',
        childs: [
            {
                label: 'employeeTypes',
                link: '/workforce/employee-types',
            },
            {
                label: 'actionReason',
                link: '/workforce/action-reason',
            },
        ],
    },
    {
        label: 'letters',
        childs: [
            {
                label: 'paklaring',
                link: '/workforce/letters/paklaring',
            },
            {
                label: 'paklaringResign',
                link: '/workforce/letters/paklaring-resign',
            },
            {
                label: 'suratTugas',
                link: '/workforce/letters/surat-tugas',
            },
            {
                label: 'curriculumVitae',
                link: '/workforce/letters/curriculum-vitae',
            },
            {
                label: 'suratKeteranganKerja',
                link: '/workforce/letters/surat-keterangan-kerja',
            },
            {
                label: 'offeringLetter',
                link: '/workforce/letters/offering-letter',
            },
            {
                label: 'pkwt',
                link: '/workforce/letters/pkwt',
            },
            {
                label: 'warningLetter',
                link: '',
            },
            {
                label: 'rewardAndPunishment',
                link: '',
            },
            {
                label: 'approvalCuti',
                link: '',
            },
            {
                label: 'employeeMovement',
                link: '',
            },
        ],
    },
    {
        label: 'reports',
        childs: [
            {
                label: 'contractExpiredList',
                link: '/workforce/settings/contract-expired-list',
            },
            {
                label: 'resumeDocumentList',
                link: '/workforce/settings/resume-document-list',
            },
        ],
    },
];

export const Payroll = [
    {
        label: 'payroll',
        childs: [
            {
                label: 'payrollProcess',
                link: '/payroll/process',
            },
        ],
    },
    {
        label: 'settings',
        childs: [
            {
                label: 'paymentMethod',
                link: '/payroll/payment-method',
            },
            {
                label: 'accountCodes',
                link: '/payroll/account-code',
            },
            {
                label: 'payrollComponents',
                link: '/payroll/payroll-component',
            },
            {
                label: 'payrollGroup',
                link: '/payroll/payroll-group',
            },
            {
                label: 'employeeSet',
                link: '/payroll/employee-set',
            },
            {
                label: 'employeeRecurring',
                link: '/payroll/recurring',
            },
        ],
    },
    {
        label: 'reports',
        childs: [
            {
                label: 'payrollDetail',
                link: '/report/payroll-detail/input',
            },
            {
                label: 'payrollSummary',
                link: '/report/payroll-summary/input',
            },
            {
                label: 'payrollSummaryDifference',
                link: '/report/payroll-summary-difference/input',
            },
            {
                label: 'payrollSummaryPerLocation',
                link: '/report/payroll-summary/input',
            },
            {
                label: 'taxReport',
                link: '/report/tax-report/input',
            },
            {
                label: 'eSpt',
                link: '/report/espt/input',
            },
            {
                label: 'slipGaji',
                link: '/report/slip-gaji/input',
            },
            {
                label: 'payslipReport',
                link: '/report/payslip/input',
            },
            {
                label: 'payrollProjectReport',
                link: '/report/payroll-project/input',
            },
        ],
    },
];

export const Time = [
    {
        label: 'time',
        childs: [
            {
                label: 'calendar',
                link: '/time/calendar',
            },
        ],
    },
    {
        label: 'attendance',
        childs: [
            {
                label: 'timesheet',
                link: '/time/timesheet',
            },
            {
                label: 'timeProcess',
                link: '/time/time-process',
            },
        ],
    },
    {
        label: 'requests',
        childs: [
            {
                label: 'leaveRequest',
                link: '/time/leave-request',
            },
            {
                label: 'overtimeRequest',
                link: '/time/overtime-request',
            },
            {
                label: 'permissionRequest',
                link: '/time/overtime-request',
            },
        ],
    },
    {
        label: 'setup',
        childs: [
            {
                label: 'scheduleException',
                link: '/time/schedule-exception',
            },
            {
                label: 'leaves',
                link: '/time/leaves',
            },
            {
                label: 'timeDefinition',
                link: '/time/time-definition',
            },
            {
                label: 'timeGroup',
                link: '/time/time-group',
            },
        ],
    },
    {
        label: 'reports',
        childs: [
            {
                label: 'leaveReport',
                link: '/report/leave-report',
            },
            {
                label: 'timesheetReport',
                link: '/report/timesheet-report',
            },
            {
                label: 'overtimeReport',
                link: '/report/overtime-report',
            },
            {
                label: 'timeReport',
                link: '/report/time-report',
            },
        ],
    },
];

export const Dashboard = [
    {
        label: 'settings',
        childs: [
            {
                label: 'employeeTypes',
                link: '/workforce/employee-types',
            },
            {
                label: 'actionReason',
                link: '/workforce/action-reason',
            },
        ],
    },
    {
        label: 'person',
        childs: [
            {
                label: 'personList',
                link: '/workforce/person',
            },
        ],
    },
    {
        label: 'employment',
        childs: [
            {
                label: 'employeeList',
                link: '/workforce/employee',
            },
            // {
            //     label: 'hire',
            //     link: '/workforce/employee/hire',
            // },
            // {
            //     label: 'mutation',
            //     link: '/workforce/employee/mutation',
            // },
            // {
            //     label: 'demotion',
            //     link: '/workforce/employee/demotion',
            // },
            // {
            //     label: 'promotion',
            //     link: '/workforce/employee/promotion',
            // },
            // {
            //     label: 'termination',
            //     link: '/workforce/employee/termination',
            // },
        ],
    },
    {
        label: 'letters',
        childs: [
            {
                label: 'paklaring',
                link: '/workforce/letters/paklaring',
            },
            {
                label: 'paklaringResign',
                link: '/workforce/letters/paklaring-resign',
            },
            {
                label: 'suratTugas',
                link: '/workforce/letters/surat-tugas',
            },
            {
                label: 'curriculumVitae',
                link: '/workforce/letters/curriculum-vitae',
            },
            {
                label: 'suratKeteranganKerja',
                link: '/workforce/letters/surat-keterangan-kerja',
            },
            {
                label: 'offeringLetter',
                link: '/workforce/letters/offering-letter',
            },
            {
                label: 'pkwt',
                link: '/workforce/letters/pkwt',
            },
            {
                label: 'warningLetter',
                link: '',
            },
            {
                label: 'rewardAndPunishment',
                link: '',
            },
            {
                label: 'approvalCuti',
                link: '',
            },
            {
                label: 'employeeMovement',
                link: '',
            },
        ],
    },
    {
        label: 'reports',
        childs: [
            {
                label: 'contractExpiredList',
                link: '/workforce/settings/contract-expired-list',
            },
            {
                label: 'resumeDocumentList',
                link: '/workforce/settings/resume-document-list',
            },
        ],
    },
];
