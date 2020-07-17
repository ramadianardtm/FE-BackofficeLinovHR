import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { Checkbox } from 'app/shared/models/checkbox.interface';

@Component({
    selector: 'form-input-document',
    template: `
        <div [formGroup]="form" class="ui-grid-row mb-2">
            <div class="ui-grid-col-6">
                <label>
                    <sup *ngIf="required" class="text-danger ml-n2">*</sup>
                    {{ label | translate }}
                </label>
            </div>
            <div class="ui-grid-col-6">
                <div *ngFor="let item of items" class="ui-g-12 px-0">
                    <p-checkbox
                        [formControlName]="name"
                        [name]="name"
                        [value]="item.value"
                        [label]="item.label"
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
export class DocumentComponent implements OnInit {
    @Input() form: FormArray | FormGroup;
    @Input() label: string;
    @Input() name: string;
    @Input() required = false;

    @Input() items: Checkbox[] = [];

    options: Checkbox[] = [];

    constructor(private translateService: TranslateService) {}

    ngOnInit() {
        this.onConstructOptions(this.items);
    }

    /**
     *  Construct new Form Structure
     *  @param  options   List of Option
     *  @return void
     */
    onConstructOptions(options: Checkbox[]): void {
        options.forEach(item => {
            this.options.push(item);
        });
    }

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
