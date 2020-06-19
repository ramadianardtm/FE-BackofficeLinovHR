import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-my-applications-detail',
  templateUrl: './my-applications-detail.component.html',
  styleUrls: ['./my-applications-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyApplicationsDetailComponent implements OnInit {
  cars: any[];
  saveStatus: boolean;

    responsiveOptions;

    constructor(private messageService: MessageService) { 
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

    onSave(){
        if(this.saveStatus){
            this.saveStatus = false;
            this.messageService.add({severity:'info', summary: 'Info Message', detail:'Job Unsaved'});
        } else {
            this.saveStatus = true;
            this.messageService.add({severity:'info', summary: 'Info Message', detail:'Job Saved'});
        }
    }

}
