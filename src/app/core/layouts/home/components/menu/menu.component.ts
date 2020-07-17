import { Component, Input, OnInit } from '@angular/core';

import { Module } from 'app/shared/models/session.interface';
import { Router } from '@angular/router';

declare var $: any;

@Component({
    selector: 'app-home-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.sass'],
})
export class MenuComponent implements OnInit {
    @Input() modules: any[] = [
        { name: "tenant-management", icon: "fas fa-toolbox", path: "/dashboard" },
    ]

    isActive = false;
    menuSelect: string;

    constructor(private route: Router) {
        this.menuSelect = route.url;
        console.log('this.menuSelect 1', this.menuSelect);

    }

    menuClick(menu) {
        for (let b of this.modules) {
            if (b.path === menu) {
                b.border = true;
            }
            else {
                b.border = false;
            }
        }
    }

    ngOnInit(): void {
        let flag: number = 0
        let flagData: any[] = [];
        if (this.modules) {
            for (let b of this.modules) {
                if (b.path.split("/")[1] === this.menuSelect.split("/")[1]) {
                    let c: any[] = b.path.split("/");
                    b.border = true;
                    flag++;
                    flagData.push(b)
                }

            }
            if (flag > 1) {
                for (let b of flagData) {
                    if (b.path.split("/")[2] === this.menuSelect.split("/")[2]) {
                        let c: any[] = b.path.split("/");
                        b.border = true;
                        flag++;
                    }
                    else {
                        b.border = false
                    }


                }
            }
        }

        $(document).ready(() => {
            // Hide submenus
            $('#body-row .collapse').collapse('hide');

            // Collapse/Expand icon
            $('#collapse-icon').addClass('fa-angle-double-left');

            // Collapse click
            $('[data-toggle=sidebar-colapse]').click(function () {
                SidebarCollapse();
            });

            function SidebarCollapse() {
                $('.menu-collapsed').toggleClass('d-none');
                $('.sidebar-submenu').toggleClass('d-none');
                $('.submenu-icon').toggleClass('d-none');
                $('#sidebar-container').toggleClass(
                    'sidebar-expanded sidebar-collapsed'
                );

                // Treating d-flex/d-none on separators with title
                var SeparatorTitle = $('.sidebar-separator-title');

                if (SeparatorTitle.hasClass('d-flex')) {
                    SeparatorTitle.removeClass('d-flex');
                } else {
                    SeparatorTitle.addClass('d-flex');
                }

                var SeparatorTitleContent = $('.main-content');
                var SeparatorTitleContent2 = $('.menu-header');
                var SeparatorTitleContent3 = $('#sidebar-container');
                var SeparatorTitleContent4 = $('.menu-header2');
                var SeparatorTitleContent5 = $('.submenu--navbar');

                if (SeparatorTitleContent.hasClass('left-250')) {
                    SeparatorTitleContent.addClass('left-60');
                    SeparatorTitleContent2.addClass('left-60');
                    SeparatorTitleContent4.addClass('left-60');
                    SeparatorTitleContent5.addClass('left-60');

                    SeparatorTitleContent.removeClass('left-250');
                    SeparatorTitleContent2.addClass('left-250');
                    SeparatorTitleContent4.addClass('left-250');
                    SeparatorTitleContent5.addClass('left-250');

                    SeparatorTitleContent3.addClass('width-60');
                } else {
                    SeparatorTitleContent.removeClass('left-60');
                    SeparatorTitleContent.addClass('left-250');

                    SeparatorTitleContent2.removeClass('left-60');
                    SeparatorTitleContent2.addClass('left-250');
                    SeparatorTitleContent4.removeClass('left-60');
                    SeparatorTitleContent4.addClass('left-250');
                    SeparatorTitleContent5.removeClass('left-60');
                    SeparatorTitleContent5.addClass('left-250');

                    SeparatorTitleContent3.removeClass('width-60');
                }

                // Collapse/Expand icon
                $('#collapse-icon').toggleClass(
                    'fa-angle-double-left fa-angle-double-right'
                );
            }
        });
    }

    onToggleActive() {
        this.isActive = !this.isActive;
    }
}
