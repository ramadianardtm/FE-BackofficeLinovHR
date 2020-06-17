export class FormField<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    placeholder: string;
    options: any[];
    column: number;

    constructor(
        options: {
            value?: any;
            key?: string;
            label?: string;
            required?: boolean;
            order?: number;
            controlType?: string;
            type?: string;
            placeholder?: string;
            options?: any[];
            column?: number;
        } = {}
    ) {
        this.value = options.value || '';
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = options.required;
        this.order = typeof options.order === 'undefined' ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
        this.placeholder = options.placeholder || '';
        this.options = options.options || [];
        this.column = options.column || 1;
    }
}
