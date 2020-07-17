import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { Radio } from 'app/shared/models/radio.interface';
import { Checkbox } from 'app/shared/models/checkbox.interface';

@Component({
    selector: 'form-input-radio',
    template: `
        <div [formGroup]="form" class="ui-grid-row mb-2">
            <div class="ui-grid-col-6">
                <label>
                    <sup *ngIf="isRequired" class="text-danger ml-n2">*</sup>
                    {{ label | translate }}
                </label>
            </div>
            <div *ngIf="options" class="ui-grid-col-6">
                <div class="form-check form-check-inline">
                    <ng-container *ngFor="let item of options">
                        <p-radioButton
                            [formControlName]="name"
                            [name]="name"
                            [value]="item.value"
                            [label]="item.label | translate"
                            class="mr-2"
                        ></p-radioButton>
                    </ng-container>
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
export class RadioComponent implements OnInit {
    @Input() form: FormArray | FormGroup;
    @Input() label: string;
    @Input() name: string;
    @Input() items: Radio[] = [];
    @Input() isRequired = false;

    options: Radio[] = [];

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
