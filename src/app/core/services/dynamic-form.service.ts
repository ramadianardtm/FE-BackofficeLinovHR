import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormField } from 'app/shared/models/form-field';
import { InputTextBox } from 'app/shared/models/input-textbox';
import { InputDropDown } from 'app/shared/models/input-dropdown';
import { InputRadio } from 'app/shared/models/input-radio';

import { ApiService } from '../http/api.service';

import { DynamicFormConfig } from 'app/configs/dynamic-form.config';

@Injectable()
export class DynamicFormService {
    constructor(private apiService: ApiService) {}

    /**
     * create form group
     * @param   formField Form Field
     * @returns FormGroup
     */
    renderFormGroup(formField: FormField<any>[]) {
        const group = {};

        formField.forEach(field => {
            group[field.key] = field.required
                ? new FormControl(field.value || '', Validators.required)
                : new FormControl(field.value || '');
        });
        return new FormGroup(group);
    }

    /**
     * Get dynamic form field
     * @returns Observable<AppResponse>
     */
    getFormFields() {
        return this.apiService.getMock('dynamic_form');
    }

    /**
     * Dynamic field mapper
     * @param   fields List of Fields
     * @returns array
     */
    fieldMapper(fields: any[]) {
        const formControl = [];
        for (const i in fields) {
            if (fields[i]) {
                switch (fields[i].inputType) {
                    case DynamicFormConfig.inputText:
                        formControl.push(new InputTextBox(fields[i]));
                        break;
                    case DynamicFormConfig.inputDropDown:
                        formControl.push(new InputDropDown(fields[i]));
                        break;
                    case DynamicFormConfig.inputRadio:
                        formControl.push(new InputRadio(fields[i]));
                }
            }
        }
        return formControl.sort((a, b) => a.order - b.order);
    }
}
