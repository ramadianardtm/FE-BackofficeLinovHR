import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';

import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { CogSpinComponent } from './components/cog-spin/cog-spin.component';
import { LoginToastComponent } from './components/login-toast/login-toast.component';
import { ServiceToastComponent } from './components/service-toast/service-toast.component';

@NgModule({
    imports: [SharedModule],
    declarations: [
        ProgressbarComponent,
        CogSpinComponent,
        LoginToastComponent,
        ServiceToastComponent,
    ],
    providers: [],
    exports: [
        ProgressbarComponent,
        CogSpinComponent,
        LoginToastComponent,
        ServiceToastComponent,
    ],
})
export class LoaderModule {}
