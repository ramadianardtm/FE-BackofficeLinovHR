import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'form-input-textarea',
    template: `
        <div [formGroup]="form" class="ui-grid-row mb-2">
            <div class="ui-grid-col-6">
                <label>
                    <sup *ngIf="required" class="text-danger ml-n2">*</sup>
                    {{ label | translate }}
                </label>
            </div>
            <div class="ui-grid-col-6">
                <textarea
                    [formControlName]="name"
                    [placeholder]="placeholder"
                    pInputTextarea
                    rows="3"
                    cols="30"
                    autoResize="autoResize"
                ></textarea>
                <p-message
                    *ngIf="form.get(name).invalid && form.get(name).dirty"
                    [text]="this.errorMessage"
                    severity="error"
                ></p-message>
            </div>
        </div>
    `,
})
export class TextareaComponent {
    @Input() form: FormArray | FormGroup;
    @Input() label: string;
    @Input() name: string;
    @Input() placeholder = '';
    @Input() required = false;

    constructor(private translateService: TranslateService) {}

    /**
     *  Create Error Message from Validation
     *  @return string
     */
    get errorMessage(): string {
        const error = this.form.get(this.name).errors;

        if (error.required) {
            return `${this.translateService.instant(this.name)} is Required`;
        } else {
            return '';
        }
    }
}
