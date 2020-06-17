import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'form-input-text',
    template: `
        <div [formGroup]="form" class="ui-grid-row mb-2">
            <div class="ui-grid-col-6">
                <label>
                    <sup *ngIf="required" class="text-danger ml-n2">*</sup>
                    {{ label | translate }}
                </label>
            </div>
            <div class="ui-grid-col-6">
                <p-inputMask
                    *ngIf="type === 'tel'"
                    [formControlName]="name"
                    mask="0899-9999-9999"
                    placeholder="0899-9999-9999"
                ></p-inputMask>
                <input
                    *ngIf="type !== 'tel'"
                    [formControlName]="name"
                    [type]="type"
                    [placeholder]="placeholder"
                    pInputText
                />
                <p-message
                    *ngIf="form.get(name).invalid && form.get(name).dirty"
                    [text]="this.errorMessage"
                    severity="error"
                ></p-message>
            </div>
        </div>
    `,
})
export class TextComponent {
    @Input() form: FormArray | FormGroup;
    @Input() label: string;
    @Input() name: string;
    @Input() placeholder = '';
    @Input() required = false;
    @Input() type = 'text';
    @Input() mask: string;

    constructor(private translateService: TranslateService) {}

    /**
     *  Create Error Message from Validation
     *  @return string
     */
    get errorMessage(): string {
        const error = this.form.get(this.name).errors;

        if (error.required) {
            return `${this.translateService.instant(this.name)} is Required`;
        } else if (error.email) {
            return 'Wrong Email Format';
        } else if (error.pattern.requiredPattern === '^[a-zA-Z]*$') {
            return `${this.translateService.instant(this.name)} Must Alphabet`;
        } else if (error.pattern.requiredPattern === '^[0-9]*$') {
            return `${this.translateService.instant(this.name)} Must Numeric`;
        } else if (error.pattern.requiredPattern === '^[A-Za-z0-9]*$') {
            return `${this.translateService.instant(
                this.name
            )} Must AlphaNumeric`;
        } else {
            return '';
        }
    }
}
