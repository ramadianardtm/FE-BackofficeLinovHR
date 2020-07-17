/**
 * Class for storing information of menu
 */
import { Paginator } from 'app/configs/paginator.config';

export class MenuInfo {
    rowsPerPage = Paginator.rowsPerPage;
    rowsPerPageOptions = Paginator.rowsPerPageOptions;

    constructor(
        public code: string,
        public title: string,
        public action: string[],
        public link: string
    ) {}

    canAdd(): boolean {
        return this.action.indexOf('ADD') > -1;
    }

    canEdit(): boolean {
        return this.action.indexOf('EDIT') > -1;
    }

    canDelete(): boolean {
        return this.action.indexOf('DELETE') > -1;
    }
}
