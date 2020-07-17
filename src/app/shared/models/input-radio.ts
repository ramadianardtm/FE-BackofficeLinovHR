import { FormField } from './form-field';

import { DynamicFormConfig } from 'app/configs/dynamic-form.config';

export class InputRadio extends FormField<string> {
    controlType: string;

    constructor(options: {} = {}) {
        super(options);
        this.controlType = DynamicFormConfig.inputRadio;
    }
}
