import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'form-input-checkbox-bool',
    template: `
        <div [formGroup]="form" class="ui-grid-row mb-2">
            <div class="ui-grid-col-6">
                <label>
                    <sup *ngIf="required" class="text-danger ml-n2">*</sup>
                    {{ label | translate }}
                </label>
            </div>
            <div class="ui-grid-col-6">
                <div class="form-check form-check-inline">
                    <p-checkbox
                        [formControlName]="name"
                        [name]="name"
                        [label]="
                            form.get(name).value
                                | parseBoolToValue: value
                                | translate
                        "
                        binary="true"
                        class="mr-2"
                    ></p-checkbox>
                </div>
                <p-message
                    *ngIf="form.get(name).invalid && form.get(name).dirty"
                    [text]="this.errorMessage"
                    severity="error"
                ></p-message>
            </div>
        </div>
    `,
})
export class CheckboxBoolComponent {
    @Input() form: FormArray | FormGroup;
    @Input() label: string;
    @Input() name: string;
    @Input() required = false;
    @Input() value: string;

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
