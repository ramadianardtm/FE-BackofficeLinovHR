interface Layout {
    value: string;
    title: string;
    icon: string;
}

export enum Mode {
    List = 'list',
    Grid = 'grid',
}

export class LayoutMode {
    protected modes: Layout[];

    constructor() {
        this.modes = [
            {
                value: 'grid',
                title: 'Grid',
                icon: 'fas fa-th-large',
            },
            {
                value: 'list',
                title: 'List',
                icon: 'fas fa-list',
            },
        ];
    }

    get allMode(): Layout[] {
        return this.modes;
    }
}

export interface TableColumn {
    label: string;
    value: string;
}

export interface TableSearch {
    label: string;
    value: string;
}
