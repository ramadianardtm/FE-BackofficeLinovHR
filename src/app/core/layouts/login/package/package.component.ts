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
    this.plansService.getPlansServices(page,rows).toPromise().then((data: any)=>{ 
      console.log(data.data)
      this.plans = data.data;
      this.rowsPerPage = data.count;
    }) 
  }

  updatePlans(params){
    this.router.navigate([`update/${params}`],{relativeTo:this.route})
  }

  detailPlans(params){
    this.router.navigate([`detail/${params}`],{relativeTo:this.route})
  }

  deletePlans(params){
    this.confirmationService.confirm({
      message: 'Anda yakin ingin menghapus data?',
      accept: () => {
        this.plansService.deletePlanServices(params).subscribe((data: any)=>{ 
          this.messageService.add({ severity: 'success', summary: 'Berhasil', detail: 'Berhasil menghapus data' });
            this.plansService.getPlansServices(1,this.rowsPerPage).toPromise().then((data: any)=>{ 
              console.log(data.data)
              this.plans = data.data;
              this.rowsPerPage = data.count;
            }) 
        }) 
      }
    });
  }

}
