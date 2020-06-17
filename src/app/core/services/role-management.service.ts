import { Injectable } from '@angular/core';

import { ApiService } from '../http/api.service';

@Injectable()
export class RoleManagementService {
    constructor(private apiService: ApiService) {}

    /**
     * Formatting menu to table view
     * @param menus List of Menu
     */
    makeTablesMenu(menus: any[]) {
        const tableMenus = [];
        for (let i = 0; i < menus.length; i++) {
            const menuObj = {
                code: menus[i].code,
                name: menus[i].name,
                groupName: menus[i].groupName,
                add: false,
                edit: false,
                delete: false,
            };
            tableMenus.push(menuObj);
        }
        return tableMenus;
    }

    /**
     * Map data access (key objects) before submit @params: keyObject from form
     * @param   dataAccess List of Data Access
     * @returns dataAccess
     */
    mapDataAccess(dataAccess: any[]) {
        return dataAccess.map(item => {
            item.code = item.keyObjectCode;
            item.privelege = item.dataAccess;
            item.values = item.unitsValue;
            return item;
        });
    }

    /**
     * Labeling dataSource like {label, data}
     * @param   dataSource List of Data Source
     * @returns dataSource
     */
    labelingDataSource(dataSource: any[]) {
        return dataSource.map(item => {
            item.label = item.name;
            item.value = item.id;
            return item;
        });
    }
}
