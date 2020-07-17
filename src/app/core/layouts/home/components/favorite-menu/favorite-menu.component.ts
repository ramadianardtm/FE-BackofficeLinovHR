import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

import { Module, ParentMenu, Menu } from 'app/shared/models/session.interface';

@Component({
    selector: 'app-home-favorite-menu',
    templateUrl: 'favorite-menu.component.html',
    styleUrls: ['favorite-menu.component.sass'],
})
export class FavoriteMenuComponent implements AfterViewInit {
    @Input() modules: Module[];

    favMenus: Menu[] = [];

    constructor() { }

    ngAfterViewInit() {
        // this.modules.forEach(item => {
        //     this.onConstructFavMenu(item.parentMenu);
        // });
    }

    /**
     *  Construct Favorite Menu
     *  @param  parentMenu  List of Parent Menu
     */
    onConstructFavMenu(parentMenu: ParentMenu[]) {
        if (parentMenu.length > 0) {
            parentMenu.forEach(parent => {
                parent.menus.forEach((menu, i) => {
                    const isFavorite = menu.isFavorite;

                    if (isFavorite && i <= 12) {
                        this.favMenus.push(menu);
                    }
                });
            });
        }
    }
}
