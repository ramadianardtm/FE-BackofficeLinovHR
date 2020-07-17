import { NgModule } from '@angular/core';
import { ImageCropperModule } from 'ngx-image-cropper';

import { SharedModule } from 'app/shared/shared.module';

import { LoggerComponent } from './logger.component';
import { TextComponent } from './text.component';
import { NumberComponent } from './number.component';
import { TextareaComponent } from './textarea.component';
import { DateComponent } from './date.component';
import { TimeComponent } from './time.component';
import { RadioComponent } from './radio.component';
import { CheckboxComponent } from './checkbox.component';
import { CheckboxBoolComponent } from './checkbox-bool.component';
import { ActionButtonComponent } from './action-button.component';
import { DocumentComponent } from './document.component';
import { PictureComponent } from './picture.component';

@NgModule({
    imports: [SharedModule, ImageCropperModule],
    declarations: [
        LoggerComponent,
        TextComponent,
        NumberComponent,
        TextareaComponent,
        DateComponent,
        TimeComponent,
        RadioComponent,
        CheckboxComponent,
        CheckboxBoolComponent,
        ActionButtonComponent,
        DocumentComponent,
        PictureComponent,
    ],
    providers: [],
    exports: [
        LoggerComponent,
        TextComponent,
        NumberComponent,
        TextareaComponent,
        DateComponent,
        TimeComponent,
        RadioComponent,
        CheckboxComponent,
        CheckboxBoolComponent,
        ActionButtonComponent,
        DocumentComponent,
        PictureComponent,
    ],
})
export class FormModule {}
