export interface Parent {
    label: string;
    childs?: Child[];
    border: boolean;
}

export interface UserWidget {
    widget: Widget[]
}

export interface Widget {
    id: string,
    name: string,
    type: WidgetType
}

export interface WidgetType {

    colSize: number

}

interface Child {
    label: string;
    link: string;
    childsSub?: Child[];
}
