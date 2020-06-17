import { Parent, UserWidget } from 'app/shared/models/sub-menu.interface';

/**
 *  Construct Sub Menu data
 *  @param      tenantModules   Tenant Module List
 *  @param      moduleUrl       Router Url data
 *  @returns    parent          Parent Menu data
 */
export function onConstructSubMenu(
    tenantModules: any[],
    moduleUrl: string
): Parent[] {
    const subMenu: Parent[] = [];

    tenantModules.forEach(tenant => {
        const moduleName = tenant.module.name.split(' ')[0].toLowerCase();

        if (moduleUrl === moduleName) {
            tenant.module.parentMenu.forEach((parent: any) => {
                parent.menus.map((menu: any) => {
                    menu.label = menu.name;
                    menu.link = menu.path ? menu.path : '';

                    return menu;
                });

                parent.label = parent.name;
                parent.childs = parent.menus;

                subMenu.push(parent);
            });
        }
    });

    return subMenu;
}

export function onConstructWidget(
    tenantModules: any[],
    moduleUrl: string
): UserWidget[] {
    let subMenu: UserWidget[] = [];

    tenantModules.forEach(tenant => {
        const moduleName = tenant.module.name.split(' ')[0].toLowerCase();

        if (moduleUrl === moduleName) {
            subMenu = tenant.module.userWidgets
        }
    });
    return subMenu
}

export function getModuleId(
    tenantModules: any[],
    moduleUrl: string
): UserWidget[] {
    let widgetId: any = "workforce"

    tenantModules.forEach(tenant => {
        const moduleName = tenant.module.name.split(' ')[0].toLowerCase();
        if (moduleUrl === moduleName) {
            widgetId = tenant.module.id
        }
    });
    return widgetId
}


