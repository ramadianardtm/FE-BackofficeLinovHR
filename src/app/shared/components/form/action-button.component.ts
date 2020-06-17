import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
    selector: 'form-action-button',
    template: `
        <ng-container [formGroup]="form">
            <button
                (click)="onCancel()"
                pButton
                label="{{ 'cancel' | translate }}"
                type="button"
                icon="pi pi-times"
                class="ui-button-secondary"
            ></button>
            <button
                [disabled]="form.invalid"
                pButton
                label="{{ submitLabel | translate }}"
                type="submit"
                icon="pi pi-save"
            ></button>
        </ng-container>
    `,
})
export class ActionButtonComponent {
    @Input() form: FormArray | FormGroup;
    @Input() update = false;

    constructor(private location: Location) {}

    get submitLabel(): string {
        return this.update ? 'update' : 'save';
    }

    /**
     *  Back to List
     *  @return void
     */
    onCancel(): void {
        this.location.back();
    }
}
