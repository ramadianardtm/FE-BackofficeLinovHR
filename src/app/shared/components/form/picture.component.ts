import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import {
    Dimensions,
    ImageCroppedEvent,
    ImageTransform,
} from 'ngx-image-cropper';

import { MessageBoxService } from 'app/core/services/message-box.service';

@Component({
    selector: 'form-input-picture',
    template: `
        <ng-container [formGroup]="form">
            <div class="ui-grid-row mb-2">
                <div class="ui-grid-col-6">
                    <label>
                        <sup *ngIf="isRequired" class="text-danger ml-n2">
                            *
                        </sup>
                        {{ 'inputImage' | translate }}
                    </label>
                </div>
                <div class="ui-grid-col-6">
                    <input
                        (change)="onFileChangeEvent($event)"
                        [name]="name"
                        type="file"
                    />
                    <p-message
                        *ngIf="form.get(name).invalid && form.get(name).dirty"
                        [text]="this.errorMessage"
                        severity="error"
                    ></p-message>
                </div>
            </div>
            <div class="ui-grid-row mb-2">
                <div class="ui-grid-col-6">
                    <label *ngIf="croppedImage">Original</label>
                    <image-cropper
                        [imageChangedEvent]="imageChangedEvent"
                        [maintainAspectRatio]="true"
                        [containWithinAspectRatio]="containWithinAspectRatio"
                        [aspectRatio]="4 / 3"
                        [resizeToWidth]="256"
                        [cropperMinWidth]="128"
                        [onlyScaleDown]="true"
                        [roundCropper]="false"
                        [canvasRotation]="canvasRotation"
                        [transform]="transform"
                        [alignImage]="'left'"
                        [style.display]="showCropper ? null : 'none'"
                        format="jpeg"
                        (imageCropped)="onImageCropped($event)"
                        (imageLoaded)="onImageLoaded()"
                        (cropperReady)="onCropperReady($event)"
                        (loadImageFailed)="onLoadImageFailed()"
                    ></image-cropper>
                </div>
                <div class="ui-grid-col-6">
                    <label *ngIf="croppedImage">Cropped</label>
                    <img
                        [src]="croppedImage"
                        [style.border]="
                            croppedImage ? '1px solid black' : 'none'
                        "
                    />
                </div>
            </div>
        </ng-container>
    `,
})
export class PictureComponent {
    @Input() form: FormArray | FormGroup;
    @Input() label: string;
    @Input() name: string;
    @Input() isRequired = false;

    croppedImage: any = '';
    @Output() photo = new EventEmitter<any>();

    imageChangedEvent: any = '';
    canvasRotation = 0;
    rotation = 0;
    scale = 1;
    showCropper = false;
    containWithinAspectRatio = false;
    transform: ImageTransform = {};

    constructor(
        private translateService: TranslateService,
        private messageBoxService: MessageBoxService
    ) {}

    onFileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }

    onImageCropped(img: ImageCroppedEvent): void {
        this.croppedImage = img.base64;
        this.photo.emit(img.base64);
    }

    onImageLoaded(): void {
        this.showCropper = true;
        this.messageBoxService.showInfo('Image Loaded', 'Image Upload');
    }

    onCropperReady(sourceImageDimensions: Dimensions): void {
        console.log('Cropper ready', sourceImageDimensions);
    }

    onLoadImageFailed(): void {
        this.messageBoxService.showWarn('Load Failed', 'Image Upload');
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
