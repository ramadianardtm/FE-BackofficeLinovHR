import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-loader-cog-spin',
    templateUrl: './cog-spin.component.html',
    styleUrls: ['./cog-spin.component.scss'],
})
export class CogSpinComponent {
    @Input() isLoading = false;
    @Input() message: string | undefined;
}
