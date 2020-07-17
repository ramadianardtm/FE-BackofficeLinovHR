export interface Session {
    token?: Token;
    user?: User;
    selectedCompanyId?: string;
}

export interface Token {
    accessToken: string;
    refreshToken: string;
}

export interface User {
    id: string;
    person: Person;
    userRoles: any[];
    tenant: Tenant;
    isSa: boolean;
}

export interface Person {
    id: string;
    firstName: string;
    lastName: string;
    filePhoto: string;
}

export interface Tenant {
    id: string;
    companies: Company[];
    tenantModules: TenantModule[];
}

export interface Company {
    id: string;
    name: string;
}

export interface TenantModule {
    id: string;
    module: Module;
}

export interface Module {
    id: string;
    name: string;
    icon: string;
    path: string;
    border: boolean,
    widget: any[],
    userWidgets: any[]
    parentMenu: ParentMenu[];
}

export interface ParentMenu {
    id: string;
    name: string;
    sortOrder: number;
    menus: Menu[];
}

export interface Menu {
    id: string;
    name: string;
    path: string;
    sortOrder: number;
    isFavorite: boolean;
    menuActions: MenuAction[];
}

export interface MenuAction {
    id: string;
    name: string;
    path: string;
}
