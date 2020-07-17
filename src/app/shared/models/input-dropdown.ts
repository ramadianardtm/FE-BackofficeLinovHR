import { FormField } from './form-field';

import { DynamicFormConfig } from 'app/configs/dynamic-form.config';

export class InputDropDown extends FormField<any> {
    controlType: string;
    options: any[];

    constructor(options: any) {
        super(options);
        this.controlType = DynamicFormConfig.inputDropDown;
        this.options = options['options'] || [];
    }
}
