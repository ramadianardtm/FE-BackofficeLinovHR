import { FormField } from './form-field';

import { DynamicFormConfig } from 'app/configs/dynamic-form.config';

export class InputTextBox extends FormField<string> {
    controlType: string;
    type: string;

    constructor(options: any) {
        super(options);
        this.type = options['type'] || '';
        this.controlType = DynamicFormConfig.inputText;
    }
}
