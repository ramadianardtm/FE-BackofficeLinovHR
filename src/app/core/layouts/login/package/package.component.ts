import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MessageService, ConfirmationService } from 'primeng/api';
import { PlansService } from '../../../services/plans.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {
  plans:any[];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  rowsPerPage:any[];

  constructor(
    private plansService: PlansService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private route:ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  getPage(event:LazyLoadEvent){
    let page = (event.first/ event.rows +1)
    let rows = event.rows
    this.plansService.getPlansServices(page,rows).subscribe((data: any)=>{ 
      console.log(data.data)
      this.plans = data.data;
      this.rowsPerPage = data.count;
    }) 
  }

  updatePlans(params){
    this.messageService.add({ severity: 'info', summary: 'Maaf', detail: 'Fitur ini Belum Tersedia' });
  }

  detailPlans(params){
    this.router.navigate([`detail/${params}`],{relativeTo:this.route})
  }

  deletePlans(params){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.plansService.getPlanDetailServices(params).subscribe((data: any)=>{ 
          console.log(data)
        }) 
      }
  });
  }

}
