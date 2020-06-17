import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';

import { TableSimpleComponent } from './table-simple.component';

@NgModule({
    imports: [SharedModule],
    declarations: [TableSimpleComponent],
    providers: [],
    exports: [TableSimpleComponent],
})
export class ListModule {}
