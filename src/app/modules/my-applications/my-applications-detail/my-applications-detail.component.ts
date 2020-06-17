import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-applications-detail',
  templateUrl: './my-applications-detail.component.html',
  styleUrls: ['./my-applications-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyApplicationsDetailComponent implements OnInit {
  cars: any[];

    responsiveOptions;

    constructor() { 
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    ngOnInit() {
        // this.carService.getCarsSmall().then(cars => {
        //     this.cars = cars
        // });
    }

}
