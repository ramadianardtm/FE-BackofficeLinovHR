import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';

@Component({
    selector: 'app-navigation',
    templateUrl: 'navigation.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class NavigationComponent implements OnInit {
    isOpen: boolean;

    constructor(
        public home: HomeComponent
    ) {
        this.isOpen = false;
    }

    ngOnInit(): void { }

    onSwitchMenu(val: boolean): void {
        this.isOpen = val;
    }
}
